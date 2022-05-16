import { subscriptionType } from 'nexus'

export * from './findUnique'
export * from './findFirst'
export * from './findMany'
export * from './findCount'
export * from './aggregate'


export const subscribeTest = subscriptionType({

    definition(t) {

        t.string('truths', {

            subscribe() {

                console.log('test');


                return (async function* () {

                    while (true) {

                        await new Promise(res => setTimeout(res, 1000))

                        yield Math.random() > 0.5 ? "true" : "false"

                    }

                })()

            },

            resolve(eventData) {
                console.log('test');

                return eventData

            },

        })

    },

})