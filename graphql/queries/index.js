const {
    GraphQLObjectType
} =  require('graphql');
const GetMedicine = require('./medicine');
const GetUser = require('./user');
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    type: "query",
    fields: {
        GetMedicine,
        GetUser,
    }
});
module.exports = RootQuery;