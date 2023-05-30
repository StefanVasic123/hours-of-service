import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  name: string
  email: string
  password: string
}

export async function GET(request: Request) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json()

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    })

    const { password, ...result } = user

    return new NextResponse(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: any) {
    if (error.code === 'P2002') {
      return new NextResponse('User with email already exists', {
        status: 409,
      })
    }
    return new NextResponse(error.message, { status: 500 })
  }
}
