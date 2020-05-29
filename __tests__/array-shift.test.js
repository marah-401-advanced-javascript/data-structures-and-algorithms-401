'use strict';

const insertShiftArray = require('../challenges/array-shift/array-shift.js');

describe('Shift array', () => {
  test('It should add the passed value at the middle index of the passed even array', () => {
    expect(insertShiftArray([10, 20, 30, 40], 1)).toStrictEqual([10, 20, 1, 30, 40]);
  });
  test('It should add the passed value at the middle(up) index of the passed odd array', () => {
    expect(insertShiftArray([10, 20, 30, 40, 50], 1)).toStrictEqual([10, 20, 30, 1, 40, 50]);
  });
});