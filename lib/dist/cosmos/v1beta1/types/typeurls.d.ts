import protobuf from 'protobufjs';
export declare const typeUrlMappings: {
    [key: string]: GeneratedType;
};
export interface GeneratedType {
    readonly create: (properties?: {
        [k: string]: any;
    }) => any;
    readonly encode: (message: any | {
        [k: string]: any;
    }, writer?: protobuf.Writer) => protobuf.Writer;
    readonly decode: (reader: protobuf.Reader | Uint8Array, length?: number) => any;
}
//# sourceMappingURL=typeurls.d.ts.map