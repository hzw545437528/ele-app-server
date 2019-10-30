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

module.exports = router