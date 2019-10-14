export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, payload) {
    state.token = payload.token
  }
};

export const getters = {
  token: state => state.token
};

export const actions = {
  async fetchToken(context, params) {
    context.commit("setToken", { token: params.token })
  }
};
