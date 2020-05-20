'use strict';

const binarySearch = require('../array-binary/array-binary-search.js');

describe('Binary array', () => {
  test('It should return the index of the matching number of the given number', () => {
    expect(binarySearch([10, 20, 30, 40], 30)).toStrictEqual(2);
  });
  test('It should return -1 if no index matching the number', () => {
    expect(binarySearch([10, 20, 30, 40, 50], 1)).toStrictEqual(-1);
  });
});