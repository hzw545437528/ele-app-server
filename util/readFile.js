const fs = require("fs");


const readFile = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                return reject(err)
            }
            return resolve(data)
        })
    })
}

module.exports = readFile