var db = require('./db');
module.exports.handleSignup = (email, password) => {
    //check if the email exists
    //save the user to db
    db.saveUser({email, password});
    db.loadMessage('Test Message');
    //send the welcome email
};