/* global suite, test */
var statistical = require('../lib/statistical');
var mathTrig = require('../lib/math-trig');
var error = require('../lib/error');
var should = require('should');


suite('Statistical', function() {
  test("AVERAGE", function() {
    statistical.AVERAGE(2, 4, 8, 16).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([2, 4, 8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([2, 4], [8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([
      [2, 4],
      [8, 16]
    ]).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([
      [2, 4],
      [8, 16],
      [true, false]
    ]).should.approximately(7.5, 1e-9);
  });

  test("AVERAGEA", function() {
    statistical.AVERAGEA(2, 4, 8, 16).should.approximately(7.5, 1e-9);
    statistical.AVERAGEA([2, 4, 8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGEA([2, 4], [8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGEA([2, 4], [6, 8], [true, false]).should.approximately(3.5, 1e-9);
    statistical.AVERAGEA([2, 4], [6, 8], [true, false], ['a', 'b']).should.approximately(2.625, 1e-9);
  });

  test("AVERAGEIF", function() {
    statistical.AVERAGEIF([2, 4, 8, 16], '>5').should.equal(12);
    statistical.AVERAGEIF([2, 4, 8, 16], '>5', [1, 2, 3, 4]).should.approximately(3.5, 1e-9);
    statistical.AVERAGEIF([
      [2, 4],
      [8, 16]
    ], '>5', [
      [1, 2],
      [3, 4]
    ]).should.approximately(3.5, 1e-9);
    statistical.AVERAGEIF([2, 4, 'invalid', 16], '>5').should.equal(error.value);
  });

  test("AVERAGEIFS", function() {
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2').should.equal(12);
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 2, 3, 4], '>2').should.equal(12);
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 1, 1, 1], '>2').should.equal(0);
  });

  test("COUNT", function() {
    statistical.COUNT().should.equal(0);
    statistical.COUNT(1, 2, 3, 4).should.equal(4);
    statistical.COUNT([1, 2, 3, 4]).should.equal(4);
    statistical.COUNT([1, 2], [3, 4]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      [3, 4]
    ]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      [3, 2],
      [null, null]
    ]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      ['a', 'b'],
      [null, null]
    ]).should.equal(2);
  });

  test("COUNTA", function() {
    statistical.COUNTA().should.equal(0);
    statistical.COUNTA(1, null, 3, 'a', '', 'c').should.equal(4);
    statistical.COUNTA([1, null, 3, 'a', '', 'c']).should.equal(4);
    statistical.COUNTA([1, null, 3], ['a', '', 'c']).should.equal(4);
    statistical.COUNTA([
      [1, null, 3],
      ['a', '', 'c']
    ]).should.equal(4);
  });

  test("COUNTBLANK", function() {
    statistical.COUNTBLANK().should.equal(0);
    statistical.COUNTBLANK(1, null, 3, 'a', '', 'c').should.equal(2);
    statistical.COUNTBLANK([1, null, 3, 'a', '', 'c']).should.equal(2);
    statistical.COUNTBLANK([1, null, 3], ['a', '', 'c']).should.equal(2);
    statistical.COUNTBLANK([
      [1, null, 3],
      ['a', '', 'c']
    ]).should.equal(2);
  });

  test("COUNTIF", function() {
    statistical.COUNTIF([1, null, 3, 'a', ''], '>1').should.equal(1);
    statistical.COUNTIF([1, null, 'c', 'a', ''], '>1').should.equal(0);
    statistical.COUNTIF([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1').should.equal(2);
    statistical.COUNTIF([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a').should.equal(2);
  });

  test("COUNTIFS", function() {
    statistical.COUNTIFS([1, null, 3, 'a', ''], '>1').should.equal(1);
    statistical.COUNTIFS([1, null, 'c', 'a', ''], '>1').should.equal(0);
    statistical.COUNTIFS([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1').should.equal(2);
    statistical.COUNTIFS([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a').should.equal(2);
    statistical.COUNTIFS([1, null], '1', [2, null], '2').should.equal(1);
    statistical.COUNTIFS([1, null], '1', [null, 2], '2').should.equal(0);
    statistical.COUNTIFS([
      [1],
      [null]
    ], '1', [
      [2],
      [1]
    ], '2').should.equal(1);
  });

  test('COUNTIN', function() {
    statistical.COUNTIN([1, 1, 2, 2, 2], 1).should.equal(2);
    statistical.COUNTIN([1, 1, 2, 2, 2], 2).should.equal(3);
  });

  test('COUNTUNIQUE', function() {
    statistical.COUNTUNIQUE().should.equal(0);
    statistical.COUNTUNIQUE(1, 1, 2, 2, 3, 3).should.equal(3);
    statistical.COUNTUNIQUE([1,1,2,2,3,3]).should.equal(3);
    statistical.COUNTUNIQUE([1,1,2], [2,3,3]).should.equal(3);
    statistical.COUNTUNIQUE([[1,1],[2,5]], [[2,3],[3,4]]).should.equal(5);
  });

  test('FISHER', function() {
    statistical.FISHER(0.75).should.approximately(0.9729550745276566, 1e-9);
    statistical.FISHER('invalid').should.equal(error.value);
  });

  test('FISHERINV', function() {
    statistical.FISHERINV(0.9729550745276566).should.approximately(0.75, 1e-9);
    statistical.FISHERINV('invalid').should.equal(error.value);
  });

  test('FREQUENCY', function() {
    should.deepEqual(statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 95, 88, 97
    ], [
      70, 79, 89
    ]), [1, 2, 4, 2]);
    statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 'invalid', 88, 97
    ], [
      70, 79, 89
    ]).should.equal(error.value);
  });

  test('GROWTH', function() {
    var known_y = [33100, 47300, 69000, 102000, 150000, 220000];
    var known_x = [11, 12, 13, 14, 15, 16];
    var new_x = [11, 12, 13, 14, 15, 16, 17, 18, 19];

    mathTrig.SUM(statistical.GROWTH(known_y, known_x, new_x))
      .should.approximately(mathTrig.SUM([
        32618.203773538437,
        47729.42261474665,
        69841.30085621694,
        102197.07337883314,
        149542.4867400494,
        218821.87621460424,
        320196.7183634903,
        468536.05418408214,
        685597.3889812973
      ]), 1e-6);

    mathTrig.SUM(statistical.GROWTH(known_y))
      .should.approximately(mathTrig.SUM([
        32618.203773539713,
        47729.42261474775,
        69841.30085621744,
        102197.07337883241,
        149542.4867400457,
        218821.8762145953
      ]), 1e-6);

    mathTrig.SUM(statistical.GROWTH(known_y, known_x, new_x, false))
      .should.approximately(mathTrig.SUM([
        9546.01078362295,
        21959.574129266384,
        50515.645421859634,
        116205.8251842928,
        267319.0393588225,
        614938.7837519756,
        1414600.7282884493,
        3254137.2789414385,
        7485793.848705778
      ]), 1e-6);

    statistical.GROWTH(known_y, known_x, 'invalid', false).should.equal(error.value);
    statistical.GROWTH('invalid', known_x).should.equal(error.value);
  });

  test('HARMEAN', function() {
    statistical.HARMEAN([4, 5, 8, 7, 11, 4, 3]).should.approximately(5.028375962061728, 1e-9);
    statistical.HARMEAN([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value);
  });

  test('HYPGEOM.DIST', function() {
    statistical.HYPGEOM.DIST(1, 4, 8, 20, true).should.approximately(0.46542827657378744, 1e-9);
    statistical.HYPGEOM.DIST(1, 4, 8, 20, false).should.approximately(0.3632610939112487, 1e-9);
    statistical.HYPGEOM.DIST(1, 'invalid', 8, 20, false).should.equal(error.value);
  });

  test('LARGE', function() {
    statistical.LARGE([3, 5, 3, 5, 4], 3).should.equal(4);
    statistical.LARGE([3, 5, 3, 'invalid', 4], 3).should.equal(error.value);
  });

  test("MAX", function() {
    statistical.MAX().should.equal(0);
    statistical.MAX([0.1, 0.2], [0.4, 0.8], [true, false]).should.approximately(0.8, 1e-9);
    statistical.MAX([
      [0, 0.1, 0.2],
      [0.4, 0.8, 1],
      [true, false]
    ]).should.equal(1);
  });

  test("MAXA", function() {
    statistical.MAXA().should.equal(0);
    statistical.MAXA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(1);
    statistical.MAXA([
      [0.1, 0.2],
      [0.4, 0.8],
      [true, false]
    ]).should.equal(1);
  });

  test('MEDIAN', function() {
    statistical.MEDIAN(1, 2, 3, 4, 5).should.equal(3);
    statistical.MEDIAN(1, 2, 3, 4, 5, 6).should.approximately(3.5, 1e-9);
  });

  test("MIN", function() {
    statistical.MIN().should.equal(0);
    statistical.MIN([0.1, 0.2], [0.4, 0.8], [true, false]).should.approximately(0.1, 1e-9);
    statistical.MIN([0, 0.1, 0.2], [0.4, 0.8, 1], [true, false]).should.equal(0);
    statistical.MIN([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ]).should.equal(0);
  });

  test("MINA", function() {
    statistical.MINA().should.equal(0);
    statistical.MINA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(0);
    statistical.MINA([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ]).should.equal(0);
  });

  test('MODE.MULT', function() {
    var data = [1, 2, 3, 4, 3, 2, 1, 2, 3, 5, 6, 1];
    var modes = statistical.MODE.MULT(data);
    modes.length.should.equal(3);
    modes.should.containEql(1);
    modes.should.containEql(2);
    modes.should.containEql(3);
    statistical.MODE.MULT([1, 2, 'invalid']).should.equal(error.value);
  });

  test('MODE.SNGL', function() {
    var data = [5.6, 4, 4, 3, 2, 4];
    statistical.MODE.SNGL(data).should.equal(4);
    statistical.MODE.SNGL([1, 2, 'invalid']).should.equal(error.value);
  });

  test("PERCENTILE.EXC", function() {
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.1).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.2).should.equal(1);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.25).should.approximately(1.25, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.3).should.approximately(1.5, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.4).should.equal(2);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.5).should.approximately(2.5, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.6).should.equal(3);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.7).should.approximately(3.5, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.75).should.approximately(3.75, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.8).should.equal(4);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.9).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 1).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 'invalid', 3, 4], 1).should.equal(error.value);
  });

  test("PERCENTILE.INC", function() {
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0).should.equal(1);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.1).should.approximately(1.3, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.2).should.approximately(1.6, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.25).should.approximately(1.75, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.3).should.approximately(1.9, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.4).should.approximately(2.2, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.5).should.approximately(2.5, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.6).should.approximately(2.8, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.7).should.approximately(3.1, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.75).should.approximately(3.25, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.8).should.approximately(3.4, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.9).should.approximately(3.7, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 1).should.equal(4);
    statistical.PERCENTILE.INC([1, 2, 'invalid', 4], 1).should.equal(error.value);
  });

  test("PERCENTRANK.EXC", function() {
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1).should.approximately(0.2, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2).should.approximately(0.4, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3).should.approximately(0.6, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4).should.approximately(0.8, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1.25).should.approximately(0.25, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2.5).should.approximately(0.5, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3.75).should.approximately(0.75, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1, 2).should.approximately(0.2, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2, 2).should.approximately(0.4, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3, 2).should.approximately(0.6, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4, 2).should.approximately(0.8, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 'invalid', 4], 4, 2).should.equal(error.value);
  });

  test("PERCENTRANK.INC", function() {
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1).should.equal(0);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2).should.approximately(0.333, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3).should.approximately(0.666, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 4).should.equal(1);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1.25).should.approximately(0.083, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2.5).should.approximately(0.5, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3.75).should.approximately(0.916, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1, 2).should.equal(0);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2, 2).should.approximately(0.33, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3, 2).should.approximately(0.66, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 4, 2).should.equal(1);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 'invalid', 2).should.equal(error.value);
  });

  test('PERMUT', function() {
    statistical.PERMUT(100, 3).should.equal(970200);
    statistical.PERMUT(100, 'invalid').should.equal(error.value);
  });

  test('PERMUTATIONA', function() {
    statistical.PERMUTATIONA(3, 2).should.equal(9);
    statistical.PERMUTATIONA('invalid', 2).should.equal(error.value);
  });

  test('PHI', function() {
    statistical.PHI(0.75).should.approximately(0.30113743215480443, 1e-9);
    statistical.PHI('invalid').should.equal(error.value);
  });

  test('PROB', function() {
    var x = [0, 1, 2, 3];
    var prob = [0.2, 0.3, 0.1, 0.4];
    statistical.PROB(x, prob, 2).should.approximately(0.1, 1e-9);
    statistical.PROB(x, prob, 1, 3).should.approximately(0.8, 1e-9);
    statistical.PROB(x, prob).should.equal(0);
    x.push('invalid');
    statistical.PROB(x, prob, 1, 3).should.equal(error.value);
  });

  test('QUARTILE.EXC', function() {
    var data = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
    statistical.QUARTILE.EXC(data, 1).should.equal(15);
    statistical.QUARTILE.EXC(data, 2).should.equal(40);
    statistical.QUARTILE.EXC(data, 3).should.equal(43);
    statistical.QUARTILE.EXC(data, 4).should.equal(error.num);
    statistical.QUARTILE.EXC(data, 'invalid').should.equal(error.value);
  });

  test('QUARTILE.INC', function() {
    var data = [1, 2, 4, 7, 8, 9, 10, 12];
    statistical.QUARTILE.INC(data, 1).should.approximately(3.5, 1e-9);
    statistical.QUARTILE.INC(data, 2).should.approximately(7.5, 1e-9);
    statistical.QUARTILE.INC(data, 3).should.approximately(9.25, 1e-9);
    statistical.QUARTILE.INC(data, 4).should.equal(error.num);
    statistical.QUARTILE.INC(data, 'invalid').should.equal(error.value);
  });

  test('RANK.AVG', function() {
    var data = [89, 88, 92, 101, 94, 97, 95];
    statistical.RANK.AVG(94, data).should.equal(4);
    statistical.RANK.AVG(88, data, 1).should.equal(1);
    statistical.RANK.AVG('invalid', data, 1).should.equal(error.value);
  });

  test('RANK.EQ', function() {
    var data = [7, 3.5, 3.5, 1, 2];
    statistical.RANK.EQ(data[0], data, 1).should.equal(5);
    statistical.RANK.EQ(data[4], data).should.equal(4);
    statistical.RANK.EQ(data[1], data, 1).should.equal(3);
    statistical.RANK.EQ('invalid', data, true).should.equal(error.value);
  });

  test('SMALL', function() {
    statistical.SMALL([3, 4, 5, 2, 3, 4, 6, 4, 7], 4).should.equal(4);
    statistical.SMALL([3, 4, 5, 2, 'invalid', 4, 6, 4, 7], 4).should.equal(error.value);
  });

  test('STANDARDIZE', function() {
    statistical.STANDARDIZE(42, 40, 1.5).should.approximately(1.3333333333333333, 1e-9);
    statistical.STANDARDIZE(10, 10, 10).should.equal(0);
    statistical.STANDARDIZE(10, 10, 'invalid').should.equal(error.value);
  });
});
