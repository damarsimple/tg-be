import { queryField, nonNull } from 'nexus'

export const CityFindUniqueQuery = queryField('findUniqueCity', {
  type: 'City',
  args: {
    where: nonNull('CityWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.city.findUnique({
      where,
      ...select,
    })
  },
})
