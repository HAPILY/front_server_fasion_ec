export const state = () => ({
  list: {},
  item: {}
});

export const mutations = {
  setNewsList(state, payload) {
    state.list = { ...payload };
  },
  setItem(state, payload) {
    state.item = { ...payload };
  }
};

export const getters = {
  list: state => state.list,
  item: state => state.item
};

export const actions = {
  async fetchList(context) {
    try {
      const res = await this.$axios.$get("/api/news");
      context.commit("setNewsList", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$dayjs().add(1, 'hour').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchItem(context, params) {
    try {
      const res = await this.$axios.$get(`/api/news/${params.id}`);
      context.commit("setItem", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$dayjs().add(1, 'seconds').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  }
};
