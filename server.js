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

server.getShopImage = function (path) {
    return shopService.getShopImage(path)
}

server.getProvideIntroduce = function (name) {
    return shopService.getProvideIntroduce(name)
}
server.getOrders = function () {
    return orderService.getOrders()
}
server.getShopByName = function (shopName) {
    return shopService.getShopByName(shopName)
}
server.getOrderById = function (orderId) {
    return orderService.getOrderById(orderId)
}

module.exports = server