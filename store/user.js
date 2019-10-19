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
          result: changeScheme(res.data),
          fetchTime: new Date(),
          expiryDate: this.$dayjs().add(1, 'day').toDate()
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
};

const changeScheme = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    birthday: data.birthday
  }
}
