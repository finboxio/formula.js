var mathTrig = require('./math-trig')
var statistical = require('./statistical')
var dateTime = require('./date-time')

function set (fn, root) {
  if (root) {
    for (var i in root) {
      fn[i] = root[i]
    }
  }
  return fn
}

exports.MODE = set(statistical.MODE.SNGL, statistical.MODE)
exports.MODEMULT = statistical.MODE.MULT
exports.MODESNGL = statistical.MODE.SNGL
exports.PERCENTILE = set(statistical.PERCENTILE.EXC, statistical.PERCENTILE)
exports.PERCENTILEEXC = statistical.PERCENTILE.EXC
exports.PERCENTILEINC = statistical.PERCENTILE.INC
exports.PERCENTRANK = set(statistical.PERCENTRANK.INC, statistical.PERCENTRANK)
exports.QUARTILE = set(statistical.QUARTILE.INC, statistical.QUARTILE)
exports.QUARTILEEXC = statistical.QUARTILE.EXC
exports.QUARTILEINC = statistical.QUARTILE.INC
exports.RANK = set(statistical.RANK.EQ, statistical.RANK)
exports.WORKDAYINTL = dateTime.WORKDAY.INTL
