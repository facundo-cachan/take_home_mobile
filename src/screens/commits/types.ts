type AuthorProps = {
  name: string
  email: string
  date: string
}
type TreeProps = {
  sha: string
  url: string
  html_url?: string
}
type CommitProps = {
  author: AuthorProps
  committer: AuthorProps
  message: string
  tree: TreeProps
  url: string
  comment_count: number
  verification: {
    verified: boolean
    reason: string
    signature: string
    payload: string
  }
}
type CommitsProps = {
  sha: string
  node_id: string
  commit: CommitProps
  url: string
  html_url: string
  comments_url: string
  author: AuthorProps | null
  committer: AuthorProps | null
  parents: TreeProps[]
}
export type CommitData = {
  sha: string
  commit: {
    message: string
    author: Pick<AuthorProps, 'name' | 'date'>
    verification: { verified: boolean }
  }
}

export default CommitsProps
