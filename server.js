const verifyCode = require('./util/verifyCode')
const ShopService = require('./service/shopService')
const OrderService = require('./service/orderService')

let server = {};

shopService = new ShopService();
orderService = new OrderService();

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

server.getOrders = function () {
    return orderService.getOrders()
}
module.exports = server