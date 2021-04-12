const state =
    {
        authenticatedUser: {},
        counts: {},
        feedbacks: []
    };

const mutations =
    {
        setAuthenticatedUser(state, authenticatedUser)
        {
            state.authenticatedUser = authenticatedUser;
        },

        setCounts(state, counts)
        {
            state.counts = counts;
        }
    };

const actions =
    {
        getUser({ commit }, { data, itemId, variationId })
        {
            let itemString = ""

            if(itemId !== undefined && variationId !== undefined)
            {
                itemString = `/${itemId}/${variationId}`;
            }

            return $.ajax({
                type: 'GET',
                url: '/rest/feedbacks/user/' + itemString,
                data: data,
                success: function (data) {
                    commit("setAuthenticatedUser", data)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error(errorThrown)
                }
            })
        },

        getCounts({ commit }, itemId)
        {
            return $.ajax({
                type: 'GET',
                url: '/rest/feedbacks/feedback/helper/counts/' + itemId,
                success: function (data) {
                    commit("setCounts", data.counts)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error(errorThrown)
                }
            })
        }
    };

const getters =
    {};

export default {
    state,
    mutations,
    actions,
    getters
};
