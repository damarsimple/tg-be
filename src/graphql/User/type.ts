import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('email')
    t.string('password')
    t.string('phoneNumber')
    t.string('address')
    t.nullable.string('profilePicturePath')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('nisn')
    t.nullable.string('nrg')
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
    t.boolean('isAdmin')
    t.boolean('isBimbel')
    t.field('role', { type: 'Roles' })
    t.float('balance')
    t.nullable.field('emailVerifiedAt', { type: 'DateTime' })
    t.nullable.field('phoneNumberVerifiedAt', { type: 'DateTime' })
    t.nullable.field('bimbelApprovedAt', { type: 'DateTime' })
    t.list.field('identityFiles', {
      type: 'IdentityFile',
      args: {
        where: 'IdentityFileWhereInput',
        orderBy: 'IdentityFileOrderByWithRelationInput',
        cursor: 'IdentityFileWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'IdentityFileScalarFieldEnum',
      },
      resolve(root: any) {
        return root.identityFiles
      },
    })
    t.list.field('questions', {
      type: 'Question',
      args: {
        where: 'QuestionWhereInput',
        orderBy: 'QuestionOrderByWithRelationInput',
        cursor: 'QuestionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'QuestionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.questions
      },
    })
    t.list.field('examinations', {
      type: 'Exam',
      args: {
        where: 'ExamWhereInput',
        orderBy: 'ExamOrderByWithRelationInput',
        cursor: 'ExamWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExamScalarFieldEnum',
      },
      resolve(root: any) {
        return root.examinations
      },
    })
    t.list.field('examsessions', {
      type: 'ExamSession',
      args: {
        where: 'ExamSessionWhereInput',
        orderBy: 'ExamSessionOrderByWithRelationInput',
        cursor: 'ExamSessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExamSessionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.examsessions
      },
    })
    t.list.field('privateChats', {
      type: 'PrivateChat',
      args: {
        where: 'PrivateChatWhereInput',
        orderBy: 'PrivateChatOrderByWithRelationInput',
        cursor: 'PrivateChatWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PrivateChatScalarFieldEnum',
      },
      resolve(root: any) {
        return root.privateChats
      },
    })
    t.list.field('myPrivateChats', {
      type: 'PrivateChat',
      args: {
        where: 'PrivateChatWhereInput',
        orderBy: 'PrivateChatOrderByWithRelationInput',
        cursor: 'PrivateChatWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PrivateChatScalarFieldEnum',
      },
      resolve(root: any) {
        return root.myPrivateChats
      },
    })
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
    t.list.field('classroomStudents', {
      type: 'ClassroomStudent',
      args: {
        where: 'ClassroomStudentWhereInput',
        orderBy: 'ClassroomStudentOrderByWithRelationInput',
        cursor: 'ClassroomStudentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ClassroomStudentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.classroomStudents
      },
    })
    t.list.field('notifications', {
      type: 'Notification',
      args: {
        where: 'NotificationWhereInput',
        orderBy: 'NotificationOrderByWithRelationInput',
        cursor: 'NotificationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'NotificationScalarFieldEnum',
      },
      resolve(root: any) {
        return root.notifications
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
