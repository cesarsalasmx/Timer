//const db = require('');
const {
    GraphQLID
} = require('graphql');
const QueryUser = require('../schemas/user');
const GetUser = {
    type: QueryUser,
    args: { id: { type: GraphQLID }},
    resolve(parentValue,args){
        return 0;
    },
};
module.exports = GetUser;