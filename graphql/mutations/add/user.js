//const db = require('');
const {
    GraphQLString,
    GraphQLInt,
} =  require('graphql');
const { GraphQLDate } = require('graphql-iso-date');
const MutationUser = require('../../schemas/user');
const AddUser = {
    type: MutationUser,
    args:{
        name: {type: GraphQLString },
        email: {type: GraphQLString },
        password: {type: GraphQLString },
        birth: {type: GraphQLDate },
        phone: {type: GraphQLString },
    },
    resolve(parentValue,args){
        return 0;
    }
};
module.exports = AddUser;