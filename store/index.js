export default {
  state: {
    users: {
      id: "",
      email: "",
      password: "",
    },
  },

  getters: {},
  mutations: {
    // changeId(state, payload) {
    //   state.users.id = payload;
    // },
    // changeEmail(state, payload) {
    //   state.users.email = payload;
    // },
    // changePassword(state, payload) {
    //   state.users.password = payload;
    // },
    changeDetails(state, object) {
        
      state.users.id = object.id;
      state.users.email = object.email;
      state.users.password = object.password;
    },
  },
  actions: {},
};
