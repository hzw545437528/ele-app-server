const fs = require("fs");
const path = require("path");


const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        // console.log(path.join(__dirname, '../', '/images/') + fileName);
        fs.readFile(path.join(__dirname, '../', '/images/') + fileName, (err, data) => {
            if (err) {
                return reject(err)
            }
            return resolve(data)
        })
    })
}

module.exports = readFile