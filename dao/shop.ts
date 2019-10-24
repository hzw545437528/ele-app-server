const { shopType } = require('../model/shop')
const mongoose = require('../dbBase/dbConnect.ts')

let shopTypeSchema = {
    type_1: String,
    type_2: String
}
let shop_type = mongoose.model('Shop_type', shopTypeSchema)
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
}

module.exports = ShopDao