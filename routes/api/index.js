const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const {RootQuery} = require('../../graphql/queries');
const {RootMutation} = require('../../graphql/mutations');

const schema = new GraphQLSchema({ query: RootQuery, mutation: RootMutation });

function apiRouter(app){
    app.use(
        "/api",
        graphqlHTTP.graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    );
}

module.exports = apiRouter;