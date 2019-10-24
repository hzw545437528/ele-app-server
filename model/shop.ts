

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

module.exports = {
    shopType: ShopType
}