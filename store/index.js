export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, payload) {
    state.token = payload.token
  },
  removeToken(state) {
    state.token = null
  }
};

export const getters = {
  token: state => state.token
};

export const actions = {
  async fetchToken(context, params) {
    context.commit("setToken", { token: params.token })
  },
  async removeToken(context) {
    context.commit("removeToken")
  }
};
