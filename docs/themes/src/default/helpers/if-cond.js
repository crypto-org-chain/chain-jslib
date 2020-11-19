/*
 * TypeDoc
 * Copyright: Copyright (c) 2015 Sebastian Lenz.
 *            Copyright (c) 2016-2020 TypeDoc Contributors.
 * License: Apache License 2.0
 * Repository: https://github.com/TypeStrong/typedoc
 */
/**
 * Handlebars if helper with condition.
 *
 * @param v1        The first value to be compared.
 * @param operator  The operand to perform on the two given values.
 * @param v2        The second value to be compared
 * @param options   The current handlebars object.
 * @param this   The current handlebars this.
 * @returns {*}
 */
module.exports = {
    ifCond: (v1, operator, v2, options) => {
        switch (operator) {
            case '==':
                // eslint-disable-next-line eqeqeq
                return v1 == v2 ? options.fn(this) : options.inverse(this);
            case '===':
                return v1 === v2 ? options.fn(this) : options.inverse(this);
            case '<':
                return v1 < v2 ? options.fn(this) : options.inverse(this);
            case '<=':
                return v1 <= v2 ? options.fn(this) : options.inverse(this);
            case '>':
                return v1 > v2 ? options.fn(this) : options.inverse(this);
            case '>=':
                return v1 >= v2 ? options.fn(this) : options.inverse(this);
            case '&&':
                return v1 && v2 ? options.fn(this) : options.inverse(this);
            case '||':
                return v1 || v2 ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    },
};
