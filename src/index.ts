/**
 * @description uuidv4 method
 * @returns {string} - id string
 */
export const uuidv4 = (): string => {
  return "########-####-####-####-############".replaceAll(
    /#/g,
    () => Math.random().toString(16)[2]
  );
};

/**
 * @description shortId method
 * @param {number} length - password length
 * @returns {password: string}
 */
export const shortId = (length = 7): string => {
  const zerosString = Object.values(new Uint32Array(length + 1)).join("");
  return String(
    Math.floor(Math.random() * Number(`1${zerosString}`)).toString(16)
  );
};
