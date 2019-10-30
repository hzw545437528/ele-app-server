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

server.getShops = function (type, page) {
    return shopService.getShops(type, page)
}

server.getShopImage = function (path) {
    return shopService.getShopImage(path)
}

server.getProvideIntroduce = function (name) {
    return shopService.getProvideIntroduce(name)
}

module.exports = server