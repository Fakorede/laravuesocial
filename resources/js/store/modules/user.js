const state = {
    user: null,
    userStatus: null
};

const actions = {
    async fetchAuthUser({ commit, state }) {
        try {
            let response = await axios.get("/api/auth-user");
            commit("setAuthUser", response.data);
        } catch (err) {
            console.log("Unable to fetch auth user");
        }
    }
};

const mutations = {
    setAuthUser(state, user) {
        state.user = user;
    }
};

const getters = {
    authUser: state => {
        return state.user;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
