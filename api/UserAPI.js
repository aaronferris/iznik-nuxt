import BaseAPI from '@/api/BaseAPI'

export default class UserAPI extends BaseAPI {
  async fetch(params) {
    const { user } = await this.$get('/user', params)
    return user
  }

  rate(id, rating) {
    return this.$post('/user', { ratee: id, rating, action: 'Rate' })
  }
}
