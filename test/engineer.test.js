'use strict';

const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    let engineer;
    beforeEach(() => {
    engineer = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser');
    });


test('Can set GitHUb account via constructor', () => {
  const testValue = 'GitHubUser';
  const engineer = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(engineer.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = 'Engineer';
  const engineer = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser');
  expect(engineer.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGitHub()', () => {
  const testValue = 'GitHubUser';
  const engineer = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(engineer.getGitHub()).toBe(testValue);
});
});