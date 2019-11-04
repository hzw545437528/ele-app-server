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
        this.order_pay = "";
        this.order_state="";
        this.confirm_time="";
        this.part_cost="";
        this.new_discount="";
        this.full_discount="";
        this.shop_discount="";
        this.person_discount="";
        this.send_way="";
        this.arrive_time="";
        this.contact="";
        this.contact_number="";
        this.address="";
        this.invoice_info="";
        this.remark="";
        this.shop_number="";
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
    Shops.prototype.setOrderState = function (orderState) {
        this.order_state = orderState;
    };
    Shops.prototype.getOrderState = function () {
        return this.order_state;
    };
    Shops.prototype.setConfirmTime = function (confirmTime) {
        this.confirm_time = confirmTime;
    };
    Shops.prototype.getConfirmTime = function () {
        return this.confirm_time;
    };
    Shops.prototype.setPartCost = function (partCost) {
        this.part_cost = partCost;
    };
    Shops.prototype.getPartCost = function () {
        return this.part_cost;
    };
    Shops.prototype.setNewDiscount = function (newDiscount) {
        this.new_discount = newDiscount;
    };
    Shops.prototype.getNewDiscount = function () {
        return this.new_discount;
    };
    Shops.prototype.setFullDiscount = function (fullDiscount) {
        this.full_discount = fullDiscount;
    };
    Shops.prototype.getFullDiscount = function () {
        return this.full_discount;
    };
    Shops.prototype.setShopDiscount = function (shopDiscount) {
        this.shop_discount = shopDiscount;
    };
    Shops.prototype.getShopDiscount = function () {
        return this.shop_discount;
    };
    Shops.prototype.setPersonDiscount = function (personDiscount) {
        this.person_discount = personDiscount;
    };
    Shops.prototype.getPersonDiscount = function () {
        return this.person_discount;
    };
    Shops.prototype.setSendWay = function (sendWay) {
        this.send_way = sendWay;
    };
    Shops.prototype.getSendWay = function () {
        return this.send_way;
    };
    Shops.prototype.setArriveTime = function (arriveTime) {
        this.arrive_time = arriveTime;
    };
    Shops.prototype.getArriveTime = function () {
        return this.arrive_time;
    };
    Shops.prototype.setContact = function (contact) {
        this.contact = contact;
    };
    Shops.prototype.getContact = function () {
        return this.contact;
    };
    Shops.prototype.setContactNumber = function (contactNumber) {
        this.contact_number = contactNumber;
    };
    Shops.prototype.getContactNumber = function () {
        return this.contact_number;
    };
    Shops.prototype.setAddress = function (address) {
        this.address = address;
    };
    Shops.prototype.getAddress = function () {
        return this.address;
    };
    Shops.prototype.setInvoiceInfo = function (invoiceInfo) {
        this.invoice_info = invoiceInfo;
    };
    Shops.prototype.getInvoiceInfo = function () {
        return this.invoice_info;
    };
    Shops.prototype.setRemark = function (remark) {
        this.remark = remark;
    };
    Shops.prototype.getRemark = function () {
        return this.remark;
    };
    Shops.prototype.setShopNumber = function (shopNumber) {
        this.shop_number = shopNumber;
    };
    Shops.prototype.getShopNumber = function () {
        return this.shop_number;
    };
    return Orders;
}());
module.exports = {
    order: Orders
};
