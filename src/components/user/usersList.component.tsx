import { User } from '@prisma/client'
import React, { cache, use } from 'react'

const getUsers = cache(() =>
  fetch('http://localhost:3000/api/users').then((res) => res.json())
)

export default function UsersList() {
  let users = use<User[]>(getUsers())
  console.log('users_here: ', users)
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  )
}
