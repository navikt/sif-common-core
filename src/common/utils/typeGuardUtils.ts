export const isString = (obj: any): obj is string =>
    Object.prototype.toString.call(obj) === '[object String]';
