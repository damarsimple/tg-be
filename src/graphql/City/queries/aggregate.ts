import { queryField, list } from 'nexus'

export const CityAggregateQuery = queryField('aggregateCity', {
  type: 'AggregateCity',
  args: {
    where: 'CityWhereInput',
    orderBy: list('CityOrderByWithRelationInput'),
    cursor: 'CityWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.aggregate({ ...args, ...select }) as any
  },
})
