const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})

//console.log(window);  // added "jest": {"testEnvironment": "node"} to package.json  -- should log 'Reference error' undefined during test