export const state = () => ({
  list: {},
  pickupList: {},
  rankList: {},
  item: {}
});

export const mutations = {
  setItemList(state, payload) {
    state.list = { ...payload };
  },
  setPickupList(state, payload) {
    state.pickupList = { ...payload };
  },
  setRankList(state, payload) {
    state.rankList = { ...payload };
  },
  setItem(state, payload) {
    state.item = { ...payload };
  }
};

export const getters = {
  list: state => state.list,
  pickupList: state => state.pickupList,
  rankList: state => state.rankList,
  item: state => state.item
};

export const actions = {
  async fetchList(context) {
    try {
      const res = await this.$axios.$get("/api/item");
      context.commit("setItemList", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$moment().add(1, 'hour').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchPickupList(context) {
    try {
      const res = await this.$axios.$get("/api/item", { params: { type: "pickup", limit: 10 } });
      context.commit("setPickupList", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$moment().add(1, 'hour').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchRankList(context) {
    try {
      const res = await this.$axios.$get("/api/item", { params: { type: "rank", limit: 5 } });
      context.commit("setRankList", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$moment().add(1, 'hour').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchItem(context, params) {
    try {
      const res = await this.$axios.$get(`/api/item/${params.id}`);
      context.commit("setItem", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$moment().add(1, 'seconds').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  }
};
