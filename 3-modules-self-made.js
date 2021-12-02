//Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const itemObj = require('./6-alternate-exports')
require('./7-function-export')
sayHi(names.john)
sayHi(names.peter)
console.log(itemObj)
console.log(module.exports) 
