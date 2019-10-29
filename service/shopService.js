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
    return shopService;
}());
module.exports = shopService;
