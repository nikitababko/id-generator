/**
 * @description uuidv4 method
 * @returns {string} - id string
 */
export const uuidv4 = (): string => {
    return '########-####-####-####-############'.replaceAll(
        /#/g,
        () => Math.random().toString(16)[2],
    );
};

/**
 * @description hexId method
 * @param {number} length - password length
 * @returns {password: string}
 */
export const hexId = (length = 10): string => {
    const bytesNeeded = Math.ceil(length / 2);

    const randomBytes = new Uint8Array(bytesNeeded);
    crypto.getRandomValues(randomBytes);

    let hexString = '';
    for (let i = 0; i < randomBytes.length; i++) {
        hexString += randomBytes[i].toString(16).padStart(2, '0');
    }

    return hexString.slice(0, length);
};

