import 'moment/locale/ja'
import moment from 'moment'

export const isExpired = (result) => {
  if (!result.fetchTime) {
    return true
  }
  if (!result.expiryDate) {
    return false
  }
  return moment().isAfter(result.expiryDate)
}

export default {
  isExpired
}
