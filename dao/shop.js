"use strict";
var shopType = require('../model/shop').shopType;
var mongoose = require('../dbBase/dbConnect.ts');
var shopTypeSchema = {
    type_1: String,
    type_2: String
};
var shop_type = mongoose.model('Shop_type', shopTypeSchema);
var ShopDao = /** @class */ (function () {
    function ShopDao() {
    }
    ShopDao.prototype.getShopType = function (obj) {
        if (obj === void 0) { obj = {}; }
        return new Promise(function (resolve, reject) {
            shop_type.find(obj, function (err, res) {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    };
    return ShopDao;
}());
module.exports = ShopDao;
