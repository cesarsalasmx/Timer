//const db = require('');
const {
    GraphQLString,
    GraphQLInt,
} =  require('graphql');
const { GraphQLDate } = require('graphql-iso-date');
const MutationMedicine = require('../../schemas/medicine');
const AddMedicine = {
    type: MutationMedicine,
    args:{
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        totalDose: { type: GraphQLString },
        period: { type: GraphQLString },
        lastDose: { type: GraphQLDate },
    },
    resolve(parentValue,args){
        return 0;
    }
};
module.exports = AddMedicine;