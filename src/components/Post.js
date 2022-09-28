import React from 'react'
import SinglePost from '../pages/SinglePost'

const Post = ( { ...post } ) => {

  return (
    <tr>
        <td>{post.post.id}</td>
        <td>{post.post.title}</td>
        <td>{post.post.body}</td>
    </tr>
  )
}

export default Post