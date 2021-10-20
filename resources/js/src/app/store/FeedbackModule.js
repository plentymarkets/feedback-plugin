let loadPaginatedFeedbacksLock = false
let loadFeedbackUserLock = false

const state = () => ({
  authenticatedUser: {},
  counts: {},
  feedbacks: [],
  itemAttributes: [],
  pagination: {
    isLastPage: true,
    lastPage: 1,
    currentPage: 1
  }
})

const mutations =
    {
      setFeedbackAuthenticatedUser (state, authenticatedUser) {
        state.authenticatedUser = authenticatedUser
      },

      setFeedbackCounts (state, counts) {
        state.counts = counts
      },

      setFeedbacks (state, feedbacks) {
        state.feedbacks = state.feedbacks.concat(feedbacks)
      },

      setFeedbackItemAttributes (state, attributes) {
        state.itemAttributes = attributes
      },

      setFeedbackPagination (state, pagination) {
        state.pagination.lastPage = pagination.lastPage
        state.pagination.isLastPage = pagination.isLastPage
      },

      incrementCurrentFeedbackPage (state) {
        state.pagination.currentPage++
      },

      addFeedback (state, feedback) {
        // Add the feedback to the current users feedback list
        state.authenticatedUser.feedbacks.unshift(feedback)

        if (feedback.isVisible) {
          const ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue)
          if (ratingValue > 0 && ratingValue <= 5) {
            state.counts['ratingsCountOf' + ratingValue]++
            state.counts.ratingsCountTotal++

            recalculateAverage(state)
          }
        }
      },

      deleteFeedback (state, { feedbackId, parentFeedbackId, feedback }) {
        // If visible, adjust counts
        if (feedback.isVisible && parentFeedbackId === null) {
          const ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue)
          if (ratingValue > 0 && ratingValue <= 5) {
            state.counts['ratingsCountOf' + ratingValue]--
            state.counts.ratingsCountTotal--

            recalculateAverage(state)
          }
        }

        if (parentFeedbackId === null) {
          state.feedbacks = filterFeedbackList(state.feedbacks, feedbackId)
          state.authenticatedUser.feedbacks = filterFeedbackList(state.authenticatedUser.feedbacks, feedbackId)
        } else {
          state.feedbacks = filterReplyList(state.feedbacks, parentFeedbackId, feedbackId)
          state.authenticatedUser.feedbacks = filterReplyList(state.authenticatedUser.feedbacks, parentFeedbackId, feedbackId)
        }
      }
    }

const actions =
    {
      loadFeedbackUser ({ commit }, { data, itemId, variationId }) {
        if (!loadFeedbackUserLock) {
          loadFeedbackUserLock = true
          let itemString = ''

          if (itemId !== undefined && variationId !== undefined) {
            itemString = `/${itemId}/${variationId}`
          }

          return $.ajax({
            type: 'GET',
            url: '/rest/feedbacks/user' + itemString,
            data: data,
            success: function (data) {
              commit('setFeedbackAuthenticatedUser', data)
              loadFeedbackUserLock = false
            },
            error: function (jqXHR, textStatus, errorThrown) {
              loadFeedbackUserLock = false
              console.error(errorThrown)
            }
          })
        }
      },

      loadFeedbackCounts ({ commit, state }, itemId) {
        if (!countsLoaded) {
          countsLoaded = true

          return $.ajax({
            type: 'GET',
            url: '/rest/feedbacks/feedback/helper/counts/' + itemId,
            success: function (data) {
              commit('setFeedbackCounts', data.counts)
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.error(errorThrown)
            }
          })
        }
      },

      loadPaginatedFeedbacks ({ commit, state }, { itemId, feedbacksPerPage }) {
        if (!loadPaginatedFeedbacksLock) {
          loadPaginatedFeedbacksLock = true
          const request = $.ajax({
            type: 'GET',
            url: '/rest/feedbacks/feedback/helper/feedbacklist/' + itemId + '/' + state.pagination.currentPage,
            data: {
              feedbacksPerPage: feedbacksPerPage
            },
            success: function (data) {
              commit('setFeedbacks', data.feedbacks)
              commit('setFeedbackItemAttributes', data.itemAttributes)
              commit('setFeedbackPagination', data.pagination)
              loadPaginatedFeedbacksLock = false
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.error(errorThrown)
              loadPaginatedFeedbacksLock = false
            }
          })
          commit('incrementCurrentFeedbackPage')
          return request
        }
      },

      deleteFeedback ({ commit, state }, { feedbackId, parentFeedbackId, feedback }) {
        return $.ajax({
          type: 'DELETE',
          url: '/rest/feedbacks/feedback/delete/' + feedbackId,
          success: (data) => {
            commit('deleteFeedback', {
              feedbackId: feedbackId,
              parentFeedbackId: parentFeedbackId,
              feedback: feedback
            })
          }
        })
      }
    }

const getters =
    {}

let countsLoaded = false

export default {
  state,
  mutations,
  actions,
  getters
}

// Utility functions
function filterFeedbackList (feedbackList, feedbackId) {
  return feedbackList.filter(function (feedback) {
    return feedback.id !== feedbackId
  })
}

function filterReplyList (feedbackList, feedbackId, replyId) {
  return feedbackList.map(function (feedback) {
    if (feedbackId === feedback.id) {
      feedback.replies = feedback.replies.filter(function (reply) {
        return reply.id !== replyId
      })
    }
    return feedback
  })
}

function recalculateAverage (state) {
  // Calculate average anew
  let average = 0
  average += state.counts.ratingsCountOf5 * 5
  average += state.counts.ratingsCountOf4 * 4
  average += state.counts.ratingsCountOf3 * 3
  average += state.counts.ratingsCountOf2 * 2
  average += state.counts.ratingsCountOf1 * 1
  average /= state.counts.ratingsCountTotal

  state.counts.averageValue = average
}
