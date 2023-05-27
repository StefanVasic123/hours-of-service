import React from 'react'
import Link from 'next/link'

// rafce => create-arrow-function-component-export shortcut
// tsafce
type Props = {}

const HomePage = (props: Props) => {
  return (
    <main className="py-4 px-48">
      <div>
        <h1>Vercel Test | HomePage Primer (Ovo nam je aplikacija homepage)</h1>
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
      </div>
    </main>
  )
}

export default HomePage
