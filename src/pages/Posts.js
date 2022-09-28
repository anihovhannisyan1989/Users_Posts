import React from 'react';
import Container from 'react-bootstrap/Container';
import PostTable from '../components/PostTable';

const Posts = () => {
  return (
    <Container className='mt-5'>
      <PostTable />
    </Container>
  )
};

export default Posts;