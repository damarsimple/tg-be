import { mutationField, nonNull } from 'nexus'

export const CityUpdateOneMutation = mutationField('updateOneCity', {
  type: nonNull('City'),
  args: {
    data: nonNull('CityUpdateInput'),
    where: nonNull('CityWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.city.update({
      where,
      data,
      ...select,
    })
  },
})
