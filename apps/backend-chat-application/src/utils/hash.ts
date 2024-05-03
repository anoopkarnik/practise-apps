const bcrypt = require('bcryptjs');

const hashPassword = async function (plainTextPassword:string) {
    return await bcrypt.hash(plainTextPassword, 10);
}

const passwordCheck = async function (plainTextPassword:string , hashedPassword:string) {
    return await bcrypt.compare(plainTextPassword, hashedPassword );
}

module.exports = {hashPassword, passwordCheck};