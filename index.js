requirejs.config({
  paths: {
    'jstat': 'lib/jstat.js'
  },
  shim: {
    jstat: {
      exports: ['j$', 'jStat'],
      init: function () {
        return {
          j$: j$,
          jStat: jStat
        };
      }
    }
  }
})

var categories = [
  require('./lib/compatibility'),
  require('./lib/logical'),
  require('./lib/math-trig'),
  require('./lib/text'),
  require('./lib/date-time'),
  require('./lib/financial'),
  require('./lib/information'),
  require('./lib/lookup-reference'),
  require('./lib/statistical'),
  require('./lib/miscellaneous')
];

for (var c in categories) {
  var category = categories[c];
  for (var f in category) {
    exports[f] = exports[f] || category[f];
  }
}
