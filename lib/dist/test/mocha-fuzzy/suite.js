"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuzzyTestRunnerCompose = exports.fuzzyDescribe = void 0;
var mocha_1 = require("mocha");
var chance_1 = require("chance");
var chance = new chance_1.Chance();
exports.fuzzyDescribe = function (title, fn) {
    return mocha_1.describe("[Fuzzy] " + title, function () {
        return fn.call(this, fuzzyTestRunnerCompose);
    });
};
exports.fuzzyDescribe.only = function (title, fn) {
    return mocha_1.describe.only("[Fuzzy] " + title, function () {
        return fn.call(this, fuzzyTestRunnerCompose);
    });
};
function fuzzyTestRunnerCompose() {
    var fuzzyArgDefs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fuzzyArgDefs[_i] = arguments[_i];
    }
    return function (testFn, options) {
        var initFn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var message = "(" + args.map(function (arg) { return argToString(arg.value); }).join(', ') + ")";
            if (options === null || options === void 0 ? void 0 : options.passDone) {
                return mocha_1.it(message, function (done) {
                    if (options === null || options === void 0 ? void 0 : options.invalidArgsOnly) {
                        var hasInvalidArg = args.find(function (arg) { return !arg.valid; });
                        if (!hasInvalidArg) {
                            done();
                            return;
                        }
                    }
                    testFn.call.apply(testFn, __spreadArrays([this], args, [done]));
                });
            }
            return mocha_1.it(message, function () {
                if (options === null || options === void 0 ? void 0 : options.invalidArgsOnly) {
                    var hasInvalidArg = args.find(function (arg) { return !arg.valid; });
                    if (!hasInvalidArg) {
                        return;
                    }
                }
                return testFn.call.apply(testFn, __spreadArrays([this], args));
            });
        };
        return fuzzyArgDefs.reverse().reduce(function (accuTestRunner, fuzzyArgDef) {
            return fuzzyArgTestFnGenerator(accuTestRunner, fuzzyArgDef);
        }, initFn)();
    };
}
exports.fuzzyTestRunnerCompose = fuzzyTestRunnerCompose;
var argToString = function (arg) {
    if (typeof arg === 'function') {
        return arg.toString();
    }
    if (typeof arg === 'string' && arg.length > 16) {
        return "\"" + arg.substr(0, 16) + "...\"";
    }
    if (arg === undefined) {
        return 'undefined';
    }
    return JSON.stringify(arg);
};
var FuzzyArgType;
(function (FuzzyArgType) {
    FuzzyArgType[FuzzyArgType["Number"] = 0] = "Number";
    FuzzyArgType[FuzzyArgType["String"] = 1] = "String";
    FuzzyArgType[FuzzyArgType["Boolean"] = 2] = "Boolean";
    FuzzyArgType[FuzzyArgType["Object"] = 3] = "Object";
    FuzzyArgType[FuzzyArgType["Function"] = 4] = "Function";
    FuzzyArgType[FuzzyArgType["Undefined"] = 5] = "Undefined";
    FuzzyArgType[FuzzyArgType["Null"] = 6] = "Null";
})(FuzzyArgType || (FuzzyArgType = {}));
fuzzyTestRunnerCompose.Number = FuzzyArgType.Number;
fuzzyTestRunnerCompose.String = fuzzyTestRunnerCompose.Str = FuzzyArgType.String;
fuzzyTestRunnerCompose.Boolean = fuzzyTestRunnerCompose.Bool = FuzzyArgType.Boolean;
fuzzyTestRunnerCompose.Object = fuzzyTestRunnerCompose.Obj = FuzzyArgType.Object;
fuzzyTestRunnerCompose.Function = fuzzyTestRunnerCompose.Func = fuzzyTestRunnerCompose.Fn = FuzzyArgType.Function;
fuzzyTestRunnerCompose.Undefined = FuzzyArgType.Undefined;
fuzzyTestRunnerCompose.Null = FuzzyArgType.Null;
fuzzyTestRunnerCompose.either = function () {
    var argTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argTypes[_i] = arguments[_i];
    }
    return function (validValue) { return ({
        types: argTypes,
        validValue: validValue,
    }); };
};
fuzzyTestRunnerCompose.optional = function () {
    var argTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argTypes[_i] = arguments[_i];
    }
    return function (validValue) { return ({
        types: __spreadArrays(argTypes, [FuzzyArgType.Undefined]),
        validValue: validValue,
    }); };
};
var fuzzyArgDefFnGenerator = function (type) {
    return function (validValue) { return ({
        types: [type],
        validValue: validValue,
    }); };
};
var fuzzyNilArgDefFnGenerator = function (type, validValue) {
    return function () { return ({
        types: [type],
        validValue: validValue,
    }); };
};
fuzzyTestRunnerCompose.NumberArg = fuzzyArgDefFnGenerator(FuzzyArgType.Number);
fuzzyTestRunnerCompose.StringArg = fuzzyTestRunnerCompose.StrArg = fuzzyTestRunnerCompose.EnumArg = fuzzyArgDefFnGenerator(FuzzyArgType.String);
fuzzyTestRunnerCompose.BooleanArg = fuzzyTestRunnerCompose.BoolArg = fuzzyArgDefFnGenerator(FuzzyArgType.Boolean);
fuzzyTestRunnerCompose.ObjectArg = fuzzyTestRunnerCompose.ObjArg = fuzzyArgDefFnGenerator(FuzzyArgType.Object);
fuzzyTestRunnerCompose.FunctionArg = fuzzyTestRunnerCompose.FuncArg = fuzzyTestRunnerCompose.FnArg = fuzzyArgDefFnGenerator(FuzzyArgType.Function);
fuzzyTestRunnerCompose.UndefinedArg = fuzzyNilArgDefFnGenerator(FuzzyArgType.Undefined, undefined);
fuzzyTestRunnerCompose.NullArg = fuzzyNilArgDefFnGenerator(FuzzyArgType.Null, null);
var fuzzyRandArgEntries = [
    [FuzzyArgType.Number, function () { return chance.integer({ max: -1 }); }, 'negative integer'],
    [FuzzyArgType.Number, function () { return 0; }],
    [FuzzyArgType.Number, function () { return chance.integer({ min: 1 }); }, 'positive integer'],
    [FuzzyArgType.Number, function () { return chance.floating({ max: -1 }); }, 'negative floating'],
    [FuzzyArgType.Number, function () { return 0.0; }],
    [FuzzyArgType.Number, function () { return chance.floating({ min: 1 }); }, 'positive floating'],
    [FuzzyArgType.String, function () { return chance.string(); }],
    [FuzzyArgType.String, function () { return chance.string({ length: 65536 }); }, 'long string'],
    [FuzzyArgType.Boolean, function () { return true; }],
    [FuzzyArgType.Boolean, function () { return false; }],
    [FuzzyArgType.Object, function () { return ({ key: 'value' }); }],
    [FuzzyArgType.Function, function () { return function () { return true; }; }],
    [FuzzyArgType.Undefined, function () { return undefined; }],
    [FuzzyArgType.Null, function () { return null; }],
];
var fuzzyArgTestFnGenerator = function (accuTestFn, fuzzyArgDef) {
    var validArgTypes = fuzzyArgDef.types;
    var isValidArgType = function (argType) { return validArgTypes.includes(argType); };
    return function () {
        var prevArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            prevArgs[_i] = arguments[_i];
        }
        fuzzyRandArgEntries.forEach(function (_a) {
            var randArgType = _a[0], randFn = _a[1];
            var valid = isValidArgType(randArgType);
            var args = __spreadArrays(prevArgs, [
                {
                    type: randArgType,
                    valid: valid,
                    value: valid ? fuzzyArgDef.validValue : randFn(),
                },
            ]);
            accuTestFn.apply(void 0, args);
        });
    };
};
//# sourceMappingURL=suite.js.map