import prisma from '../../../../lib/prisma'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  username: string
  password: string | null
}

export async function Post(request: Request) {
  const body: RequestBody = await request.json()

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  })
  if (user && body.password !== null) {
    const passwordMatch = await bcrypt.compare(
      body.password,
      user.password || ''
    )
    if (passwordMatch) {
      const { password, ...userWithoutPass } = user
      return new Response(JSON.stringify(userWithoutPass))
    }
  }

  return new Response(JSON.stringify(null))
}
