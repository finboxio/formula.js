var mathTrig = require('./math-trig');
var text = require('./text');
var utils = require('./utils');
var error = require('./error');
var misc = require('./miscellaneous');

var SQRT2PI = 2.5066282746310002;

exports.AVERAGE = function() {
  var flat = utils.flatten(arguments).filter(remove_strings);
  var range = utils.numbers(flat);
  var n = range.length;
  var sum = 0;
  var count = 0;
  for (var i = 0; i < n; i++) {
    sum += range[i];
    count += 1;
  }
  return sum / count;
};

exports.AVERAGEA = function() {
  var range = utils.flatten(arguments)
  var n = range.length;
  var sum = 0;
  var count = 0;
  for (var i = 0; i < n; i++) {
    var el = range[i];
    if (typeof el === 'number') {
      sum += el;
    }
    if (el === true) {
      sum++;
    }
    if (el !== null) {
      count++;
    }
  }
  return sum / count;
};

exports.AVERAGEIF = function(range, criteria, average_range) {
  average_range = average_range || range;
  criteria = utils.normalizeCriteria(criteria);
  range = utils.flatten(range);
  average_range = utils.parseNumberArray(utils.flatten(average_range));
  if (average_range instanceof Error) {
    return average_range;
  }
  var average_count = 0;
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    if (eval(range[i] + criteria)) {
      result += average_range[i];
      average_count++;
    }
  }
  return result / average_count;
};

exports.AVERAGEIFS = function() {
  // Does not work with multi dimensional ranges yet!
  //http://office.microsoft.com/en-001/excel-help/averageifs-function-HA010047493.aspx
  var args = utils.argsToArray(arguments);
  var criteria = (args.length - 1) / 2;
  var range = utils.flatten(args[0]);
  var count = 0;
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    var condition = '';
    for (var j = 0; j < criteria; j++) {
      condition += args[2 * j + 1][i] + utils.normalizeCriteria(args[2 * j + 2]);
      if (j !== criteria - 1) {
        condition += '&&';
      }
    }
    if (eval(condition)) {
      result += range[i];
      count++;
    }
  }

  var average = result / count;
  if (isNaN(average)) {
    return 0;
  } else {
    return average;
  }
};

exports.COUNT = function() {
  return utils.numbers(utils.flatten(arguments)).length;
};

exports.COUNTA = function() {
  var range = utils.flatten(arguments);
  return range.length - exports.COUNTBLANK(range);
};

exports.COUNTIN = function (range, value) {
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    if (range[i] === value) {
      result++;
    }
  }
  return result;
};


exports.COUNTBLANK = function() {
  var range = utils.flatten(arguments);
  var blanks = 0;
  var element;
  for (var i = 0; i < range.length; i++) {
    element = range[i];
    if (element === null || element === '') {
      blanks++;
    }
  }
  return blanks;
};

exports.COUNTIF = function(range, criteria) {
  range = utils.flatten(range);
  criteria = utils.normalizeCriteria(criteria);
  var matches = 0;
  for (var i = 0; i < range.length; i++) {
    if (typeof range[i] !== 'string') {
      if (eval(range[i] + criteria)) {
        matches++;
      }
    } else {
      if (eval('"' + range[i] + '"' + criteria)) {
        matches++;
      }
    }
  }
  return matches;
};

exports.COUNTIFS = function() {
  var args = utils.argsToArray(arguments);
  var results = new Array(utils.flatten(args[0]).length);
  for (var i = 0; i < results.length; i++) {
    results[i] = true;
  }
  for (i = 0; i < args.length; i += 2) {
    var range = utils.flatten(args[i]);
    var criteria = utils.normalizeCriteria(args[i + 1]);
    for (var j = 0; j < range.length; j++) {
      if (typeof range[j] !== 'string') {
        results[j] = results[j] && eval(range[j] + criteria);
      } else {
        results[j] = results[j] && eval('"' + range[j] + '"' + criteria);
      }
    }
  }
  var result = 0;
  for (i = 0; i < results.length; i++) {
    if (results[i]) {
      result++;
    }
  }
  return result;
};

exports.COUNTUNIQUE = function () {
  return misc.UNIQUE.apply(null, utils.flatten(arguments)).length;
};

exports.FISHER = function(x) {
  x = utils.parseNumber(x);
  if (x instanceof Error) {
    return x;
  }
  return Math.log((1 + x) / (1 - x)) / 2;
};

exports.FISHERINV = function(y) {
  y = utils.parseNumber(y);
  if (y instanceof Error) {
    return y;
  }
  var e2y = Math.exp(2 * y);
  return (e2y - 1) / (e2y + 1);
};

exports.FREQUENCY = function(data, bins) {
  data = utils.parseNumberArray(utils.flatten(data));
  bins = utils.parseNumberArray(utils.flatten(bins));
  if (utils.anyIsError(data, bins)) {
    return error.value;
  }
  var n = data.length;
  var b = bins.length;
  var r = [];
  for (var i = 0; i <= b; i++) {
    r[i] = 0;
    for (var j = 0; j < n; j++) {
      if (i === 0) {
        if (data[j] <= bins[0]) {
          r[0] += 1;
        }
      } else if (i < b) {
        if (data[j] > bins[i - 1] && data[j] <= bins[i]) {
          r[i] += 1;
        }
      } else if (i === b) {
        if (data[j] > bins[b - 1]) {
          r[b] += 1;
        }
      }
    }
  }
  return r;
};

exports.GROWTH = function(known_y, known_x, new_x, use_const) {
  // Credits: Ilmari Karonen (http://stackoverflow.com/questions/14161990/how-to-implement-growth-function-in-javascript)

  known_y = utils.parseNumberArray(known_y);
  if (known_y instanceof Error) {
    return known_y;
  }

  // Default values for optional parameters:
  var i;
  if (known_x === undefined) {
    known_x = [];
    for (i = 1; i <= known_y.length; i++) {
      known_x.push(i);
    }
  }
  if (new_x === undefined) {
    new_x = [];
    for (i = 1; i <= known_y.length; i++) {
      new_x.push(i);
    }
  }

  known_x = utils.parseNumberArray(known_x);
  new_x = utils.parseNumberArray(new_x);
  if (utils.anyIsError(known_x, new_x)) {
    return error.value;
  }


  if (use_const === undefined) {
    use_const = true;
  }

  // Calculate sums over the data:
  var n = known_y.length;
  var avg_x = 0;
  var avg_y = 0;
  var avg_xy = 0;
  var avg_xx = 0;
  for (i = 0; i < n; i++) {
    var x = known_x[i];
    var y = Math.log(known_y[i]);
    avg_x += x;
    avg_y += y;
    avg_xy += x * y;
    avg_xx += x * x;
  }
  avg_x /= n;
  avg_y /= n;
  avg_xy /= n;
  avg_xx /= n;

  // Compute linear regression coefficients:
  var beta;
  var alpha;
  if (use_const) {
    beta = (avg_xy - avg_x * avg_y) / (avg_xx - avg_x * avg_x);
    alpha = avg_y - beta * avg_x;
  } else {
    beta = avg_xy / avg_xx;
    alpha = 0;
  }

  // Compute and return result array:
  var new_y = [];
  for (i = 0; i < new_x.length; i++) {
    new_y.push(Math.exp(alpha + beta * new_x[i]));
  }
  return new_y;
};

exports.HARMEAN = function() {
  var range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  var n = range.length;
  var den = 0;
  for (var i = 0; i < n; i++) {
    den += 1 / range[i];
  }
  return n / den;
};

exports.HYPGEOM = {};

exports.HYPGEOM.DIST = function(x, n, M, N, cumulative) {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  M = utils.parseNumber(M);
  N = utils.parseNumber(N);
  if (utils.anyIsError(x, n, M, N)) {
    return error.value;
  }

  function pdf(x, n, M, N) {
    return mathTrig.COMBIN(M, x) * mathTrig.COMBIN(N - M, n - x) / mathTrig.COMBIN(N, n);
  }

  function cdf(x, n, M, N) {
    var result = 0;
    for (var i = 0; i <= x; i++) {
      result += pdf(i, n, M, N);
    }
    return result;
  }

  return (cumulative) ? cdf(x, n, M, N) : pdf(x, n, M, N);
};

exports.LARGE = function(range, k) {
  range = utils.parseNumberArray(utils.flatten(range));
  k = utils.parseNumber(k);
  if (utils.anyIsError(range, k)) {
    return range;
  }
  return range.sort(function(a, b) {
    return b - a;
  })[k - 1];
};

exports.MAX = function() {
  var flat = utils.flatten(arguments).filter(remove_strings);
  var range = utils.numbers(flat);
  return (range.length === 0) ? 0 : Math.max.apply(Math, range);
};

exports.MAXA = function() {
  var range = utils.arrayValuesToNumbers(utils.flatten(arguments));
  return (range.length === 0) ? 0 : Math.max.apply(Math, range);
};

exports.MEDIAN = function() {
  var flat = utils.flatten(arguments).filter(remove_strings);
  var range = utils.arrayValuesToNumbers(flat);
  return median(range);
};

exports.MIN = function() {
  var flat = utils.flatten(arguments).filter(remove_strings);
  var range = utils.numbers(flat);
  return (range.length === 0) ? 0 : Math.min.apply(Math, range);
};

exports.MINA = function() {
  var range = utils.arrayValuesToNumbers(utils.flatten(arguments));
  return (range.length === 0) ? 0 : Math.min.apply(Math, range);
};

exports.MODE = {};

exports.MODE.MULT = function() {
  // Credits: Roönaän
  var range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  var n = range.length;
  var count = {};
  var maxItems = [];
  var max = 0;
  var currentItem;

  for (var i = 0; i < n; i++) {
    currentItem = range[i];
    count[currentItem] = count[currentItem] ? count[currentItem] + 1 : 1;
    if (count[currentItem] > max) {
      max = count[currentItem];
      maxItems = [];
    }
    if (count[currentItem] === max) {
      maxItems[maxItems.length] = currentItem;
    }
  }
  return maxItems;
};

exports.MODE.SNGL = function() {
  var range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  return exports.MODE.MULT(range).sort(function(a, b) {
    return a - b;
  })[0];
};

exports.PERCENTILE = {};

exports.PERCENTILE.EXC = function(array, k) {
  array = utils.parseNumberArray(utils.flatten(array));
  k = utils.parseNumber(k);
  if (utils.anyIsError(array, k)) {
    return error.value;
  }
  array = array.sort(function(a, b) {
    {
      return a - b;
    }
  });
  var n = array.length;
  if (k < 1 / (n + 1) || k > 1 - 1 / (n + 1)) {
    return error.num;
  }
  var l = k * (n + 1) - 1;
  var fl = Math.floor(l);
  return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
};

exports.PERCENTILE.INC = function(array, k) {
  array = utils.parseNumberArray(utils.flatten(array));
  k = utils.parseNumber(k);
  if (utils.anyIsError(array, k)) {
    return error.value;
  }
  array = array.sort(function(a, b) {
    return a - b;
  });
  var n = array.length;
  var l = k * (n - 1);
  var fl = Math.floor(l);
  return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
};

exports.PERCENTRANK = {};

exports.PERCENTRANK.EXC = function(array, x, significance) {
  significance = (significance === undefined) ? 3 : significance;
  array = utils.parseNumberArray(utils.flatten(array));
  x = utils.parseNumber(x);
  significance = utils.parseNumber(significance);
  if (utils.anyIsError(array, x, significance)) {
    return error.value;
  }
  array = array.sort(function(a, b) {
    return a - b;
  });
  var uniques = misc.UNIQUE.apply(null, array);
  var n = array.length;
  var m = uniques.length;
  var power = Math.pow(10, significance);
  var result = 0;
  var match = false;
  var i = 0;
  while (!match && i < m) {
    if (x === uniques[i]) {
      result = (array.indexOf(uniques[i]) + 1) / (n + 1);
      match = true;
    } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
      result = (array.indexOf(uniques[i]) + 1 + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n + 1);
      match = true;
    }
    i++;
  }
  return Math.floor(result * power) / power;
};

exports.PERCENTRANK.INC = function(array, x, significance) {
  significance = (significance === undefined) ? 3 : significance;
  array = utils.parseNumberArray(utils.flatten(array));
  x = utils.parseNumber(x);
  significance = utils.parseNumber(significance);
  if (utils.anyIsError(array, x, significance)) {
    return error.value;
  }
  array = array.sort(function(a, b) {
    return a - b;
  });
  var uniques = misc.UNIQUE.apply(null, array);
  var n = array.length;
  var m = uniques.length;
  var power = Math.pow(10, significance);
  var result = 0;
  var match = false;
  var i = 0;
  while (!match && i < m) {
    if (x === uniques[i]) {
      result = array.indexOf(uniques[i]) / (n - 1);
      match = true;
    } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
      result = (array.indexOf(uniques[i]) + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n - 1);
      match = true;
    }
    i++;
  }
  return Math.floor(result * power) / power;
};

exports.PERMUT = function(number, number_chosen) {
  number = utils.parseNumber(number);
  number_chosen = utils.parseNumber(number_chosen);
  if (utils.anyIsError(number, number_chosen)) {
    return error.value;
  }
  return mathTrig.FACT(number) / mathTrig.FACT(number - number_chosen);
};

exports.PERMUTATIONA = function(number, number_chosen) {
  number = utils.parseNumber(number);
  number_chosen = utils.parseNumber(number_chosen);
  if (utils.anyIsError(number, number_chosen)) {
    return error.value;
  }
  return Math.pow(number, number_chosen);
};

exports.PHI = function(x) {
  x = utils.parseNumber(x);
  if (x instanceof Error) {
    return error.value;
  }
  return Math.exp(-0.5 * x * x) / SQRT2PI;
};

exports.PROB = function(range, probability, lower, upper) {
  if (lower === undefined) {
    return 0;
  }
  upper = (upper === undefined) ? lower : upper;

  range = utils.parseNumberArray(utils.flatten(range));
  probability = utils.parseNumberArray(utils.flatten(probability));
  lower = utils.parseNumber(lower);
  upper = utils.parseNumber(upper);
  if (utils.anyIsError(range, probability, lower, upper)) {
    return error.value;
  }

  if (lower === upper) {
    return (range.indexOf(lower) >= 0) ? probability[range.indexOf(lower)] : 0;
  }

  var sorted = range.sort(function(a, b) {
    return a - b;
  });
  var n = sorted.length;
  var result = 0;
  for (var i = 0; i < n; i++) {
    if (sorted[i] >= lower && sorted[i] <= upper) {
      result += probability[range.indexOf(sorted[i])];
    }
  }
  return result;
};

exports.QUARTILE = {};

exports.QUARTILE.EXC = function(range, quart) {
  range = utils.parseNumberArray(utils.flatten(range));
  quart = utils.parseNumber(quart);
  if (utils.anyIsError(range, quart)) {
    return error.value;
  }
  switch (quart) {
    case 1:
      return exports.PERCENTILE.EXC(range, 0.25);
    case 2:
      return exports.PERCENTILE.EXC(range, 0.5);
    case 3:
      return exports.PERCENTILE.EXC(range, 0.75);
    default:
      return error.num;
  }
};

exports.QUARTILE.INC = function(range, quart) {
  range = utils.parseNumberArray(utils.flatten(range));
  quart = utils.parseNumber(quart);
  if (utils.anyIsError(range, quart)) {
    return error.value;
  }
  switch (quart) {
    case 1:
      return exports.PERCENTILE.INC(range, 0.25);
    case 2:
      return exports.PERCENTILE.INC(range, 0.5);
    case 3:
      return exports.PERCENTILE.INC(range, 0.75);
    default:
      return error.num;
  }
};

exports.RANK = {};

exports.RANK.AVG = function(number, range, order) {
  number = utils.parseNumber(number);
  range = utils.parseNumberArray(utils.flatten(range));
  if (utils.anyIsError(number, range)) {
    return error.value;
  }
  range = utils.flatten(range);
  order = order || false;
  var sort = (order) ? function(a, b) {
    return a - b;
  } : function(a, b) {
    return b - a;
  };
  range = range.sort(sort);

  var length = range.length;
  var count = 0;
  for (var i = 0; i < length; i++) {
    if (range[i] === number) {
      count++;
    }
  }

  return (count > 1) ? (2 * range.indexOf(number) + count + 1) / 2 : range.indexOf(number) + 1;
};

exports.RANK.EQ = function(number, range, order) {
  number = utils.parseNumber(number);
  range = utils.parseNumberArray(utils.flatten(range));
  if (utils.anyIsError(number, range)) {
    return error.value;
  }
  order = order || false;
  var sort = (order) ? function(a, b) {
    return a - b;
  } : function(a, b) {
    return b - a;
  };
  range = range.sort(sort);
  return range.indexOf(number) + 1;
};

exports.SMALL = function(range, k) {
  range = utils.parseNumberArray(utils.flatten(range));
  k = utils.parseNumber(k);
  if (utils.anyIsError(range, k)) {
    return range;
  }
  return range.sort(function(a, b) {
    return a - b;
  })[k - 1];
};

exports.STANDARDIZE = function(x, mean, sd) {
  x = utils.parseNumber(x);
  mean = utils.parseNumber(mean);
  sd = utils.parseNumber(sd);
  if (utils.anyIsError(x, mean, sd)) {
    return error.value;
  }
  return (x - mean) / sd;
};

function median (values) {
  if (!Array.isArray(values)) {
    throw new TypeError('You need to pass an Array not ' + typeof values )
  }

  if (values.length == 1) {
    return values[0]
  }

  values.sort(sortAsc)

  var half = Math.floor(values.length / 2)
  if (values.length % 2)
    return values[half]
  else
    return (values[half - 1] + values[half]) / 2
}

function remove_strings (n) {
  return !(typeof n === 'string')
}

function sortAsc (a, b) {
  return a - b
}
