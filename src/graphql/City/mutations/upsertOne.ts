import { mutationField, nonNull } from 'nexus'

export const CityUpsertOneMutation = mutationField('upsertOneCity', {
  type: nonNull('City'),
  args: {
    where: nonNull('CityWhereUniqueInput'),
    create: nonNull('CityCreateInput'),
    update: nonNull('CityUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.upsert({
      ...args,
      ...select,
    })
  },
})
