const verifyCode = require('./util/verifyCode')

let server = {};

server.getVerifyCode = function () {
    let code = verifyCode()
    return code
}

module.exports = server