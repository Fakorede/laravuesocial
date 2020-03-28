import Axios from "axios";

const state = {
    newsPosts: null,
    newsPostsStatus: null,
    postMessage: ""
};

const getters = {
    newsPosts: state => {
        return state.newsPosts;
    },
    newsStatus: state => {
        return {
            newsPostsStatus: state.newsPostsStatus
        };
    },
    postMessage: state => {
        return state.postMessage;
    }
};

const actions = {
    fetchNewsPosts({ commit, state }) {
        commit("setPostsStatus", "loading");

        axios
            .get("/api/posts")
            .then(res => {
                commit("setPosts", res.data);
                commit("setPostsStatus", "success");
            })
            .catch(error => {
                commit("setPostsStatus", "error");
            });
    },
    postMessage({ commit, state }) {
        axios
            .post("/api/posts", { body: state.postMessage })
            .then(res => {
                commit("pushPost", res.data);
                commit("updateMessage", "");
            })
            .catch(error => {});
    }
};

const mutations = {
    setPosts(state, posts) {
        state.newsPosts = posts;
    },
    setPostsStatus(state, status) {
        state.newsPostsStatus = status;
    },
    updateMessage(state, post) {
        state.postMessage = post;
    },
    pushPost(state, post) {
        state.newsPosts.data.unshift(post);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
