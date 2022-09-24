export const actions = {
  onAuthStateChangedAction(state, users) {
    if (!users) {
      state.commit("SET_USER", null);
      console.log(state);
      console.log(users);
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
      this.$router.push({
        path: "/access",
      });
    }
  },
};

export const mutations = {
  SET_USER(state, users) {
    // console.log(users);
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
