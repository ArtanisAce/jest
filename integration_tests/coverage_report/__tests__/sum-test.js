/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

jest.unmock('../sum');
jest.mock('../sum_dependency.js'); // call mock explicitly

const sum = require('../sum');

describe('sum', () => {
  it('adds numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
