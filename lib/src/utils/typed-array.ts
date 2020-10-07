/**
 * Clone an Uint8Array
 * @param {Uint8Array} arr
 * @returns {Uint8Array}
 */
export const cloneUint8Array = (arr: Uint8Array): Uint8Array => {
    const cloned = new Uint8Array(arr.length);
    cloned.set(arr);

    return cloned;
};
