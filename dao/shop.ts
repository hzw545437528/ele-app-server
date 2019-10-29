
const mongoose = require('../dbBase/dbConnect.ts')


let shopTypeSchema = {
    type_1: String,
    type_2: String
}

let shopsSchema = {
    shopName: String,
    level: Number,
    distributionTime: Number,
    shopFee: Number,
    provide: String,
    type: String,
    introduction: String,
    img: String
}

let shop_type = mongoose.model('Shop_type', shopTypeSchema);
let shop = mongoose.model('Shop', shopsSchema);
class ShopDao {
    public getShopType(obj: Object = {}) {
        return new Promise((resolve, reject) => {
            shop_type.find(obj, (err: any, res: any) => {
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }

    public getShops(type: Object = {}, page: Number = 0) {
        return new Promise((resolve, reject) => {
            let query = shop.find(type),
                start = (page as any) * 4;
            query.limit(4)
            query.skip(start)
            query.exec((err: any, res: any) => {
                if (err) {
                    return reject(err)
                }

                return resolve(res)
            })
        })
    }
}

module.exports = ShopDao