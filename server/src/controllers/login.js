const users = require("../utils/users");

const login = (res. req) => {

    const {email, password} = req.query;
    let access = false;

    users.forEach((user) => {
        if(user.mail === email && user.password === password) access = true;
    });

    return res.status(200).json({ access });

    

};

module.exports = login;