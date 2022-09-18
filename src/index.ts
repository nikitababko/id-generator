export const uuidv4 = (): string => {
  return "########-####-####-####-############".replaceAll(
    /#/g,
    () => Math.random().toString(16)[2]
  );
};

/**
 * shortId method
 * @method
 * @param {number} length - Password length.
 * @return {string}
 */
export const shortId = (length = 7): string => {
  const zerosString = Object.values(new Uint32Array(length + 1)).join("");
  return String(
    Math.floor(Math.random() * Number(`1${zerosString}`)).toString(16)
  );
};
