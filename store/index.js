export const actions = {
  onAuthStateChangedAction(state, users) {
    if (!users) {
      state.commit("SET_USER", null);

      this.$router.push({
        path: "../pages/signup.vue",
      });
    } else {
      const { uid, email, password } = users;
      state.commit("SET_USER", {
        uid,
        email,
        password,
      });
      setTimeout(
        this.$router.push({
          path: "/access",
        }),
        5000
      );
    }
  },
};

export const mutations = {
  SET_USER(state, users) {
    
    const { email } = users;
    state.users = { email };
  },
};

export const state = () => ({
  users: {
    id: "",
    email: "",
    password: "",
    uid: "",
  },
});

export const getters = {
  getUser(state) {
    return state.users;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
