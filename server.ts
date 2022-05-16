import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { graphqlUploadExpress } from "graphql-upload";
import { ExtendedUser } from "./modules/user";
import { schema } from './src/nexusSchema'
import { prisma } from "./modules/prisma";


async function getUser() {

    const user = prisma.user.findUnique({
        where: {
            id: "ca34ca93-961c-4941-bc8a-2171b0dcfcbf"
        }
    });

    if (!user) return null;

    return new ExtendedUser(await user)

}

async function startApolloServer() {
    const app = express();

    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

    app.use(express.static('public'));

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema,

        context: async ({ req }) => ({
            user: await (await getUser()).user,
            prisma
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
