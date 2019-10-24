const verifyCode = require('./util/verifyCode')
const ShopService = require('./service/shopService')

let server = {};

shopService = new ShopService();

server.getVerifyCode = function () {
    let code = verifyCode()
    return code
}

server.getShopType = function (type = {}) {
    return shopService.getShopType(type)
}

module.exports = server