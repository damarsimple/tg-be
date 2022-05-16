import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  select: any
  user?: User
}

export function createContext(): Context {
  return {
    prisma,
    select: {},
  }
}
