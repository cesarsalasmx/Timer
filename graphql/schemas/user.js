const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require('graphql');
const {
    GraphQLDate
} =require ('graphql-iso-date');
const QueryUser = new GraphQLObjectType({
    name: "QueryUser",
    type: "query",
    fields:{
        id: { type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        type: {type: GraphQLString},
        birth: {type: GraphQLDate},
        phone: {type: GraphQLString},

    }   
});
const MutationUser =  new GraphQLObjectType({
    name: "MutationUser",
    type: "mutaion",
    fields:{
        id: { type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        birth: {type: GraphQLDate},
        phone: {type: GraphQLString},
    }
});
module.exports = { QueryUser, MutationUser };