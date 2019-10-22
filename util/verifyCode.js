//生成随机验证码
const verifyCode = () => {
    let code = ""
    for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random(0, 1) * 10)
    }
    return code
}

module.exports = verifyCode