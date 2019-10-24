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
module.exports = {
    shopType: ShopType
};
