export default function ({$axios}) {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `Auth ${localStorage.getItem('token')}`
  })
}
