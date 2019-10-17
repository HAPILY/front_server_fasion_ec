import dayjs from 'dayjs'

/* eslint no-unused-vars: 0 */
export default ({ app }, inject) => {
  inject('dayjs', ((string) => dayjs(string)))
}
