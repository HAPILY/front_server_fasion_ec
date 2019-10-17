import dayjs from 'dayjs'

export const isExpired = (result) => {
  if (!result.fetchTime) {
    return true
  }
  if (!result.expiryDate) {
    return false
  }
  return dayjs().isAfter(result.expiryDate)
}

export default {
  isExpired
}
