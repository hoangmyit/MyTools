export const isNullOrUndefined = (value: any): boolean => value === null || value === undefined;

export const isNullOrEmpty = (value: any): boolean => isNullOrUndefined(value) || value === '';
