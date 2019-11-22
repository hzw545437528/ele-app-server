"use strict";
var shopDao = require('../dao/shop');
var shop_dao = new shopDao();
var shopService = /** @class */ (function () {
    function shopService() {
    }
    shopService.prototype.getShopType = function (type) {
        if (type === void 0) { type = {}; }
        return shop_dao.getShopType(type);
    };
    shopService.prototype.getShops = function (type, page) {
        if (type === void 0) { type = {}; }
        if (page === void 0) { page = 0; }
        return shop_dao.getShops(type, page);
    };
    shopService.prototype.getShopImage = function (path) {
        return shop_dao.getShopImage(path);
    };
    shopService.prototype.getProvideIntroduce = function (name) {
        return shopDao.getProvideIntroduce(name);
    };
    shopService.prototype.getShopByName = function (shopName) {
        return shop_dao.getShopByName(shopName);
    };
    shopService.prototype.getShopInfo = function (shopId) {
        return shop_dao.getShopInfo(shopId);
    };
    shopService.prototype.getShopById = function (id) {
        return shop_dao.getShopById(id);
    };
    return shopService;
}());
module.exports = shopService;
