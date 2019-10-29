

class ShopType {
    private type_1: String = "";
    private type_2: String = "";

    public setType_1(type: String) {
        this.type_1 = type;
    }
    public setType_2(type: String) {
        this.type_2 = type;
    }
    public getType_1() {
        return this.type_1;
    }
    public getType_2() {
        return this.type_2;
    }
}

class Shops {
    private shop_name: String = "";
    private level: Number = 0;
    private distribution_time: Number = 0;
    private shop_fee: Number = 0;
    private provide: String = "";
    private type: String = "";
    private introduction: String = "";
    private img: String = "";

    public setShopName(shopName: String) {
        this.shop_name = shopName;
    }
    public getShopName() {
        return this.shop_name;
    }

    public setLevel(level: Number) {
        this.level = level;
    }
    public getLevel() {
        return this.level;
    }

    public setDistributionTime(distributionTime: Number) {
        this.distribution_time = distributionTime;
    }
    public getDistributionTime() {
        return this.distribution_time;
    }

    public setShopFee(shopFee: Number) {
        this.shop_fee = shopFee;
    }
    public getShopFee() {
        return this.shop_fee;
    }

    public setProvide(provide: String) {
        this.provide = provide;
    }
    public getProvide() {
        return this.provide;
    }

    public setType(type: String) {
        this.type = type;
    }
    public getType() {
        return this.type;
    }

    public setIntroduction(introduction: String) {
        this.introduction = introduction;
    }
    public getIntroducion() {
        return this.introduction;
    }

    public setImg(img: String) {
        this.img = img;
    }
    public getImg() {
        return this.img;
    }
}

module.exports = {
    shopType: ShopType,
    shop: Shops
}