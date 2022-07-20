// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const prisma = new PrismaClient()

  prisma.$connect()

  const states = await prisma.state.findMany();

  prisma.$disconnect()

  res.status(200).json(states as any)
}
