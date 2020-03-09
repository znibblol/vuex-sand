import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// import apiJson from "./api.json";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SAVE_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  getters: {},
  actions: {
    loadPosts({ commit }) {
      axios
        .get("./api.json")
        .then(result => {
          commit("SAVE_POSTS", result.data);
        })
        .catch(error => {
          throw new Error(`Api ${error}`);
        });
    },
    submitPost() {
      axios.post("./api.json", {
        title: '' + this.data.title,
        body: '' + this.data.body
      })
    }
  },
  modules: {}
});
