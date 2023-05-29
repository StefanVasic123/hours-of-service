'use client'
import { User } from '@prisma/client'
import React, { cache, use } from 'react'

const getUsers = cache(() =>
  fetch('http://localhost:3000/api/users').then((res) => res.json())
)

async function deleteUser(userId: string) {
  try {
    // setLoading(true);
    await fetch('/api/users/delete?id=' + userId, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    //  setLoading(false);
    //  await router.push("/");
  } catch (error) {
    console.log('error', error)
    //  setLoading(false);
  }
}

export default function UsersList() {
  let users = use<User[]>(getUsers())
  console.log('users_here: ', users)
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <button onClick={() => deleteUser(user.id)}>Obrisi korisnika</button>
        </div>
      ))}
    </div>
  )
}
