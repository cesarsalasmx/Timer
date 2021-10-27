const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const userSchema =  new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        age: {
            type: Number,
        },
        phone: {
            type: String,
        },
        medicine: {
            name:{
                type: String,
            },
            totalDose: {
                type: Number,
            },
            period: {
                type: Number,
            },
            lastDose: {
                type: Date,
            },
        },

    }
)

module.exports = User = mongoose.model('user', userSchema);