/**
 * Info User API methods.
 *
 * @constructor
 */

// import apiInstance from '../services';

class UserAPI {
  getInfo = async (user?: string) => {
    // const data: any = await apiInstance.get(`https://api.github.com/users/${user}`)
    const data: any = require('../../__mocks__/user.json')

    return { data }
  }
}

export default new UserAPI()
