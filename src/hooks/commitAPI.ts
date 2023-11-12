/**
 * Commits API methods.
 *
 * @constructor
 */

// import apiInstance from '../services';

type GetCommitsProps = { owner: string; repo: string }

class CommitAPI {
  getAll = async ({ owner, repo }: GetCommitsProps) => {
    // const data: any = await apiInstance.get(`https://api.github.com/repos/${owner}/${repo}/commits`)
    const data: any = require('../../__mocks__/commits.json')

    return { data }
  }
}

export default new CommitAPI()
