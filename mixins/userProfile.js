export default {
  middleware({ store }) {
    if (localStorage.getItem('isLogin') === '1') {
      store.dispatch("user/fetchUserProfile")
    }
  }
}
