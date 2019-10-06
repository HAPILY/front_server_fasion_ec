export const state = () => ({
  list: []
});

export const mutations = {
  setItemList(state, payload) {
    state.list = payload;
  }
};

export const getters = {
  list: state => state.list
};

export const actions = {
  async fetchList(context) {
    try {
      const res = await this.$axios.$get("/api/item");

      console.log(res);
      context.commit("setItemList", res.data);
    } catch (e) {
      console.log("error", e);
    }
  }
};
