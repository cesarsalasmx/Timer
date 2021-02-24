const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
}= require('graphql');
const {
    GraphQLDate
} = require('graphql-iso-date');

const QueryMedicine = new GraphQLObjectType({
    name: "QueryMedicine",
    type: "query",
    fields: {
        id: {type: GraphQLInt},
        nombre: {type: GraphQLString},
        totalDose: {type: GraphQLInt},
        period: {type: GraphQLInt},
        lastDose: {type: GraphQLDate},
    }
});
const MutationMedicine = new GraphQLObjectType({
    name: "MutationMedicine",
    type: "mutation",
    fields:{
        id: {type: GraphQLInt},
        nombre: {type: GraphQLString},
        totalDose: {type: GraphQLInt},
        period: {type: GraphQLInt},
        lastDose: {type: GraphQLDate},
    }
});
module.exports = { QueryMedicine, MutationMedicine };