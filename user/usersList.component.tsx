'use client'
import React, { useState, useEffect } from 'react'

async function deleteUser(userId: string) {
  try {
    // setLoading(true);
    await fetch('/api/users/' + userId, {
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
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Ucitavanje...</p>
  if (!users) return <p>Nema korisnika</p>
  return (
    <div>
      {users.map((user: { id: string; name: string }) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <button onClick={() => deleteUser(user.id)}>Obrisi korisnika</button>
        </div>
      ))}
    </div>
  )
}
