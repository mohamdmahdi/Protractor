'use strict'; // necessary for es6 output in node

import { browser } from 'protractor';

describe('Library App', () => {
  beforeEach(() => {
    return browser.get('/');
  });

  it('app works', () => {
    expect(true).toBeTruthy();
  });
});
