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
    orderPay: String,
    orderState:String,
    confirmTime:String,
    partCost:String,
    newDiscount:String,
    fullDiscount:String,
    shopDiscount:String,
    personDiscount:String,
    sendWay:String,
    arriveTime:String,
    contact:String,
    contactNumber:String,
    address:String,
    invoiceInfo:String,
    remark:String,
    shopNumber:String,
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
    OrderDao.prototype.getOrderById = function (orderId) {
        return new Promise(function (resolve, reject) {
            order.find({order_id:orderId}, function (err, res) {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    };
    return OrderDao;
}());
module.exports = OrderDao;
