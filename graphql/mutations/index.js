const { GraphQLInputObjectType } = require('graphql');
const { GraphQLObjectType } = require('graphql');
//import add queries
const AddUser = require('./add/user');
const AddMedicine = require('./add/medicine');
const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    type: "mutation",
    fields: {
        AddUser,
        AddMedicine,
    },
});
module.exports = RootMutation;