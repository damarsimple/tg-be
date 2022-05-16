import { mutationField, nonNull } from 'nexus'

export const CityUpdateManyMutation = mutationField('updateManyCity', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CityUpdateManyMutationInput'),
    where: 'CityWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.city.updateMany(args as any)
  },
})
