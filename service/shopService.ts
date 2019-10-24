const shopDao = require('../dao/shop')

interface shopImp {
    getShopType(type: Object):any;
}

const shop_dao = new shopDao()

class shopService implements shopImp {
    getShopType(type: Object = {}): any {
        return shop_dao.getShopType(type)
    }
}

module.exports = shopService