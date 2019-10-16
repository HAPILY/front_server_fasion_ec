export const state = () => ({
  list: {},
  typeList: {},
  item: {}
});

export const mutations = {
  setItemList(state, payload) {
    state.list = { ...payload };
  },
  setTypeList(state, payload) {
    state.typeList = Object.assign({}, { ...state.typeList }, { ...payload });
  },
  setItem(state, payload) {
    state.item = Object.assign({}, { ...state.item }, { ...payload });
  }
};

export const getters = {
  list: state => state.list,
  typeList: state => state.typeList,
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
  async fetchTypeList(context, params) {
    try {
      const res = await this.$axios.$get("/api/item", { params: params });
      context.commit("setTypeList", {
        [params.type]: {
          result: res.data,
          fetchTime: new Date(),
          expiryDate: this.$moment().add(1, 'day').toDate()
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchItem(context, params) {
    try {
      const res = await this.$axios.$get(`/api/item/${params.id}`);
      context.commit("setItem", {
        [params.id]: {
          result: res.data,
          fetchTime: new Date(),
          expiryDate: this.$moment().add(1, 'seconds').toDate()
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  }
};
