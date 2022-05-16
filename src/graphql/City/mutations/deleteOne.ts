import { mutationField, nonNull } from 'nexus'

export const CityDeleteOneMutation = mutationField('deleteOneCity', {
  type: 'City',
  args: {
    where: nonNull('CityWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.city.delete({
      where,
      ...select,
    })
  },
})
