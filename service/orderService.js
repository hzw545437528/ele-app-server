"use strict";
var orderDao = require('../dao/order');
var order_dao = new orderDao();
var orderService = /** @class */ (function () {
    function orderService() {
    }
    orderService.prototype.getOrders = function () {
        return order_dao.getOrders();
    };
    return orderService;
}());
module.exports = orderService;
