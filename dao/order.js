"use strict";
var mongoose = require('../dbBase/dbConnect.ts');
var ordersSchema = {
    shopName: String,
    orderTime: String,
    orderMenu: String,
    orderNum: String,
    totalnum: Number,
    orderId: String,
    state: String,
    orderPay: Number
};
var order = mongoose.model('Order', ordersSchema);
var OrderDao = /** @class */ (function () {
    function OrderDao() {
    }
    OrderDao.prototype.getOrders = function () {
        return new Promise(function (resolve, reject) {
            order.find(function (err, res) {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            }).sort({order_id:-1});
        });
    };
    return OrderDao;
}());
module.exports = OrderDao;
