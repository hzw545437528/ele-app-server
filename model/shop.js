"use strict";
var ShopType = /** @class */ (function () {
    function ShopType() {
        this.type_1 = "";
        this.type_2 = "";
    }
    ShopType.prototype.setType_1 = function (type) {
        this.type_1 = type;
    };
    ShopType.prototype.setType_2 = function (type) {
        this.type_2 = type;
    };
    ShopType.prototype.getType_1 = function () {
        return this.type_1;
    };
    ShopType.prototype.getType_2 = function () {
        return this.type_2;
    };
    return ShopType;
}());
var Shops = /** @class */ (function () {
    function Shops() {
        this.shop_name = "";
        this.level = 0;
        this.distribution_time = 0;
        this.shop_fee = 0;
        this.provide = "";
        this.type = "";
        this.introduction = "";
        this.img = "";
    }
    Shops.prototype.setShopName = function (shopName) {
        this.shop_name = shopName;
    };
    Shops.prototype.getShopName = function () {
        return this.shop_name;
    };
    Shops.prototype.setLevel = function (level) {
        this.level = level;
    };
    Shops.prototype.getLevel = function () {
        return this.level;
    };
    Shops.prototype.setDistributionTime = function (distributionTime) {
        this.distribution_time = distributionTime;
    };
    Shops.prototype.getDistributionTime = function () {
        return this.distribution_time;
    };
    Shops.prototype.setShopFee = function (shopFee) {
        this.shop_fee = shopFee;
    };
    Shops.prototype.getShopFee = function () {
        return this.shop_fee;
    };
    Shops.prototype.setProvide = function (provide) {
        this.provide = provide;
    };
    Shops.prototype.getProvide = function () {
        return this.provide;
    };
    Shops.prototype.setType = function (type) {
        this.type = type;
    };
    Shops.prototype.getType = function () {
        return this.type;
    };
    Shops.prototype.setIntroduction = function (introduction) {
        this.introduction = introduction;
    };
    Shops.prototype.getIntroducion = function () {
        return this.introduction;
    };
    Shops.prototype.setImg = function (img) {
        this.img = img;
    };
    Shops.prototype.getImg = function () {
        return this.img;
    };
    return Shops;
}());
module.exports = {
    shopType: ShopType,
    shop: Shops
};
