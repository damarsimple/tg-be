import { arg, extendType } from 'nexus'
import { deleteFile, storeFile } from '../../../../modules/filesystem';

export * from './createOne'
export * from './updateOne'
export * from './upsertOne'
export * from './deleteOne'
export * from './updateMany'
export * from './deleteMany'


export const CustomMutationUser = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('updateProfilePicture', {
            type: 'MutationStatus',
            authorize: (_, __, { user }) => Boolean(user),
            args: {
                file: arg({ type: 'Upload' }),
            },
            resolve: async (_, { file }, { user, prisma }) => {

                try {

                    if (user.profilePicturePath) {
                        await deleteFile(user.profilePicturePath).catch(console.error)
                    }

                    const path = await storeFile(await file)

                    await prisma.user.update({
                        data: {
                            profilePicturePath: path
                        },
                        where: {
                            id: user.id

                        },
                    })

                    return {
                        status: true,
                        message: "Success"
                    }
                } catch (error) {
                    return {
                        status: false,
                        message: error.message
                    }
                }
            }
        })
    }
})