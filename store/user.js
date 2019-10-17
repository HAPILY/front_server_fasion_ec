export const state = () => ({
  user: {}
});

export const mutations = {
  setUserProfile(state, payload) {
    state.user = { ...payload }
  }
};

export const getters = {
  user: state => state.user
};

export const actions = {
  async fetchUserProfile(context) {
    try {
      const res = await this.$axios.$get("/api/user");
      if (res.data) {
        context.commit("setUserProfile", {
          result: res.data,
          fetchTime: new Date(),
          expiryDate: this.$dayjs().add(1, 'day').toDate()
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
};
