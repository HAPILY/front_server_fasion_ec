export const state = () => ({
  list: {},
  idList: {},
  typeList: {},
  item: {}
});

export const mutations = {
  setItemList(state, payload) {
    state.list = { ...payload };
  },
  setIdList(state, payload) {
    state.idList = { ...payload };
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
  idList: state => state.idList,
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
        expiryDate: this.$dayjs().add(1, 'hour').toDate()
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchIdList(context, params) {
    const qs = require('qs');
    try {
      const res = await this.$axios.$get("/api/items", {
        params: params,
        paramsSerializer: params => {
          return qs.stringify(params)
        }
      });
      context.commit("setIdList", {
        result: res.data,
        fetchTime: new Date(),
        expiryDate: this.$dayjs().add(1, 'seconds').toDate()
      })
    } catch (e) {
      console.log("error", e);
    }
  },
  updateIdList(context, params) {
    const list = context.getters.idList.result;
    let newList = []
    if (params.cart) {
      list.forEach(v => {
        params.cart.forEach(vv => {
          if (v.id === vv.id) {
            newList.push(v);
          }
        });
      });
    }
    context.commit("setIdList", {
      result: newList,
      fetchTime: new Date(),
      expiryDate: this.$dayjs().add(1, 'seconds').toDate()
    })
  },
  async fetchTypeList(context, params) {
    try {
      const res = await this.$axios.$get("/api/item", { params: params });
      context.commit("setTypeList", {
        [params.type]: {
          result: res.data,
          fetchTime: new Date(),
          expiryDate: this.$dayjs().add(1, 'day').toDate()
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
          expiryDate: this.$dayjs().add(1, 'seconds').toDate()
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  }
};
