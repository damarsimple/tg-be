import { queryField, nonNull, list } from 'nexus'

export const CityFindManyQuery = queryField('findManyCity', {
  type: nonNull(list(nonNull('City'))),
  args: {
    where: 'CityWhereInput',
    orderBy: list('CityOrderByWithRelationInput'),
    cursor: 'CityWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CityScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.findMany({
      ...args,
      ...select,
    })
  },
})
