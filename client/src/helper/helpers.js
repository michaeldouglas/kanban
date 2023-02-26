export const sizeObject = object => Object.keys(object).length > 0;
export const getEnv = name => process.env[`REACT_APP_${name}`];
