import Mocha from 'mocha';
export declare const fuzzyDescribe: {
    (title: string, fn: DescFunc): Mocha.Suite;
    only(title: string, fn: DescFunc): Mocha.Suite;
};
declare type Done = (err?: any) => void;
declare type DescFunc = (this: Mocha.Suite, fuzzy: typeof fuzzyTestRunnerCompose, done?: Done) => void;
export declare function fuzzyTestRunnerCompose(): (testFn: (done: Done) => any, options?: FuzzyTestRunnerOptions) => any;
export declare namespace fuzzyTestRunnerCompose {
    var Number: FuzzyArgType;
    var String: FuzzyArgType;
    var Str: FuzzyArgType;
    var Boolean: FuzzyArgType;
    var Bool: FuzzyArgType;
    var Object: FuzzyArgType;
    var Obj: FuzzyArgType;
    var Function: FuzzyArgType;
    var Func: FuzzyArgType;
    var Fn: FuzzyArgType;
    var Undefined: FuzzyArgType;
    var Null: FuzzyArgType;
    var either: <T>(...argTypes: FuzzyArgType[]) => (validValue: T) => FuzzyArgDef<T>;
    var optional: <T>(...argTypes: FuzzyArgType[]) => (validValue: T | undefined) => FuzzyArgDef<T | undefined>;
    var NumberArg: FuzzyArgDefFn<number>;
    var StringArg: FuzzyArgDefFn<string>;
    var StrArg: FuzzyArgDefFn<string>;
    var EnumArg: FuzzyArgDefFn<string>;
    var BooleanArg: FuzzyArgDefFn<boolean>;
    var BoolArg: FuzzyArgDefFn<boolean>;
    var ObjectArg: FuzzyArgDefFn<any>;
    var ObjArg: FuzzyArgDefFn<any>;
    var FunctionArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FuncArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FnArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var UndefinedArg: FuzzyArgDefFn<undefined>;
    var NullArg: FuzzyArgDefFn<null>;
}
export declare function fuzzyTestRunnerCompose<T>(args0: FuzzyArgDef<T>): (testFn: (args0: FuzzyArg<T>, done: Done) => any, options?: FuzzyTestRunnerOptions) => any;
export declare namespace fuzzyTestRunnerCompose {
    var Number: FuzzyArgType;
    var String: FuzzyArgType;
    var Str: FuzzyArgType;
    var Boolean: FuzzyArgType;
    var Bool: FuzzyArgType;
    var Object: FuzzyArgType;
    var Obj: FuzzyArgType;
    var Function: FuzzyArgType;
    var Func: FuzzyArgType;
    var Fn: FuzzyArgType;
    var Undefined: FuzzyArgType;
    var Null: FuzzyArgType;
    var either: <T>(...argTypes: FuzzyArgType[]) => (validValue: T) => FuzzyArgDef<T>;
    var optional: <T>(...argTypes: FuzzyArgType[]) => (validValue: T | undefined) => FuzzyArgDef<T | undefined>;
    var NumberArg: FuzzyArgDefFn<number>;
    var StringArg: FuzzyArgDefFn<string>;
    var StrArg: FuzzyArgDefFn<string>;
    var EnumArg: FuzzyArgDefFn<string>;
    var BooleanArg: FuzzyArgDefFn<boolean>;
    var BoolArg: FuzzyArgDefFn<boolean>;
    var ObjectArg: FuzzyArgDefFn<any>;
    var ObjArg: FuzzyArgDefFn<any>;
    var FunctionArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FuncArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FnArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var UndefinedArg: FuzzyArgDefFn<undefined>;
    var NullArg: FuzzyArgDefFn<null>;
}
export declare function fuzzyTestRunnerCompose<T0, T1>(args0: FuzzyArgDef<T0>, args1: FuzzyArgDef<T1>): (testFn: (args0: FuzzyArg<T0>, args1: FuzzyArg<T1>, done: Done) => any, options?: FuzzyTestRunnerOptions) => any;
export declare namespace fuzzyTestRunnerCompose {
    var Number: FuzzyArgType;
    var String: FuzzyArgType;
    var Str: FuzzyArgType;
    var Boolean: FuzzyArgType;
    var Bool: FuzzyArgType;
    var Object: FuzzyArgType;
    var Obj: FuzzyArgType;
    var Function: FuzzyArgType;
    var Func: FuzzyArgType;
    var Fn: FuzzyArgType;
    var Undefined: FuzzyArgType;
    var Null: FuzzyArgType;
    var either: <T>(...argTypes: FuzzyArgType[]) => (validValue: T) => FuzzyArgDef<T>;
    var optional: <T>(...argTypes: FuzzyArgType[]) => (validValue: T | undefined) => FuzzyArgDef<T | undefined>;
    var NumberArg: FuzzyArgDefFn<number>;
    var StringArg: FuzzyArgDefFn<string>;
    var StrArg: FuzzyArgDefFn<string>;
    var EnumArg: FuzzyArgDefFn<string>;
    var BooleanArg: FuzzyArgDefFn<boolean>;
    var BoolArg: FuzzyArgDefFn<boolean>;
    var ObjectArg: FuzzyArgDefFn<any>;
    var ObjArg: FuzzyArgDefFn<any>;
    var FunctionArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FuncArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FnArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var UndefinedArg: FuzzyArgDefFn<undefined>;
    var NullArg: FuzzyArgDefFn<null>;
}
export declare function fuzzyTestRunnerCompose<T0, T1, T2>(args0: FuzzyArgDef<T0>, args1: FuzzyArgDef<T1>, args2: FuzzyArgDef<T2>): (testFn: (args0: FuzzyArg<T0>, args1: FuzzyArg<T1>, args2: FuzzyArg<T2>, done: Done) => any, options?: FuzzyTestRunnerOptions) => any;
export declare namespace fuzzyTestRunnerCompose {
    var Number: FuzzyArgType;
    var String: FuzzyArgType;
    var Str: FuzzyArgType;
    var Boolean: FuzzyArgType;
    var Bool: FuzzyArgType;
    var Object: FuzzyArgType;
    var Obj: FuzzyArgType;
    var Function: FuzzyArgType;
    var Func: FuzzyArgType;
    var Fn: FuzzyArgType;
    var Undefined: FuzzyArgType;
    var Null: FuzzyArgType;
    var either: <T>(...argTypes: FuzzyArgType[]) => (validValue: T) => FuzzyArgDef<T>;
    var optional: <T>(...argTypes: FuzzyArgType[]) => (validValue: T | undefined) => FuzzyArgDef<T | undefined>;
    var NumberArg: FuzzyArgDefFn<number>;
    var StringArg: FuzzyArgDefFn<string>;
    var StrArg: FuzzyArgDefFn<string>;
    var EnumArg: FuzzyArgDefFn<string>;
    var BooleanArg: FuzzyArgDefFn<boolean>;
    var BoolArg: FuzzyArgDefFn<boolean>;
    var ObjectArg: FuzzyArgDefFn<any>;
    var ObjArg: FuzzyArgDefFn<any>;
    var FunctionArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FuncArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var FnArg: FuzzyArgDefFn<(...args: any[]) => any>;
    var UndefinedArg: FuzzyArgDefFn<undefined>;
    var NullArg: FuzzyArgDefFn<null>;
}
declare enum FuzzyArgType {
    Number = 0,
    String = 1,
    Boolean = 2,
    Object = 3,
    Function = 4,
    Undefined = 5,
    Null = 6
}
declare type FuzzyArgDefFn<T> = (validValue: T) => FuzzyArgDef<T>;
declare type FuzzyArgDef<T> = {
    types: FuzzyArgType[];
    validValue: T;
};
export declare type FuzzyTestRunnerOptions = {
    invalidArgsOnly?: boolean;
    passDone?: boolean;
};
declare type FuzzyArg<T> = {
    type: FuzzyArgType;
    valid: true;
    value: T;
} | {
    type: FuzzyArgType;
    valid: false;
    value: any;
};
export {};
//# sourceMappingURL=suite.d.ts.map