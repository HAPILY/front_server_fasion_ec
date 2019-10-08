import 'moment/locale/ja'
import moment from 'moment'

moment.locale('ja')
/* eslint no-unused-vars: 0 */
export default ({ app }, inject) => {
  inject('moment', args => moment(args))
}
