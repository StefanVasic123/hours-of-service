import React from 'react'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import UsersList from '../user/usersList.component'
import CreateUserForm from '../user/createUserForm.component'
import UpdateUserForm from '../user/updateUserForm.component'

// rafce => create-arrow-function-component-export shortcut
// tsafce
type Props = {}

export default async function HomePage(props: Props) {
  const feed = await prisma.post.findMany()

  return (
    <main className="py-4">
      <div>
        <h1>
          Vercel Test, feed: xyz | HomePage Primer (Ovo nam je aplikacija
          homepage)
        </h1>
        <p>istestirati:</p>
        <ol>
          <li>linkove</li>
          <li>CRUD: unos podataka, brisanje, edit, update</li>
          <li>prikazati podatke na nekoj drugoj stranici (routing-test)</li>
        </ol>
        <h3>Linkovi Test:</h3>
        <ul>
          <li>
            <Link href="/about">About test stranica</Link>
          </li>
          <li>
            <Link href="/testing">Testing stranica</Link>
          </li>
          <li>
            <Link href="/about/nested">Nested Ruta</Link>
          </li>
        </ul>
        <h4>TODO: implementirati basic TypeScript</h4>
        <h3>Database Test (Prisma): </h3>
        <ul>
          {feed.map((post: { id: string; title: string }) => (
            <li key={post.id}>title: {post.title}</li>
          ))}
        </ul>
        <div>
          server_users_list: <UsersList />
        </div>
        <h4>Kreiraj novu instancu u bazi podataka (POST): </h4>
        <CreateUserForm />
        <h4>Update-uj korisnika po ID-u (UPDATE): </h4>
        <UpdateUserForm />
      </div>
    </main>
  )
}
