import React from 'react'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import UsersList from '@/src/components/user/usersList.component'
import CreateUserForm from '@/src/components/user/createUserForm.component'

// rafce => create-arrow-function-component-export shortcut
// tsafce
type Props = {}

export default async function HomePage(props: Props) {
  const feed = await prisma.post.findMany()
  const users = await prisma.user.findMany()

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

  return (
    <main className="py-4 px-48">
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
          list users:{' '}
          {users.map((user: any) => (
            <li key={user.id}>
              ime: {user.name}; email: {user.email}
              <button /* onClick={() => deleteUser(user.id)} */>
                Obrisi korisnika
              </button>
            </li>
          ))}
        </div>
        <div>
          server_users_list: <UsersList />
        </div>
        <h4>Kreiraj novu instancu u bazi podataka (POST): </h4>
        <CreateUserForm />
      </div>
    </main>
  )
}
