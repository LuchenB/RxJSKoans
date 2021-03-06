var Rx = require('rx'),
    Observable = Rx.Observable;

QUnit.module('Mapping');

var __ = 'Fill in the blank';

test('flatMap can be a cartesian product', function () {
  var results = [];
  Observable.range(1, 3)
    .flatMap(function (x, i) {
      return Observable.range(x, i);//TODO: Understand what's happening here
    })
    .subscribe(results.push.bind(results));

  equal('234', results.join(''));
});

test('flatMapLatest only gets us the latest value', function () {
  var results = [];
  Observable.range(1, 3)
    .flatMapLatest(function (x) {
      return Observable.range(x, x);
    })
    .subscribe(results.push.bind(results));

  equal('12345', results.join(''));
});
