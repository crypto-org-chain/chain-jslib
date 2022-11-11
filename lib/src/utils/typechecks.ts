// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018-present Crypto.org (licensed under the Apache License, Version 2.0)
/**
 * Checks if data is a non-null object (i.e. matches the TypeScript object type).
 *
 * Note: this returns true for arrays, which are objects in JavaScript
 * even though array and object are different types in JSON.
 *
 * @see https://www.typescriptlang.org/docs/handbook/basic-types.html#object
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isNonNullObject(data: unknown): data is object {
    return typeof data === 'object' && data !== null;
}

/**
 * Checks if data is an Uint8Array. Note: Buffer is treated as not a Uint8Array
 */
export function isUint8Array(data: unknown): data is Uint8Array {
    if (!isNonNullObject(data)) return false;

    // Avoid instanceof check which is unreliable in some JS environments
    // https://medium.com/@simonwarta/limitations-of-the-instanceof-operator-f4bcdbe7a400

    // Use check that was discussed in https://github.com/crypto-browserify/pbkdf2/pull/81
    if (Object.prototype.toString.call(data) !== '[object Uint8Array]') return false;

    if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer !== 'undefined') {
        // Buffer.isBuffer is available at runtime
        if (Buffer.isBuffer(data)) return false;
    }

    return true;
}
