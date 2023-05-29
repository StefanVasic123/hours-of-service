'use client'
import React, { useState } from 'react'
import Head from 'next/head'

export default function CreateUserForm() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    setMessage('')
    if (id && name && email) {
      // send a request to the server.
      try {
        const body = { id, name, email }
        await fetch(`/api/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      } catch (error) {
        console.error(error)
      }
    } else {
      setError('All fields are required')
      return
    }
  }

  return (
    <div>
      <Head>
        <title>Create Post</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit}>
          {error ? <div className=" error form-group">{error}</div> : null}
          {message ? <div>{message}</div> : null}
          <div>
            <input
              type="text"
              name="id"
              placeholder="Upisi ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <textarea
              cols={50}
              name="name"
              placeholder="Upisi ime"
              rows={8}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <textarea
              cols={50}
              name="email"
              placeholder="Upisi email"
              rows={8}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Dodaj Korisnika</button>
          </div>
        </form>
      </div>
    </div>
  )
}
