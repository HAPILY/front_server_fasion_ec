export const state = () => ({
  list: {}
});

export const mutations = {
  setNewsList(state, payload) {
    state.list = { ...payload };
  }
};

export const getters = {
  list: state => state.list
};

export const actions = {
  async fetchList(context) {
    try {
      const res = await this.$axios.$get("/api/news");
      context.commit("setNewsList", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$moment().add(1, 'hour').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  }
};
