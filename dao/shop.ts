
const mongoose = require('../dbBase/dbConnect.ts')
const readFile = require('../util/readFile.js')


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
    type: Array,
    introduction: String,
    img: String
}

let pIntroduceSchema = {
    name: String,
    introduction: String
}

let shop_type = mongoose.model('Shop_type', shopTypeSchema);
let shop = mongoose.model('Shop', shopsSchema);
let provideIntroduce = mongoose.model('Provide', pIntroduceSchema);

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
                start = (page as any) * 16;
            query.limit(16)
            query.skip(start)
            query.exec((err: any, res: any) => {
                if (err) {
                    return reject(err)
                }

                return resolve(res)
            })
        })
    }

    public getShopImage(path: String) {
        return new Promise((resolve, reject) => {
            readFile(path).then((res: any) => {
                resolve(res)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    public getProvideIntroduce(name: String) {
        return new Promise((resolve, reject) => {
            provideIntroduce.find({ name: name }, (err: any, res: any) => {
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }
}

module.exports = ShopDao