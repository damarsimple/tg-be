import { queryField, list } from 'nexus'

export const CityFindFirstQuery = queryField('findFirstCity', {
  type: 'City',
  args: {
    where: 'CityWhereInput',
    orderBy: list('CityOrderByWithRelationInput'),
    cursor: 'CityWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CityScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.findFirst({
      ...args,
      ...select,
    })
  },
})
