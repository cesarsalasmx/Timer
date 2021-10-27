const User = require('../db/schema');

const getUser = (query) => {
    return User.findOne( { name: query.name }, function (err, response){
        if (err){ return err; }
        else{ return response; }
    });
};

const getAllUsers = (query) => {
    const queryName = query.name && query.name.map(user => {
        const obj = { name: "" };
        obj.name = user;
        return obj;
    });
    const filter = queryName && { $or: queryName }

    return User.find(filter, function (err ,docs) {
        if(err) { return err; }
        else { return docs; }
    });
};

module.exports = { getUser, getAllUsers };
