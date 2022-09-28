import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getPosts } from "../actions/posts";
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';

const PostTable = () => {

    const dispatch = useDispatch();

    const getPost = async () => {
        try{
            const response = await getPosts();
            if(response.data){
                dispatch({
                    type: "ADD_POSTS",
                    payload: {
                        data: response.data, 
                    }
                })
            }
        }catch(err){
            console.error("Get Posts : ", err);
        }
    }

    useEffect(() => {
        getPost();
    }, [])

    const posts = useSelector(state => state.posts);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </tbody>
    </Table>
  )
}

export default PostTable