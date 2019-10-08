export const state = () => ({
  list: {},
  pickupList: {},
  rankList: {}
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
  }
};

export const getters = {
  list: state => state.list,
  pickupList: state => state.pickupList,
  rankList: state => state.rankList
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
  }
};
