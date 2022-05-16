import { queryField, nonNull, list } from 'nexus'

export const CityFindCountQuery = queryField('findManyCityCount', {
  type: nonNull('Int'),
  args: {
    where: 'CityWhereInput',
    orderBy: list('CityOrderByWithRelationInput'),
    cursor: 'CityWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CityScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.city.count(args as any)
  },
})
