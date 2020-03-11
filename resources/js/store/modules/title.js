const state = {
    title: "Welcome"
};

const actions = {
    setPageTitle({ commit, state }, title) {
        commit("setTitle", title);
    }
};

const mutations = {
    setTitle(state, title) {
        state.title = title + " | Facebok";
        document.title = state.title;
    }
};

const getters = {
    pageTitle: state => {
        return state.title;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
