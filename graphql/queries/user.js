const { getUser } = require('../../services/user');
const {
    GraphQLID
} = require('graphql');
const QueryUser = require('../schemas/user');
const GetUser = {
    type: QueryUser,
    args: { id: { type: GraphQLID }},
    resolve(parentValue,args){
        return getUser(args);
    },
};
module.exports = GetUser;