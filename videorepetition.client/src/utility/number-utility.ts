export const toFix = (value: number | string, fixNumber: number): string =>
  typeof value === 'number' ? value.toFixed(fixNumber) : parseFloat(value).toFixed(fixNumber);

export const isNumber = (value: any): boolean => !isNaN(value);

export const trunc = (value: number): number => Math.trunc(value);
