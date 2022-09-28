import React, { useEffect } from 'react';
import Table from "react-bootstrap/Table";
import { getUsers } from '../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';

const UserTable = () => {
    
    const dispatch = useDispatch();

    const getUser = async () => {
        try{
            const response = await getUsers();
            if(response.data){
                dispatch({
                    type: "ADD_USERS",
                    payload: {
                        data: response.data,
                    }
                })
            }
        }catch(err){
            console.error("Get Users : ", err);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const users = useSelector( state => state.users);
    
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <User key={user.id} user={user} />)}
      </tbody>
    </Table>
  )
}

export default UserTable;