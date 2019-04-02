/* eslint-disable no-undef */
const Util = require('./math');

describe('Factorial', function () {

  test.each([
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
  ])(
    'Factorial %i equals to %i',
    (n, expected) => {
      expect(Util.factorial(n)).toBe(expected);
    },
  );

  test('Factorial of negative integers throws exception', () => {
    expect(() => { Util.factorial(-10) }).toThrow();
  });

  test('Factorial of non integers throws exception', () => {
    expect(() => { Util.factorial("SDFSDFSDFSDFSDFSD") }).toThrow();
  });

  test('Factorial of non integers throws exception', () => {
    expect(() => { Util.factorial(10000) }).toThrow();
  });

});

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
describe('isPrime', function () {

  test('Test prime de 1 => false', () => {
    expect(Util.isPrime(1)).toBe(false)
  });
  test('Test prime de 0 => false', () => {
    expect(Util.isPrime(0)).toBe(false)
  });
  test('Test prime < 0 => throw exception', () => {
    expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
  });

  test.each([
    [2, true],
    [5, true],
    [17, true],
    [18, false],
    [53, true],
    [55, false],
  ])(
    'isPrime %i equals to %i',
    (n, expected) => {
      expect(Util.isPrime(n)).toBe(expected);
    }
  );
});
/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
describe('sumPrime', function () {
  test('Test prime de 1 => false', () => {
    expect(Util.sumPrime(1)).toBe(0)
  });
  test('Test prime < 0 => throw exception', () => {
    expect(() => { Util.sumPrime(-10) }).toThrow('Unable to compute sumPrime for n < 0');
  });
  test('Test prime > 100 000 => throw exception', () => {
    expect(() => { Util.sumPrime(500000) }).toThrow('Unable to compute sumPrime for n > 100 000');
  });
  test.each([
    [2, 2],
    [5, 10],
    [8, 17],
    [6, 10],
  ])(
    'sumPrime %i equals to %i',
    (n, expected) => {
      expect(Util.sumPrime(n)).toBe(expected);
    }
  );
});

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
describe('fizzBuzz', function () {
  test('Test fizz de 1 => false', () => {
    expect(Util.fizzBuzz(1)).toEqual([1]);
  });
  test('Test fizz deBuzz 1 => false', () => {
    expect(Util.fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
  });

  test('Test fizz de 1 => false', () => {
    expect(Util.fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
  });
  test('Test prime > 100 000 => throw exception', () => {
    expect(() => { Util.sumPrime(500000) }).toThrow('Unable to compute sumPrime for n > 100 000');
  });
  test.each([
    [2, 2],
    [5, 10],
    [8, 17],
    [6, 10],
  ])(
    'sumPrime %i equals to %i',
    (n, expected) => {
      expect(Util.sumPrime(n)).toBe(expected);
    }
  );
});

describe('cipher', function () {
  test('Test cipher de hello => false', () => {
    expect(Util.cipher("hello")).toEqual("ifmmp");
  });
  test('Test cipher de hello => false', () => {
    expect(Util.cipher("ZZTOP")).toEqual("[[UPQ");
  });
  test('Test cipher de hello => false', () => {
    expect(Util.cipher("ZZTOP")).not.toEqual("[[UPdfgdfdfQ");
  });

});
