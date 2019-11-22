"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('../dbBase/dbConnect.ts');
var readFile = require('../util/readFile.js');
var shopSchema = require('../schema/shopSchema');
var objectId = mongoose.Types.ObjectId;
var shopTypeSchema = {
    type_1: String,
    type_2: String
};
var shopsSchema = {
    shopName: String,
    level: Number,
    distributionTime: Number,
    shopFee: Number,
    provide: String,
    type: Array,
    introduction: String,
    img: String
};
var pIntroduceSchema = {
    name: String,
    introduction: String
};
var shopInfoSchema = shopSchema.shopInfoSchema;
var shop_type = mongoose.model('Shop_type', shopTypeSchema);
var shop = mongoose.model('Shop', shopsSchema);
var provideIntroduce = mongoose.model('Provide', pIntroduceSchema);
var shopInfoModel = mongoose.model('Shop_info', shopInfoSchema);
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
    ShopDao.prototype.getShops = function (type, page) {
        if (type === void 0) { type = {}; }
        if (page === void 0) { page = 0; }
        return new Promise(function (resolve, reject) {
            var query = shop.find(type), start = page * 16;
            query.limit(16);
            query.skip(start);
            query.exec(function (err, res) {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    };
    ShopDao.prototype.getShopImage = function (path) {
        return new Promise(function (resolve, reject) {
            readFile(path).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    ShopDao.prototype.getProvideIntroduce = function (name) {
        return new Promise(function (resolve, reject) {
            provideIntroduce.find({ name: name }, function (err, res) {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    };
    ShopDao.prototype.getShopByName = function (shopName) {
        return new Promise(function (resolve, reject) {
            shop.find({ shop_name: shopName }, function (err, res) {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    };
    ShopDao.prototype.getShopInfo = function (shopId) {
        return shopInfoModel.findOne({ _id: '5dc37440ae033f093888f23d' });
    };
    ShopDao.prototype.getShopById = function (id) {
        return shop.findOne({ '_id': id });
    };
    return ShopDao;
}());
module.exports = ShopDao;
