// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018-present Crypto.org (licensed under the Apache License, Version 2.0)
import { isNonNullObject, isUint8Array } from '../../utils/typechecks';

/**
 * Converts default values to null in order to tell protobuf.js
 * to not serialize them.
 *
 * @see https://github.com/cosmos/cosmos-sdk/pull/6979
 */
export function omitDefault<T>(input: T): T | null {
    if (input === undefined || input === null) return null;

    if (typeof input === 'number' || typeof input === 'boolean' || typeof input === 'string') {
        return input || null;
    }

    if (Array.isArray(input) || isUint8Array(input)) {
        return input.length ? input : null;
    }

    throw new Error('Input type not supported');
}

/**
 * Walks through a potentially nested object and calls omitDefault on each element.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function omitDefaults(input: any): any {
    // Unset
    if (input === undefined || input === null) return null;

    // Protobuf element
    if (
        typeof input === 'number' ||
        typeof input === 'boolean' ||
        typeof input === 'string' ||
        Array.isArray(input) ||
        isUint8Array(input)
    ) {
        return omitDefault(input);
    }

    // Object
    if (isNonNullObject(input)) {
        return Object.entries(input).reduce(
            (accumulator, [key, value]) => ({
                ...accumulator,
                [key]: omitDefaults(value),
            }),
            {},
        );
    }

    throw new Error(`Input type not supported: ${typeof input}`);
}
