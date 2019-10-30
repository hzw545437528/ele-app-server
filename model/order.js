"use strict";
var Orders = /** @class */ (function () {
    function Orders() {
        this.shop_name = "";
        this.order_time = "";
        this.order_menu = "";
        this.order_num = "";
        this.totalnum = 0;
        this.order_id = "";
        this.state = "";
        this.order_pay = 0;
    }
    Shops.prototype.setShopName = function (shopName) {
        this.shop_name = shopName;
    };
    Shops.prototype.getShopName = function () {
        return this.shop_name;
    };
    Shops.prototype.setOrderTime = function (orderTime) {
        this.order_time = orderTime;
    };
    Shops.prototype.getOrderTime = function () {
        return this.order_time;
    };
    Shops.prototype.setOrderMenu = function (orderMenu) {
        this.order_menu = orderMenu;
    };
    Shops.prototype.getOrderMenu = function () {
        return this.order_menu;
    };
    Shops.prototype.setOrderNum = function (orderNum) {
        this.order_num = orderNum;
    };
    Shops.prototype.getOrderNum = function () {
        return this.order_num;
    };
    Shops.prototype.setTotalnum = function (totalnum) {
        this.totalnum = totalnum;
    };
    Shops.prototype.getTotalnum = function () {
        return this.totalnum;
    };
    Shops.prototype.setOrderId = function (orderId) {
        this.order_id = orderId;
    };
    Shops.prototype.getOrderId = function () {
        return this.order_id;
    };
    Shops.prototype.setState = function (state) {
        this.state = state;
    };
    Shops.prototype.getState = function () {
        return this.state;
    };
    Shops.prototype.setOrderPay = function (orderPay) {
        this.order_pay = orderPay;
    };
    Shops.prototype.getOrderPay = function () {
        return this.order_pay;
    };
    return Orders;
}());
module.exports = {
    order: Orders
};
