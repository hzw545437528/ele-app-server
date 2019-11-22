const express = require('express')
const bodyParser = require('body-parser')
const server = require('./server')

const router = express.Router()

let jsonParser = bodyParser.json()
let code = "";

router.get('/', (req, resp) => {
    resp.send('hello world')
})

router.get('/getVerifyCode', (req, resp) => {
    code = server.getVerifyCode()
    setTimeout(() => {
        code = ""
    }, 30000)
    resp.send(code)
})

router.post('/login', jsonParser, (req, resp) => {
    if (code) {
        if (req.body.verfiyCode != code) {
            resp.send({
                code: 0,
                msg: '验证码错误！'
            })
        } else {
            resp.send({
                code: 1,
                msg: '登录成功'
            })
        }
    } else {
        resp.send({
            code: -1,
            msg: '请重新获取验证码'
        })
    }
})

router.get('/getShopType', (req, resp) => {
    server.getShopType().then((res) => {
        resp.send(res)
    })
})

router.get('/getShops', (req, resp) => {
    // console.log(req.query);
    let data = req.query
    server.getShops(JSON.parse(data.type), parseFloat(data.page)).then(res => {
        resp.send(res)
    })
})

router.get('/getShopImage', (req, resp) => {
    let path = req.query.path;

    server.getShopImage(path).then(res => {
        // resp.writeHead(200, {
        //     'Content-Type': 'image/png'
        // });
        resp.send(res)
    }).catch(err => {
        resp.send("请求错误")
    })
})

router.get('/getProvideIntroduce', (req, resp) => {
    let name = requ.query.name;
    server.getProvideIntroduce(name).then(res => {
        resp.send(res)
    })
})

router.get('/getOrders', (req, resp) => {
    server.getOrders().then(res => {
        resp.send(res)
    })
})

router.get('/getOrderById', (req, resp) => {
    let orderId = req.query.orderId
    server.getOrderById(orderId).then(res => {
        resp.send(res);
    })
})

router.get('/getShopByName', (req, resp) => {
    let shopName = req.query.shopName
    server.getShopByName(shopName).then(res => {
        resp.send(res)
    })

})

//获取商家商品
router.get('/getShopInfo', (req, resp) => {
    // console.log(req.query);
    server.getShopInfo(req.query.shop_id).then(res => {
        resp.send(res)
    })
})

//根据id获取商家信息
router.get('/getShopById', (req, resp) => {
    // console.log(req.query);
    server.getShopById(req.query.id).then(res => {
        console.log(res);
        resp.send(res)
    })
})

module.exports = router