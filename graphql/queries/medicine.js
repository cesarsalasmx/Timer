//const db = require('');
const {
    GraphQLID
} = require('graphql');
const QueryMedicine = require('../schemas/medicine');
const GetMedicine = {
    type: QueryMedicine,
    args: { id: { type: GraphQLID } },
    resolve(parentValue, args){
        return 0;
    },
};
module.exports = GetMedicine