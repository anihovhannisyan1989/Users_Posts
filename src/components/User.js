import React from 'react'

const User = ( {...user} ) => {
  return (
    <tr>
        <td>{user.user.id}</td>
        <td>{user.user.name}</td>
        <td>{user.user.username}</td>
        <td>{user.user.email}</td>
        <td>{user.user.address.street}</td>
    </tr>
  )
}

export default User;