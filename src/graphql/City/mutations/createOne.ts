import { mutationField, nonNull } from 'nexus'

export const CityCreateOneMutation = mutationField('createOneCity', {
  type: nonNull('City'),
  args: {
    data: nonNull('CityCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.city.create({
      data,
      ...select,
    })
  },
})
