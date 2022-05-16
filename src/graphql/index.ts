import { GraphQLUpload } from 'graphql-upload'
import { asNexusMethod, objectType } from 'nexus'

export * from './Question'
export * from './ExamAnswer'
export * from './ExamQuestion'
export * from './ExamSession'
export * from './Exam'
export * from './PrivateChat'
export * from './ClassroomStudent'
export * from './Classroom'
export * from './School'
export * from './Notification'
export * from './User'
export * from './IdentityFile'
export * from './City'
export * from './Province'

export const Upload = asNexusMethod(GraphQLUpload, 'upload')


export const MutationStatus = objectType({
    name: 'MutationStatus',
    definition(t) {
        t.boolean('success')
        t.string('message')
    }
})

export interface UploadType {
    filename: string,
    mimetype: string,
    encoding: string,
    createReadStream: () => NodeJS.ReadableStream
}