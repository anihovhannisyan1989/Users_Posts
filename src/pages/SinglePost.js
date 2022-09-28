import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getCurrentPost } from '../actions/post';
import { useDispatch, useSelector } from 'react-redux/';

const SinglePost = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const getCurrent = async () => {
    try{
      const response = await getCurrentPost(id);
      if(response){
        dispatch({
          type: "ADD_POST",
          payload: {
            post: response,
          }
        })
      }
    }catch(err){
      console.error("Current Post : ", err);
    }
  } 

  useEffect(() => {
    getCurrent();
  }, [])

  const post = useSelector( state => state.post);

  return (
    <Container className='mt-5'>
      {post.title}
    </Container>
  )
}

export default SinglePost