import { isNullOrEmpty, isNullOrUndefined } from "./is-utility";

describe('isNullOrUndefined test suites', () => {
  test('should return true when value is null', () => {
    expect(isNullOrUndefined(null)).toBeTruthy();
  });

  test('should return true when value is undefined', () => {
    expect(isNullOrUndefined(undefined)).toBeTruthy();
  });

  test('should return false when value is not null or undefined', () => {
    expect(isNullOrUndefined(12)).toBeFalsy();
  });
});

describe('isNullOrEmpty test suites', () => {
  test('should return true when value is empty', () => {
    expect(isNullOrEmpty(null)).toBeTruthy();
  });
});
