var flipjs = require('../index')

var empty = {}
var notEmpty = {not: 'empty'}

console.log(flipjs.isEmpty(empty)) // true
console.log(flipjs.isEmpty(notEmpty)) // false
