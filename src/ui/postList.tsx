import _ from 'lodash'
import { Post } from '.'

type PostListProps = {
  items: any[]
}
const PostList = (props: PostListProps) => {
  return (
    <>
      {_.map(props.items, (x, i) => (
        <Post key={i} {...x} />
      ))}
    </>
  )
}

export default PostList
