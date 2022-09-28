import React from 'react';
import Container from 'react-bootstrap/Container';
import UserTable from '../components/UserTable';

const Users = () => {
  return (
    <Container className='mt-5'>
      <UserTable />
    </Container>
  )
};

export default Users;