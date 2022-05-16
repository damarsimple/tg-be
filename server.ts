import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { graphqlUploadExpress } from "graphql-upload";
import { ExtendedUser } from "./user";
import { Prisma, PrismaClient } from "@prisma/client";

import { schema } from './src/nexusSchema'

const prisma = new PrismaClient();


async function getUser() {

    const user = await prisma.user.findUnique({
        where: {
            id: "ca34ca93-961c-4941-bc8a-2171b0dcfcbf"
        }
    });

    if (!user) return null;

    return new ExtendedUser(user)

}

async function startApolloServer() {
    const app = express();
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema,
        // formatError: (e) => {
        // return e;
        // },


        context: async ({ req }) => ({
            // This part is up to you!
            // currentUser: await getUserFromAuthHeader(req.headers.authorization),
            user: await getUser()
        }),

        plugins: [

        ],
    });

    await server.start();
    server.applyMiddleware({
        app,
        bodyParserConfig: {
            limit: "100mb",
        },
    });
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
