import { objectType } from 'nexus'

export const School = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'School',
  definition(t) {
    t.string('id')
    t.string('name')
    t.nullable.string('npsn')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('classrooms', {
      type: 'Classroom',
      args: {
        where: 'ClassroomWhereInput',
        orderBy: 'ClassroomOrderByWithRelationInput',
        cursor: 'ClassroomWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ClassroomScalarFieldEnum',
      },
      resolve(root: any) {
        return root.classrooms
      },
    })
    t.list.int('levels')
    t.string('type')
    t.string('address')
    t.nullable.string('logoPath')
    t.nullable.string('bannerPath')
    t.string('provinceId')
    t.field('province', {
      type: 'Province',
      resolve(root: any) {
        return root.province
      },
    })
    t.string('cityId')
    t.field('city', {
      type: 'City',
      resolve(root: any) {
        return root.city
      },
    })
    t.field('_count', {
      type: 'SchoolCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
