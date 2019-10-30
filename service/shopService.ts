const shopDao = require('../dao/shop')

interface shopImp {
    getShopType(type: Object): any;
    getShops(type?: Object, page?: Number): any;
    getShopImage(path: String): any;
    getProvideIntroduce(name: String): any;
}

const shop_dao = new shopDao()

class shopService implements shopImp {
    getShopType(type: Object = {}): any {
        return shop_dao.getShopType(type)
    }
    getShops(type: Object = {}, page: Number = 0): any {
        return shop_dao.getShops(type, page)
    }
    getShopImage(path: String) {
        return shop_dao.getShopImage(path)
    }
    getProvideIntroduce(name: String) {
        return shopDao.getProvideIntroduce(name)
    }
}

module.exports = shopService