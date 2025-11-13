const utils = require('./utils');

describe('Utility Module Testing', () => {
  // 1. Exact equality
  describe('Exact equality', () => {
    test('toBe - passes', () => {
      expect(utils.sum(2, 2)).toBe(4);
    });

    test('toBe - fails', () => {
      expect(utils.sum(2, 2)).toBe(5); // FAIL
    });

    test('toEqual - passes', () => {
      const mockDate = new Date('2024-01-01');
      const user = { name: 'Alice', age: 30, createdAt: mockDate };
      const result = { name: 'Alice', age: 30, createdAt: mockDate };
      expect(result).toEqual(user);
    });

    test('toEqual - fails', () => {
      const user = utils.createUser('Bob', 20);
      expect(user).toEqual({ name: 'Bob', age: 20 }); // FAIL (missing createdAt)
    });

    test('toStrictEqual - passes', () => {
      expect([{ a: 1 }]).toStrictEqual([{ a: 1 }]);
    });

    test('toStrictEqual - fails', () => {
      const arr1 = [1, 2, , 4]; // sparse array
      const arr2 = [1, 2, undefined, 4]; // explicit undefined
      expect(arr1).toStrictEqual(arr2); // FAIL
    });
  });

  // === 2. Negation (not) ===
  describe('Negation (.not)', () => {
    test('sum(1,1) not toBe 3 - passes', () => {
      expect(utils.sum(1, 1)).not.toBe(3);
    });

    test('sum(1,1) not toBe 2 - fails', () => {
      expect(utils.sum(1, 1)).not.toBe(2); // FAIL
    });

    test('string not.toMatch - passes', () => {
      expect('hello world').not.toMatch(/bye/);
    });

    test('string not.toMatch - fails', () => {
      expect('hello world').not.toMatch(/world/); // FAIL
    });
  });

  //  3. Truthiness matchers 
  describe('Truthiness', () => {
    test('toBeNull - passes', () => {
      const value = null;
      expect(value).toBeNull();
    });

    test('toBeNull - fails', () => {
      const value = undefined;
      expect(value).toBeNull(); // FAIL
    });

    test('toBeUndefined - passes', () => {
      let value;
      expect(value).toBeUndefined();
    });

    test('toBeUndefined - fails', () => {
      let value = 10;
      expect(value).toBeUndefined(); // FAIL
    });

    test('toBeDefined - passes', () => {
      const user = utils.createUser('Alice', 25);
      expect(user.name).toBeDefined();
    });

    test('toBeDefined - fails', () => {
      const obj = {};
      expect(obj.age).toBeDefined(); // FAIL
    });

    test('toBeTruthy - passes', () => {
      expect(utils.findInArray([1, 2, 3], 2)).toBeTruthy();
    });

    test('toBeTruthy - fails', () => {
      expect(utils.findInArray([1, 2, 3], 5)).toBeTruthy(); // FAIL
    });

    test('toBeFalsy - passes', () => {
      expect(utils.findInArray([1, 2, 3], 5)).toBeFalsy();
    });

    test('toBeFalsy - fails', () => {
      expect(utils.findInArray([1, 2, 3], 2)).toBeFalsy(); // FAIL
    });
  });

  //  4. Number matchers
  describe('Number matchers', () => {
    test('toBeGreaterThan - passes', () => {
      expect(utils.sum(3, 2)).toBeGreaterThan(4);
    });

    test('toBeGreaterThan - fails', () => {
      expect(utils.sum(1, 2)).toBeGreaterThan(5); // FAIL
    });

    test('toBeLessThanOrEqual - passes', () => {
      expect(utils.approximateDivision(10, 2)).toBeLessThanOrEqual(5);
    });

    test('toBeLessThanOrEqual - fails', () => {
      expect(utils.approximateDivision(12, 2)).toBeLessThanOrEqual(5); // FAIL
    });

    test('toBeCloseTo - passes', () => {
      expect(utils.approximateDivision(0.3, 0.1)).toBeCloseTo(3.0);
    });

    test('toBeCloseTo - fails', () => {
      expect(utils.approximateDivision(0.3, 0.1)).toBeCloseTo(4.0); // FAIL
    });
  });

  // 5. String matchers 
  describe('String matchers', () => {
    test('toMatch - passes', () => {
      const user = utils.createUser('Charlie', 22);
      expect(user.name).toMatch(/Char/);
    });

    test('toMatch - fails', () => {
      const user = utils.createUser('Charlie', 22);
      expect(user.name).toMatch(/Bob/); // FAIL
    });
  });

  //6. Arrays / Iterables
  describe('Iterable matchers', () => {
    test('toContain - passes', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      expect(fruits).toContain('banana');
    });

    test('toContain - fails', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      expect(fruits).toContain('mango'); // FAIL
    });

    test('Set toContain - passes', () => {
      const set = new Set([1, 2, 3]);
      expect(set).toContain(2);
    });

    test('Set toContain - fails', () => {
      const set = new Set([1, 2, 3]);
      expect(set).toContain(5); // FAIL
    });
  });

  //7. Exceptions
  describe('Exception matchers', () => {
    test('toThrow - passes', () => {
      expect(() => utils.parseJSON()).toThrow('No JSON string provided');
    });

    test('toThrow - fails', () => {
      expect(() => utils.parseJSON('{"valid": true}')).toThrow(); // FAIL (does not throw)
    });
  });
});
