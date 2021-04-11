const state =
    {
        authenticatedUser: {},
        counts: {},
        feedbacks: []
    };

const mutations =
    {

    };

const actions =
    {
        getUser({ commit }, { id, wishListItem, index })
        {
            return new Promise((resolve, reject) =>
            {
                if (wishListItem)
                {
                    commit("removeWishListItem", wishListItem);
                }

                ApiService.del("/rest/io/itemWishList/" + id)
                    .done(data =>
                    {
                        commit("removeWishListId", id);
                        resolve(data);
                    })
                    .fail(error =>
                    {
                        if (index)
                        {
                            commit("addWishListItemToIndex", wishListItem, index);
                        }
                        reject(error);
                    });
            });
        },
    };

const getters =
    {};

export default {
    state,
    mutations,
    actions,
    getters
};
