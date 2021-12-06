const _ = require('lodash')

const items = [1,2,[3,4,[7,8,5,23]]]
const newItems = _.flattenDeep(items)
console.log(newItems)  
console.log("hello man!")   
 