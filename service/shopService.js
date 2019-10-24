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
    return shopService;
}());
module.exports = shopService;
