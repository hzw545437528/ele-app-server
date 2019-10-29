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
    console.log(req.query);
    let data = req.query
    server.getShops(JSON.parse(data.type), parseFloat(data.page)).then(res => {
        resp.send(res)
    })
})

module.exports = router