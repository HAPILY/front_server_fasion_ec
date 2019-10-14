export default async ({store}) => {
  if (!localStorage.token) {
    const token =  new Date().getTime().toString(16)  + Math.floor(1000 * Math.random()).toString(16)
    await localStorage.setItem('token', token)
  }
  if (!store.getters['token']) {
    const storageToken = localStorage.token
    await store.dispatch('fetchToken', { token: storageToken })
  }
}
