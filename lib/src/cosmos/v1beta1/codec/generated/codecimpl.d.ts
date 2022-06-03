import * as $protobuf from 'protobufjs';
/** Namespace cosmos. */
export namespace cosmos {
    /** Namespace bank. */
    namespace bank {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a Params. */
            interface IParams {
                /** Params sendEnabled */
                sendEnabled?: cosmos.bank.v1beta1.ISendEnabled[] | null;

                /** Params defaultSendEnabled */
                defaultSendEnabled?: boolean | null;
            }

            /** Represents a Params. */
            class Params implements IParams {
                /**
                 * Constructs a new Params.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IParams);

                /** Params sendEnabled. */
                public sendEnabled: cosmos.bank.v1beta1.ISendEnabled[];

                /** Params defaultSendEnabled. */
                public defaultSendEnabled: boolean;

                /**
                 * Creates a new Params instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Params instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IParams): cosmos.bank.v1beta1.Params;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
                 * @param m Params message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Params;
            }

            /** Properties of a SendEnabled. */
            interface ISendEnabled {
                /** SendEnabled denom */
                denom?: string | null;

                /** SendEnabled enabled */
                enabled?: boolean | null;
            }

            /** Represents a SendEnabled. */
            class SendEnabled implements ISendEnabled {
                /**
                 * Constructs a new SendEnabled.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.ISendEnabled);

                /** SendEnabled denom. */
                public denom: string;

                /** SendEnabled enabled. */
                public enabled: boolean;

                /**
                 * Creates a new SendEnabled instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SendEnabled instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.ISendEnabled): cosmos.bank.v1beta1.SendEnabled;

                /**
                 * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
                 * @param m SendEnabled message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.ISendEnabled, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SendEnabled message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns SendEnabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.SendEnabled;
            }

            /** Properties of an Input. */
            interface IInput {
                /** Input address */
                address?: string | null;

                /** Input coins */
                coins?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents an Input. */
            class Input implements IInput {
                /**
                 * Constructs a new Input.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IInput);

                /** Input address. */
                public address: string;

                /** Input coins. */
                public coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Input instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Input instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IInput): cosmos.bank.v1beta1.Input;

                /**
                 * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
                 * @param m Input message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IInput, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Input;
            }

            /** Properties of an Output. */
            interface IOutput {
                /** Output address */
                address?: string | null;

                /** Output coins */
                coins?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents an Output. */
            class Output implements IOutput {
                /**
                 * Constructs a new Output.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IOutput);

                /** Output address. */
                public address: string;

                /** Output coins. */
                public coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Output instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Output instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IOutput): cosmos.bank.v1beta1.Output;

                /**
                 * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
                 * @param m Output message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IOutput, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Output;
            }

            /** Properties of a Supply. */
            interface ISupply {
                /** Supply total */
                total?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents a Supply. */
            class Supply implements ISupply {
                /**
                 * Constructs a new Supply.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.ISupply);

                /** Supply total. */
                public total: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Supply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Supply instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.ISupply): cosmos.bank.v1beta1.Supply;

                /**
                 * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
                 * @param m Supply message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.ISupply, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Supply message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Supply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Supply;
            }

            /** Properties of a DenomUnit. */
            interface IDenomUnit {
                /** DenomUnit denom */
                denom?: string | null;

                /** DenomUnit exponent */
                exponent?: number | null;

                /** DenomUnit aliases */
                aliases?: string[] | null;
            }

            /** Represents a DenomUnit. */
            class DenomUnit implements IDenomUnit {
                /**
                 * Constructs a new DenomUnit.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IDenomUnit);

                /** DenomUnit denom. */
                public denom: string;

                /** DenomUnit exponent. */
                public exponent: number;

                /** DenomUnit aliases. */
                public aliases: string[];

                /**
                 * Creates a new DenomUnit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenomUnit instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IDenomUnit): cosmos.bank.v1beta1.DenomUnit;

                /**
                 * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
                 * @param m DenomUnit message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IDenomUnit, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenomUnit message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DenomUnit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.DenomUnit;
            }

            /** Properties of a Metadata. */
            interface IMetadata {
                /** Metadata description */
                description?: string | null;

                /** Metadata denomUnits */
                denomUnits?: cosmos.bank.v1beta1.IDenomUnit[] | null;

                /** Metadata base */
                base?: string | null;

                /** Metadata display */
                display?: string | null;

                /** Metadata name */
                name?: string | null;

                /** Metadata symbol */
                symbol?: string | null;
            }

            /** Represents a Metadata. */
            class Metadata implements IMetadata {
                /**
                 * Constructs a new Metadata.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IMetadata);

                /** Metadata description. */
                public description: string;

                /** Metadata denomUnits. */
                public denomUnits: cosmos.bank.v1beta1.IDenomUnit[];

                /** Metadata base. */
                public base: string;

                /** Metadata display. */
                public display: string;

                /** Metadata name. */
                public name: string;

                /** Metadata symbol. */
                public symbol: string;

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Metadata instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IMetadata): cosmos.bank.v1beta1.Metadata;

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
                 * @param m Metadata message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IMetadata, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Metadata;
            }

            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls Send.
                 * @param request MsgSend message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgSendResponse
                 */
                public send(
                    request: cosmos.bank.v1beta1.IMsgSend,
                    callback: cosmos.bank.v1beta1.Msg.SendCallback,
                ): void;

                /**
                 * Calls Send.
                 * @param request MsgSend message or plain object
                 * @returns Promise
                 */
                public send(request: cosmos.bank.v1beta1.IMsgSend): Promise<cosmos.bank.v1beta1.MsgSendResponse>;

                /**
                 * Calls MultiSend.
                 * @param request MsgMultiSend message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgMultiSendResponse
                 */
                public multiSend(
                    request: cosmos.bank.v1beta1.IMsgMultiSend,
                    callback: cosmos.bank.v1beta1.Msg.MultiSendCallback,
                ): void;

                /**
                 * Calls MultiSend.
                 * @param request MsgMultiSend message or plain object
                 * @returns Promise
                 */
                public multiSend(
                    request: cosmos.bank.v1beta1.IMsgMultiSend,
                ): Promise<cosmos.bank.v1beta1.MsgMultiSendResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link cosmos.bank.v1beta1.Msg#send}.
                 * @param error Error, if any
                 * @param [response] MsgSendResponse
                 */
                type SendCallback = (error: Error | null, response?: cosmos.bank.v1beta1.MsgSendResponse) => void;

                /**
                 * Callback as used by {@link cosmos.bank.v1beta1.Msg#multiSend}.
                 * @param error Error, if any
                 * @param [response] MsgMultiSendResponse
                 */
                type MultiSendCallback = (
                    error: Error | null,
                    response?: cosmos.bank.v1beta1.MsgMultiSendResponse,
                ) => void;
            }

            /** Properties of a MsgSend. */
            interface IMsgSend {
                /** MsgSend fromAddress */
                fromAddress?: string | null;

                /** MsgSend toAddress */
                toAddress?: string | null;

                /** MsgSend amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents a MsgSend. */
            class MsgSend implements IMsgSend {
                /**
                 * Constructs a new MsgSend.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IMsgSend);

                /** MsgSend fromAddress. */
                public fromAddress: string;

                /** MsgSend toAddress. */
                public toAddress: string;

                /** MsgSend amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new MsgSend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSend instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IMsgSend): cosmos.bank.v1beta1.MsgSend;

                /**
                 * Encodes the specified MsgSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSend.verify|verify} messages.
                 * @param m MsgSend message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IMsgSend, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSend message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgSend;
            }

            /** Properties of a MsgSendResponse. */
            interface IMsgSendResponse {}

            /** Represents a MsgSendResponse. */
            class MsgSendResponse implements IMsgSendResponse {
                /**
                 * Constructs a new MsgSendResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IMsgSendResponse);

                /**
                 * Creates a new MsgSendResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSendResponse instance
                 */
                public static create(
                    properties?: cosmos.bank.v1beta1.IMsgSendResponse,
                ): cosmos.bank.v1beta1.MsgSendResponse;

                /**
                 * Encodes the specified MsgSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSendResponse.verify|verify} messages.
                 * @param m MsgSendResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IMsgSendResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSendResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgSendResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgSendResponse;
            }

            /** Properties of a MsgMultiSend. */
            interface IMsgMultiSend {
                /** MsgMultiSend inputs */
                inputs?: cosmos.bank.v1beta1.IInput[] | null;

                /** MsgMultiSend outputs */
                outputs?: cosmos.bank.v1beta1.IOutput[] | null;
            }

            /** Represents a MsgMultiSend. */
            class MsgMultiSend implements IMsgMultiSend {
                /**
                 * Constructs a new MsgMultiSend.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IMsgMultiSend);

                /** MsgMultiSend inputs. */
                public inputs: cosmos.bank.v1beta1.IInput[];

                /** MsgMultiSend outputs. */
                public outputs: cosmos.bank.v1beta1.IOutput[];

                /**
                 * Creates a new MsgMultiSend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgMultiSend instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IMsgMultiSend): cosmos.bank.v1beta1.MsgMultiSend;

                /**
                 * Encodes the specified MsgMultiSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSend.verify|verify} messages.
                 * @param m MsgMultiSend message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.bank.v1beta1.IMsgMultiSend, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgMultiSend message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgMultiSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgMultiSend;
            }

            /** Properties of a MsgMultiSendResponse. */
            interface IMsgMultiSendResponse {}

            /** Represents a MsgMultiSendResponse. */
            class MsgMultiSendResponse implements IMsgMultiSendResponse {
                /**
                 * Constructs a new MsgMultiSendResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.bank.v1beta1.IMsgMultiSendResponse);

                /**
                 * Creates a new MsgMultiSendResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgMultiSendResponse instance
                 */
                public static create(
                    properties?: cosmos.bank.v1beta1.IMsgMultiSendResponse,
                ): cosmos.bank.v1beta1.MsgMultiSendResponse;

                /**
                 * Encodes the specified MsgMultiSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSendResponse.verify|verify} messages.
                 * @param m MsgMultiSendResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.bank.v1beta1.IMsgMultiSendResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgMultiSendResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgMultiSendResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.bank.v1beta1.MsgMultiSendResponse;
            }
        }
    }

    /** Namespace distribution. */
    namespace distribution {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a Params. */
            interface IParams {
                /** Params communityTax */
                communityTax?: string | null;

                /** Params baseProposerReward */
                baseProposerReward?: string | null;

                /** Params bonusProposerReward */
                bonusProposerReward?: string | null;

                /** Params withdrawAddrEnabled */
                withdrawAddrEnabled?: boolean | null;
            }

            /** Represents a Params. */
            class Params implements IParams {
                /**
                 * Constructs a new Params.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IParams);

                /** Params communityTax. */
                public communityTax: string;

                /** Params baseProposerReward. */
                public baseProposerReward: string;

                /** Params bonusProposerReward. */
                public bonusProposerReward: string;

                /** Params withdrawAddrEnabled. */
                public withdrawAddrEnabled: boolean;

                /**
                 * Creates a new Params instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Params instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IParams,
                ): cosmos.distribution.v1beta1.Params;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link cosmos.distribution.v1beta1.Params.verify|verify} messages.
                 * @param m Params message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.distribution.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.distribution.v1beta1.Params;
            }

            /** Properties of a ValidatorHistoricalRewards. */
            interface IValidatorHistoricalRewards {
                /** ValidatorHistoricalRewards cumulativeRewardRatio */
                cumulativeRewardRatio?: cosmos.base.v1beta1.IDecCoin[] | null;

                /** ValidatorHistoricalRewards referenceCount */
                referenceCount?: number | null;
            }

            /** Represents a ValidatorHistoricalRewards. */
            class ValidatorHistoricalRewards implements IValidatorHistoricalRewards {
                /**
                 * Constructs a new ValidatorHistoricalRewards.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IValidatorHistoricalRewards);

                /** ValidatorHistoricalRewards cumulativeRewardRatio. */
                public cumulativeRewardRatio: cosmos.base.v1beta1.IDecCoin[];

                /** ValidatorHistoricalRewards referenceCount. */
                public referenceCount: number;

                /**
                 * Creates a new ValidatorHistoricalRewards instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValidatorHistoricalRewards instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IValidatorHistoricalRewards,
                ): cosmos.distribution.v1beta1.ValidatorHistoricalRewards;

                /**
                 * Encodes the specified ValidatorHistoricalRewards message. Does not implicitly {@link cosmos.distribution.v1beta1.ValidatorHistoricalRewards.verify|verify} messages.
                 * @param m ValidatorHistoricalRewards message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IValidatorHistoricalRewards,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ValidatorHistoricalRewards message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValidatorHistoricalRewards
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.ValidatorHistoricalRewards;
            }

            /** Properties of a ValidatorCurrentRewards. */
            interface IValidatorCurrentRewards {
                /** ValidatorCurrentRewards rewards */
                rewards?: cosmos.base.v1beta1.IDecCoin[] | null;

                /** ValidatorCurrentRewards period */
                period?: Long | null;
            }

            /** Represents a ValidatorCurrentRewards. */
            class ValidatorCurrentRewards implements IValidatorCurrentRewards {
                /**
                 * Constructs a new ValidatorCurrentRewards.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IValidatorCurrentRewards);

                /** ValidatorCurrentRewards rewards. */
                public rewards: cosmos.base.v1beta1.IDecCoin[];

                /** ValidatorCurrentRewards period. */
                public period: Long;

                /**
                 * Creates a new ValidatorCurrentRewards instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValidatorCurrentRewards instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IValidatorCurrentRewards,
                ): cosmos.distribution.v1beta1.ValidatorCurrentRewards;

                /**
                 * Encodes the specified ValidatorCurrentRewards message. Does not implicitly {@link cosmos.distribution.v1beta1.ValidatorCurrentRewards.verify|verify} messages.
                 * @param m ValidatorCurrentRewards message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IValidatorCurrentRewards,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ValidatorCurrentRewards message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValidatorCurrentRewards
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.ValidatorCurrentRewards;
            }

            /** Properties of a ValidatorAccumulatedCommission. */
            interface IValidatorAccumulatedCommission {
                /** ValidatorAccumulatedCommission commission */
                commission?: cosmos.base.v1beta1.IDecCoin[] | null;
            }

            /** Represents a ValidatorAccumulatedCommission. */
            class ValidatorAccumulatedCommission implements IValidatorAccumulatedCommission {
                /**
                 * Constructs a new ValidatorAccumulatedCommission.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IValidatorAccumulatedCommission);

                /** ValidatorAccumulatedCommission commission. */
                public commission: cosmos.base.v1beta1.IDecCoin[];

                /**
                 * Creates a new ValidatorAccumulatedCommission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValidatorAccumulatedCommission instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IValidatorAccumulatedCommission,
                ): cosmos.distribution.v1beta1.ValidatorAccumulatedCommission;

                /**
                 * Encodes the specified ValidatorAccumulatedCommission message. Does not implicitly {@link cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.verify|verify} messages.
                 * @param m ValidatorAccumulatedCommission message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IValidatorAccumulatedCommission,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ValidatorAccumulatedCommission message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValidatorAccumulatedCommission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.ValidatorAccumulatedCommission;
            }

            /** Properties of a ValidatorOutstandingRewards. */
            interface IValidatorOutstandingRewards {
                /** ValidatorOutstandingRewards rewards */
                rewards?: cosmos.base.v1beta1.IDecCoin[] | null;
            }

            /** Represents a ValidatorOutstandingRewards. */
            class ValidatorOutstandingRewards implements IValidatorOutstandingRewards {
                /**
                 * Constructs a new ValidatorOutstandingRewards.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IValidatorOutstandingRewards);

                /** ValidatorOutstandingRewards rewards. */
                public rewards: cosmos.base.v1beta1.IDecCoin[];

                /**
                 * Creates a new ValidatorOutstandingRewards instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValidatorOutstandingRewards instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IValidatorOutstandingRewards,
                ): cosmos.distribution.v1beta1.ValidatorOutstandingRewards;

                /**
                 * Encodes the specified ValidatorOutstandingRewards message. Does not implicitly {@link cosmos.distribution.v1beta1.ValidatorOutstandingRewards.verify|verify} messages.
                 * @param m ValidatorOutstandingRewards message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IValidatorOutstandingRewards,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ValidatorOutstandingRewards message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValidatorOutstandingRewards
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.ValidatorOutstandingRewards;
            }

            /** Properties of a ValidatorSlashEvent. */
            interface IValidatorSlashEvent {
                /** ValidatorSlashEvent validatorPeriod */
                validatorPeriod?: Long | null;

                /** ValidatorSlashEvent fraction */
                fraction?: string | null;
            }

            /** Represents a ValidatorSlashEvent. */
            class ValidatorSlashEvent implements IValidatorSlashEvent {
                /**
                 * Constructs a new ValidatorSlashEvent.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IValidatorSlashEvent);

                /** ValidatorSlashEvent validatorPeriod. */
                public validatorPeriod: Long;

                /** ValidatorSlashEvent fraction. */
                public fraction: string;

                /**
                 * Creates a new ValidatorSlashEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValidatorSlashEvent instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IValidatorSlashEvent,
                ): cosmos.distribution.v1beta1.ValidatorSlashEvent;

                /**
                 * Encodes the specified ValidatorSlashEvent message. Does not implicitly {@link cosmos.distribution.v1beta1.ValidatorSlashEvent.verify|verify} messages.
                 * @param m ValidatorSlashEvent message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IValidatorSlashEvent,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ValidatorSlashEvent message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValidatorSlashEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.ValidatorSlashEvent;
            }

            /** Properties of a ValidatorSlashEvents. */
            interface IValidatorSlashEvents {
                /** ValidatorSlashEvents validatorSlashEvents */
                validatorSlashEvents?: cosmos.distribution.v1beta1.IValidatorSlashEvent[] | null;
            }

            /** Represents a ValidatorSlashEvents. */
            class ValidatorSlashEvents implements IValidatorSlashEvents {
                /**
                 * Constructs a new ValidatorSlashEvents.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IValidatorSlashEvents);

                /** ValidatorSlashEvents validatorSlashEvents. */
                public validatorSlashEvents: cosmos.distribution.v1beta1.IValidatorSlashEvent[];

                /**
                 * Creates a new ValidatorSlashEvents instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValidatorSlashEvents instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IValidatorSlashEvents,
                ): cosmos.distribution.v1beta1.ValidatorSlashEvents;

                /**
                 * Encodes the specified ValidatorSlashEvents message. Does not implicitly {@link cosmos.distribution.v1beta1.ValidatorSlashEvents.verify|verify} messages.
                 * @param m ValidatorSlashEvents message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IValidatorSlashEvents,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ValidatorSlashEvents message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValidatorSlashEvents
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.ValidatorSlashEvents;
            }

            /** Properties of a FeePool. */
            interface IFeePool {
                /** FeePool communityPool */
                communityPool?: cosmos.base.v1beta1.IDecCoin[] | null;
            }

            /** Represents a FeePool. */
            class FeePool implements IFeePool {
                /**
                 * Constructs a new FeePool.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IFeePool);

                /** FeePool communityPool. */
                public communityPool: cosmos.base.v1beta1.IDecCoin[];

                /**
                 * Creates a new FeePool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeePool instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IFeePool,
                ): cosmos.distribution.v1beta1.FeePool;

                /**
                 * Encodes the specified FeePool message. Does not implicitly {@link cosmos.distribution.v1beta1.FeePool.verify|verify} messages.
                 * @param m FeePool message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.distribution.v1beta1.IFeePool, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeePool message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns FeePool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.distribution.v1beta1.FeePool;
            }

            /** Properties of a CommunityPoolSpendProposal. */
            interface ICommunityPoolSpendProposal {
                /** CommunityPoolSpendProposal title */
                title?: string | null;

                /** CommunityPoolSpendProposal description */
                description?: string | null;

                /** CommunityPoolSpendProposal recipient */
                recipient?: string | null;

                /** CommunityPoolSpendProposal amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents a CommunityPoolSpendProposal. */
            class CommunityPoolSpendProposal implements ICommunityPoolSpendProposal {
                /**
                 * Constructs a new CommunityPoolSpendProposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.ICommunityPoolSpendProposal);

                /** CommunityPoolSpendProposal title. */
                public title: string;

                /** CommunityPoolSpendProposal description. */
                public description: string;

                /** CommunityPoolSpendProposal recipient. */
                public recipient: string;

                /** CommunityPoolSpendProposal amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new CommunityPoolSpendProposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommunityPoolSpendProposal instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.ICommunityPoolSpendProposal,
                ): cosmos.distribution.v1beta1.CommunityPoolSpendProposal;

                /**
                 * Encodes the specified CommunityPoolSpendProposal message. Does not implicitly {@link cosmos.distribution.v1beta1.CommunityPoolSpendProposal.verify|verify} messages.
                 * @param m CommunityPoolSpendProposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.ICommunityPoolSpendProposal,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a CommunityPoolSpendProposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns CommunityPoolSpendProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.CommunityPoolSpendProposal;
            }

            /** Properties of a DelegatorStartingInfo. */
            interface IDelegatorStartingInfo {
                /** DelegatorStartingInfo previousPeriod */
                previousPeriod?: Long | null;

                /** DelegatorStartingInfo stake */
                stake?: string | null;

                /** DelegatorStartingInfo height */
                height?: Long | null;
            }

            /** Represents a DelegatorStartingInfo. */
            class DelegatorStartingInfo implements IDelegatorStartingInfo {
                /**
                 * Constructs a new DelegatorStartingInfo.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IDelegatorStartingInfo);

                /** DelegatorStartingInfo previousPeriod. */
                public previousPeriod: Long;

                /** DelegatorStartingInfo stake. */
                public stake: string;

                /** DelegatorStartingInfo height. */
                public height: Long;

                /**
                 * Creates a new DelegatorStartingInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DelegatorStartingInfo instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IDelegatorStartingInfo,
                ): cosmos.distribution.v1beta1.DelegatorStartingInfo;

                /**
                 * Encodes the specified DelegatorStartingInfo message. Does not implicitly {@link cosmos.distribution.v1beta1.DelegatorStartingInfo.verify|verify} messages.
                 * @param m DelegatorStartingInfo message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IDelegatorStartingInfo,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a DelegatorStartingInfo message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DelegatorStartingInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.DelegatorStartingInfo;
            }

            /** Properties of a DelegationDelegatorReward. */
            interface IDelegationDelegatorReward {
                /** DelegationDelegatorReward validatorAddress */
                validatorAddress?: string | null;

                /** DelegationDelegatorReward reward */
                reward?: cosmos.base.v1beta1.IDecCoin[] | null;
            }

            /** Represents a DelegationDelegatorReward. */
            class DelegationDelegatorReward implements IDelegationDelegatorReward {
                /**
                 * Constructs a new DelegationDelegatorReward.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IDelegationDelegatorReward);

                /** DelegationDelegatorReward validatorAddress. */
                public validatorAddress: string;

                /** DelegationDelegatorReward reward. */
                public reward: cosmos.base.v1beta1.IDecCoin[];

                /**
                 * Creates a new DelegationDelegatorReward instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DelegationDelegatorReward instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IDelegationDelegatorReward,
                ): cosmos.distribution.v1beta1.DelegationDelegatorReward;

                /**
                 * Encodes the specified DelegationDelegatorReward message. Does not implicitly {@link cosmos.distribution.v1beta1.DelegationDelegatorReward.verify|verify} messages.
                 * @param m DelegationDelegatorReward message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IDelegationDelegatorReward,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a DelegationDelegatorReward message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DelegationDelegatorReward
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.DelegationDelegatorReward;
            }

            /** Properties of a CommunityPoolSpendProposalWithDeposit. */
            interface ICommunityPoolSpendProposalWithDeposit {
                /** CommunityPoolSpendProposalWithDeposit title */
                title?: string | null;

                /** CommunityPoolSpendProposalWithDeposit description */
                description?: string | null;

                /** CommunityPoolSpendProposalWithDeposit recipient */
                recipient?: string | null;

                /** CommunityPoolSpendProposalWithDeposit amount */
                amount?: string | null;

                /** CommunityPoolSpendProposalWithDeposit deposit */
                deposit?: string | null;
            }

            /** Represents a CommunityPoolSpendProposalWithDeposit. */
            class CommunityPoolSpendProposalWithDeposit implements ICommunityPoolSpendProposalWithDeposit {
                /**
                 * Constructs a new CommunityPoolSpendProposalWithDeposit.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.ICommunityPoolSpendProposalWithDeposit);

                /** CommunityPoolSpendProposalWithDeposit title. */
                public title: string;

                /** CommunityPoolSpendProposalWithDeposit description. */
                public description: string;

                /** CommunityPoolSpendProposalWithDeposit recipient. */
                public recipient: string;

                /** CommunityPoolSpendProposalWithDeposit amount. */
                public amount: string;

                /** CommunityPoolSpendProposalWithDeposit deposit. */
                public deposit: string;

                /**
                 * Creates a new CommunityPoolSpendProposalWithDeposit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommunityPoolSpendProposalWithDeposit instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.ICommunityPoolSpendProposalWithDeposit,
                ): cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit;

                /**
                 * Encodes the specified CommunityPoolSpendProposalWithDeposit message. Does not implicitly {@link cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit.verify|verify} messages.
                 * @param m CommunityPoolSpendProposalWithDeposit message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.ICommunityPoolSpendProposalWithDeposit,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a CommunityPoolSpendProposalWithDeposit message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns CommunityPoolSpendProposalWithDeposit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit;
            }

            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls SetWithdrawAddress.
                 * @param request MsgSetWithdrawAddress message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgSetWithdrawAddressResponse
                 */
                public setWithdrawAddress(
                    request: cosmos.distribution.v1beta1.IMsgSetWithdrawAddress,
                    callback: cosmos.distribution.v1beta1.Msg.SetWithdrawAddressCallback,
                ): void;

                /**
                 * Calls SetWithdrawAddress.
                 * @param request MsgSetWithdrawAddress message or plain object
                 * @returns Promise
                 */
                public setWithdrawAddress(
                    request: cosmos.distribution.v1beta1.IMsgSetWithdrawAddress,
                ): Promise<cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse>;

                /**
                 * Calls WithdrawDelegatorReward.
                 * @param request MsgWithdrawDelegatorReward message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgWithdrawDelegatorRewardResponse
                 */
                public withdrawDelegatorReward(
                    request: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward,
                    callback: cosmos.distribution.v1beta1.Msg.WithdrawDelegatorRewardCallback,
                ): void;

                /**
                 * Calls WithdrawDelegatorReward.
                 * @param request MsgWithdrawDelegatorReward message or plain object
                 * @returns Promise
                 */
                public withdrawDelegatorReward(
                    request: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward,
                ): Promise<cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse>;

                /**
                 * Calls WithdrawValidatorCommission.
                 * @param request MsgWithdrawValidatorCommission message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgWithdrawValidatorCommissionResponse
                 */
                public withdrawValidatorCommission(
                    request: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommission,
                    callback: cosmos.distribution.v1beta1.Msg.WithdrawValidatorCommissionCallback,
                ): void;

                /**
                 * Calls WithdrawValidatorCommission.
                 * @param request MsgWithdrawValidatorCommission message or plain object
                 * @returns Promise
                 */
                public withdrawValidatorCommission(
                    request: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommission,
                ): Promise<cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse>;

                /**
                 * Calls FundCommunityPool.
                 * @param request MsgFundCommunityPool message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgFundCommunityPoolResponse
                 */
                public fundCommunityPool(
                    request: cosmos.distribution.v1beta1.IMsgFundCommunityPool,
                    callback: cosmos.distribution.v1beta1.Msg.FundCommunityPoolCallback,
                ): void;

                /**
                 * Calls FundCommunityPool.
                 * @param request MsgFundCommunityPool message or plain object
                 * @returns Promise
                 */
                public fundCommunityPool(
                    request: cosmos.distribution.v1beta1.IMsgFundCommunityPool,
                ): Promise<cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link cosmos.distribution.v1beta1.Msg#setWithdrawAddress}.
                 * @param error Error, if any
                 * @param [response] MsgSetWithdrawAddressResponse
                 */
                type SetWithdrawAddressCallback = (
                    error: Error | null,
                    response?: cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.distribution.v1beta1.Msg#withdrawDelegatorReward}.
                 * @param error Error, if any
                 * @param [response] MsgWithdrawDelegatorRewardResponse
                 */
                type WithdrawDelegatorRewardCallback = (
                    error: Error | null,
                    response?: cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.distribution.v1beta1.Msg#withdrawValidatorCommission}.
                 * @param error Error, if any
                 * @param [response] MsgWithdrawValidatorCommissionResponse
                 */
                type WithdrawValidatorCommissionCallback = (
                    error: Error | null,
                    response?: cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.distribution.v1beta1.Msg#fundCommunityPool}.
                 * @param error Error, if any
                 * @param [response] MsgFundCommunityPoolResponse
                 */
                type FundCommunityPoolCallback = (
                    error: Error | null,
                    response?: cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse,
                ) => void;
            }

            /** Properties of a MsgSetWithdrawAddress. */
            interface IMsgSetWithdrawAddress {
                /** MsgSetWithdrawAddress delegatorAddress */
                delegatorAddress?: string | null;

                /** MsgSetWithdrawAddress withdrawAddress */
                withdrawAddress?: string | null;
            }

            /** Represents a MsgSetWithdrawAddress. */
            class MsgSetWithdrawAddress implements IMsgSetWithdrawAddress {
                /**
                 * Constructs a new MsgSetWithdrawAddress.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgSetWithdrawAddress);

                /** MsgSetWithdrawAddress delegatorAddress. */
                public delegatorAddress: string;

                /** MsgSetWithdrawAddress withdrawAddress. */
                public withdrawAddress: string;

                /**
                 * Creates a new MsgSetWithdrawAddress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSetWithdrawAddress instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgSetWithdrawAddress,
                ): cosmos.distribution.v1beta1.MsgSetWithdrawAddress;

                /**
                 * Encodes the specified MsgSetWithdrawAddress message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgSetWithdrawAddress.verify|verify} messages.
                 * @param m MsgSetWithdrawAddress message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgSetWithdrawAddress,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgSetWithdrawAddress message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgSetWithdrawAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgSetWithdrawAddress;
            }

            /** Properties of a MsgSetWithdrawAddressResponse. */
            interface IMsgSetWithdrawAddressResponse {}

            /** Represents a MsgSetWithdrawAddressResponse. */
            class MsgSetWithdrawAddressResponse implements IMsgSetWithdrawAddressResponse {
                /**
                 * Constructs a new MsgSetWithdrawAddressResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgSetWithdrawAddressResponse);

                /**
                 * Creates a new MsgSetWithdrawAddressResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSetWithdrawAddressResponse instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgSetWithdrawAddressResponse,
                ): cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse;

                /**
                 * Encodes the specified MsgSetWithdrawAddressResponse message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse.verify|verify} messages.
                 * @param m MsgSetWithdrawAddressResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgSetWithdrawAddressResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgSetWithdrawAddressResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgSetWithdrawAddressResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse;
            }

            /** Properties of a MsgWithdrawDelegatorReward. */
            interface IMsgWithdrawDelegatorReward {
                /** MsgWithdrawDelegatorReward delegatorAddress */
                delegatorAddress?: string | null;

                /** MsgWithdrawDelegatorReward validatorAddress */
                validatorAddress?: string | null;
            }

            /** Represents a MsgWithdrawDelegatorReward. */
            class MsgWithdrawDelegatorReward implements IMsgWithdrawDelegatorReward {
                /**
                 * Constructs a new MsgWithdrawDelegatorReward.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward);

                /** MsgWithdrawDelegatorReward delegatorAddress. */
                public delegatorAddress: string;

                /** MsgWithdrawDelegatorReward validatorAddress. */
                public validatorAddress: string;

                /**
                 * Creates a new MsgWithdrawDelegatorReward instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgWithdrawDelegatorReward instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward,
                ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward;

                /**
                 * Encodes the specified MsgWithdrawDelegatorReward message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.verify|verify} messages.
                 * @param m MsgWithdrawDelegatorReward message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgWithdrawDelegatorReward message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgWithdrawDelegatorReward
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward;
            }

            /** Properties of a MsgWithdrawDelegatorRewardResponse. */
            interface IMsgWithdrawDelegatorRewardResponse {}

            /** Represents a MsgWithdrawDelegatorRewardResponse. */
            class MsgWithdrawDelegatorRewardResponse implements IMsgWithdrawDelegatorRewardResponse {
                /**
                 * Constructs a new MsgWithdrawDelegatorRewardResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorRewardResponse);

                /**
                 * Creates a new MsgWithdrawDelegatorRewardResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgWithdrawDelegatorRewardResponse instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorRewardResponse,
                ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse;

                /**
                 * Encodes the specified MsgWithdrawDelegatorRewardResponse message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse.verify|verify} messages.
                 * @param m MsgWithdrawDelegatorRewardResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorRewardResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgWithdrawDelegatorRewardResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgWithdrawDelegatorRewardResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse;
            }

            /** Properties of a MsgWithdrawValidatorCommission. */
            interface IMsgWithdrawValidatorCommission {
                /** MsgWithdrawValidatorCommission validatorAddress */
                validatorAddress?: string | null;
            }

            /** Represents a MsgWithdrawValidatorCommission. */
            class MsgWithdrawValidatorCommission implements IMsgWithdrawValidatorCommission {
                /**
                 * Constructs a new MsgWithdrawValidatorCommission.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommission);

                /** MsgWithdrawValidatorCommission validatorAddress. */
                public validatorAddress: string;

                /**
                 * Creates a new MsgWithdrawValidatorCommission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgWithdrawValidatorCommission instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommission,
                ): cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission;

                /**
                 * Encodes the specified MsgWithdrawValidatorCommission message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission.verify|verify} messages.
                 * @param m MsgWithdrawValidatorCommission message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommission,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgWithdrawValidatorCommission message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgWithdrawValidatorCommission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission;
            }

            /** Properties of a MsgWithdrawValidatorCommissionResponse. */
            interface IMsgWithdrawValidatorCommissionResponse {}

            /** Represents a MsgWithdrawValidatorCommissionResponse. */
            class MsgWithdrawValidatorCommissionResponse implements IMsgWithdrawValidatorCommissionResponse {
                /**
                 * Constructs a new MsgWithdrawValidatorCommissionResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommissionResponse);

                /**
                 * Creates a new MsgWithdrawValidatorCommissionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgWithdrawValidatorCommissionResponse instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommissionResponse,
                ): cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse;

                /**
                 * Encodes the specified MsgWithdrawValidatorCommissionResponse message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse.verify|verify} messages.
                 * @param m MsgWithdrawValidatorCommissionResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgWithdrawValidatorCommissionResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgWithdrawValidatorCommissionResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgWithdrawValidatorCommissionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse;
            }

            /** Properties of a MsgFundCommunityPool. */
            interface IMsgFundCommunityPool {
                /** MsgFundCommunityPool amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;

                /** MsgFundCommunityPool depositor */
                depositor?: string | null;
            }

            /** Represents a MsgFundCommunityPool. */
            class MsgFundCommunityPool implements IMsgFundCommunityPool {
                /**
                 * Constructs a new MsgFundCommunityPool.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgFundCommunityPool);

                /** MsgFundCommunityPool amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /** MsgFundCommunityPool depositor. */
                public depositor: string;

                /**
                 * Creates a new MsgFundCommunityPool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgFundCommunityPool instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgFundCommunityPool,
                ): cosmos.distribution.v1beta1.MsgFundCommunityPool;

                /**
                 * Encodes the specified MsgFundCommunityPool message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgFundCommunityPool.verify|verify} messages.
                 * @param m MsgFundCommunityPool message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgFundCommunityPool,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgFundCommunityPool message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgFundCommunityPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgFundCommunityPool;
            }

            /** Properties of a MsgFundCommunityPoolResponse. */
            interface IMsgFundCommunityPoolResponse {}

            /** Represents a MsgFundCommunityPoolResponse. */
            class MsgFundCommunityPoolResponse implements IMsgFundCommunityPoolResponse {
                /**
                 * Constructs a new MsgFundCommunityPoolResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.distribution.v1beta1.IMsgFundCommunityPoolResponse);

                /**
                 * Creates a new MsgFundCommunityPoolResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgFundCommunityPoolResponse instance
                 */
                public static create(
                    properties?: cosmos.distribution.v1beta1.IMsgFundCommunityPoolResponse,
                ): cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse;

                /**
                 * Encodes the specified MsgFundCommunityPoolResponse message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse.verify|verify} messages.
                 * @param m MsgFundCommunityPoolResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.distribution.v1beta1.IMsgFundCommunityPoolResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgFundCommunityPoolResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgFundCommunityPoolResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse;
            }
        }
    }

    /** Namespace staking. */
    namespace staking {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a HistoricalInfo. */
            interface IHistoricalInfo {
                /** HistoricalInfo header */
                header?: tendermintV2.types.IHeader | null;

                /** HistoricalInfo valset */
                valset?: cosmos.staking.v1beta1.IValidator[] | null;
            }

            /** Represents a HistoricalInfo. */
            class HistoricalInfo implements IHistoricalInfo {
                /**
                 * Constructs a new HistoricalInfo.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IHistoricalInfo);

                /** HistoricalInfo header. */
                public header?: tendermintV2.types.IHeader | null;

                /** HistoricalInfo valset. */
                public valset: cosmos.staking.v1beta1.IValidator[];

                /**
                 * Creates a new HistoricalInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HistoricalInfo instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IHistoricalInfo,
                ): cosmos.staking.v1beta1.HistoricalInfo;

                /**
                 * Encodes the specified HistoricalInfo message. Does not implicitly {@link cosmos.staking.v1beta1.HistoricalInfo.verify|verify} messages.
                 * @param m HistoricalInfo message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IHistoricalInfo, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HistoricalInfo message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns HistoricalInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.HistoricalInfo;
            }

            /** Properties of a CommissionRates. */
            interface ICommissionRates {
                /** CommissionRates rate */
                rate?: string | null;

                /** CommissionRates maxRate */
                maxRate?: string | null;

                /** CommissionRates maxChangeRate */
                maxChangeRate?: string | null;
            }

            /** Represents a CommissionRates. */
            class CommissionRates implements ICommissionRates {
                /**
                 * Constructs a new CommissionRates.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.ICommissionRates);

                /** CommissionRates rate. */
                public rate: string;

                /** CommissionRates maxRate. */
                public maxRate: string;

                /** CommissionRates maxChangeRate. */
                public maxChangeRate: string;

                /**
                 * Creates a new CommissionRates instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommissionRates instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.ICommissionRates,
                ): cosmos.staking.v1beta1.CommissionRates;

                /**
                 * Encodes the specified CommissionRates message. Does not implicitly {@link cosmos.staking.v1beta1.CommissionRates.verify|verify} messages.
                 * @param m CommissionRates message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.ICommissionRates,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a CommissionRates message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns CommissionRates
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.CommissionRates;
            }

            /** Properties of a Commission. */
            interface ICommission {
                /** Commission commissionRates */
                commissionRates?: cosmos.staking.v1beta1.ICommissionRates | null;

                /** Commission updateTime */
                updateTime?: google.protobuf.ITimestamp | null;
            }

            /** Represents a Commission. */
            class Commission implements ICommission {
                /**
                 * Constructs a new Commission.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.ICommission);

                /** Commission commissionRates. */
                public commissionRates?: cosmos.staking.v1beta1.ICommissionRates | null;

                /** Commission updateTime. */
                public updateTime?: google.protobuf.ITimestamp | null;

                /**
                 * Creates a new Commission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Commission instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.ICommission,
                ): cosmos.staking.v1beta1.Commission;

                /**
                 * Encodes the specified Commission message. Does not implicitly {@link cosmos.staking.v1beta1.Commission.verify|verify} messages.
                 * @param m Commission message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.ICommission, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Commission message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Commission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Commission;
            }

            /** Properties of a Description. */
            interface IDescription {
                /** Description moniker */
                moniker?: string | null;

                /** Description identity */
                identity?: string | null;

                /** Description website */
                website?: string | null;

                /** Description securityContact */
                securityContact?: string | null;

                /** Description details */
                details?: string | null;
            }

            /** Represents a Description. */
            class Description implements IDescription {
                /**
                 * Constructs a new Description.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDescription);

                /** Description moniker. */
                public moniker: string;

                /** Description identity. */
                public identity: string;

                /** Description website. */
                public website: string;

                /** Description securityContact. */
                public securityContact: string;

                /** Description details. */
                public details: string;

                /**
                 * Creates a new Description instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Description instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IDescription,
                ): cosmos.staking.v1beta1.Description;

                /**
                 * Encodes the specified Description message. Does not implicitly {@link cosmos.staking.v1beta1.Description.verify|verify} messages.
                 * @param m Description message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IDescription, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Description message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Description
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Description;
            }

            /** Properties of a Validator. */
            interface IValidator {
                /** Validator operatorAddress */
                operatorAddress?: string | null;

                /** Validator consensusPubkey */
                consensusPubkey?: google.protobuf.IAny | null;

                /** Validator jailed */
                jailed?: boolean | null;

                /** Validator status */
                status?: cosmos.staking.v1beta1.BondStatus | null;

                /** Validator tokens */
                tokens?: string | null;

                /** Validator delegatorShares */
                delegatorShares?: string | null;

                /** Validator description */
                description?: cosmos.staking.v1beta1.IDescription | null;

                /** Validator unbondingHeight */
                unbondingHeight?: Long | null;

                /** Validator unbondingTime */
                unbondingTime?: google.protobuf.ITimestamp | null;

                /** Validator commission */
                commission?: cosmos.staking.v1beta1.ICommission | null;

                /** Validator minSelfDelegation */
                minSelfDelegation?: string | null;
            }

            /** Represents a Validator. */
            class Validator implements IValidator {
                /**
                 * Constructs a new Validator.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IValidator);

                /** Validator operatorAddress. */
                public operatorAddress: string;

                /** Validator consensusPubkey. */
                public consensusPubkey?: google.protobuf.IAny | null;

                /** Validator jailed. */
                public jailed: boolean;

                /** Validator status. */
                public status: cosmos.staking.v1beta1.BondStatus;

                /** Validator tokens. */
                public tokens: string;

                /** Validator delegatorShares. */
                public delegatorShares: string;

                /** Validator description. */
                public description?: cosmos.staking.v1beta1.IDescription | null;

                /** Validator unbondingHeight. */
                public unbondingHeight: Long;

                /** Validator unbondingTime. */
                public unbondingTime?: google.protobuf.ITimestamp | null;

                /** Validator commission. */
                public commission?: cosmos.staking.v1beta1.ICommission | null;

                /** Validator minSelfDelegation. */
                public minSelfDelegation: string;

                /**
                 * Creates a new Validator instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Validator instance
                 */
                public static create(properties?: cosmos.staking.v1beta1.IValidator): cosmos.staking.v1beta1.Validator;

                /**
                 * Encodes the specified Validator message. Does not implicitly {@link cosmos.staking.v1beta1.Validator.verify|verify} messages.
                 * @param m Validator message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IValidator, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Validator message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Validator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Validator;
            }

            /** BondStatus enum. */
            enum BondStatus {
                BOND_STATUS_UNSPECIFIED = 0,
                BOND_STATUS_UNBONDED = 1,
                BOND_STATUS_UNBONDING = 2,
                BOND_STATUS_BONDED = 3,
            }

            /** Properties of a ValAddresses. */
            interface IValAddresses {
                /** ValAddresses addresses */
                addresses?: string[] | null;
            }

            /** Represents a ValAddresses. */
            class ValAddresses implements IValAddresses {
                /**
                 * Constructs a new ValAddresses.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IValAddresses);

                /** ValAddresses addresses. */
                public addresses: string[];

                /**
                 * Creates a new ValAddresses instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValAddresses instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IValAddresses,
                ): cosmos.staking.v1beta1.ValAddresses;

                /**
                 * Encodes the specified ValAddresses message. Does not implicitly {@link cosmos.staking.v1beta1.ValAddresses.verify|verify} messages.
                 * @param m ValAddresses message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IValAddresses, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValAddresses message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ValAddresses
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.ValAddresses;
            }

            /** Properties of a DVPair. */
            interface IDVPair {
                /** DVPair delegatorAddress */
                delegatorAddress?: string | null;

                /** DVPair validatorAddress */
                validatorAddress?: string | null;
            }

            /** Represents a DVPair. */
            class DVPair implements IDVPair {
                /**
                 * Constructs a new DVPair.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDVPair);

                /** DVPair delegatorAddress. */
                public delegatorAddress: string;

                /** DVPair validatorAddress. */
                public validatorAddress: string;

                /**
                 * Creates a new DVPair instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DVPair instance
                 */
                public static create(properties?: cosmos.staking.v1beta1.IDVPair): cosmos.staking.v1beta1.DVPair;

                /**
                 * Encodes the specified DVPair message. Does not implicitly {@link cosmos.staking.v1beta1.DVPair.verify|verify} messages.
                 * @param m DVPair message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IDVPair, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DVPair message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DVPair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVPair;
            }

            /** Properties of a DVPairs. */
            interface IDVPairs {
                /** DVPairs pairs */
                pairs?: cosmos.staking.v1beta1.IDVPair[] | null;
            }

            /** Represents a DVPairs. */
            class DVPairs implements IDVPairs {
                /**
                 * Constructs a new DVPairs.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDVPairs);

                /** DVPairs pairs. */
                public pairs: cosmos.staking.v1beta1.IDVPair[];

                /**
                 * Creates a new DVPairs instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DVPairs instance
                 */
                public static create(properties?: cosmos.staking.v1beta1.IDVPairs): cosmos.staking.v1beta1.DVPairs;

                /**
                 * Encodes the specified DVPairs message. Does not implicitly {@link cosmos.staking.v1beta1.DVPairs.verify|verify} messages.
                 * @param m DVPairs message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IDVPairs, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DVPairs message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DVPairs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVPairs;
            }

            /** Properties of a DVVTriplet. */
            interface IDVVTriplet {
                /** DVVTriplet delegatorAddress */
                delegatorAddress?: string | null;

                /** DVVTriplet validatorSrcAddress */
                validatorSrcAddress?: string | null;

                /** DVVTriplet validatorDstAddress */
                validatorDstAddress?: string | null;
            }

            /** Represents a DVVTriplet. */
            class DVVTriplet implements IDVVTriplet {
                /**
                 * Constructs a new DVVTriplet.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDVVTriplet);

                /** DVVTriplet delegatorAddress. */
                public delegatorAddress: string;

                /** DVVTriplet validatorSrcAddress. */
                public validatorSrcAddress: string;

                /** DVVTriplet validatorDstAddress. */
                public validatorDstAddress: string;

                /**
                 * Creates a new DVVTriplet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DVVTriplet instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IDVVTriplet,
                ): cosmos.staking.v1beta1.DVVTriplet;

                /**
                 * Encodes the specified DVVTriplet message. Does not implicitly {@link cosmos.staking.v1beta1.DVVTriplet.verify|verify} messages.
                 * @param m DVVTriplet message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IDVVTriplet, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DVVTriplet message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DVVTriplet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVVTriplet;
            }

            /** Properties of a DVVTriplets. */
            interface IDVVTriplets {
                /** DVVTriplets triplets */
                triplets?: cosmos.staking.v1beta1.IDVVTriplet[] | null;
            }

            /** Represents a DVVTriplets. */
            class DVVTriplets implements IDVVTriplets {
                /**
                 * Constructs a new DVVTriplets.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDVVTriplets);

                /** DVVTriplets triplets. */
                public triplets: cosmos.staking.v1beta1.IDVVTriplet[];

                /**
                 * Creates a new DVVTriplets instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DVVTriplets instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IDVVTriplets,
                ): cosmos.staking.v1beta1.DVVTriplets;

                /**
                 * Encodes the specified DVVTriplets message. Does not implicitly {@link cosmos.staking.v1beta1.DVVTriplets.verify|verify} messages.
                 * @param m DVVTriplets message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IDVVTriplets, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DVVTriplets message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DVVTriplets
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.DVVTriplets;
            }

            /** Properties of a Delegation. */
            interface IDelegation {
                /** Delegation delegatorAddress */
                delegatorAddress?: string | null;

                /** Delegation validatorAddress */
                validatorAddress?: string | null;

                /** Delegation shares */
                shares?: string | null;
            }

            /** Represents a Delegation. */
            class Delegation implements IDelegation {
                /**
                 * Constructs a new Delegation.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDelegation);

                /** Delegation delegatorAddress. */
                public delegatorAddress: string;

                /** Delegation validatorAddress. */
                public validatorAddress: string;

                /** Delegation shares. */
                public shares: string;

                /**
                 * Creates a new Delegation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Delegation instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IDelegation,
                ): cosmos.staking.v1beta1.Delegation;

                /**
                 * Encodes the specified Delegation message. Does not implicitly {@link cosmos.staking.v1beta1.Delegation.verify|verify} messages.
                 * @param m Delegation message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IDelegation, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Delegation message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Delegation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Delegation;
            }

            /** Properties of an UnbondingDelegation. */
            interface IUnbondingDelegation {
                /** UnbondingDelegation delegatorAddress */
                delegatorAddress?: string | null;

                /** UnbondingDelegation validatorAddress */
                validatorAddress?: string | null;

                /** UnbondingDelegation entries */
                entries?: cosmos.staking.v1beta1.IUnbondingDelegationEntry[] | null;
            }

            /** Represents an UnbondingDelegation. */
            class UnbondingDelegation implements IUnbondingDelegation {
                /**
                 * Constructs a new UnbondingDelegation.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IUnbondingDelegation);

                /** UnbondingDelegation delegatorAddress. */
                public delegatorAddress: string;

                /** UnbondingDelegation validatorAddress. */
                public validatorAddress: string;

                /** UnbondingDelegation entries. */
                public entries: cosmos.staking.v1beta1.IUnbondingDelegationEntry[];

                /**
                 * Creates a new UnbondingDelegation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnbondingDelegation instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IUnbondingDelegation,
                ): cosmos.staking.v1beta1.UnbondingDelegation;

                /**
                 * Encodes the specified UnbondingDelegation message. Does not implicitly {@link cosmos.staking.v1beta1.UnbondingDelegation.verify|verify} messages.
                 * @param m UnbondingDelegation message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IUnbondingDelegation,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes an UnbondingDelegation message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns UnbondingDelegation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.UnbondingDelegation;
            }

            /** Properties of an UnbondingDelegationEntry. */
            interface IUnbondingDelegationEntry {
                /** UnbondingDelegationEntry creationHeight */
                creationHeight?: Long | null;

                /** UnbondingDelegationEntry completionTime */
                completionTime?: google.protobuf.ITimestamp | null;

                /** UnbondingDelegationEntry initialBalance */
                initialBalance?: string | null;

                /** UnbondingDelegationEntry balance */
                balance?: string | null;
            }

            /** Represents an UnbondingDelegationEntry. */
            class UnbondingDelegationEntry implements IUnbondingDelegationEntry {
                /**
                 * Constructs a new UnbondingDelegationEntry.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IUnbondingDelegationEntry);

                /** UnbondingDelegationEntry creationHeight. */
                public creationHeight: Long;

                /** UnbondingDelegationEntry completionTime. */
                public completionTime?: google.protobuf.ITimestamp | null;

                /** UnbondingDelegationEntry initialBalance. */
                public initialBalance: string;

                /** UnbondingDelegationEntry balance. */
                public balance: string;

                /**
                 * Creates a new UnbondingDelegationEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnbondingDelegationEntry instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IUnbondingDelegationEntry,
                ): cosmos.staking.v1beta1.UnbondingDelegationEntry;

                /**
                 * Encodes the specified UnbondingDelegationEntry message. Does not implicitly {@link cosmos.staking.v1beta1.UnbondingDelegationEntry.verify|verify} messages.
                 * @param m UnbondingDelegationEntry message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IUnbondingDelegationEntry,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes an UnbondingDelegationEntry message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns UnbondingDelegationEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.UnbondingDelegationEntry;
            }

            /** Properties of a RedelegationEntry. */
            interface IRedelegationEntry {
                /** RedelegationEntry creationHeight */
                creationHeight?: Long | null;

                /** RedelegationEntry completionTime */
                completionTime?: google.protobuf.ITimestamp | null;

                /** RedelegationEntry initialBalance */
                initialBalance?: string | null;

                /** RedelegationEntry sharesDst */
                sharesDst?: string | null;
            }

            /** Represents a RedelegationEntry. */
            class RedelegationEntry implements IRedelegationEntry {
                /**
                 * Constructs a new RedelegationEntry.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IRedelegationEntry);

                /** RedelegationEntry creationHeight. */
                public creationHeight: Long;

                /** RedelegationEntry completionTime. */
                public completionTime?: google.protobuf.ITimestamp | null;

                /** RedelegationEntry initialBalance. */
                public initialBalance: string;

                /** RedelegationEntry sharesDst. */
                public sharesDst: string;

                /**
                 * Creates a new RedelegationEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RedelegationEntry instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IRedelegationEntry,
                ): cosmos.staking.v1beta1.RedelegationEntry;

                /**
                 * Encodes the specified RedelegationEntry message. Does not implicitly {@link cosmos.staking.v1beta1.RedelegationEntry.verify|verify} messages.
                 * @param m RedelegationEntry message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IRedelegationEntry,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a RedelegationEntry message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns RedelegationEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.RedelegationEntry;
            }

            /** Properties of a Redelegation. */
            interface IRedelegation {
                /** Redelegation delegatorAddress */
                delegatorAddress?: string | null;

                /** Redelegation validatorSrcAddress */
                validatorSrcAddress?: string | null;

                /** Redelegation validatorDstAddress */
                validatorDstAddress?: string | null;

                /** Redelegation entries */
                entries?: cosmos.staking.v1beta1.IRedelegationEntry[] | null;
            }

            /** Represents a Redelegation. */
            class Redelegation implements IRedelegation {
                /**
                 * Constructs a new Redelegation.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IRedelegation);

                /** Redelegation delegatorAddress. */
                public delegatorAddress: string;

                /** Redelegation validatorSrcAddress. */
                public validatorSrcAddress: string;

                /** Redelegation validatorDstAddress. */
                public validatorDstAddress: string;

                /** Redelegation entries. */
                public entries: cosmos.staking.v1beta1.IRedelegationEntry[];

                /**
                 * Creates a new Redelegation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Redelegation instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IRedelegation,
                ): cosmos.staking.v1beta1.Redelegation;

                /**
                 * Encodes the specified Redelegation message. Does not implicitly {@link cosmos.staking.v1beta1.Redelegation.verify|verify} messages.
                 * @param m Redelegation message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IRedelegation, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Redelegation message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Redelegation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Redelegation;
            }

            /** Properties of a Params. */
            interface IParams {
                /** Params unbondingTime */
                unbondingTime?: google.protobuf.IDuration | null;

                /** Params maxValidators */
                maxValidators?: number | null;

                /** Params maxEntries */
                maxEntries?: number | null;

                /** Params historicalEntries */
                historicalEntries?: number | null;

                /** Params bondDenom */
                bondDenom?: string | null;
            }

            /** Represents a Params. */
            class Params implements IParams {
                /**
                 * Constructs a new Params.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IParams);

                /** Params unbondingTime. */
                public unbondingTime?: google.protobuf.IDuration | null;

                /** Params maxValidators. */
                public maxValidators: number;

                /** Params maxEntries. */
                public maxEntries: number;

                /** Params historicalEntries. */
                public historicalEntries: number;

                /** Params bondDenom. */
                public bondDenom: string;

                /**
                 * Creates a new Params instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Params instance
                 */
                public static create(properties?: cosmos.staking.v1beta1.IParams): cosmos.staking.v1beta1.Params;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link cosmos.staking.v1beta1.Params.verify|verify} messages.
                 * @param m Params message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Params;
            }

            /** Properties of a DelegationResponse. */
            interface IDelegationResponse {
                /** DelegationResponse delegation */
                delegation?: cosmos.staking.v1beta1.IDelegation | null;

                /** DelegationResponse balance */
                balance?: cosmos.base.v1beta1.ICoin | null;
            }

            /** Represents a DelegationResponse. */
            class DelegationResponse implements IDelegationResponse {
                /**
                 * Constructs a new DelegationResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IDelegationResponse);

                /** DelegationResponse delegation. */
                public delegation?: cosmos.staking.v1beta1.IDelegation | null;

                /** DelegationResponse balance. */
                public balance?: cosmos.base.v1beta1.ICoin | null;

                /**
                 * Creates a new DelegationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DelegationResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IDelegationResponse,
                ): cosmos.staking.v1beta1.DelegationResponse;

                /**
                 * Encodes the specified DelegationResponse message. Does not implicitly {@link cosmos.staking.v1beta1.DelegationResponse.verify|verify} messages.
                 * @param m DelegationResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IDelegationResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a DelegationResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DelegationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.DelegationResponse;
            }

            /** Properties of a RedelegationEntryResponse. */
            interface IRedelegationEntryResponse {
                /** RedelegationEntryResponse redelegationEntry */
                redelegationEntry?: cosmos.staking.v1beta1.IRedelegationEntry | null;

                /** RedelegationEntryResponse balance */
                balance?: string | null;
            }

            /** Represents a RedelegationEntryResponse. */
            class RedelegationEntryResponse implements IRedelegationEntryResponse {
                /**
                 * Constructs a new RedelegationEntryResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IRedelegationEntryResponse);

                /** RedelegationEntryResponse redelegationEntry. */
                public redelegationEntry?: cosmos.staking.v1beta1.IRedelegationEntry | null;

                /** RedelegationEntryResponse balance. */
                public balance: string;

                /**
                 * Creates a new RedelegationEntryResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RedelegationEntryResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IRedelegationEntryResponse,
                ): cosmos.staking.v1beta1.RedelegationEntryResponse;

                /**
                 * Encodes the specified RedelegationEntryResponse message. Does not implicitly {@link cosmos.staking.v1beta1.RedelegationEntryResponse.verify|verify} messages.
                 * @param m RedelegationEntryResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IRedelegationEntryResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a RedelegationEntryResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns RedelegationEntryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.RedelegationEntryResponse;
            }

            /** Properties of a RedelegationResponse. */
            interface IRedelegationResponse {
                /** RedelegationResponse redelegation */
                redelegation?: cosmos.staking.v1beta1.IRedelegation | null;

                /** RedelegationResponse entries */
                entries?: cosmos.staking.v1beta1.IRedelegationEntryResponse[] | null;
            }

            /** Represents a RedelegationResponse. */
            class RedelegationResponse implements IRedelegationResponse {
                /**
                 * Constructs a new RedelegationResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IRedelegationResponse);

                /** RedelegationResponse redelegation. */
                public redelegation?: cosmos.staking.v1beta1.IRedelegation | null;

                /** RedelegationResponse entries. */
                public entries: cosmos.staking.v1beta1.IRedelegationEntryResponse[];

                /**
                 * Creates a new RedelegationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RedelegationResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IRedelegationResponse,
                ): cosmos.staking.v1beta1.RedelegationResponse;

                /**
                 * Encodes the specified RedelegationResponse message. Does not implicitly {@link cosmos.staking.v1beta1.RedelegationResponse.verify|verify} messages.
                 * @param m RedelegationResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IRedelegationResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a RedelegationResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns RedelegationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.RedelegationResponse;
            }

            /** Properties of a Pool. */
            interface IPool {
                /** Pool notBondedTokens */
                notBondedTokens?: string | null;

                /** Pool bondedTokens */
                bondedTokens?: string | null;
            }

            /** Represents a Pool. */
            class Pool implements IPool {
                /**
                 * Constructs a new Pool.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IPool);

                /** Pool notBondedTokens. */
                public notBondedTokens: string;

                /** Pool bondedTokens. */
                public bondedTokens: string;

                /**
                 * Creates a new Pool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Pool instance
                 */
                public static create(properties?: cosmos.staking.v1beta1.IPool): cosmos.staking.v1beta1.Pool;

                /**
                 * Encodes the specified Pool message. Does not implicitly {@link cosmos.staking.v1beta1.Pool.verify|verify} messages.
                 * @param m Pool message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IPool, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Pool message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Pool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.Pool;
            }

            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls CreateValidator.
                 * @param request MsgCreateValidator message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgCreateValidatorResponse
                 */
                public createValidator(
                    request: cosmos.staking.v1beta1.IMsgCreateValidator,
                    callback: cosmos.staking.v1beta1.Msg.CreateValidatorCallback,
                ): void;

                /**
                 * Calls CreateValidator.
                 * @param request MsgCreateValidator message or plain object
                 * @returns Promise
                 */
                public createValidator(
                    request: cosmos.staking.v1beta1.IMsgCreateValidator,
                ): Promise<cosmos.staking.v1beta1.MsgCreateValidatorResponse>;

                /**
                 * Calls EditValidator.
                 * @param request MsgEditValidator message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgEditValidatorResponse
                 */
                public editValidator(
                    request: cosmos.staking.v1beta1.IMsgEditValidator,
                    callback: cosmos.staking.v1beta1.Msg.EditValidatorCallback,
                ): void;

                /**
                 * Calls EditValidator.
                 * @param request MsgEditValidator message or plain object
                 * @returns Promise
                 */
                public editValidator(
                    request: cosmos.staking.v1beta1.IMsgEditValidator,
                ): Promise<cosmos.staking.v1beta1.MsgEditValidatorResponse>;

                /**
                 * Calls Delegate.
                 * @param request MsgDelegate message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgDelegateResponse
                 */
                public delegate(
                    request: cosmos.staking.v1beta1.IMsgDelegate,
                    callback: cosmos.staking.v1beta1.Msg.DelegateCallback,
                ): void;

                /**
                 * Calls Delegate.
                 * @param request MsgDelegate message or plain object
                 * @returns Promise
                 */
                public delegate(
                    request: cosmos.staking.v1beta1.IMsgDelegate,
                ): Promise<cosmos.staking.v1beta1.MsgDelegateResponse>;

                /**
                 * Calls BeginRedelegate.
                 * @param request MsgBeginRedelegate message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgBeginRedelegateResponse
                 */
                public beginRedelegate(
                    request: cosmos.staking.v1beta1.IMsgBeginRedelegate,
                    callback: cosmos.staking.v1beta1.Msg.BeginRedelegateCallback,
                ): void;

                /**
                 * Calls BeginRedelegate.
                 * @param request MsgBeginRedelegate message or plain object
                 * @returns Promise
                 */
                public beginRedelegate(
                    request: cosmos.staking.v1beta1.IMsgBeginRedelegate,
                ): Promise<cosmos.staking.v1beta1.MsgBeginRedelegateResponse>;

                /**
                 * Calls Undelegate.
                 * @param request MsgUndelegate message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgUndelegateResponse
                 */
                public undelegate(
                    request: cosmos.staking.v1beta1.IMsgUndelegate,
                    callback: cosmos.staking.v1beta1.Msg.UndelegateCallback,
                ): void;

                /**
                 * Calls Undelegate.
                 * @param request MsgUndelegate message or plain object
                 * @returns Promise
                 */
                public undelegate(
                    request: cosmos.staking.v1beta1.IMsgUndelegate,
                ): Promise<cosmos.staking.v1beta1.MsgUndelegateResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link cosmos.staking.v1beta1.Msg#createValidator}.
                 * @param error Error, if any
                 * @param [response] MsgCreateValidatorResponse
                 */
                type CreateValidatorCallback = (
                    error: Error | null,
                    response?: cosmos.staking.v1beta1.MsgCreateValidatorResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.staking.v1beta1.Msg#editValidator}.
                 * @param error Error, if any
                 * @param [response] MsgEditValidatorResponse
                 */
                type EditValidatorCallback = (
                    error: Error | null,
                    response?: cosmos.staking.v1beta1.MsgEditValidatorResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.staking.v1beta1.Msg#delegate}.
                 * @param error Error, if any
                 * @param [response] MsgDelegateResponse
                 */
                type DelegateCallback = (
                    error: Error | null,
                    response?: cosmos.staking.v1beta1.MsgDelegateResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.staking.v1beta1.Msg#beginRedelegate}.
                 * @param error Error, if any
                 * @param [response] MsgBeginRedelegateResponse
                 */
                type BeginRedelegateCallback = (
                    error: Error | null,
                    response?: cosmos.staking.v1beta1.MsgBeginRedelegateResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.staking.v1beta1.Msg#undelegate}.
                 * @param error Error, if any
                 * @param [response] MsgUndelegateResponse
                 */
                type UndelegateCallback = (
                    error: Error | null,
                    response?: cosmos.staking.v1beta1.MsgUndelegateResponse,
                ) => void;
            }

            /** Properties of a MsgCreateValidator. */
            interface IMsgCreateValidator {
                /** MsgCreateValidator description */
                description?: cosmos.staking.v1beta1.IDescription | null;

                /** MsgCreateValidator commission */
                commission?: cosmos.staking.v1beta1.ICommissionRates | null;

                /** MsgCreateValidator minSelfDelegation */
                minSelfDelegation?: string | null;

                /** MsgCreateValidator delegatorAddress */
                delegatorAddress?: string | null;

                /** MsgCreateValidator validatorAddress */
                validatorAddress?: string | null;

                /** MsgCreateValidator pubkey */
                pubkey?: google.protobuf.IAny | null;

                /** MsgCreateValidator value */
                value?: cosmos.base.v1beta1.ICoin | null;
            }

            /** Represents a MsgCreateValidator. */
            class MsgCreateValidator implements IMsgCreateValidator {
                /**
                 * Constructs a new MsgCreateValidator.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgCreateValidator);

                /** MsgCreateValidator description. */
                public description?: cosmos.staking.v1beta1.IDescription | null;

                /** MsgCreateValidator commission. */
                public commission?: cosmos.staking.v1beta1.ICommissionRates | null;

                /** MsgCreateValidator minSelfDelegation. */
                public minSelfDelegation: string;

                /** MsgCreateValidator delegatorAddress. */
                public delegatorAddress: string;

                /** MsgCreateValidator validatorAddress. */
                public validatorAddress: string;

                /** MsgCreateValidator pubkey. */
                public pubkey?: google.protobuf.IAny | null;

                /** MsgCreateValidator value. */
                public value?: cosmos.base.v1beta1.ICoin | null;

                /**
                 * Creates a new MsgCreateValidator instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgCreateValidator instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgCreateValidator,
                ): cosmos.staking.v1beta1.MsgCreateValidator;

                /**
                 * Encodes the specified MsgCreateValidator message. Does not implicitly {@link cosmos.staking.v1beta1.MsgCreateValidator.verify|verify} messages.
                 * @param m MsgCreateValidator message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgCreateValidator,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgCreateValidator message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgCreateValidator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgCreateValidator;
            }

            /** Properties of a MsgCreateValidatorResponse. */
            interface IMsgCreateValidatorResponse {}

            /** Represents a MsgCreateValidatorResponse. */
            class MsgCreateValidatorResponse implements IMsgCreateValidatorResponse {
                /**
                 * Constructs a new MsgCreateValidatorResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgCreateValidatorResponse);

                /**
                 * Creates a new MsgCreateValidatorResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgCreateValidatorResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgCreateValidatorResponse,
                ): cosmos.staking.v1beta1.MsgCreateValidatorResponse;

                /**
                 * Encodes the specified MsgCreateValidatorResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgCreateValidatorResponse.verify|verify} messages.
                 * @param m MsgCreateValidatorResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgCreateValidatorResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgCreateValidatorResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgCreateValidatorResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgCreateValidatorResponse;
            }

            /** Properties of a MsgEditValidator. */
            interface IMsgEditValidator {
                /** MsgEditValidator description */
                description?: cosmos.staking.v1beta1.IDescription | null;

                /** MsgEditValidator validatorAddress */
                validatorAddress?: string | null;

                /** MsgEditValidator commissionRate */
                commissionRate?: string | null;

                /** MsgEditValidator minSelfDelegation */
                minSelfDelegation?: string | null;
            }

            /** Represents a MsgEditValidator. */
            class MsgEditValidator implements IMsgEditValidator {
                /**
                 * Constructs a new MsgEditValidator.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgEditValidator);

                /** MsgEditValidator description. */
                public description?: cosmos.staking.v1beta1.IDescription | null;

                /** MsgEditValidator validatorAddress. */
                public validatorAddress: string;

                /** MsgEditValidator commissionRate. */
                public commissionRate: string;

                /** MsgEditValidator minSelfDelegation. */
                public minSelfDelegation: string;

                /**
                 * Creates a new MsgEditValidator instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgEditValidator instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgEditValidator,
                ): cosmos.staking.v1beta1.MsgEditValidator;

                /**
                 * Encodes the specified MsgEditValidator message. Does not implicitly {@link cosmos.staking.v1beta1.MsgEditValidator.verify|verify} messages.
                 * @param m MsgEditValidator message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgEditValidator,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgEditValidator message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgEditValidator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgEditValidator;
            }

            /** Properties of a MsgEditValidatorResponse. */
            interface IMsgEditValidatorResponse {}

            /** Represents a MsgEditValidatorResponse. */
            class MsgEditValidatorResponse implements IMsgEditValidatorResponse {
                /**
                 * Constructs a new MsgEditValidatorResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgEditValidatorResponse);

                /**
                 * Creates a new MsgEditValidatorResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgEditValidatorResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgEditValidatorResponse,
                ): cosmos.staking.v1beta1.MsgEditValidatorResponse;

                /**
                 * Encodes the specified MsgEditValidatorResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgEditValidatorResponse.verify|verify} messages.
                 * @param m MsgEditValidatorResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgEditValidatorResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgEditValidatorResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgEditValidatorResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgEditValidatorResponse;
            }

            /** Properties of a MsgDelegate. */
            interface IMsgDelegate {
                /** MsgDelegate delegatorAddress */
                delegatorAddress?: string | null;

                /** MsgDelegate validatorAddress */
                validatorAddress?: string | null;

                /** MsgDelegate amount */
                amount?: cosmos.base.v1beta1.ICoin | null;
            }

            /** Represents a MsgDelegate. */
            class MsgDelegate implements IMsgDelegate {
                /**
                 * Constructs a new MsgDelegate.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgDelegate);

                /** MsgDelegate delegatorAddress. */
                public delegatorAddress: string;

                /** MsgDelegate validatorAddress. */
                public validatorAddress: string;

                /** MsgDelegate amount. */
                public amount?: cosmos.base.v1beta1.ICoin | null;

                /**
                 * Creates a new MsgDelegate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgDelegate instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgDelegate,
                ): cosmos.staking.v1beta1.MsgDelegate;

                /**
                 * Encodes the specified MsgDelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgDelegate.verify|verify} messages.
                 * @param m MsgDelegate message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IMsgDelegate, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgDelegate message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgDelegate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.staking.v1beta1.MsgDelegate;
            }

            /** Properties of a MsgDelegateResponse. */
            interface IMsgDelegateResponse {}

            /** Represents a MsgDelegateResponse. */
            class MsgDelegateResponse implements IMsgDelegateResponse {
                /**
                 * Constructs a new MsgDelegateResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgDelegateResponse);

                /**
                 * Creates a new MsgDelegateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgDelegateResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgDelegateResponse,
                ): cosmos.staking.v1beta1.MsgDelegateResponse;

                /**
                 * Encodes the specified MsgDelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgDelegateResponse.verify|verify} messages.
                 * @param m MsgDelegateResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgDelegateResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgDelegateResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgDelegateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgDelegateResponse;
            }

            /** Properties of a MsgBeginRedelegate. */
            interface IMsgBeginRedelegate {
                /** MsgBeginRedelegate delegatorAddress */
                delegatorAddress?: string | null;

                /** MsgBeginRedelegate validatorSrcAddress */
                validatorSrcAddress?: string | null;

                /** MsgBeginRedelegate validatorDstAddress */
                validatorDstAddress?: string | null;

                /** MsgBeginRedelegate amount */
                amount?: cosmos.base.v1beta1.ICoin | null;
            }

            /** Represents a MsgBeginRedelegate. */
            class MsgBeginRedelegate implements IMsgBeginRedelegate {
                /**
                 * Constructs a new MsgBeginRedelegate.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgBeginRedelegate);

                /** MsgBeginRedelegate delegatorAddress. */
                public delegatorAddress: string;

                /** MsgBeginRedelegate validatorSrcAddress. */
                public validatorSrcAddress: string;

                /** MsgBeginRedelegate validatorDstAddress. */
                public validatorDstAddress: string;

                /** MsgBeginRedelegate amount. */
                public amount?: cosmos.base.v1beta1.ICoin | null;

                /**
                 * Creates a new MsgBeginRedelegate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBeginRedelegate instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgBeginRedelegate,
                ): cosmos.staking.v1beta1.MsgBeginRedelegate;

                /**
                 * Encodes the specified MsgBeginRedelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgBeginRedelegate.verify|verify} messages.
                 * @param m MsgBeginRedelegate message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgBeginRedelegate,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgBeginRedelegate message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgBeginRedelegate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgBeginRedelegate;
            }

            /** Properties of a MsgBeginRedelegateResponse. */
            interface IMsgBeginRedelegateResponse {
                /** MsgBeginRedelegateResponse completionTime */
                completionTime?: google.protobuf.ITimestamp | null;
            }

            /** Represents a MsgBeginRedelegateResponse. */
            class MsgBeginRedelegateResponse implements IMsgBeginRedelegateResponse {
                /**
                 * Constructs a new MsgBeginRedelegateResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse);

                /** MsgBeginRedelegateResponse completionTime. */
                public completionTime?: google.protobuf.ITimestamp | null;

                /**
                 * Creates a new MsgBeginRedelegateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBeginRedelegateResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse,
                ): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;

                /**
                 * Encodes the specified MsgBeginRedelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgBeginRedelegateResponse.verify|verify} messages.
                 * @param m MsgBeginRedelegateResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgBeginRedelegateResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgBeginRedelegateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;
            }

            /** Properties of a MsgUndelegate. */
            interface IMsgUndelegate {
                /** MsgUndelegate delegatorAddress */
                delegatorAddress?: string | null;

                /** MsgUndelegate validatorAddress */
                validatorAddress?: string | null;

                /** MsgUndelegate amount */
                amount?: cosmos.base.v1beta1.ICoin | null;
            }

            /** Represents a MsgUndelegate. */
            class MsgUndelegate implements IMsgUndelegate {
                /**
                 * Constructs a new MsgUndelegate.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgUndelegate);

                /** MsgUndelegate delegatorAddress. */
                public delegatorAddress: string;

                /** MsgUndelegate validatorAddress. */
                public validatorAddress: string;

                /** MsgUndelegate amount. */
                public amount?: cosmos.base.v1beta1.ICoin | null;

                /**
                 * Creates a new MsgUndelegate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgUndelegate instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgUndelegate,
                ): cosmos.staking.v1beta1.MsgUndelegate;

                /**
                 * Encodes the specified MsgUndelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgUndelegate.verify|verify} messages.
                 * @param m MsgUndelegate message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.staking.v1beta1.IMsgUndelegate, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgUndelegate message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgUndelegate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgUndelegate;
            }

            /** Properties of a MsgUndelegateResponse. */
            interface IMsgUndelegateResponse {
                /** MsgUndelegateResponse completionTime */
                completionTime?: google.protobuf.ITimestamp | null;
            }

            /** Represents a MsgUndelegateResponse. */
            class MsgUndelegateResponse implements IMsgUndelegateResponse {
                /**
                 * Constructs a new MsgUndelegateResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.staking.v1beta1.IMsgUndelegateResponse);

                /** MsgUndelegateResponse completionTime. */
                public completionTime?: google.protobuf.ITimestamp | null;

                /**
                 * Creates a new MsgUndelegateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgUndelegateResponse instance
                 */
                public static create(
                    properties?: cosmos.staking.v1beta1.IMsgUndelegateResponse,
                ): cosmos.staking.v1beta1.MsgUndelegateResponse;

                /**
                 * Encodes the specified MsgUndelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgUndelegateResponse.verify|verify} messages.
                 * @param m MsgUndelegateResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.staking.v1beta1.IMsgUndelegateResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgUndelegateResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgUndelegateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.staking.v1beta1.MsgUndelegateResponse;
            }
        }
    }

    /** Namespace slashing. */
    namespace slashing {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls Unjail.
                 * @param request MsgUnjail message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgUnjailResponse
                 */
                public unjail(
                    request: cosmos.slashing.v1beta1.IMsgUnjail,
                    callback: cosmos.slashing.v1beta1.Msg.UnjailCallback,
                ): void;

                /**
                 * Calls Unjail.
                 * @param request MsgUnjail message or plain object
                 * @returns Promise
                 */
                public unjail(
                    request: cosmos.slashing.v1beta1.IMsgUnjail,
                ): Promise<cosmos.slashing.v1beta1.MsgUnjailResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link cosmos.slashing.v1beta1.Msg#unjail}.
                 * @param error Error, if any
                 * @param [response] MsgUnjailResponse
                 */
                type UnjailCallback = (
                    error: Error | null,
                    response?: cosmos.slashing.v1beta1.MsgUnjailResponse,
                ) => void;
            }

            /** Properties of a MsgUnjail. */
            interface IMsgUnjail {
                /** MsgUnjail validatorAddr */
                validatorAddr?: string | null;
            }

            /** Represents a MsgUnjail. */
            class MsgUnjail implements IMsgUnjail {
                /**
                 * Constructs a new MsgUnjail.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.slashing.v1beta1.IMsgUnjail);

                /** MsgUnjail validatorAddr. */
                public validatorAddr: string;

                /**
                 * Creates a new MsgUnjail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgUnjail instance
                 */
                public static create(
                    properties?: cosmos.slashing.v1beta1.IMsgUnjail,
                ): cosmos.slashing.v1beta1.MsgUnjail;

                /**
                 * Encodes the specified MsgUnjail message. Does not implicitly {@link cosmos.slashing.v1beta1.MsgUnjail.verify|verify} messages.
                 * @param m MsgUnjail message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.slashing.v1beta1.IMsgUnjail, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgUnjail message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgUnjail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.slashing.v1beta1.MsgUnjail;
            }

            /** Properties of a MsgUnjailResponse. */
            interface IMsgUnjailResponse {}

            /** Represents a MsgUnjailResponse. */
            class MsgUnjailResponse implements IMsgUnjailResponse {
                /**
                 * Constructs a new MsgUnjailResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.slashing.v1beta1.IMsgUnjailResponse);

                /**
                 * Creates a new MsgUnjailResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgUnjailResponse instance
                 */
                public static create(
                    properties?: cosmos.slashing.v1beta1.IMsgUnjailResponse,
                ): cosmos.slashing.v1beta1.MsgUnjailResponse;

                /**
                 * Encodes the specified MsgUnjailResponse message. Does not implicitly {@link cosmos.slashing.v1beta1.MsgUnjailResponse.verify|verify} messages.
                 * @param m MsgUnjailResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.slashing.v1beta1.IMsgUnjailResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgUnjailResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgUnjailResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.slashing.v1beta1.MsgUnjailResponse;
            }
        }
    }

    /** Namespace base. */
    namespace base {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a Coin. */
            interface ICoin {
                /** Coin denom */
                denom?: string | null;

                /** Coin amount */
                amount?: string | null;
            }

            /** Represents a Coin. */
            class Coin implements ICoin {
                /**
                 * Constructs a new Coin.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Creates a new Coin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Coin instance
                 */
                public static create(properties?: cosmos.base.v1beta1.ICoin): cosmos.base.v1beta1.Coin;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param m Coin message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.base.v1beta1.ICoin, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.Coin;
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {
                /** DecCoin denom */
                denom?: string | null;

                /** DecCoin amount */
                amount?: string | null;
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {
                /**
                 * Constructs a new DecCoin.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Creates a new DecCoin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DecCoin instance
                 */
                public static create(properties?: cosmos.base.v1beta1.IDecCoin): cosmos.base.v1beta1.DecCoin;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param m DecCoin message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.base.v1beta1.IDecCoin, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.DecCoin;
            }

            /** Properties of an IntProto. */
            interface IIntProto {
                /** IntProto int */
                int?: string | null;
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {
                /**
                 * Constructs a new IntProto.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Creates a new IntProto instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IntProto instance
                 */
                public static create(properties?: cosmos.base.v1beta1.IIntProto): cosmos.base.v1beta1.IntProto;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param m IntProto message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.base.v1beta1.IIntProto, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.IntProto;
            }

            /** Properties of a DecProto. */
            interface IDecProto {
                /** DecProto dec */
                dec?: string | null;
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {
                /**
                 * Constructs a new DecProto.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Creates a new DecProto instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DecProto instance
                 */
                public static create(properties?: cosmos.base.v1beta1.IDecProto): cosmos.base.v1beta1.DecProto;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param m DecProto message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.base.v1beta1.IDecProto, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.DecProto;
            }
        }
    }

    /** Namespace crypto. */
    namespace crypto {
        /** Namespace multisig. */
        namespace multisig {
            /** Namespace v1beta1. */
            namespace v1beta1 {
                /** Properties of a MultiSignature. */
                interface IMultiSignature {
                    /** MultiSignature signatures */
                    signatures?: Uint8Array[] | null;
                }

                /** Represents a MultiSignature. */
                class MultiSignature implements IMultiSignature {
                    /**
                     * Constructs a new MultiSignature.
                     * @param [p] Properties to set
                     */
                    constructor(p?: cosmos.crypto.multisig.v1beta1.IMultiSignature);

                    /** MultiSignature signatures. */
                    public signatures: Uint8Array[];

                    /**
                     * Creates a new MultiSignature instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MultiSignature instance
                     */
                    public static create(
                        properties?: cosmos.crypto.multisig.v1beta1.IMultiSignature,
                    ): cosmos.crypto.multisig.v1beta1.MultiSignature;

                    /**
                     * Encodes the specified MultiSignature message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.MultiSignature.verify|verify} messages.
                     * @param m MultiSignature message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: cosmos.crypto.multisig.v1beta1.IMultiSignature,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MultiSignature message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MultiSignature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): cosmos.crypto.multisig.v1beta1.MultiSignature;
                }

                /** Properties of a CompactBitArray. */
                interface ICompactBitArray {
                    /** CompactBitArray extraBitsStored */
                    extraBitsStored?: number | null;

                    /** CompactBitArray elems */
                    elems?: Uint8Array | null;
                }

                /** Represents a CompactBitArray. */
                class CompactBitArray implements ICompactBitArray {
                    /**
                     * Constructs a new CompactBitArray.
                     * @param [p] Properties to set
                     */
                    constructor(p?: cosmos.crypto.multisig.v1beta1.ICompactBitArray);

                    /** CompactBitArray extraBitsStored. */
                    public extraBitsStored: number;

                    /** CompactBitArray elems. */
                    public elems: Uint8Array;

                    /**
                     * Creates a new CompactBitArray instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompactBitArray instance
                     */
                    public static create(
                        properties?: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
                    ): cosmos.crypto.multisig.v1beta1.CompactBitArray;

                    /**
                     * Encodes the specified CompactBitArray message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.CompactBitArray.verify|verify} messages.
                     * @param m CompactBitArray message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a CompactBitArray message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns CompactBitArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): cosmos.crypto.multisig.v1beta1.CompactBitArray;
                }
            }

            /** Properties of a LegacyAminoPubKey. */
            interface ILegacyAminoPubKey {
                /** LegacyAminoPubKey threshold */
                threshold?: number | null;

                /** LegacyAminoPubKey publicKeys */
                publicKeys?: google.protobuf.IAny[] | null;
            }

            /** Represents a LegacyAminoPubKey. */
            class LegacyAminoPubKey implements ILegacyAminoPubKey {
                /**
                 * Constructs a new LegacyAminoPubKey.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.crypto.multisig.ILegacyAminoPubKey);

                /** LegacyAminoPubKey threshold. */
                public threshold: number;

                /** LegacyAminoPubKey publicKeys. */
                public publicKeys: google.protobuf.IAny[];

                /**
                 * Creates a new LegacyAminoPubKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LegacyAminoPubKey instance
                 */
                public static create(
                    properties?: cosmos.crypto.multisig.ILegacyAminoPubKey,
                ): cosmos.crypto.multisig.LegacyAminoPubKey;

                /**
                 * Encodes the specified LegacyAminoPubKey message. Does not implicitly {@link cosmos.crypto.multisig.LegacyAminoPubKey.verify|verify} messages.
                 * @param m LegacyAminoPubKey message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.crypto.multisig.ILegacyAminoPubKey,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a LegacyAminoPubKey message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns LegacyAminoPubKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.crypto.multisig.LegacyAminoPubKey;
            }
        }

        /** Namespace secp256k1. */
        namespace secp256k1 {
            /** Properties of a PubKey. */
            interface IPubKey {
                /** PubKey key */
                key?: Uint8Array | null;
            }

            /** Represents a PubKey. */
            class PubKey implements IPubKey {
                /**
                 * Constructs a new PubKey.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.crypto.secp256k1.IPubKey);

                /** PubKey key. */
                public key: Uint8Array;

                /**
                 * Creates a new PubKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubKey instance
                 */
                public static create(properties?: cosmos.crypto.secp256k1.IPubKey): cosmos.crypto.secp256k1.PubKey;

                /**
                 * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PubKey.verify|verify} messages.
                 * @param m PubKey message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.crypto.secp256k1.IPubKey, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubKey message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns PubKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.secp256k1.PubKey;
            }

            /** Properties of a PrivKey. */
            interface IPrivKey {
                /** PrivKey key */
                key?: Uint8Array | null;
            }

            /** Represents a PrivKey. */
            class PrivKey implements IPrivKey {
                /**
                 * Constructs a new PrivKey.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.crypto.secp256k1.IPrivKey);

                /** PrivKey key. */
                public key: Uint8Array;

                /**
                 * Creates a new PrivKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrivKey instance
                 */
                public static create(properties?: cosmos.crypto.secp256k1.IPrivKey): cosmos.crypto.secp256k1.PrivKey;

                /**
                 * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PrivKey.verify|verify} messages.
                 * @param m PrivKey message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.crypto.secp256k1.IPrivKey, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrivKey message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns PrivKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.secp256k1.PrivKey;
            }
        }

        /** Namespace ed25519. */
        namespace ed25519 {
            /** Properties of a PubKey. */
            interface IPubKey {
                /** PubKey key */
                key?: Uint8Array | null;
            }

            /** Represents a PubKey. */
            class PubKey implements IPubKey {
                /**
                 * Constructs a new PubKey.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.crypto.ed25519.IPubKey);

                /** PubKey key. */
                public key: Uint8Array;

                /**
                 * Creates a new PubKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubKey instance
                 */
                public static create(properties?: cosmos.crypto.ed25519.IPubKey): cosmos.crypto.ed25519.PubKey;

                /**
                 * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.ed25519.PubKey.verify|verify} messages.
                 * @param m PubKey message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.crypto.ed25519.IPubKey, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubKey message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns PubKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.ed25519.PubKey;
            }

            /** Properties of a PrivKey. */
            interface IPrivKey {
                /** PrivKey key */
                key?: Uint8Array | null;
            }

            /** Represents a PrivKey. */
            class PrivKey implements IPrivKey {
                /**
                 * Constructs a new PrivKey.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.crypto.ed25519.IPrivKey);

                /** PrivKey key. */
                public key: Uint8Array;

                /**
                 * Creates a new PrivKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrivKey instance
                 */
                public static create(properties?: cosmos.crypto.ed25519.IPrivKey): cosmos.crypto.ed25519.PrivKey;

                /**
                 * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.ed25519.PrivKey.verify|verify} messages.
                 * @param m PrivKey message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.crypto.ed25519.IPrivKey, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrivKey message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns PrivKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.ed25519.PrivKey;
            }
        }
    }

    /** Namespace tx. */
    namespace tx {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a Tx. */
            interface ITx {
                /** Tx body */
                body?: cosmos.tx.v1beta1.ITxBody | null;

                /** Tx authInfo */
                authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

                /** Tx signatures */
                signatures?: Uint8Array[] | null;
            }

            /** Represents a Tx. */
            class Tx implements ITx {
                /**
                 * Constructs a new Tx.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.ITx);

                /** Tx body. */
                public body?: cosmos.tx.v1beta1.ITxBody | null;

                /** Tx authInfo. */
                public authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

                /** Tx signatures. */
                public signatures: Uint8Array[];

                /**
                 * Creates a new Tx instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Tx instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.ITx): cosmos.tx.v1beta1.Tx;

                /**
                 * Encodes the specified Tx message. Does not implicitly {@link cosmos.tx.v1beta1.Tx.verify|verify} messages.
                 * @param m Tx message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.ITx, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Tx message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Tx
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.Tx;
            }

            /** Properties of a TxRaw. */
            interface ITxRaw {
                /** TxRaw bodyBytes */
                bodyBytes?: Uint8Array | null;

                /** TxRaw authInfoBytes */
                authInfoBytes?: Uint8Array | null;

                /** TxRaw signatures */
                signatures?: Uint8Array[] | null;
            }

            /** Represents a TxRaw. */
            class TxRaw implements ITxRaw {
                /**
                 * Constructs a new TxRaw.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.ITxRaw);

                /** TxRaw bodyBytes. */
                public bodyBytes: Uint8Array;

                /** TxRaw authInfoBytes. */
                public authInfoBytes: Uint8Array;

                /** TxRaw signatures. */
                public signatures: Uint8Array[];

                /**
                 * Creates a new TxRaw instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TxRaw instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.ITxRaw): cosmos.tx.v1beta1.TxRaw;

                /**
                 * Encodes the specified TxRaw message. Does not implicitly {@link cosmos.tx.v1beta1.TxRaw.verify|verify} messages.
                 * @param m TxRaw message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.ITxRaw, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TxRaw message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns TxRaw
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.TxRaw;
            }

            /** Properties of a SignDoc. */
            interface ISignDoc {
                /** SignDoc bodyBytes */
                bodyBytes?: Uint8Array | null;

                /** SignDoc authInfoBytes */
                authInfoBytes?: Uint8Array | null;

                /** SignDoc chainId */
                chainId?: string | null;

                /** SignDoc accountNumber */
                accountNumber?: Long | null;
            }

            /** Represents a SignDoc. */
            class SignDoc implements ISignDoc {
                /**
                 * Constructs a new SignDoc.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.ISignDoc);

                /** SignDoc bodyBytes. */
                public bodyBytes: Uint8Array;

                /** SignDoc authInfoBytes. */
                public authInfoBytes: Uint8Array;

                /** SignDoc chainId. */
                public chainId: string;

                /** SignDoc accountNumber. */
                public accountNumber: Long;

                /**
                 * Creates a new SignDoc instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SignDoc instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.ISignDoc): cosmos.tx.v1beta1.SignDoc;

                /**
                 * Encodes the specified SignDoc message. Does not implicitly {@link cosmos.tx.v1beta1.SignDoc.verify|verify} messages.
                 * @param m SignDoc message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.ISignDoc, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SignDoc message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns SignDoc
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.SignDoc;
            }

            /** Properties of a TxBody. */
            interface ITxBody {
                /** TxBody messages */
                messages?: google.protobuf.IAny[] | null;

                /** TxBody memo */
                memo?: string | null;

                /** TxBody timeoutHeight */
                timeoutHeight?: Long | null;

                /** TxBody extensionOptions */
                extensionOptions?: google.protobuf.IAny[] | null;

                /** TxBody nonCriticalExtensionOptions */
                nonCriticalExtensionOptions?: google.protobuf.IAny[] | null;
            }

            /** Represents a TxBody. */
            class TxBody implements ITxBody {
                /**
                 * Constructs a new TxBody.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.ITxBody);

                /** TxBody messages. */
                public messages: google.protobuf.IAny[];

                /** TxBody memo. */
                public memo: string;

                /** TxBody timeoutHeight. */
                public timeoutHeight: Long;

                /** TxBody extensionOptions. */
                public extensionOptions: google.protobuf.IAny[];

                /** TxBody nonCriticalExtensionOptions. */
                public nonCriticalExtensionOptions: google.protobuf.IAny[];

                /**
                 * Creates a new TxBody instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TxBody instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.ITxBody): cosmos.tx.v1beta1.TxBody;

                /**
                 * Encodes the specified TxBody message. Does not implicitly {@link cosmos.tx.v1beta1.TxBody.verify|verify} messages.
                 * @param m TxBody message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.ITxBody, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TxBody message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns TxBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.TxBody;
            }

            /** Properties of an AuthInfo. */
            interface IAuthInfo {
                /** AuthInfo signerInfos */
                signerInfos?: cosmos.tx.v1beta1.ISignerInfo[] | null;

                /** AuthInfo fee */
                fee?: cosmos.tx.v1beta1.IFee | null;
            }

            /** Represents an AuthInfo. */
            class AuthInfo implements IAuthInfo {
                /**
                 * Constructs a new AuthInfo.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.IAuthInfo);

                /** AuthInfo signerInfos. */
                public signerInfos: cosmos.tx.v1beta1.ISignerInfo[];

                /** AuthInfo fee. */
                public fee?: cosmos.tx.v1beta1.IFee | null;

                /**
                 * Creates a new AuthInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthInfo instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.IAuthInfo): cosmos.tx.v1beta1.AuthInfo;

                /**
                 * Encodes the specified AuthInfo message. Does not implicitly {@link cosmos.tx.v1beta1.AuthInfo.verify|verify} messages.
                 * @param m AuthInfo message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.IAuthInfo, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthInfo message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns AuthInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.AuthInfo;
            }

            /** Properties of a SignerInfo. */
            interface ISignerInfo {
                /** SignerInfo publicKey */
                publicKey?: google.protobuf.IAny | null;

                /** SignerInfo modeInfo */
                modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

                /** SignerInfo sequence */
                sequence?: Long | null;
            }

            /** Represents a SignerInfo. */
            class SignerInfo implements ISignerInfo {
                /**
                 * Constructs a new SignerInfo.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.ISignerInfo);

                /** SignerInfo publicKey. */
                public publicKey?: google.protobuf.IAny | null;

                /** SignerInfo modeInfo. */
                public modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

                /** SignerInfo sequence. */
                public sequence: Long;

                /**
                 * Creates a new SignerInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SignerInfo instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.ISignerInfo): cosmos.tx.v1beta1.SignerInfo;

                /**
                 * Encodes the specified SignerInfo message. Does not implicitly {@link cosmos.tx.v1beta1.SignerInfo.verify|verify} messages.
                 * @param m SignerInfo message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.ISignerInfo, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SignerInfo message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns SignerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.SignerInfo;
            }

            /** Properties of a ModeInfo. */
            interface IModeInfo {
                /** ModeInfo single */
                single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

                /** ModeInfo multi */
                multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;
            }

            /** Represents a ModeInfo. */
            class ModeInfo implements IModeInfo {
                /**
                 * Constructs a new ModeInfo.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.IModeInfo);

                /** ModeInfo single. */
                public single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

                /** ModeInfo multi. */
                public multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;

                /** ModeInfo sum. */
                public sum?: 'single' | 'multi';

                /**
                 * Creates a new ModeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ModeInfo instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.IModeInfo): cosmos.tx.v1beta1.ModeInfo;

                /**
                 * Encodes the specified ModeInfo message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.verify|verify} messages.
                 * @param m ModeInfo message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.IModeInfo, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ModeInfo message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ModeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.ModeInfo;
            }

            namespace ModeInfo {
                /** Properties of a Single. */
                interface ISingle {
                    /** Single mode */
                    mode?: cosmos.tx.signing.v1beta1.SignMode | null;
                }

                /** Represents a Single. */
                class Single implements ISingle {
                    /**
                     * Constructs a new Single.
                     * @param [p] Properties to set
                     */
                    constructor(p?: cosmos.tx.v1beta1.ModeInfo.ISingle);

                    /** Single mode. */
                    public mode: cosmos.tx.signing.v1beta1.SignMode;

                    /**
                     * Creates a new Single instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Single instance
                     */
                    public static create(
                        properties?: cosmos.tx.v1beta1.ModeInfo.ISingle,
                    ): cosmos.tx.v1beta1.ModeInfo.Single;

                    /**
                     * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Single.verify|verify} messages.
                     * @param m Single message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: cosmos.tx.v1beta1.ModeInfo.ISingle, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Single message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Single
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): cosmos.tx.v1beta1.ModeInfo.Single;
                }

                /** Properties of a Multi. */
                interface IMulti {
                    /** Multi bitarray */
                    bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

                    /** Multi modeInfos */
                    modeInfos?: cosmos.tx.v1beta1.IModeInfo[] | null;
                }

                /** Represents a Multi. */
                class Multi implements IMulti {
                    /**
                     * Constructs a new Multi.
                     * @param [p] Properties to set
                     */
                    constructor(p?: cosmos.tx.v1beta1.ModeInfo.IMulti);

                    /** Multi bitarray. */
                    public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

                    /** Multi modeInfos. */
                    public modeInfos: cosmos.tx.v1beta1.IModeInfo[];

                    /**
                     * Creates a new Multi instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Multi instance
                     */
                    public static create(
                        properties?: cosmos.tx.v1beta1.ModeInfo.IMulti,
                    ): cosmos.tx.v1beta1.ModeInfo.Multi;

                    /**
                     * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Multi.verify|verify} messages.
                     * @param m Multi message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: cosmos.tx.v1beta1.ModeInfo.IMulti, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Multi message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Multi
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): cosmos.tx.v1beta1.ModeInfo.Multi;
                }
            }

            /** Properties of a Fee. */
            interface IFee {
                /** Fee amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;

                /** Fee gasLimit */
                gasLimit?: Long | null;

                /** Fee payer */
                payer?: string | null;

                /** Fee granter */
                granter?: string | null;
            }

            /** Represents a Fee. */
            class Fee implements IFee {
                /**
                 * Constructs a new Fee.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.tx.v1beta1.IFee);

                /** Fee amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /** Fee gasLimit. */
                public gasLimit: Long;

                /** Fee payer. */
                public payer: string;

                /** Fee granter. */
                public granter: string;

                /**
                 * Creates a new Fee instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Fee instance
                 */
                public static create(properties?: cosmos.tx.v1beta1.IFee): cosmos.tx.v1beta1.Fee;

                /**
                 * Encodes the specified Fee message. Does not implicitly {@link cosmos.tx.v1beta1.Fee.verify|verify} messages.
                 * @param m Fee message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.tx.v1beta1.IFee, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Fee message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Fee
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.Fee;
            }
        }

        /** Namespace signing. */
        namespace signing {
            /** Namespace v1beta1. */
            namespace v1beta1 {
                /** SignMode enum. */
                enum SignMode {
                    SIGN_MODE_UNSPECIFIED = 0,
                    SIGN_MODE_DIRECT = 1,
                    SIGN_MODE_TEXTUAL = 2,
                    SIGN_MODE_LEGACY_AMINO_JSON = 127,
                }

                /** Properties of a SignatureDescriptors. */
                interface ISignatureDescriptors {
                    /** SignatureDescriptors signatures */
                    signatures?: cosmos.tx.signing.v1beta1.ISignatureDescriptor[] | null;
                }

                /** Represents a SignatureDescriptors. */
                class SignatureDescriptors implements ISignatureDescriptors {
                    /**
                     * Constructs a new SignatureDescriptors.
                     * @param [p] Properties to set
                     */
                    constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptors);

                    /** SignatureDescriptors signatures. */
                    public signatures: cosmos.tx.signing.v1beta1.ISignatureDescriptor[];

                    /**
                     * Creates a new SignatureDescriptors instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignatureDescriptors instance
                     */
                    public static create(
                        properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
                    ): cosmos.tx.signing.v1beta1.SignatureDescriptors;

                    /**
                     * Encodes the specified SignatureDescriptors message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptors.verify|verify} messages.
                     * @param m SignatureDescriptors message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a SignatureDescriptors message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns SignatureDescriptors
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): cosmos.tx.signing.v1beta1.SignatureDescriptors;
                }

                /** Properties of a SignatureDescriptor. */
                interface ISignatureDescriptor {
                    /** SignatureDescriptor publicKey */
                    publicKey?: google.protobuf.IAny | null;

                    /** SignatureDescriptor data */
                    data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

                    /** SignatureDescriptor sequence */
                    sequence?: Long | null;
                }

                /** Represents a SignatureDescriptor. */
                class SignatureDescriptor implements ISignatureDescriptor {
                    /**
                     * Constructs a new SignatureDescriptor.
                     * @param [p] Properties to set
                     */
                    constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptor);

                    /** SignatureDescriptor publicKey. */
                    public publicKey?: google.protobuf.IAny | null;

                    /** SignatureDescriptor data. */
                    public data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

                    /** SignatureDescriptor sequence. */
                    public sequence: Long;

                    /**
                     * Creates a new SignatureDescriptor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignatureDescriptor instance
                     */
                    public static create(
                        properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
                    ): cosmos.tx.signing.v1beta1.SignatureDescriptor;

                    /**
                     * Encodes the specified SignatureDescriptor message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.verify|verify} messages.
                     * @param m SignatureDescriptor message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a SignatureDescriptor message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns SignatureDescriptor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): cosmos.tx.signing.v1beta1.SignatureDescriptor;
                }

                namespace SignatureDescriptor {
                    /** Properties of a Data. */
                    interface IData {
                        /** Data single */
                        single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

                        /** Data multi */
                        multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;
                    }

                    /** Represents a Data. */
                    class Data implements IData {
                        /**
                         * Constructs a new Data.
                         * @param [p] Properties to set
                         */
                        constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData);

                        /** Data single. */
                        public single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

                        /** Data multi. */
                        public multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;

                        /** Data sum. */
                        public sum?: 'single' | 'multi';

                        /**
                         * Creates a new Data instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Data instance
                         */
                        public static create(
                            properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
                        ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;

                        /**
                         * Encodes the specified Data message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify|verify} messages.
                         * @param m Data message or plain object to encode
                         * @param [w] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            m: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
                            w?: $protobuf.Writer,
                        ): $protobuf.Writer;

                        /**
                         * Decodes a Data message from the specified reader or buffer.
                         * @param r Reader or buffer to decode from
                         * @param [l] Message length if known beforehand
                         * @returns Data
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            r: $protobuf.Reader | Uint8Array,
                            l?: number,
                        ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;
                    }

                    namespace Data {
                        /** Properties of a Single. */
                        interface ISingle {
                            /** Single mode */
                            mode?: cosmos.tx.signing.v1beta1.SignMode | null;

                            /** Single signature */
                            signature?: Uint8Array | null;
                        }

                        /** Represents a Single. */
                        class Single implements ISingle {
                            /**
                             * Constructs a new Single.
                             * @param [p] Properties to set
                             */
                            constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle);

                            /** Single mode. */
                            public mode: cosmos.tx.signing.v1beta1.SignMode;

                            /** Single signature. */
                            public signature: Uint8Array;

                            /**
                             * Creates a new Single instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Single instance
                             */
                            public static create(
                                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
                            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;

                            /**
                             * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify|verify} messages.
                             * @param m Single message or plain object to encode
                             * @param [w] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(
                                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
                                w?: $protobuf.Writer,
                            ): $protobuf.Writer;

                            /**
                             * Decodes a Single message from the specified reader or buffer.
                             * @param r Reader or buffer to decode from
                             * @param [l] Message length if known beforehand
                             * @returns Single
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(
                                r: $protobuf.Reader | Uint8Array,
                                l?: number,
                            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;
                        }

                        /** Properties of a Multi. */
                        interface IMulti {
                            /** Multi bitarray */
                            bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

                            /** Multi signatures */
                            signatures?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[] | null;
                        }

                        /** Represents a Multi. */
                        class Multi implements IMulti {
                            /**
                             * Constructs a new Multi.
                             * @param [p] Properties to set
                             */
                            constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti);

                            /** Multi bitarray. */
                            public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

                            /** Multi signatures. */
                            public signatures: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[];

                            /**
                             * Creates a new Multi instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Multi instance
                             */
                            public static create(
                                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
                            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;

                            /**
                             * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify|verify} messages.
                             * @param m Multi message or plain object to encode
                             * @param [w] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(
                                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
                                w?: $protobuf.Writer,
                            ): $protobuf.Writer;

                            /**
                             * Decodes a Multi message from the specified reader or buffer.
                             * @param r Reader or buffer to decode from
                             * @param [l] Message length if known beforehand
                             * @returns Multi
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(
                                r: $protobuf.Reader | Uint8Array,
                                l?: number,
                            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;
                        }
                    }
                }
            }
        }
    }

    /** Namespace gov. */
    namespace gov {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls SubmitProposal.
                 * @param request MsgSubmitProposal message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgSubmitProposalResponse
                 */
                public submitProposal(
                    request: cosmos.gov.v1beta1.IMsgSubmitProposal,
                    callback: cosmos.gov.v1beta1.Msg.SubmitProposalCallback,
                ): void;

                /**
                 * Calls SubmitProposal.
                 * @param request MsgSubmitProposal message or plain object
                 * @returns Promise
                 */
                public submitProposal(
                    request: cosmos.gov.v1beta1.IMsgSubmitProposal,
                ): Promise<cosmos.gov.v1beta1.MsgSubmitProposalResponse>;

                /**
                 * Calls Vote.
                 * @param request MsgVote message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgVoteResponse
                 */
                public vote(request: cosmos.gov.v1beta1.IMsgVote, callback: cosmos.gov.v1beta1.Msg.VoteCallback): void;

                /**
                 * Calls Vote.
                 * @param request MsgVote message or plain object
                 * @returns Promise
                 */
                public vote(request: cosmos.gov.v1beta1.IMsgVote): Promise<cosmos.gov.v1beta1.MsgVoteResponse>;

                /**
                 * Calls VoteWeighted.
                 * @param request MsgVoteWeighted message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgVoteWeightedResponse
                 */
                public voteWeighted(
                    request: cosmos.gov.v1beta1.IMsgVoteWeighted,
                    callback: cosmos.gov.v1beta1.Msg.VoteWeightedCallback,
                ): void;

                /**
                 * Calls VoteWeighted.
                 * @param request MsgVoteWeighted message or plain object
                 * @returns Promise
                 */
                public voteWeighted(
                    request: cosmos.gov.v1beta1.IMsgVoteWeighted,
                ): Promise<cosmos.gov.v1beta1.MsgVoteWeightedResponse>;

                /**
                 * Calls Deposit.
                 * @param request MsgDeposit message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgDepositResponse
                 */
                public deposit(
                    request: cosmos.gov.v1beta1.IMsgDeposit,
                    callback: cosmos.gov.v1beta1.Msg.DepositCallback,
                ): void;

                /**
                 * Calls Deposit.
                 * @param request MsgDeposit message or plain object
                 * @returns Promise
                 */
                public deposit(request: cosmos.gov.v1beta1.IMsgDeposit): Promise<cosmos.gov.v1beta1.MsgDepositResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link cosmos.gov.v1beta1.Msg#submitProposal}.
                 * @param error Error, if any
                 * @param [response] MsgSubmitProposalResponse
                 */
                type SubmitProposalCallback = (
                    error: Error | null,
                    response?: cosmos.gov.v1beta1.MsgSubmitProposalResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.gov.v1beta1.Msg#vote}.
                 * @param error Error, if any
                 * @param [response] MsgVoteResponse
                 */
                type VoteCallback = (error: Error | null, response?: cosmos.gov.v1beta1.MsgVoteResponse) => void;

                /**
                 * Callback as used by {@link cosmos.gov.v1beta1.Msg#voteWeighted}.
                 * @param error Error, if any
                 * @param [response] MsgVoteWeightedResponse
                 */
                type VoteWeightedCallback = (
                    error: Error | null,
                    response?: cosmos.gov.v1beta1.MsgVoteWeightedResponse,
                ) => void;

                /**
                 * Callback as used by {@link cosmos.gov.v1beta1.Msg#deposit}.
                 * @param error Error, if any
                 * @param [response] MsgDepositResponse
                 */
                type DepositCallback = (error: Error | null, response?: cosmos.gov.v1beta1.MsgDepositResponse) => void;
            }

            /** Properties of a MsgSubmitProposal. */
            interface IMsgSubmitProposal {
                /** MsgSubmitProposal content */
                content?: google.protobuf.IAny | null;

                /** MsgSubmitProposal initialDeposit */
                initialDeposit?: cosmos.base.v1beta1.ICoin[] | null;

                /** MsgSubmitProposal proposer */
                proposer?: string | null;
            }

            /** Represents a MsgSubmitProposal. */
            class MsgSubmitProposal implements IMsgSubmitProposal {
                /**
                 * Constructs a new MsgSubmitProposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgSubmitProposal);

                /** MsgSubmitProposal content. */
                public content?: google.protobuf.IAny | null;

                /** MsgSubmitProposal initialDeposit. */
                public initialDeposit: cosmos.base.v1beta1.ICoin[];

                /** MsgSubmitProposal proposer. */
                public proposer: string;

                /**
                 * Creates a new MsgSubmitProposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSubmitProposal instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IMsgSubmitProposal,
                ): cosmos.gov.v1beta1.MsgSubmitProposal;

                /**
                 * Encodes the specified MsgSubmitProposal message. Does not implicitly {@link cosmos.gov.v1beta1.MsgSubmitProposal.verify|verify} messages.
                 * @param m MsgSubmitProposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IMsgSubmitProposal, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSubmitProposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgSubmitProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.gov.v1beta1.MsgSubmitProposal;
            }

            /** Properties of a MsgSubmitProposalResponse. */
            interface IMsgSubmitProposalResponse {
                /** MsgSubmitProposalResponse proposalId */
                proposalId?: Long | null;
            }

            /** Represents a MsgSubmitProposalResponse. */
            class MsgSubmitProposalResponse implements IMsgSubmitProposalResponse {
                /**
                 * Constructs a new MsgSubmitProposalResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgSubmitProposalResponse);

                /** MsgSubmitProposalResponse proposalId. */
                public proposalId: Long;

                /**
                 * Creates a new MsgSubmitProposalResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSubmitProposalResponse instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IMsgSubmitProposalResponse,
                ): cosmos.gov.v1beta1.MsgSubmitProposalResponse;

                /**
                 * Encodes the specified MsgSubmitProposalResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgSubmitProposalResponse.verify|verify} messages.
                 * @param m MsgSubmitProposalResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.gov.v1beta1.IMsgSubmitProposalResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgSubmitProposalResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgSubmitProposalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.gov.v1beta1.MsgSubmitProposalResponse;
            }

            /** Properties of a MsgVote. */
            interface IMsgVote {
                /** MsgVote proposalId */
                proposalId?: Long | null;

                /** MsgVote voter */
                voter?: string | null;

                /** MsgVote option */
                option?: cosmos.gov.v1beta1.VoteOption | null;
            }

            /** Represents a MsgVote. */
            class MsgVote implements IMsgVote {
                /**
                 * Constructs a new MsgVote.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgVote);

                /** MsgVote proposalId. */
                public proposalId: Long;

                /** MsgVote voter. */
                public voter: string;

                /** MsgVote option. */
                public option: cosmos.gov.v1beta1.VoteOption;

                /**
                 * Creates a new MsgVote instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgVote instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IMsgVote): cosmos.gov.v1beta1.MsgVote;

                /**
                 * Encodes the specified MsgVote message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVote.verify|verify} messages.
                 * @param m MsgVote message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IMsgVote, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgVote message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgVote
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.MsgVote;
            }

            /** Properties of a MsgVoteResponse. */
            interface IMsgVoteResponse {}

            /** Represents a MsgVoteResponse. */
            class MsgVoteResponse implements IMsgVoteResponse {
                /**
                 * Constructs a new MsgVoteResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgVoteResponse);

                /**
                 * Creates a new MsgVoteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgVoteResponse instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IMsgVoteResponse,
                ): cosmos.gov.v1beta1.MsgVoteResponse;

                /**
                 * Encodes the specified MsgVoteResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteResponse.verify|verify} messages.
                 * @param m MsgVoteResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IMsgVoteResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgVoteResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgVoteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.MsgVoteResponse;
            }

            /** Properties of a MsgVoteWeighted. */
            interface IMsgVoteWeighted {
                /** MsgVoteWeighted proposalId */
                proposalId?: Long | null;

                /** MsgVoteWeighted voter */
                voter?: string | null;

                /** MsgVoteWeighted options */
                options?: cosmos.gov.v1beta1.IWeightedVoteOption[] | null;
            }

            /** Represents a MsgVoteWeighted. */
            class MsgVoteWeighted implements IMsgVoteWeighted {
                /**
                 * Constructs a new MsgVoteWeighted.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgVoteWeighted);

                /** MsgVoteWeighted proposalId. */
                public proposalId: Long;

                /** MsgVoteWeighted voter. */
                public voter: string;

                /** MsgVoteWeighted options. */
                public options: cosmos.gov.v1beta1.IWeightedVoteOption[];

                /**
                 * Creates a new MsgVoteWeighted instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgVoteWeighted instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IMsgVoteWeighted,
                ): cosmos.gov.v1beta1.MsgVoteWeighted;

                /**
                 * Encodes the specified MsgVoteWeighted message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteWeighted.verify|verify} messages.
                 * @param m MsgVoteWeighted message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IMsgVoteWeighted, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgVoteWeighted message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgVoteWeighted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.MsgVoteWeighted;
            }

            /** Properties of a MsgVoteWeightedResponse. */
            interface IMsgVoteWeightedResponse {}

            /** Represents a MsgVoteWeightedResponse. */
            class MsgVoteWeightedResponse implements IMsgVoteWeightedResponse {
                /**
                 * Constructs a new MsgVoteWeightedResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgVoteWeightedResponse);

                /**
                 * Creates a new MsgVoteWeightedResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgVoteWeightedResponse instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IMsgVoteWeightedResponse,
                ): cosmos.gov.v1beta1.MsgVoteWeightedResponse;

                /**
                 * Encodes the specified MsgVoteWeightedResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteWeightedResponse.verify|verify} messages.
                 * @param m MsgVoteWeightedResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.gov.v1beta1.IMsgVoteWeightedResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgVoteWeightedResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgVoteWeightedResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.gov.v1beta1.MsgVoteWeightedResponse;
            }

            /** Properties of a MsgDeposit. */
            interface IMsgDeposit {
                /** MsgDeposit proposalId */
                proposalId?: Long | null;

                /** MsgDeposit depositor */
                depositor?: string | null;

                /** MsgDeposit amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents a MsgDeposit. */
            class MsgDeposit implements IMsgDeposit {
                /**
                 * Constructs a new MsgDeposit.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgDeposit);

                /** MsgDeposit proposalId. */
                public proposalId: Long;

                /** MsgDeposit depositor. */
                public depositor: string;

                /** MsgDeposit amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new MsgDeposit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgDeposit instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IMsgDeposit): cosmos.gov.v1beta1.MsgDeposit;

                /**
                 * Encodes the specified MsgDeposit message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDeposit.verify|verify} messages.
                 * @param m MsgDeposit message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IMsgDeposit, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgDeposit message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgDeposit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.MsgDeposit;
            }

            /** Properties of a MsgDepositResponse. */
            interface IMsgDepositResponse {}

            /** Represents a MsgDepositResponse. */
            class MsgDepositResponse implements IMsgDepositResponse {
                /**
                 * Constructs a new MsgDepositResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IMsgDepositResponse);

                /**
                 * Creates a new MsgDepositResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgDepositResponse instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IMsgDepositResponse,
                ): cosmos.gov.v1beta1.MsgDepositResponse;

                /**
                 * Encodes the specified MsgDepositResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDepositResponse.verify|verify} messages.
                 * @param m MsgDepositResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IMsgDepositResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgDepositResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgDepositResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.gov.v1beta1.MsgDepositResponse;
            }

            /** VoteOption enum. */
            enum VoteOption {
                VOTE_OPTION_UNSPECIFIED = 0,
                VOTE_OPTION_YES = 1,
                VOTE_OPTION_ABSTAIN = 2,
                VOTE_OPTION_NO = 3,
                VOTE_OPTION_NO_WITH_VETO = 4,
            }

            /** Properties of a WeightedVoteOption. */
            interface IWeightedVoteOption {
                /** WeightedVoteOption option */
                option?: cosmos.gov.v1beta1.VoteOption | null;

                /** WeightedVoteOption weight */
                weight?: string | null;
            }

            /** Represents a WeightedVoteOption. */
            class WeightedVoteOption implements IWeightedVoteOption {
                /**
                 * Constructs a new WeightedVoteOption.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IWeightedVoteOption);

                /** WeightedVoteOption option. */
                public option: cosmos.gov.v1beta1.VoteOption;

                /** WeightedVoteOption weight. */
                public weight: string;

                /**
                 * Creates a new WeightedVoteOption instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WeightedVoteOption instance
                 */
                public static create(
                    properties?: cosmos.gov.v1beta1.IWeightedVoteOption,
                ): cosmos.gov.v1beta1.WeightedVoteOption;

                /**
                 * Encodes the specified WeightedVoteOption message. Does not implicitly {@link cosmos.gov.v1beta1.WeightedVoteOption.verify|verify} messages.
                 * @param m WeightedVoteOption message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IWeightedVoteOption, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WeightedVoteOption message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns WeightedVoteOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.gov.v1beta1.WeightedVoteOption;
            }

            /** Properties of a TextProposal. */
            interface ITextProposal {
                /** TextProposal title */
                title?: string | null;

                /** TextProposal description */
                description?: string | null;
            }

            /** Represents a TextProposal. */
            class TextProposal implements ITextProposal {
                /**
                 * Constructs a new TextProposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.ITextProposal);

                /** TextProposal title. */
                public title: string;

                /** TextProposal description. */
                public description: string;

                /**
                 * Creates a new TextProposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TextProposal instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.ITextProposal): cosmos.gov.v1beta1.TextProposal;

                /**
                 * Encodes the specified TextProposal message. Does not implicitly {@link cosmos.gov.v1beta1.TextProposal.verify|verify} messages.
                 * @param m TextProposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.ITextProposal, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TextProposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns TextProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.TextProposal;
            }

            /** Properties of a Deposit. */
            interface IDeposit {
                /** Deposit proposalId */
                proposalId?: Long | null;

                /** Deposit depositor */
                depositor?: string | null;

                /** Deposit amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents a Deposit. */
            class Deposit implements IDeposit {
                /**
                 * Constructs a new Deposit.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IDeposit);

                /** Deposit proposalId. */
                public proposalId: Long;

                /** Deposit depositor. */
                public depositor: string;

                /** Deposit amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Deposit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Deposit instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IDeposit): cosmos.gov.v1beta1.Deposit;

                /**
                 * Encodes the specified Deposit message. Does not implicitly {@link cosmos.gov.v1beta1.Deposit.verify|verify} messages.
                 * @param m Deposit message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IDeposit, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Deposit message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Deposit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.Deposit;
            }

            /** Properties of a Proposal. */
            interface IProposal {
                /** Proposal proposalId */
                proposalId?: Long | null;

                /** Proposal content */
                content?: google.protobuf.IAny | null;

                /** Proposal status */
                status?: cosmos.gov.v1beta1.ProposalStatus | null;

                /** Proposal finalTallyResult */
                finalTallyResult?: cosmos.gov.v1beta1.ITallyResult | null;

                /** Proposal submitTime */
                submitTime?: google.protobuf.ITimestamp | null;

                /** Proposal depositEndTime */
                depositEndTime?: google.protobuf.ITimestamp | null;

                /** Proposal totalDeposit */
                totalDeposit?: cosmos.base.v1beta1.ICoin[] | null;

                /** Proposal votingStartTime */
                votingStartTime?: google.protobuf.ITimestamp | null;

                /** Proposal votingEndTime */
                votingEndTime?: google.protobuf.ITimestamp | null;
            }

            /** Represents a Proposal. */
            class Proposal implements IProposal {
                /**
                 * Constructs a new Proposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IProposal);

                /** Proposal proposalId. */
                public proposalId: Long;

                /** Proposal content. */
                public content?: google.protobuf.IAny | null;

                /** Proposal status. */
                public status: cosmos.gov.v1beta1.ProposalStatus;

                /** Proposal finalTallyResult. */
                public finalTallyResult?: cosmos.gov.v1beta1.ITallyResult | null;

                /** Proposal submitTime. */
                public submitTime?: google.protobuf.ITimestamp | null;

                /** Proposal depositEndTime. */
                public depositEndTime?: google.protobuf.ITimestamp | null;

                /** Proposal totalDeposit. */
                public totalDeposit: cosmos.base.v1beta1.ICoin[];

                /** Proposal votingStartTime. */
                public votingStartTime?: google.protobuf.ITimestamp | null;

                /** Proposal votingEndTime. */
                public votingEndTime?: google.protobuf.ITimestamp | null;

                /**
                 * Creates a new Proposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Proposal instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IProposal): cosmos.gov.v1beta1.Proposal;

                /**
                 * Encodes the specified Proposal message. Does not implicitly {@link cosmos.gov.v1beta1.Proposal.verify|verify} messages.
                 * @param m Proposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IProposal, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Proposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Proposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.Proposal;
            }

            /** ProposalStatus enum. */
            enum ProposalStatus {
                PROPOSAL_STATUS_UNSPECIFIED = 0,
                PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
                PROPOSAL_STATUS_VOTING_PERIOD = 2,
                PROPOSAL_STATUS_PASSED = 3,
                PROPOSAL_STATUS_REJECTED = 4,
                PROPOSAL_STATUS_FAILED = 5,
            }

            /** Properties of a TallyResult. */
            interface ITallyResult {
                /** TallyResult yes */
                yes?: string | null;

                /** TallyResult abstain */
                abstain?: string | null;

                /** TallyResult no */
                no?: string | null;

                /** TallyResult noWithVeto */
                noWithVeto?: string | null;
            }

            /** Represents a TallyResult. */
            class TallyResult implements ITallyResult {
                /**
                 * Constructs a new TallyResult.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.ITallyResult);

                /** TallyResult yes. */
                public yes: string;

                /** TallyResult abstain. */
                public abstain: string;

                /** TallyResult no. */
                public no: string;

                /** TallyResult noWithVeto. */
                public noWithVeto: string;

                /**
                 * Creates a new TallyResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TallyResult instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.ITallyResult): cosmos.gov.v1beta1.TallyResult;

                /**
                 * Encodes the specified TallyResult message. Does not implicitly {@link cosmos.gov.v1beta1.TallyResult.verify|verify} messages.
                 * @param m TallyResult message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.ITallyResult, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TallyResult message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns TallyResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.TallyResult;
            }

            /** Properties of a Vote. */
            interface IVote {
                /** Vote proposalId */
                proposalId?: Long | null;

                /** Vote voter */
                voter?: string | null;

                /** Vote option */
                option?: cosmos.gov.v1beta1.VoteOption | null;

                /** Vote options */
                options?: cosmos.gov.v1beta1.IWeightedVoteOption[] | null;
            }

            /** Represents a Vote. */
            class Vote implements IVote {
                /**
                 * Constructs a new Vote.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IVote);

                /** Vote proposalId. */
                public proposalId: Long;

                /** Vote voter. */
                public voter: string;

                /** Vote option. */
                public option: cosmos.gov.v1beta1.VoteOption;

                /** Vote options. */
                public options: cosmos.gov.v1beta1.IWeightedVoteOption[];

                /**
                 * Creates a new Vote instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Vote instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IVote): cosmos.gov.v1beta1.Vote;

                /**
                 * Encodes the specified Vote message. Does not implicitly {@link cosmos.gov.v1beta1.Vote.verify|verify} messages.
                 * @param m Vote message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IVote, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Vote message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Vote
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.Vote;
            }

            /** Properties of a DepositParams. */
            interface IDepositParams {
                /** DepositParams minDeposit */
                minDeposit?: cosmos.base.v1beta1.ICoin[] | null;

                /** DepositParams maxDepositPeriod */
                maxDepositPeriod?: google.protobuf.IDuration | null;
            }

            /** Represents a DepositParams. */
            class DepositParams implements IDepositParams {
                /**
                 * Constructs a new DepositParams.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IDepositParams);

                /** DepositParams minDeposit. */
                public minDeposit: cosmos.base.v1beta1.ICoin[];

                /** DepositParams maxDepositPeriod. */
                public maxDepositPeriod?: google.protobuf.IDuration | null;

                /**
                 * Creates a new DepositParams instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DepositParams instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IDepositParams): cosmos.gov.v1beta1.DepositParams;

                /**
                 * Encodes the specified DepositParams message. Does not implicitly {@link cosmos.gov.v1beta1.DepositParams.verify|verify} messages.
                 * @param m DepositParams message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IDepositParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DepositParams message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DepositParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.DepositParams;
            }

            /** Properties of a VotingParams. */
            interface IVotingParams {
                /** VotingParams votingPeriod */
                votingPeriod?: google.protobuf.IDuration | null;
            }

            /** Represents a VotingParams. */
            class VotingParams implements IVotingParams {
                /**
                 * Constructs a new VotingParams.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.IVotingParams);

                /** VotingParams votingPeriod. */
                public votingPeriod?: google.protobuf.IDuration | null;

                /**
                 * Creates a new VotingParams instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VotingParams instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.IVotingParams): cosmos.gov.v1beta1.VotingParams;

                /**
                 * Encodes the specified VotingParams message. Does not implicitly {@link cosmos.gov.v1beta1.VotingParams.verify|verify} messages.
                 * @param m VotingParams message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.IVotingParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VotingParams message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns VotingParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.VotingParams;
            }

            /** Properties of a TallyParams. */
            interface ITallyParams {
                /** TallyParams quorum */
                quorum?: Uint8Array | null;

                /** TallyParams threshold */
                threshold?: Uint8Array | null;

                /** TallyParams vetoThreshold */
                vetoThreshold?: Uint8Array | null;
            }

            /** Represents a TallyParams. */
            class TallyParams implements ITallyParams {
                /**
                 * Constructs a new TallyParams.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.gov.v1beta1.ITallyParams);

                /** TallyParams quorum. */
                public quorum: Uint8Array;

                /** TallyParams threshold. */
                public threshold: Uint8Array;

                /** TallyParams vetoThreshold. */
                public vetoThreshold: Uint8Array;

                /**
                 * Creates a new TallyParams instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TallyParams instance
                 */
                public static create(properties?: cosmos.gov.v1beta1.ITallyParams): cosmos.gov.v1beta1.TallyParams;

                /**
                 * Encodes the specified TallyParams message. Does not implicitly {@link cosmos.gov.v1beta1.TallyParams.verify|verify} messages.
                 * @param m TallyParams message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.gov.v1beta1.ITallyParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TallyParams message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns TallyParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.TallyParams;
            }
        }
    }

    /** Namespace params. */
    namespace params {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a ParameterChangeProposal. */
            interface IParameterChangeProposal {
                /** ParameterChangeProposal title */
                title?: string | null;

                /** ParameterChangeProposal description */
                description?: string | null;

                /** ParameterChangeProposal changes */
                changes?: cosmos.params.v1beta1.IParamChange[] | null;
            }

            /** Represents a ParameterChangeProposal. */
            class ParameterChangeProposal implements IParameterChangeProposal {
                /**
                 * Constructs a new ParameterChangeProposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.params.v1beta1.IParameterChangeProposal);

                /** ParameterChangeProposal title. */
                public title: string;

                /** ParameterChangeProposal description. */
                public description: string;

                /** ParameterChangeProposal changes. */
                public changes: cosmos.params.v1beta1.IParamChange[];

                /**
                 * Creates a new ParameterChangeProposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ParameterChangeProposal instance
                 */
                public static create(
                    properties?: cosmos.params.v1beta1.IParameterChangeProposal,
                ): cosmos.params.v1beta1.ParameterChangeProposal;

                /**
                 * Encodes the specified ParameterChangeProposal message. Does not implicitly {@link cosmos.params.v1beta1.ParameterChangeProposal.verify|verify} messages.
                 * @param m ParameterChangeProposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.params.v1beta1.IParameterChangeProposal,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ParameterChangeProposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ParameterChangeProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.params.v1beta1.ParameterChangeProposal;
            }

            /** Properties of a ParamChange. */
            interface IParamChange {
                /** ParamChange subspace */
                subspace?: string | null;

                /** ParamChange key */
                key?: string | null;

                /** ParamChange value */
                value?: string | null;
            }

            /** Represents a ParamChange. */
            class ParamChange implements IParamChange {
                /**
                 * Constructs a new ParamChange.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.params.v1beta1.IParamChange);

                /** ParamChange subspace. */
                public subspace: string;

                /** ParamChange key. */
                public key: string;

                /** ParamChange value. */
                public value: string;

                /**
                 * Creates a new ParamChange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ParamChange instance
                 */
                public static create(
                    properties?: cosmos.params.v1beta1.IParamChange,
                ): cosmos.params.v1beta1.ParamChange;

                /**
                 * Encodes the specified ParamChange message. Does not implicitly {@link cosmos.params.v1beta1.ParamChange.verify|verify} messages.
                 * @param m ParamChange message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.params.v1beta1.IParamChange, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ParamChange message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ParamChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.params.v1beta1.ParamChange;
            }
        }
    }

    /** Namespace upgrade. */
    namespace upgrade {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a Plan. */
            interface IPlan {
                /** Plan name */
                name?: string | null;

                /** Plan time */
                time?: google.protobuf.ITimestamp | null;

                /** Plan height */
                height?: Long | null;

                /** Plan info */
                info?: string | null;

                /** Plan upgradedClientState */
                upgradedClientState?: google.protobuf.IAny | null;
            }

            /** Represents a Plan. */
            class Plan implements IPlan {
                /**
                 * Constructs a new Plan.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.upgrade.v1beta1.IPlan);

                /** Plan name. */
                public name: string;

                /** Plan time. */
                public time?: google.protobuf.ITimestamp | null;

                /** Plan height. */
                public height: Long;

                /** Plan info. */
                public info: string;

                /** Plan upgradedClientState. */
                public upgradedClientState?: google.protobuf.IAny | null;

                /**
                 * Creates a new Plan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Plan instance
                 */
                public static create(properties?: cosmos.upgrade.v1beta1.IPlan): cosmos.upgrade.v1beta1.Plan;

                /**
                 * Encodes the specified Plan message. Does not implicitly {@link cosmos.upgrade.v1beta1.Plan.verify|verify} messages.
                 * @param m Plan message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.upgrade.v1beta1.IPlan, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Plan message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.upgrade.v1beta1.Plan;
            }

            /** Properties of a SoftwareUpgradeProposal. */
            interface ISoftwareUpgradeProposal {
                /** SoftwareUpgradeProposal title */
                title?: string | null;

                /** SoftwareUpgradeProposal description */
                description?: string | null;

                /** SoftwareUpgradeProposal plan */
                plan?: cosmos.upgrade.v1beta1.IPlan | null;
            }

            /** Represents a SoftwareUpgradeProposal. */
            class SoftwareUpgradeProposal implements ISoftwareUpgradeProposal {
                /**
                 * Constructs a new SoftwareUpgradeProposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.upgrade.v1beta1.ISoftwareUpgradeProposal);

                /** SoftwareUpgradeProposal title. */
                public title: string;

                /** SoftwareUpgradeProposal description. */
                public description: string;

                /** SoftwareUpgradeProposal plan. */
                public plan?: cosmos.upgrade.v1beta1.IPlan | null;

                /**
                 * Creates a new SoftwareUpgradeProposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SoftwareUpgradeProposal instance
                 */
                public static create(
                    properties?: cosmos.upgrade.v1beta1.ISoftwareUpgradeProposal,
                ): cosmos.upgrade.v1beta1.SoftwareUpgradeProposal;

                /**
                 * Encodes the specified SoftwareUpgradeProposal message. Does not implicitly {@link cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.verify|verify} messages.
                 * @param m SoftwareUpgradeProposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.upgrade.v1beta1.ISoftwareUpgradeProposal,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a SoftwareUpgradeProposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns SoftwareUpgradeProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.upgrade.v1beta1.SoftwareUpgradeProposal;
            }

            /** Properties of a CancelSoftwareUpgradeProposal. */
            interface ICancelSoftwareUpgradeProposal {
                /** CancelSoftwareUpgradeProposal title */
                title?: string | null;

                /** CancelSoftwareUpgradeProposal description */
                description?: string | null;
            }

            /** Represents a CancelSoftwareUpgradeProposal. */
            class CancelSoftwareUpgradeProposal implements ICancelSoftwareUpgradeProposal {
                /**
                 * Constructs a new CancelSoftwareUpgradeProposal.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.upgrade.v1beta1.ICancelSoftwareUpgradeProposal);

                /** CancelSoftwareUpgradeProposal title. */
                public title: string;

                /** CancelSoftwareUpgradeProposal description. */
                public description: string;

                /**
                 * Creates a new CancelSoftwareUpgradeProposal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelSoftwareUpgradeProposal instance
                 */
                public static create(
                    properties?: cosmos.upgrade.v1beta1.ICancelSoftwareUpgradeProposal,
                ): cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal;

                /**
                 * Encodes the specified CancelSoftwareUpgradeProposal message. Does not implicitly {@link cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.verify|verify} messages.
                 * @param m CancelSoftwareUpgradeProposal message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.upgrade.v1beta1.ICancelSoftwareUpgradeProposal,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a CancelSoftwareUpgradeProposal message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns CancelSoftwareUpgradeProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal;
            }

            /** Properties of a ModuleVersion. */
            interface IModuleVersion {
                /** ModuleVersion name */
                name?: string | null;

                /** ModuleVersion version */
                version?: Long | null;
            }

            /** Represents a ModuleVersion. */
            class ModuleVersion implements IModuleVersion {
                /**
                 * Constructs a new ModuleVersion.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.upgrade.v1beta1.IModuleVersion);

                /** ModuleVersion name. */
                public name: string;

                /** ModuleVersion version. */
                public version: Long;

                /**
                 * Creates a new ModuleVersion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ModuleVersion instance
                 */
                public static create(
                    properties?: cosmos.upgrade.v1beta1.IModuleVersion,
                ): cosmos.upgrade.v1beta1.ModuleVersion;

                /**
                 * Encodes the specified ModuleVersion message. Does not implicitly {@link cosmos.upgrade.v1beta1.ModuleVersion.verify|verify} messages.
                 * @param m ModuleVersion message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.upgrade.v1beta1.IModuleVersion, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ModuleVersion message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ModuleVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.upgrade.v1beta1.ModuleVersion;
            }
        }
    }

    /** Namespace auth. */
    namespace auth {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Properties of a BaseAccount. */
            interface IBaseAccount {
                /** BaseAccount address */
                address?: string | null;

                /** BaseAccount pubKey */
                pubKey?: google.protobuf.IAny | null;

                /** BaseAccount accountNumber */
                accountNumber?: Long | null;

                /** BaseAccount sequence */
                sequence?: Long | null;
            }

            /** Represents a BaseAccount. */
            class BaseAccount implements IBaseAccount {
                /**
                 * Constructs a new BaseAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.auth.v1beta1.IBaseAccount);

                /** BaseAccount address. */
                public address: string;

                /** BaseAccount pubKey. */
                public pubKey?: google.protobuf.IAny | null;

                /** BaseAccount accountNumber. */
                public accountNumber: Long;

                /** BaseAccount sequence. */
                public sequence: Long;

                /**
                 * Creates a new BaseAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BaseAccount instance
                 */
                public static create(properties?: cosmos.auth.v1beta1.IBaseAccount): cosmos.auth.v1beta1.BaseAccount;

                /**
                 * Encodes the specified BaseAccount message. Does not implicitly {@link cosmos.auth.v1beta1.BaseAccount.verify|verify} messages.
                 * @param m BaseAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.auth.v1beta1.IBaseAccount, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BaseAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns BaseAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.auth.v1beta1.BaseAccount;
            }

            /** Properties of a ModuleAccount. */
            interface IModuleAccount {
                /** ModuleAccount baseAccount */
                baseAccount?: cosmos.auth.v1beta1.IBaseAccount | null;

                /** ModuleAccount name */
                name?: string | null;

                /** ModuleAccount permissions */
                permissions?: string[] | null;
            }

            /** Represents a ModuleAccount. */
            class ModuleAccount implements IModuleAccount {
                /**
                 * Constructs a new ModuleAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.auth.v1beta1.IModuleAccount);

                /** ModuleAccount baseAccount. */
                public baseAccount?: cosmos.auth.v1beta1.IBaseAccount | null;

                /** ModuleAccount name. */
                public name: string;

                /** ModuleAccount permissions. */
                public permissions: string[];

                /**
                 * Creates a new ModuleAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ModuleAccount instance
                 */
                public static create(
                    properties?: cosmos.auth.v1beta1.IModuleAccount,
                ): cosmos.auth.v1beta1.ModuleAccount;

                /**
                 * Encodes the specified ModuleAccount message. Does not implicitly {@link cosmos.auth.v1beta1.ModuleAccount.verify|verify} messages.
                 * @param m ModuleAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.auth.v1beta1.IModuleAccount, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ModuleAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ModuleAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.auth.v1beta1.ModuleAccount;
            }

            /** Properties of a Params. */
            interface IParams {
                /** Params maxMemoCharacters */
                maxMemoCharacters?: Long | null;

                /** Params txSigLimit */
                txSigLimit?: Long | null;

                /** Params txSizeCostPerByte */
                txSizeCostPerByte?: Long | null;

                /** Params sigVerifyCostEd25519 */
                sigVerifyCostEd25519?: Long | null;

                /** Params sigVerifyCostSecp256k1 */
                sigVerifyCostSecp256k1?: Long | null;
            }

            /** Represents a Params. */
            class Params implements IParams {
                /**
                 * Constructs a new Params.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.auth.v1beta1.IParams);

                /** Params maxMemoCharacters. */
                public maxMemoCharacters: Long;

                /** Params txSigLimit. */
                public txSigLimit: Long;

                /** Params txSizeCostPerByte. */
                public txSizeCostPerByte: Long;

                /** Params sigVerifyCostEd25519. */
                public sigVerifyCostEd25519: Long;

                /** Params sigVerifyCostSecp256k1. */
                public sigVerifyCostSecp256k1: Long;

                /**
                 * Creates a new Params instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Params instance
                 */
                public static create(properties?: cosmos.auth.v1beta1.IParams): cosmos.auth.v1beta1.Params;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link cosmos.auth.v1beta1.Params.verify|verify} messages.
                 * @param m Params message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.auth.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.auth.v1beta1.Params;
            }
        }
    }

    /** Namespace vesting. */
    namespace vesting {
        /** Namespace v1beta1. */
        namespace v1beta1 {
            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls CreateVestingAccount.
                 * @param request MsgCreateVestingAccount message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgCreateVestingAccountResponse
                 */
                public createVestingAccount(
                    request: cosmos.vesting.v1beta1.IMsgCreateVestingAccount,
                    callback: cosmos.vesting.v1beta1.Msg.CreateVestingAccountCallback,
                ): void;

                /**
                 * Calls CreateVestingAccount.
                 * @param request MsgCreateVestingAccount message or plain object
                 * @returns Promise
                 */
                public createVestingAccount(
                    request: cosmos.vesting.v1beta1.IMsgCreateVestingAccount,
                ): Promise<cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link cosmos.vesting.v1beta1.Msg#createVestingAccount}.
                 * @param error Error, if any
                 * @param [response] MsgCreateVestingAccountResponse
                 */
                type CreateVestingAccountCallback = (
                    error: Error | null,
                    response?: cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse,
                ) => void;
            }

            /** Properties of a MsgCreateVestingAccount. */
            interface IMsgCreateVestingAccount {
                /** MsgCreateVestingAccount fromAddress */
                fromAddress?: string | null;

                /** MsgCreateVestingAccount toAddress */
                toAddress?: string | null;

                /** MsgCreateVestingAccount amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;

                /** MsgCreateVestingAccount endTime */
                endTime?: Long | null;

                /** MsgCreateVestingAccount delayed */
                delayed?: boolean | null;
            }

            /** Represents a MsgCreateVestingAccount. */
            class MsgCreateVestingAccount implements IMsgCreateVestingAccount {
                /**
                 * Constructs a new MsgCreateVestingAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IMsgCreateVestingAccount);

                /** MsgCreateVestingAccount fromAddress. */
                public fromAddress: string;

                /** MsgCreateVestingAccount toAddress. */
                public toAddress: string;

                /** MsgCreateVestingAccount amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /** MsgCreateVestingAccount endTime. */
                public endTime: Long;

                /** MsgCreateVestingAccount delayed. */
                public delayed: boolean;

                /**
                 * Creates a new MsgCreateVestingAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgCreateVestingAccount instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IMsgCreateVestingAccount,
                ): cosmos.vesting.v1beta1.MsgCreateVestingAccount;

                /**
                 * Encodes the specified MsgCreateVestingAccount message. Does not implicitly {@link cosmos.vesting.v1beta1.MsgCreateVestingAccount.verify|verify} messages.
                 * @param m MsgCreateVestingAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IMsgCreateVestingAccount,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgCreateVestingAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgCreateVestingAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.MsgCreateVestingAccount;
            }

            /** Properties of a MsgCreateVestingAccountResponse. */
            interface IMsgCreateVestingAccountResponse {}

            /** Represents a MsgCreateVestingAccountResponse. */
            class MsgCreateVestingAccountResponse implements IMsgCreateVestingAccountResponse {
                /**
                 * Constructs a new MsgCreateVestingAccountResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IMsgCreateVestingAccountResponse);

                /**
                 * Creates a new MsgCreateVestingAccountResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgCreateVestingAccountResponse instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IMsgCreateVestingAccountResponse,
                ): cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse;

                /**
                 * Encodes the specified MsgCreateVestingAccountResponse message. Does not implicitly {@link cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.verify|verify} messages.
                 * @param m MsgCreateVestingAccountResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IMsgCreateVestingAccountResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgCreateVestingAccountResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgCreateVestingAccountResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse;
            }

            /** Properties of a BaseVestingAccount. */
            interface IBaseVestingAccount {
                /** BaseVestingAccount baseAccount */
                baseAccount?: cosmos.auth.v1beta1.IBaseAccount | null;

                /** BaseVestingAccount originalVesting */
                originalVesting?: cosmos.base.v1beta1.ICoin[] | null;

                /** BaseVestingAccount delegatedFree */
                delegatedFree?: cosmos.base.v1beta1.ICoin[] | null;

                /** BaseVestingAccount delegatedVesting */
                delegatedVesting?: cosmos.base.v1beta1.ICoin[] | null;

                /** BaseVestingAccount endTime */
                endTime?: Long | null;
            }

            /** Represents a BaseVestingAccount. */
            class BaseVestingAccount implements IBaseVestingAccount {
                /**
                 * Constructs a new BaseVestingAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IBaseVestingAccount);

                /** BaseVestingAccount baseAccount. */
                public baseAccount?: cosmos.auth.v1beta1.IBaseAccount | null;

                /** BaseVestingAccount originalVesting. */
                public originalVesting: cosmos.base.v1beta1.ICoin[];

                /** BaseVestingAccount delegatedFree. */
                public delegatedFree: cosmos.base.v1beta1.ICoin[];

                /** BaseVestingAccount delegatedVesting. */
                public delegatedVesting: cosmos.base.v1beta1.ICoin[];

                /** BaseVestingAccount endTime. */
                public endTime: Long;

                /**
                 * Creates a new BaseVestingAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BaseVestingAccount instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IBaseVestingAccount,
                ): cosmos.vesting.v1beta1.BaseVestingAccount;

                /**
                 * Encodes the specified BaseVestingAccount message. Does not implicitly {@link cosmos.vesting.v1beta1.BaseVestingAccount.verify|verify} messages.
                 * @param m BaseVestingAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IBaseVestingAccount,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a BaseVestingAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns BaseVestingAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.BaseVestingAccount;
            }

            /** Properties of a ContinuousVestingAccount. */
            interface IContinuousVestingAccount {
                /** ContinuousVestingAccount baseVestingAccount */
                baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;

                /** ContinuousVestingAccount startTime */
                startTime?: Long | null;
            }

            /** Represents a ContinuousVestingAccount. */
            class ContinuousVestingAccount implements IContinuousVestingAccount {
                /**
                 * Constructs a new ContinuousVestingAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IContinuousVestingAccount);

                /** ContinuousVestingAccount baseVestingAccount. */
                public baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;

                /** ContinuousVestingAccount startTime. */
                public startTime: Long;

                /**
                 * Creates a new ContinuousVestingAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContinuousVestingAccount instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IContinuousVestingAccount,
                ): cosmos.vesting.v1beta1.ContinuousVestingAccount;

                /**
                 * Encodes the specified ContinuousVestingAccount message. Does not implicitly {@link cosmos.vesting.v1beta1.ContinuousVestingAccount.verify|verify} messages.
                 * @param m ContinuousVestingAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IContinuousVestingAccount,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a ContinuousVestingAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ContinuousVestingAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.ContinuousVestingAccount;
            }

            /** Properties of a DelayedVestingAccount. */
            interface IDelayedVestingAccount {
                /** DelayedVestingAccount baseVestingAccount */
                baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;
            }

            /** Represents a DelayedVestingAccount. */
            class DelayedVestingAccount implements IDelayedVestingAccount {
                /**
                 * Constructs a new DelayedVestingAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IDelayedVestingAccount);

                /** DelayedVestingAccount baseVestingAccount. */
                public baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;

                /**
                 * Creates a new DelayedVestingAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DelayedVestingAccount instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IDelayedVestingAccount,
                ): cosmos.vesting.v1beta1.DelayedVestingAccount;

                /**
                 * Encodes the specified DelayedVestingAccount message. Does not implicitly {@link cosmos.vesting.v1beta1.DelayedVestingAccount.verify|verify} messages.
                 * @param m DelayedVestingAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IDelayedVestingAccount,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a DelayedVestingAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns DelayedVestingAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.DelayedVestingAccount;
            }

            /** Properties of a Period. */
            interface IPeriod {
                /** Period length */
                length?: Long | null;

                /** Period amount */
                amount?: cosmos.base.v1beta1.ICoin[] | null;
            }

            /** Represents a Period. */
            class Period implements IPeriod {
                /**
                 * Constructs a new Period.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IPeriod);

                /** Period length. */
                public length: Long;

                /** Period amount. */
                public amount: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Period instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Period instance
                 */
                public static create(properties?: cosmos.vesting.v1beta1.IPeriod): cosmos.vesting.v1beta1.Period;

                /**
                 * Encodes the specified Period message. Does not implicitly {@link cosmos.vesting.v1beta1.Period.verify|verify} messages.
                 * @param m Period message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmos.vesting.v1beta1.IPeriod, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Period message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Period
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.vesting.v1beta1.Period;
            }

            /** Properties of a PeriodicVestingAccount. */
            interface IPeriodicVestingAccount {
                /** PeriodicVestingAccount baseVestingAccount */
                baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;

                /** PeriodicVestingAccount startTime */
                startTime?: Long | null;

                /** PeriodicVestingAccount vestingPeriods */
                vestingPeriods?: cosmos.vesting.v1beta1.IPeriod[] | null;
            }

            /** Represents a PeriodicVestingAccount. */
            class PeriodicVestingAccount implements IPeriodicVestingAccount {
                /**
                 * Constructs a new PeriodicVestingAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IPeriodicVestingAccount);

                /** PeriodicVestingAccount baseVestingAccount. */
                public baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;

                /** PeriodicVestingAccount startTime. */
                public startTime: Long;

                /** PeriodicVestingAccount vestingPeriods. */
                public vestingPeriods: cosmos.vesting.v1beta1.IPeriod[];

                /**
                 * Creates a new PeriodicVestingAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeriodicVestingAccount instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IPeriodicVestingAccount,
                ): cosmos.vesting.v1beta1.PeriodicVestingAccount;

                /**
                 * Encodes the specified PeriodicVestingAccount message. Does not implicitly {@link cosmos.vesting.v1beta1.PeriodicVestingAccount.verify|verify} messages.
                 * @param m PeriodicVestingAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IPeriodicVestingAccount,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a PeriodicVestingAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns PeriodicVestingAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.PeriodicVestingAccount;
            }

            /** Properties of a PermanentLockedAccount. */
            interface IPermanentLockedAccount {
                /** PermanentLockedAccount baseVestingAccount */
                baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;
            }

            /** Represents a PermanentLockedAccount. */
            class PermanentLockedAccount implements IPermanentLockedAccount {
                /**
                 * Constructs a new PermanentLockedAccount.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmos.vesting.v1beta1.IPermanentLockedAccount);

                /** PermanentLockedAccount baseVestingAccount. */
                public baseVestingAccount?: cosmos.vesting.v1beta1.IBaseVestingAccount | null;

                /**
                 * Creates a new PermanentLockedAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PermanentLockedAccount instance
                 */
                public static create(
                    properties?: cosmos.vesting.v1beta1.IPermanentLockedAccount,
                ): cosmos.vesting.v1beta1.PermanentLockedAccount;

                /**
                 * Encodes the specified PermanentLockedAccount message. Does not implicitly {@link cosmos.vesting.v1beta1.PermanentLockedAccount.verify|verify} messages.
                 * @param m PermanentLockedAccount message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: cosmos.vesting.v1beta1.IPermanentLockedAccount,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a PermanentLockedAccount message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns PermanentLockedAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): cosmos.vesting.v1beta1.PermanentLockedAccount;
            }
        }
    }
}

/** Namespace google. */
export namespace google {
    /** Namespace protobuf. */
    namespace protobuf {
        /** Properties of an Any. */
        interface IAny {
            /** Any type_url */
            type_url?: string | null;

            /** Any value */
            value?: Uint8Array | null;
        }

        /** Represents an Any. */
        class Any implements IAny {
            /**
             * Constructs a new Any.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param m Any message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: google.protobuf.IAny, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Any;
        }

        /** Properties of a Duration. */
        interface IDuration {
            /** Duration seconds */
            seconds?: Long | null;

            /** Duration nanos */
            nanos?: number | null;
        }

        /** Represents a Duration. */
        class Duration implements IDuration {
            /**
             * Constructs a new Duration.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: Long;

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param m Duration message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: google.protobuf.IDuration, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Duration;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {
            /** Timestamp seconds */
            seconds?: Long | null;

            /** Timestamp nanos */
            nanos?: number | null;
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {
            /**
             * Constructs a new Timestamp.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param m Timestamp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: google.protobuf.ITimestamp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Timestamp;
        }
    }
}

/** Namespace ics23. */
export namespace ics23 {
    /** HashOp enum. */
    enum HashOp {
        NO_HASH = 0,
        SHA256 = 1,
        SHA512 = 2,
        KECCAK = 3,
        RIPEMD160 = 4,
        BITCOIN = 5,
    }

    /**
     * LengthOp defines how to process the key and value of the LeafOp
     * to include length information. After encoding the length with the given
     * algorithm, the length will be prepended to the key and value bytes.
     * (Each one with it's own encoded length)
     */
    enum LengthOp {
        NO_PREFIX = 0,
        VAR_PROTO = 1,
        VAR_RLP = 2,
        FIXED32_BIG = 3,
        FIXED32_LITTLE = 4,
        FIXED64_BIG = 5,
        FIXED64_LITTLE = 6,
        REQUIRE_32_BYTES = 7,
        REQUIRE_64_BYTES = 8,
    }

    /** Properties of an ExistenceProof. */
    interface IExistenceProof {
        /** ExistenceProof key */
        key?: Uint8Array | null;

        /** ExistenceProof value */
        value?: Uint8Array | null;

        /** ExistenceProof leaf */
        leaf?: ics23.ILeafOp | null;

        /** ExistenceProof path */
        path?: ics23.IInnerOp[] | null;
    }

    /**
     * ExistenceProof takes a key and a value and a set of steps to perform on it.
     * The result of peforming all these steps will provide a "root hash", which can
     * be compared to the value in a header.
     *
     * Since it is computationally infeasible to produce a hash collission for any of the used
     * cryptographic hash functions, if someone can provide a series of operations to transform
     * a given key and value into a root hash that matches some trusted root, these key and values
     * must be in the referenced merkle tree.
     *
     * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
     * which should be controlled by a spec. Eg. with lengthOp as NONE,
     * prefix = FOO, key = BAR, value = CHOICE
     * and
     * prefix = F, key = OOBAR, value = CHOICE
     * would produce the same value.
     *
     * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
     * in the ProofSpec is valuable to prevent this mutability. And why all trees should
     * length-prefix the data before hashing it.
     */
    class ExistenceProof implements IExistenceProof {
        /**
         * Constructs a new ExistenceProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.IExistenceProof);

        /** ExistenceProof key. */
        public key: Uint8Array;

        /** ExistenceProof value. */
        public value: Uint8Array;

        /** ExistenceProof leaf. */
        public leaf?: ics23.ILeafOp | null;

        /** ExistenceProof path. */
        public path: ics23.IInnerOp[];

        /**
         * Creates a new ExistenceProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExistenceProof instance
         */
        public static create(properties?: ics23.IExistenceProof): ics23.ExistenceProof;

        /**
         * Encodes the specified ExistenceProof message. Does not implicitly {@link ics23.ExistenceProof.verify|verify} messages.
         * @param m ExistenceProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.IExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExistenceProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ExistenceProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.ExistenceProof;
    }

    /** Properties of a NonExistenceProof. */
    interface INonExistenceProof {
        /** NonExistenceProof key */
        key?: Uint8Array | null;

        /** NonExistenceProof left */
        left?: ics23.IExistenceProof | null;

        /** NonExistenceProof right */
        right?: ics23.IExistenceProof | null;
    }

    /** Represents a NonExistenceProof. */
    class NonExistenceProof implements INonExistenceProof {
        /**
         * Constructs a new NonExistenceProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.INonExistenceProof);

        /** NonExistenceProof key. */
        public key: Uint8Array;

        /** NonExistenceProof left. */
        public left?: ics23.IExistenceProof | null;

        /** NonExistenceProof right. */
        public right?: ics23.IExistenceProof | null;

        /**
         * Creates a new NonExistenceProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NonExistenceProof instance
         */
        public static create(properties?: ics23.INonExistenceProof): ics23.NonExistenceProof;

        /**
         * Encodes the specified NonExistenceProof message. Does not implicitly {@link ics23.NonExistenceProof.verify|verify} messages.
         * @param m NonExistenceProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.INonExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NonExistenceProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NonExistenceProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.NonExistenceProof;
    }

    /** Properties of a CommitmentProof. */
    interface ICommitmentProof {
        /** CommitmentProof exist */
        exist?: ics23.IExistenceProof | null;

        /** CommitmentProof nonexist */
        nonexist?: ics23.INonExistenceProof | null;

        /** CommitmentProof batch */
        batch?: ics23.IBatchProof | null;

        /** CommitmentProof compressed */
        compressed?: ics23.ICompressedBatchProof | null;
    }

    /** Represents a CommitmentProof. */
    class CommitmentProof implements ICommitmentProof {
        /**
         * Constructs a new CommitmentProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.ICommitmentProof);

        /** CommitmentProof exist. */
        public exist?: ics23.IExistenceProof | null;

        /** CommitmentProof nonexist. */
        public nonexist?: ics23.INonExistenceProof | null;

        /** CommitmentProof batch. */
        public batch?: ics23.IBatchProof | null;

        /** CommitmentProof compressed. */
        public compressed?: ics23.ICompressedBatchProof | null;

        /** CommitmentProof proof. */
        public proof?: 'exist' | 'nonexist' | 'batch' | 'compressed';

        /**
         * Creates a new CommitmentProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommitmentProof instance
         */
        public static create(properties?: ics23.ICommitmentProof): ics23.CommitmentProof;

        /**
         * Encodes the specified CommitmentProof message. Does not implicitly {@link ics23.CommitmentProof.verify|verify} messages.
         * @param m CommitmentProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.ICommitmentProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommitmentProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CommitmentProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CommitmentProof;
    }

    /** Properties of a LeafOp. */
    interface ILeafOp {
        /** LeafOp hash */
        hash?: ics23.HashOp | null;

        /** LeafOp prehashKey */
        prehashKey?: ics23.HashOp | null;

        /** LeafOp prehashValue */
        prehashValue?: ics23.HashOp | null;

        /** LeafOp length */
        length?: ics23.LengthOp | null;

        /** LeafOp prefix */
        prefix?: Uint8Array | null;
    }

    /**
     * LeafOp represents the raw key-value data we wish to prove, and
     * must be flexible to represent the internal transformation from
     * the original key-value pairs into the basis hash, for many existing
     * merkle trees.
     *
     * key and value are passed in. So that the signature of this operation is:
     * leafOp(key, value) -> output
     *
     * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
     * hkey = prehashKey(key)
     * hvalue = prehashValue(value)
     *
     * Then combine the bytes, and hash it
     * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
     */
    class LeafOp implements ILeafOp {
        /**
         * Constructs a new LeafOp.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.ILeafOp);

        /** LeafOp hash. */
        public hash: ics23.HashOp;

        /** LeafOp prehashKey. */
        public prehashKey: ics23.HashOp;

        /** LeafOp prehashValue. */
        public prehashValue: ics23.HashOp;

        /** LeafOp length. */
        public length: ics23.LengthOp;

        /** LeafOp prefix. */
        public prefix: Uint8Array;

        /**
         * Creates a new LeafOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeafOp instance
         */
        public static create(properties?: ics23.ILeafOp): ics23.LeafOp;

        /**
         * Encodes the specified LeafOp message. Does not implicitly {@link ics23.LeafOp.verify|verify} messages.
         * @param m LeafOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.ILeafOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeafOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LeafOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.LeafOp;
    }

    /** Properties of an InnerOp. */
    interface IInnerOp {
        /** InnerOp hash */
        hash?: ics23.HashOp | null;

        /** InnerOp prefix */
        prefix?: Uint8Array | null;

        /** InnerOp suffix */
        suffix?: Uint8Array | null;
    }

    /**
     * InnerOp represents a merkle-proof step that is not a leaf.
     * It represents concatenating two children and hashing them to provide the next result.
     *
     * The result of the previous step is passed in, so the signature of this op is:
     * innerOp(child) -> output
     *
     * The result of applying InnerOp should be:
     * output = op.hash(op.prefix || child || op.suffix)
     *
     * where the || operator is concatenation of binary data,
     * and child is the result of hashing all the tree below this step.
     *
     * Any special data, like prepending child with the length, or prepending the entire operation with
     * some value to differentiate from leaf nodes, should be included in prefix and suffix.
     * If either of prefix or suffix is empty, we just treat it as an empty string
     */
    class InnerOp implements IInnerOp {
        /**
         * Constructs a new InnerOp.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.IInnerOp);

        /** InnerOp hash. */
        public hash: ics23.HashOp;

        /** InnerOp prefix. */
        public prefix: Uint8Array;

        /** InnerOp suffix. */
        public suffix: Uint8Array;

        /**
         * Creates a new InnerOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InnerOp instance
         */
        public static create(properties?: ics23.IInnerOp): ics23.InnerOp;

        /**
         * Encodes the specified InnerOp message. Does not implicitly {@link ics23.InnerOp.verify|verify} messages.
         * @param m InnerOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.IInnerOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InnerOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns InnerOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.InnerOp;
    }

    /** Properties of a ProofSpec. */
    interface IProofSpec {
        /** ProofSpec leafSpec */
        leafSpec?: ics23.ILeafOp | null;

        /** ProofSpec innerSpec */
        innerSpec?: ics23.IInnerSpec | null;

        /** ProofSpec maxDepth */
        maxDepth?: number | null;

        /** ProofSpec minDepth */
        minDepth?: number | null;
    }

    /**
     * ProofSpec defines what the expected parameters are for a given proof type.
     * This can be stored in the client and used to validate any incoming proofs.
     *
     * verify(ProofSpec, Proof) -> Proof | Error
     *
     * As demonstrated in tests, if we don't fix the algorithm used to calculate the
     * LeafHash for a given tree, there are many possible key-value pairs that can
     * generate a given hash (by interpretting the preimage differently).
     * We need this for proper security, requires client knows a priori what
     * tree format server uses. But not in code, rather a configuration object.
     */
    class ProofSpec implements IProofSpec {
        /**
         * Constructs a new ProofSpec.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.IProofSpec);

        /** ProofSpec leafSpec. */
        public leafSpec?: ics23.ILeafOp | null;

        /** ProofSpec innerSpec. */
        public innerSpec?: ics23.IInnerSpec | null;

        /** ProofSpec maxDepth. */
        public maxDepth: number;

        /** ProofSpec minDepth. */
        public minDepth: number;

        /**
         * Creates a new ProofSpec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProofSpec instance
         */
        public static create(properties?: ics23.IProofSpec): ics23.ProofSpec;

        /**
         * Encodes the specified ProofSpec message. Does not implicitly {@link ics23.ProofSpec.verify|verify} messages.
         * @param m ProofSpec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.IProofSpec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProofSpec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ProofSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.ProofSpec;
    }

    /** Properties of an InnerSpec. */
    interface IInnerSpec {
        /** InnerSpec childOrder */
        childOrder?: number[] | null;

        /** InnerSpec childSize */
        childSize?: number | null;

        /** InnerSpec minPrefixLength */
        minPrefixLength?: number | null;

        /** InnerSpec maxPrefixLength */
        maxPrefixLength?: number | null;

        /** InnerSpec emptyChild */
        emptyChild?: Uint8Array | null;

        /** InnerSpec hash */
        hash?: ics23.HashOp | null;
    }

    /** Represents an InnerSpec. */
    class InnerSpec implements IInnerSpec {
        /**
         * Constructs a new InnerSpec.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.IInnerSpec);

        /** InnerSpec childOrder. */
        public childOrder: number[];

        /** InnerSpec childSize. */
        public childSize: number;

        /** InnerSpec minPrefixLength. */
        public minPrefixLength: number;

        /** InnerSpec maxPrefixLength. */
        public maxPrefixLength: number;

        /** InnerSpec emptyChild. */
        public emptyChild: Uint8Array;

        /** InnerSpec hash. */
        public hash: ics23.HashOp;

        /**
         * Creates a new InnerSpec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InnerSpec instance
         */
        public static create(properties?: ics23.IInnerSpec): ics23.InnerSpec;

        /**
         * Encodes the specified InnerSpec message. Does not implicitly {@link ics23.InnerSpec.verify|verify} messages.
         * @param m InnerSpec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.IInnerSpec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InnerSpec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns InnerSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.InnerSpec;
    }

    /** Properties of a BatchProof. */
    interface IBatchProof {
        /** BatchProof entries */
        entries?: ics23.IBatchEntry[] | null;
    }

    /** Represents a BatchProof. */
    class BatchProof implements IBatchProof {
        /**
         * Constructs a new BatchProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.IBatchProof);

        /** BatchProof entries. */
        public entries: ics23.IBatchEntry[];

        /**
         * Creates a new BatchProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchProof instance
         */
        public static create(properties?: ics23.IBatchProof): ics23.BatchProof;

        /**
         * Encodes the specified BatchProof message. Does not implicitly {@link ics23.BatchProof.verify|verify} messages.
         * @param m BatchProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.IBatchProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BatchProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.BatchProof;
    }

    /** Properties of a BatchEntry. */
    interface IBatchEntry {
        /** BatchEntry exist */
        exist?: ics23.IExistenceProof | null;

        /** BatchEntry nonexist */
        nonexist?: ics23.INonExistenceProof | null;
    }

    /** Represents a BatchEntry. */
    class BatchEntry implements IBatchEntry {
        /**
         * Constructs a new BatchEntry.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.IBatchEntry);

        /** BatchEntry exist. */
        public exist?: ics23.IExistenceProof | null;

        /** BatchEntry nonexist. */
        public nonexist?: ics23.INonExistenceProof | null;

        /** BatchEntry proof. */
        public proof?: 'exist' | 'nonexist';

        /**
         * Creates a new BatchEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchEntry instance
         */
        public static create(properties?: ics23.IBatchEntry): ics23.BatchEntry;

        /**
         * Encodes the specified BatchEntry message. Does not implicitly {@link ics23.BatchEntry.verify|verify} messages.
         * @param m BatchEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.IBatchEntry, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BatchEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.BatchEntry;
    }

    /** Properties of a CompressedBatchProof. */
    interface ICompressedBatchProof {
        /** CompressedBatchProof entries */
        entries?: ics23.ICompressedBatchEntry[] | null;

        /** CompressedBatchProof lookupInners */
        lookupInners?: ics23.IInnerOp[] | null;
    }

    /** Represents a CompressedBatchProof. */
    class CompressedBatchProof implements ICompressedBatchProof {
        /**
         * Constructs a new CompressedBatchProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.ICompressedBatchProof);

        /** CompressedBatchProof entries. */
        public entries: ics23.ICompressedBatchEntry[];

        /** CompressedBatchProof lookupInners. */
        public lookupInners: ics23.IInnerOp[];

        /**
         * Creates a new CompressedBatchProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompressedBatchProof instance
         */
        public static create(properties?: ics23.ICompressedBatchProof): ics23.CompressedBatchProof;

        /**
         * Encodes the specified CompressedBatchProof message. Does not implicitly {@link ics23.CompressedBatchProof.verify|verify} messages.
         * @param m CompressedBatchProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.ICompressedBatchProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompressedBatchProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CompressedBatchProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedBatchProof;
    }

    /** Properties of a CompressedBatchEntry. */
    interface ICompressedBatchEntry {
        /** CompressedBatchEntry exist */
        exist?: ics23.ICompressedExistenceProof | null;

        /** CompressedBatchEntry nonexist */
        nonexist?: ics23.ICompressedNonExistenceProof | null;
    }

    /** Represents a CompressedBatchEntry. */
    class CompressedBatchEntry implements ICompressedBatchEntry {
        /**
         * Constructs a new CompressedBatchEntry.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.ICompressedBatchEntry);

        /** CompressedBatchEntry exist. */
        public exist?: ics23.ICompressedExistenceProof | null;

        /** CompressedBatchEntry nonexist. */
        public nonexist?: ics23.ICompressedNonExistenceProof | null;

        /** CompressedBatchEntry proof. */
        public proof?: 'exist' | 'nonexist';

        /**
         * Creates a new CompressedBatchEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompressedBatchEntry instance
         */
        public static create(properties?: ics23.ICompressedBatchEntry): ics23.CompressedBatchEntry;

        /**
         * Encodes the specified CompressedBatchEntry message. Does not implicitly {@link ics23.CompressedBatchEntry.verify|verify} messages.
         * @param m CompressedBatchEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.ICompressedBatchEntry, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompressedBatchEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CompressedBatchEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedBatchEntry;
    }

    /** Properties of a CompressedExistenceProof. */
    interface ICompressedExistenceProof {
        /** CompressedExistenceProof key */
        key?: Uint8Array | null;

        /** CompressedExistenceProof value */
        value?: Uint8Array | null;

        /** CompressedExistenceProof leaf */
        leaf?: ics23.ILeafOp | null;

        /** CompressedExistenceProof path */
        path?: number[] | null;
    }

    /** Represents a CompressedExistenceProof. */
    class CompressedExistenceProof implements ICompressedExistenceProof {
        /**
         * Constructs a new CompressedExistenceProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.ICompressedExistenceProof);

        /** CompressedExistenceProof key. */
        public key: Uint8Array;

        /** CompressedExistenceProof value. */
        public value: Uint8Array;

        /** CompressedExistenceProof leaf. */
        public leaf?: ics23.ILeafOp | null;

        /** CompressedExistenceProof path. */
        public path: number[];

        /**
         * Creates a new CompressedExistenceProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompressedExistenceProof instance
         */
        public static create(properties?: ics23.ICompressedExistenceProof): ics23.CompressedExistenceProof;

        /**
         * Encodes the specified CompressedExistenceProof message. Does not implicitly {@link ics23.CompressedExistenceProof.verify|verify} messages.
         * @param m CompressedExistenceProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.ICompressedExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompressedExistenceProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CompressedExistenceProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedExistenceProof;
    }

    /** Properties of a CompressedNonExistenceProof. */
    interface ICompressedNonExistenceProof {
        /** CompressedNonExistenceProof key */
        key?: Uint8Array | null;

        /** CompressedNonExistenceProof left */
        left?: ics23.ICompressedExistenceProof | null;

        /** CompressedNonExistenceProof right */
        right?: ics23.ICompressedExistenceProof | null;
    }

    /** Represents a CompressedNonExistenceProof. */
    class CompressedNonExistenceProof implements ICompressedNonExistenceProof {
        /**
         * Constructs a new CompressedNonExistenceProof.
         * @param [p] Properties to set
         */
        constructor(p?: ics23.ICompressedNonExistenceProof);

        /** CompressedNonExistenceProof key. */
        public key: Uint8Array;

        /** CompressedNonExistenceProof left. */
        public left?: ics23.ICompressedExistenceProof | null;

        /** CompressedNonExistenceProof right. */
        public right?: ics23.ICompressedExistenceProof | null;

        /**
         * Creates a new CompressedNonExistenceProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompressedNonExistenceProof instance
         */
        public static create(properties?: ics23.ICompressedNonExistenceProof): ics23.CompressedNonExistenceProof;

        /**
         * Encodes the specified CompressedNonExistenceProof message. Does not implicitly {@link ics23.CompressedNonExistenceProof.verify|verify} messages.
         * @param m CompressedNonExistenceProof message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: ics23.ICompressedNonExistenceProof, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompressedNonExistenceProof message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CompressedNonExistenceProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ics23.CompressedNonExistenceProof;
    }
}

/** Namespace ibc. */
export namespace ibc {
    /** Namespace core. */
    namespace core {
        /** Namespace commitment. */
        namespace commitment {
            /** Namespace v1. */
            namespace v1 {
                /** Properties of a MerkleRoot. */
                interface IMerkleRoot {
                    /** MerkleRoot hash */
                    hash?: Uint8Array | null;
                }

                /** Represents a MerkleRoot. */
                class MerkleRoot implements IMerkleRoot {
                    /**
                     * Constructs a new MerkleRoot.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.commitment.v1.IMerkleRoot);

                    /** MerkleRoot hash. */
                    public hash: Uint8Array;

                    /**
                     * Creates a new MerkleRoot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MerkleRoot instance
                     */
                    public static create(
                        properties?: ibc.core.commitment.v1.IMerkleRoot,
                    ): ibc.core.commitment.v1.MerkleRoot;

                    /**
                     * Encodes the specified MerkleRoot message. Does not implicitly {@link ibc.core.commitment.v1.MerkleRoot.verify|verify} messages.
                     * @param m MerkleRoot message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.commitment.v1.IMerkleRoot, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MerkleRoot message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MerkleRoot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.commitment.v1.MerkleRoot;
                }

                /** Properties of a MerklePrefix. */
                interface IMerklePrefix {
                    /** MerklePrefix keyPrefix */
                    keyPrefix?: Uint8Array | null;
                }

                /** Represents a MerklePrefix. */
                class MerklePrefix implements IMerklePrefix {
                    /**
                     * Constructs a new MerklePrefix.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.commitment.v1.IMerklePrefix);

                    /** MerklePrefix keyPrefix. */
                    public keyPrefix: Uint8Array;

                    /**
                     * Creates a new MerklePrefix instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MerklePrefix instance
                     */
                    public static create(
                        properties?: ibc.core.commitment.v1.IMerklePrefix,
                    ): ibc.core.commitment.v1.MerklePrefix;

                    /**
                     * Encodes the specified MerklePrefix message. Does not implicitly {@link ibc.core.commitment.v1.MerklePrefix.verify|verify} messages.
                     * @param m MerklePrefix message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.commitment.v1.IMerklePrefix,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MerklePrefix message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MerklePrefix
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.commitment.v1.MerklePrefix;
                }

                /** Properties of a MerklePath. */
                interface IMerklePath {
                    /** MerklePath keyPath */
                    keyPath?: string[] | null;
                }

                /** Represents a MerklePath. */
                class MerklePath implements IMerklePath {
                    /**
                     * Constructs a new MerklePath.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.commitment.v1.IMerklePath);

                    /** MerklePath keyPath. */
                    public keyPath: string[];

                    /**
                     * Creates a new MerklePath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MerklePath instance
                     */
                    public static create(
                        properties?: ibc.core.commitment.v1.IMerklePath,
                    ): ibc.core.commitment.v1.MerklePath;

                    /**
                     * Encodes the specified MerklePath message. Does not implicitly {@link ibc.core.commitment.v1.MerklePath.verify|verify} messages.
                     * @param m MerklePath message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.commitment.v1.IMerklePath, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MerklePath message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MerklePath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.commitment.v1.MerklePath;
                }

                /** Properties of a MerkleProof. */
                interface IMerkleProof {
                    /** MerkleProof proofs */
                    proofs?: ics23.ICommitmentProof[] | null;
                }

                /** Represents a MerkleProof. */
                class MerkleProof implements IMerkleProof {
                    /**
                     * Constructs a new MerkleProof.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.commitment.v1.IMerkleProof);

                    /** MerkleProof proofs. */
                    public proofs: ics23.ICommitmentProof[];

                    /**
                     * Creates a new MerkleProof instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MerkleProof instance
                     */
                    public static create(
                        properties?: ibc.core.commitment.v1.IMerkleProof,
                    ): ibc.core.commitment.v1.MerkleProof;

                    /**
                     * Encodes the specified MerkleProof message. Does not implicitly {@link ibc.core.commitment.v1.MerkleProof.verify|verify} messages.
                     * @param m MerkleProof message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.commitment.v1.IMerkleProof,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MerkleProof message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MerkleProof
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.commitment.v1.MerkleProof;
                }
            }
        }

        /** Namespace channel. */
        namespace channel {
            /** Namespace v1. */
            namespace v1 {
                /** Represents a Msg */
                class Msg extends $protobuf.rpc.Service {
                    /**
                     * Constructs a new Msg service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Msg service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(
                        rpcImpl: $protobuf.RPCImpl,
                        requestDelimited?: boolean,
                        responseDelimited?: boolean,
                    ): Msg;

                    /**
                     * Calls ChannelOpenInit.
                     * @param request MsgChannelOpenInit message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgChannelOpenInitResponse
                     */
                    public channelOpenInit(
                        request: ibc.core.channel.v1.IMsgChannelOpenInit,
                        callback: ibc.core.channel.v1.Msg.ChannelOpenInitCallback,
                    ): void;

                    /**
                     * Calls ChannelOpenInit.
                     * @param request MsgChannelOpenInit message or plain object
                     * @returns Promise
                     */
                    public channelOpenInit(
                        request: ibc.core.channel.v1.IMsgChannelOpenInit,
                    ): Promise<ibc.core.channel.v1.MsgChannelOpenInitResponse>;

                    /**
                     * Calls ChannelOpenTry.
                     * @param request MsgChannelOpenTry message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgChannelOpenTryResponse
                     */
                    public channelOpenTry(
                        request: ibc.core.channel.v1.IMsgChannelOpenTry,
                        callback: ibc.core.channel.v1.Msg.ChannelOpenTryCallback,
                    ): void;

                    /**
                     * Calls ChannelOpenTry.
                     * @param request MsgChannelOpenTry message or plain object
                     * @returns Promise
                     */
                    public channelOpenTry(
                        request: ibc.core.channel.v1.IMsgChannelOpenTry,
                    ): Promise<ibc.core.channel.v1.MsgChannelOpenTryResponse>;

                    /**
                     * Calls ChannelOpenAck.
                     * @param request MsgChannelOpenAck message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgChannelOpenAckResponse
                     */
                    public channelOpenAck(
                        request: ibc.core.channel.v1.IMsgChannelOpenAck,
                        callback: ibc.core.channel.v1.Msg.ChannelOpenAckCallback,
                    ): void;

                    /**
                     * Calls ChannelOpenAck.
                     * @param request MsgChannelOpenAck message or plain object
                     * @returns Promise
                     */
                    public channelOpenAck(
                        request: ibc.core.channel.v1.IMsgChannelOpenAck,
                    ): Promise<ibc.core.channel.v1.MsgChannelOpenAckResponse>;

                    /**
                     * Calls ChannelOpenConfirm.
                     * @param request MsgChannelOpenConfirm message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgChannelOpenConfirmResponse
                     */
                    public channelOpenConfirm(
                        request: ibc.core.channel.v1.IMsgChannelOpenConfirm,
                        callback: ibc.core.channel.v1.Msg.ChannelOpenConfirmCallback,
                    ): void;

                    /**
                     * Calls ChannelOpenConfirm.
                     * @param request MsgChannelOpenConfirm message or plain object
                     * @returns Promise
                     */
                    public channelOpenConfirm(
                        request: ibc.core.channel.v1.IMsgChannelOpenConfirm,
                    ): Promise<ibc.core.channel.v1.MsgChannelOpenConfirmResponse>;

                    /**
                     * Calls ChannelCloseInit.
                     * @param request MsgChannelCloseInit message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgChannelCloseInitResponse
                     */
                    public channelCloseInit(
                        request: ibc.core.channel.v1.IMsgChannelCloseInit,
                        callback: ibc.core.channel.v1.Msg.ChannelCloseInitCallback,
                    ): void;

                    /**
                     * Calls ChannelCloseInit.
                     * @param request MsgChannelCloseInit message or plain object
                     * @returns Promise
                     */
                    public channelCloseInit(
                        request: ibc.core.channel.v1.IMsgChannelCloseInit,
                    ): Promise<ibc.core.channel.v1.MsgChannelCloseInitResponse>;

                    /**
                     * Calls ChannelCloseConfirm.
                     * @param request MsgChannelCloseConfirm message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgChannelCloseConfirmResponse
                     */
                    public channelCloseConfirm(
                        request: ibc.core.channel.v1.IMsgChannelCloseConfirm,
                        callback: ibc.core.channel.v1.Msg.ChannelCloseConfirmCallback,
                    ): void;

                    /**
                     * Calls ChannelCloseConfirm.
                     * @param request MsgChannelCloseConfirm message or plain object
                     * @returns Promise
                     */
                    public channelCloseConfirm(
                        request: ibc.core.channel.v1.IMsgChannelCloseConfirm,
                    ): Promise<ibc.core.channel.v1.MsgChannelCloseConfirmResponse>;

                    /**
                     * Calls RecvPacket.
                     * @param request MsgRecvPacket message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgRecvPacketResponse
                     */
                    public recvPacket(
                        request: ibc.core.channel.v1.IMsgRecvPacket,
                        callback: ibc.core.channel.v1.Msg.RecvPacketCallback,
                    ): void;

                    /**
                     * Calls RecvPacket.
                     * @param request MsgRecvPacket message or plain object
                     * @returns Promise
                     */
                    public recvPacket(
                        request: ibc.core.channel.v1.IMsgRecvPacket,
                    ): Promise<ibc.core.channel.v1.MsgRecvPacketResponse>;

                    /**
                     * Calls Timeout.
                     * @param request MsgTimeout message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgTimeoutResponse
                     */
                    public timeout(
                        request: ibc.core.channel.v1.IMsgTimeout,
                        callback: ibc.core.channel.v1.Msg.TimeoutCallback,
                    ): void;

                    /**
                     * Calls Timeout.
                     * @param request MsgTimeout message or plain object
                     * @returns Promise
                     */
                    public timeout(
                        request: ibc.core.channel.v1.IMsgTimeout,
                    ): Promise<ibc.core.channel.v1.MsgTimeoutResponse>;

                    /**
                     * Calls TimeoutOnClose.
                     * @param request MsgTimeoutOnClose message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgTimeoutOnCloseResponse
                     */
                    public timeoutOnClose(
                        request: ibc.core.channel.v1.IMsgTimeoutOnClose,
                        callback: ibc.core.channel.v1.Msg.TimeoutOnCloseCallback,
                    ): void;

                    /**
                     * Calls TimeoutOnClose.
                     * @param request MsgTimeoutOnClose message or plain object
                     * @returns Promise
                     */
                    public timeoutOnClose(
                        request: ibc.core.channel.v1.IMsgTimeoutOnClose,
                    ): Promise<ibc.core.channel.v1.MsgTimeoutOnCloseResponse>;

                    /**
                     * Calls Acknowledgement.
                     * @param request MsgAcknowledgement message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgAcknowledgementResponse
                     */
                    public acknowledgement(
                        request: ibc.core.channel.v1.IMsgAcknowledgement,
                        callback: ibc.core.channel.v1.Msg.AcknowledgementCallback,
                    ): void;

                    /**
                     * Calls Acknowledgement.
                     * @param request MsgAcknowledgement message or plain object
                     * @returns Promise
                     */
                    public acknowledgement(
                        request: ibc.core.channel.v1.IMsgAcknowledgement,
                    ): Promise<ibc.core.channel.v1.MsgAcknowledgementResponse>;
                }

                namespace Msg {
                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#channelOpenInit}.
                     * @param error Error, if any
                     * @param [response] MsgChannelOpenInitResponse
                     */
                    type ChannelOpenInitCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgChannelOpenInitResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#channelOpenTry}.
                     * @param error Error, if any
                     * @param [response] MsgChannelOpenTryResponse
                     */
                    type ChannelOpenTryCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgChannelOpenTryResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#channelOpenAck}.
                     * @param error Error, if any
                     * @param [response] MsgChannelOpenAckResponse
                     */
                    type ChannelOpenAckCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgChannelOpenAckResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#channelOpenConfirm}.
                     * @param error Error, if any
                     * @param [response] MsgChannelOpenConfirmResponse
                     */
                    type ChannelOpenConfirmCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgChannelOpenConfirmResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#channelCloseInit}.
                     * @param error Error, if any
                     * @param [response] MsgChannelCloseInitResponse
                     */
                    type ChannelCloseInitCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgChannelCloseInitResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#channelCloseConfirm}.
                     * @param error Error, if any
                     * @param [response] MsgChannelCloseConfirmResponse
                     */
                    type ChannelCloseConfirmCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgChannelCloseConfirmResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#recvPacket}.
                     * @param error Error, if any
                     * @param [response] MsgRecvPacketResponse
                     */
                    type RecvPacketCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgRecvPacketResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#timeout}.
                     * @param error Error, if any
                     * @param [response] MsgTimeoutResponse
                     */
                    type TimeoutCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgTimeoutResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#timeoutOnClose}.
                     * @param error Error, if any
                     * @param [response] MsgTimeoutOnCloseResponse
                     */
                    type TimeoutOnCloseCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgTimeoutOnCloseResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.channel.v1.Msg#acknowledgement}.
                     * @param error Error, if any
                     * @param [response] MsgAcknowledgementResponse
                     */
                    type AcknowledgementCallback = (
                        error: Error | null,
                        response?: ibc.core.channel.v1.MsgAcknowledgementResponse,
                    ) => void;
                }

                /** Properties of a MsgChannelOpenInit. */
                interface IMsgChannelOpenInit {
                    /** MsgChannelOpenInit portId */
                    portId?: string | null;

                    /** MsgChannelOpenInit channel */
                    channel?: ibc.core.channel.v1.IChannel | null;

                    /** MsgChannelOpenInit signer */
                    signer?: string | null;
                }

                /** Represents a MsgChannelOpenInit. */
                class MsgChannelOpenInit implements IMsgChannelOpenInit {
                    /**
                     * Constructs a new MsgChannelOpenInit.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenInit);

                    /** MsgChannelOpenInit portId. */
                    public portId: string;

                    /** MsgChannelOpenInit channel. */
                    public channel?: ibc.core.channel.v1.IChannel | null;

                    /** MsgChannelOpenInit signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgChannelOpenInit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenInit instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenInit,
                    ): ibc.core.channel.v1.MsgChannelOpenInit;

                    /**
                     * Encodes the specified MsgChannelOpenInit message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenInit.verify|verify} messages.
                     * @param m MsgChannelOpenInit message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenInit,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenInit message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenInit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenInit;
                }

                /** Properties of a MsgChannelOpenInitResponse. */
                interface IMsgChannelOpenInitResponse {}

                /** Represents a MsgChannelOpenInitResponse. */
                class MsgChannelOpenInitResponse implements IMsgChannelOpenInitResponse {
                    /**
                     * Constructs a new MsgChannelOpenInitResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenInitResponse);

                    /**
                     * Creates a new MsgChannelOpenInitResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenInitResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenInitResponse,
                    ): ibc.core.channel.v1.MsgChannelOpenInitResponse;

                    /**
                     * Encodes the specified MsgChannelOpenInitResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenInitResponse.verify|verify} messages.
                     * @param m MsgChannelOpenInitResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenInitResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenInitResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenInitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenInitResponse;
                }

                /** Properties of a MsgChannelOpenTry. */
                interface IMsgChannelOpenTry {
                    /** MsgChannelOpenTry portId */
                    portId?: string | null;

                    /** MsgChannelOpenTry previousChannelId */
                    previousChannelId?: string | null;

                    /** MsgChannelOpenTry channel */
                    channel?: ibc.core.channel.v1.IChannel | null;

                    /** MsgChannelOpenTry counterpartyVersion */
                    counterpartyVersion?: string | null;

                    /** MsgChannelOpenTry proofInit */
                    proofInit?: Uint8Array | null;

                    /** MsgChannelOpenTry proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelOpenTry signer */
                    signer?: string | null;
                }

                /** Represents a MsgChannelOpenTry. */
                class MsgChannelOpenTry implements IMsgChannelOpenTry {
                    /**
                     * Constructs a new MsgChannelOpenTry.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenTry);

                    /** MsgChannelOpenTry portId. */
                    public portId: string;

                    /** MsgChannelOpenTry previousChannelId. */
                    public previousChannelId: string;

                    /** MsgChannelOpenTry channel. */
                    public channel?: ibc.core.channel.v1.IChannel | null;

                    /** MsgChannelOpenTry counterpartyVersion. */
                    public counterpartyVersion: string;

                    /** MsgChannelOpenTry proofInit. */
                    public proofInit: Uint8Array;

                    /** MsgChannelOpenTry proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelOpenTry signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgChannelOpenTry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenTry instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenTry,
                    ): ibc.core.channel.v1.MsgChannelOpenTry;

                    /**
                     * Encodes the specified MsgChannelOpenTry message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenTry.verify|verify} messages.
                     * @param m MsgChannelOpenTry message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenTry,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenTry message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenTry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenTry;
                }

                /** Properties of a MsgChannelOpenTryResponse. */
                interface IMsgChannelOpenTryResponse {}

                /** Represents a MsgChannelOpenTryResponse. */
                class MsgChannelOpenTryResponse implements IMsgChannelOpenTryResponse {
                    /**
                     * Constructs a new MsgChannelOpenTryResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenTryResponse);

                    /**
                     * Creates a new MsgChannelOpenTryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenTryResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenTryResponse,
                    ): ibc.core.channel.v1.MsgChannelOpenTryResponse;

                    /**
                     * Encodes the specified MsgChannelOpenTryResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenTryResponse.verify|verify} messages.
                     * @param m MsgChannelOpenTryResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenTryResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenTryResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenTryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenTryResponse;
                }

                /** Properties of a MsgChannelOpenAck. */
                interface IMsgChannelOpenAck {
                    /** MsgChannelOpenAck portId */
                    portId?: string | null;

                    /** MsgChannelOpenAck channelId */
                    channelId?: string | null;

                    /** MsgChannelOpenAck counterpartyChannelId */
                    counterpartyChannelId?: string | null;

                    /** MsgChannelOpenAck counterpartyVersion */
                    counterpartyVersion?: string | null;

                    /** MsgChannelOpenAck proofTry */
                    proofTry?: Uint8Array | null;

                    /** MsgChannelOpenAck proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelOpenAck signer */
                    signer?: string | null;
                }

                /** Represents a MsgChannelOpenAck. */
                class MsgChannelOpenAck implements IMsgChannelOpenAck {
                    /**
                     * Constructs a new MsgChannelOpenAck.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenAck);

                    /** MsgChannelOpenAck portId. */
                    public portId: string;

                    /** MsgChannelOpenAck channelId. */
                    public channelId: string;

                    /** MsgChannelOpenAck counterpartyChannelId. */
                    public counterpartyChannelId: string;

                    /** MsgChannelOpenAck counterpartyVersion. */
                    public counterpartyVersion: string;

                    /** MsgChannelOpenAck proofTry. */
                    public proofTry: Uint8Array;

                    /** MsgChannelOpenAck proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelOpenAck signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgChannelOpenAck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenAck instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenAck,
                    ): ibc.core.channel.v1.MsgChannelOpenAck;

                    /**
                     * Encodes the specified MsgChannelOpenAck message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenAck.verify|verify} messages.
                     * @param m MsgChannelOpenAck message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenAck,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenAck message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenAck;
                }

                /** Properties of a MsgChannelOpenAckResponse. */
                interface IMsgChannelOpenAckResponse {}

                /** Represents a MsgChannelOpenAckResponse. */
                class MsgChannelOpenAckResponse implements IMsgChannelOpenAckResponse {
                    /**
                     * Constructs a new MsgChannelOpenAckResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenAckResponse);

                    /**
                     * Creates a new MsgChannelOpenAckResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenAckResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenAckResponse,
                    ): ibc.core.channel.v1.MsgChannelOpenAckResponse;

                    /**
                     * Encodes the specified MsgChannelOpenAckResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenAckResponse.verify|verify} messages.
                     * @param m MsgChannelOpenAckResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenAckResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenAckResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenAckResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenAckResponse;
                }

                /** Properties of a MsgChannelOpenConfirm. */
                interface IMsgChannelOpenConfirm {
                    /** MsgChannelOpenConfirm portId */
                    portId?: string | null;

                    /** MsgChannelOpenConfirm channelId */
                    channelId?: string | null;

                    /** MsgChannelOpenConfirm proofAck */
                    proofAck?: Uint8Array | null;

                    /** MsgChannelOpenConfirm proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelOpenConfirm signer */
                    signer?: string | null;
                }

                /** Represents a MsgChannelOpenConfirm. */
                class MsgChannelOpenConfirm implements IMsgChannelOpenConfirm {
                    /**
                     * Constructs a new MsgChannelOpenConfirm.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenConfirm);

                    /** MsgChannelOpenConfirm portId. */
                    public portId: string;

                    /** MsgChannelOpenConfirm channelId. */
                    public channelId: string;

                    /** MsgChannelOpenConfirm proofAck. */
                    public proofAck: Uint8Array;

                    /** MsgChannelOpenConfirm proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelOpenConfirm signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgChannelOpenConfirm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenConfirm instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenConfirm,
                    ): ibc.core.channel.v1.MsgChannelOpenConfirm;

                    /**
                     * Encodes the specified MsgChannelOpenConfirm message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenConfirm.verify|verify} messages.
                     * @param m MsgChannelOpenConfirm message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenConfirm,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenConfirm message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenConfirm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenConfirm;
                }

                /** Properties of a MsgChannelOpenConfirmResponse. */
                interface IMsgChannelOpenConfirmResponse {}

                /** Represents a MsgChannelOpenConfirmResponse. */
                class MsgChannelOpenConfirmResponse implements IMsgChannelOpenConfirmResponse {
                    /**
                     * Constructs a new MsgChannelOpenConfirmResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelOpenConfirmResponse);

                    /**
                     * Creates a new MsgChannelOpenConfirmResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelOpenConfirmResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelOpenConfirmResponse,
                    ): ibc.core.channel.v1.MsgChannelOpenConfirmResponse;

                    /**
                     * Encodes the specified MsgChannelOpenConfirmResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelOpenConfirmResponse.verify|verify} messages.
                     * @param m MsgChannelOpenConfirmResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelOpenConfirmResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelOpenConfirmResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelOpenConfirmResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelOpenConfirmResponse;
                }

                /** Properties of a MsgChannelCloseInit. */
                interface IMsgChannelCloseInit {
                    /** MsgChannelCloseInit portId */
                    portId?: string | null;

                    /** MsgChannelCloseInit channelId */
                    channelId?: string | null;

                    /** MsgChannelCloseInit signer */
                    signer?: string | null;
                }

                /** Represents a MsgChannelCloseInit. */
                class MsgChannelCloseInit implements IMsgChannelCloseInit {
                    /**
                     * Constructs a new MsgChannelCloseInit.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelCloseInit);

                    /** MsgChannelCloseInit portId. */
                    public portId: string;

                    /** MsgChannelCloseInit channelId. */
                    public channelId: string;

                    /** MsgChannelCloseInit signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgChannelCloseInit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelCloseInit instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelCloseInit,
                    ): ibc.core.channel.v1.MsgChannelCloseInit;

                    /**
                     * Encodes the specified MsgChannelCloseInit message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelCloseInit.verify|verify} messages.
                     * @param m MsgChannelCloseInit message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelCloseInit,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelCloseInit message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelCloseInit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelCloseInit;
                }

                /** Properties of a MsgChannelCloseInitResponse. */
                interface IMsgChannelCloseInitResponse {}

                /** Represents a MsgChannelCloseInitResponse. */
                class MsgChannelCloseInitResponse implements IMsgChannelCloseInitResponse {
                    /**
                     * Constructs a new MsgChannelCloseInitResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelCloseInitResponse);

                    /**
                     * Creates a new MsgChannelCloseInitResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelCloseInitResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelCloseInitResponse,
                    ): ibc.core.channel.v1.MsgChannelCloseInitResponse;

                    /**
                     * Encodes the specified MsgChannelCloseInitResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelCloseInitResponse.verify|verify} messages.
                     * @param m MsgChannelCloseInitResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelCloseInitResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelCloseInitResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelCloseInitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelCloseInitResponse;
                }

                /** Properties of a MsgChannelCloseConfirm. */
                interface IMsgChannelCloseConfirm {
                    /** MsgChannelCloseConfirm portId */
                    portId?: string | null;

                    /** MsgChannelCloseConfirm channelId */
                    channelId?: string | null;

                    /** MsgChannelCloseConfirm proofInit */
                    proofInit?: Uint8Array | null;

                    /** MsgChannelCloseConfirm proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelCloseConfirm signer */
                    signer?: string | null;
                }

                /** Represents a MsgChannelCloseConfirm. */
                class MsgChannelCloseConfirm implements IMsgChannelCloseConfirm {
                    /**
                     * Constructs a new MsgChannelCloseConfirm.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelCloseConfirm);

                    /** MsgChannelCloseConfirm portId. */
                    public portId: string;

                    /** MsgChannelCloseConfirm channelId. */
                    public channelId: string;

                    /** MsgChannelCloseConfirm proofInit. */
                    public proofInit: Uint8Array;

                    /** MsgChannelCloseConfirm proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgChannelCloseConfirm signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgChannelCloseConfirm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelCloseConfirm instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelCloseConfirm,
                    ): ibc.core.channel.v1.MsgChannelCloseConfirm;

                    /**
                     * Encodes the specified MsgChannelCloseConfirm message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelCloseConfirm.verify|verify} messages.
                     * @param m MsgChannelCloseConfirm message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelCloseConfirm,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelCloseConfirm message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelCloseConfirm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelCloseConfirm;
                }

                /** Properties of a MsgChannelCloseConfirmResponse. */
                interface IMsgChannelCloseConfirmResponse {}

                /** Represents a MsgChannelCloseConfirmResponse. */
                class MsgChannelCloseConfirmResponse implements IMsgChannelCloseConfirmResponse {
                    /**
                     * Constructs a new MsgChannelCloseConfirmResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgChannelCloseConfirmResponse);

                    /**
                     * Creates a new MsgChannelCloseConfirmResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgChannelCloseConfirmResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgChannelCloseConfirmResponse,
                    ): ibc.core.channel.v1.MsgChannelCloseConfirmResponse;

                    /**
                     * Encodes the specified MsgChannelCloseConfirmResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgChannelCloseConfirmResponse.verify|verify} messages.
                     * @param m MsgChannelCloseConfirmResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgChannelCloseConfirmResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgChannelCloseConfirmResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgChannelCloseConfirmResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgChannelCloseConfirmResponse;
                }

                /** Properties of a MsgRecvPacket. */
                interface IMsgRecvPacket {
                    /** MsgRecvPacket packet */
                    packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgRecvPacket proofCommitment */
                    proofCommitment?: Uint8Array | null;

                    /** MsgRecvPacket proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgRecvPacket signer */
                    signer?: string | null;
                }

                /** Represents a MsgRecvPacket. */
                class MsgRecvPacket implements IMsgRecvPacket {
                    /**
                     * Constructs a new MsgRecvPacket.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgRecvPacket);

                    /** MsgRecvPacket packet. */
                    public packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgRecvPacket proofCommitment. */
                    public proofCommitment: Uint8Array;

                    /** MsgRecvPacket proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgRecvPacket signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgRecvPacket instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgRecvPacket instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgRecvPacket,
                    ): ibc.core.channel.v1.MsgRecvPacket;

                    /**
                     * Encodes the specified MsgRecvPacket message. Does not implicitly {@link ibc.core.channel.v1.MsgRecvPacket.verify|verify} messages.
                     * @param m MsgRecvPacket message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.channel.v1.IMsgRecvPacket, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgRecvPacket message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgRecvPacket
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgRecvPacket;
                }

                /** Properties of a MsgRecvPacketResponse. */
                interface IMsgRecvPacketResponse {}

                /** Represents a MsgRecvPacketResponse. */
                class MsgRecvPacketResponse implements IMsgRecvPacketResponse {
                    /**
                     * Constructs a new MsgRecvPacketResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgRecvPacketResponse);

                    /**
                     * Creates a new MsgRecvPacketResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgRecvPacketResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgRecvPacketResponse,
                    ): ibc.core.channel.v1.MsgRecvPacketResponse;

                    /**
                     * Encodes the specified MsgRecvPacketResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgRecvPacketResponse.verify|verify} messages.
                     * @param m MsgRecvPacketResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgRecvPacketResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgRecvPacketResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgRecvPacketResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgRecvPacketResponse;
                }

                /** Properties of a MsgTimeout. */
                interface IMsgTimeout {
                    /** MsgTimeout packet */
                    packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgTimeout proofUnreceived */
                    proofUnreceived?: Uint8Array | null;

                    /** MsgTimeout proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgTimeout nextSequenceRecv */
                    nextSequenceRecv?: Long | null;

                    /** MsgTimeout signer */
                    signer?: string | null;
                }

                /** Represents a MsgTimeout. */
                class MsgTimeout implements IMsgTimeout {
                    /**
                     * Constructs a new MsgTimeout.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgTimeout);

                    /** MsgTimeout packet. */
                    public packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgTimeout proofUnreceived. */
                    public proofUnreceived: Uint8Array;

                    /** MsgTimeout proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgTimeout nextSequenceRecv. */
                    public nextSequenceRecv: Long;

                    /** MsgTimeout signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgTimeout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgTimeout instance
                     */
                    public static create(properties?: ibc.core.channel.v1.IMsgTimeout): ibc.core.channel.v1.MsgTimeout;

                    /**
                     * Encodes the specified MsgTimeout message. Does not implicitly {@link ibc.core.channel.v1.MsgTimeout.verify|verify} messages.
                     * @param m MsgTimeout message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.channel.v1.IMsgTimeout, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgTimeout message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgTimeout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.MsgTimeout;
                }

                /** Properties of a MsgTimeoutResponse. */
                interface IMsgTimeoutResponse {}

                /** Represents a MsgTimeoutResponse. */
                class MsgTimeoutResponse implements IMsgTimeoutResponse {
                    /**
                     * Constructs a new MsgTimeoutResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgTimeoutResponse);

                    /**
                     * Creates a new MsgTimeoutResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgTimeoutResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgTimeoutResponse,
                    ): ibc.core.channel.v1.MsgTimeoutResponse;

                    /**
                     * Encodes the specified MsgTimeoutResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgTimeoutResponse.verify|verify} messages.
                     * @param m MsgTimeoutResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgTimeoutResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgTimeoutResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgTimeoutResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgTimeoutResponse;
                }

                /** Properties of a MsgTimeoutOnClose. */
                interface IMsgTimeoutOnClose {
                    /** MsgTimeoutOnClose packet */
                    packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgTimeoutOnClose proofUnreceived */
                    proofUnreceived?: Uint8Array | null;

                    /** MsgTimeoutOnClose proofClose */
                    proofClose?: Uint8Array | null;

                    /** MsgTimeoutOnClose proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgTimeoutOnClose nextSequenceRecv */
                    nextSequenceRecv?: Long | null;

                    /** MsgTimeoutOnClose signer */
                    signer?: string | null;
                }

                /** Represents a MsgTimeoutOnClose. */
                class MsgTimeoutOnClose implements IMsgTimeoutOnClose {
                    /**
                     * Constructs a new MsgTimeoutOnClose.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgTimeoutOnClose);

                    /** MsgTimeoutOnClose packet. */
                    public packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgTimeoutOnClose proofUnreceived. */
                    public proofUnreceived: Uint8Array;

                    /** MsgTimeoutOnClose proofClose. */
                    public proofClose: Uint8Array;

                    /** MsgTimeoutOnClose proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgTimeoutOnClose nextSequenceRecv. */
                    public nextSequenceRecv: Long;

                    /** MsgTimeoutOnClose signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgTimeoutOnClose instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgTimeoutOnClose instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgTimeoutOnClose,
                    ): ibc.core.channel.v1.MsgTimeoutOnClose;

                    /**
                     * Encodes the specified MsgTimeoutOnClose message. Does not implicitly {@link ibc.core.channel.v1.MsgTimeoutOnClose.verify|verify} messages.
                     * @param m MsgTimeoutOnClose message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgTimeoutOnClose,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgTimeoutOnClose message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgTimeoutOnClose
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgTimeoutOnClose;
                }

                /** Properties of a MsgTimeoutOnCloseResponse. */
                interface IMsgTimeoutOnCloseResponse {}

                /** Represents a MsgTimeoutOnCloseResponse. */
                class MsgTimeoutOnCloseResponse implements IMsgTimeoutOnCloseResponse {
                    /**
                     * Constructs a new MsgTimeoutOnCloseResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgTimeoutOnCloseResponse);

                    /**
                     * Creates a new MsgTimeoutOnCloseResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgTimeoutOnCloseResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgTimeoutOnCloseResponse,
                    ): ibc.core.channel.v1.MsgTimeoutOnCloseResponse;

                    /**
                     * Encodes the specified MsgTimeoutOnCloseResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgTimeoutOnCloseResponse.verify|verify} messages.
                     * @param m MsgTimeoutOnCloseResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgTimeoutOnCloseResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgTimeoutOnCloseResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgTimeoutOnCloseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgTimeoutOnCloseResponse;
                }

                /** Properties of a MsgAcknowledgement. */
                interface IMsgAcknowledgement {
                    /** MsgAcknowledgement packet */
                    packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgAcknowledgement acknowledgement */
                    acknowledgement?: Uint8Array | null;

                    /** MsgAcknowledgement proofAcked */
                    proofAcked?: Uint8Array | null;

                    /** MsgAcknowledgement proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgAcknowledgement signer */
                    signer?: string | null;
                }

                /** Represents a MsgAcknowledgement. */
                class MsgAcknowledgement implements IMsgAcknowledgement {
                    /**
                     * Constructs a new MsgAcknowledgement.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgAcknowledgement);

                    /** MsgAcknowledgement packet. */
                    public packet?: ibc.core.channel.v1.IPacket | null;

                    /** MsgAcknowledgement acknowledgement. */
                    public acknowledgement: Uint8Array;

                    /** MsgAcknowledgement proofAcked. */
                    public proofAcked: Uint8Array;

                    /** MsgAcknowledgement proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgAcknowledgement signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgAcknowledgement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgAcknowledgement instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgAcknowledgement,
                    ): ibc.core.channel.v1.MsgAcknowledgement;

                    /**
                     * Encodes the specified MsgAcknowledgement message. Does not implicitly {@link ibc.core.channel.v1.MsgAcknowledgement.verify|verify} messages.
                     * @param m MsgAcknowledgement message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgAcknowledgement,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgAcknowledgement message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgAcknowledgement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgAcknowledgement;
                }

                /** Properties of a MsgAcknowledgementResponse. */
                interface IMsgAcknowledgementResponse {}

                /** Represents a MsgAcknowledgementResponse. */
                class MsgAcknowledgementResponse implements IMsgAcknowledgementResponse {
                    /**
                     * Constructs a new MsgAcknowledgementResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IMsgAcknowledgementResponse);

                    /**
                     * Creates a new MsgAcknowledgementResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgAcknowledgementResponse instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IMsgAcknowledgementResponse,
                    ): ibc.core.channel.v1.MsgAcknowledgementResponse;

                    /**
                     * Encodes the specified MsgAcknowledgementResponse message. Does not implicitly {@link ibc.core.channel.v1.MsgAcknowledgementResponse.verify|verify} messages.
                     * @param m MsgAcknowledgementResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IMsgAcknowledgementResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgAcknowledgementResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgAcknowledgementResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.MsgAcknowledgementResponse;
                }

                /** Properties of a Channel. */
                interface IChannel {
                    /** Channel state */
                    state?: ibc.core.channel.v1.State | null;

                    /** Channel ordering */
                    ordering?: ibc.core.channel.v1.Order | null;

                    /** Channel counterparty */
                    counterparty?: ibc.core.channel.v1.ICounterparty | null;

                    /** Channel connectionHops */
                    connectionHops?: string[] | null;

                    /** Channel version */
                    version?: string | null;
                }

                /** Represents a Channel. */
                class Channel implements IChannel {
                    /**
                     * Constructs a new Channel.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IChannel);

                    /** Channel state. */
                    public state: ibc.core.channel.v1.State;

                    /** Channel ordering. */
                    public ordering: ibc.core.channel.v1.Order;

                    /** Channel counterparty. */
                    public counterparty?: ibc.core.channel.v1.ICounterparty | null;

                    /** Channel connectionHops. */
                    public connectionHops: string[];

                    /** Channel version. */
                    public version: string;

                    /**
                     * Creates a new Channel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Channel instance
                     */
                    public static create(properties?: ibc.core.channel.v1.IChannel): ibc.core.channel.v1.Channel;

                    /**
                     * Encodes the specified Channel message. Does not implicitly {@link ibc.core.channel.v1.Channel.verify|verify} messages.
                     * @param m Channel message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.channel.v1.IChannel, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Channel message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Channel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.Channel;
                }

                /** Properties of an IdentifiedChannel. */
                interface IIdentifiedChannel {
                    /** IdentifiedChannel state */
                    state?: ibc.core.channel.v1.State | null;

                    /** IdentifiedChannel ordering */
                    ordering?: ibc.core.channel.v1.Order | null;

                    /** IdentifiedChannel counterparty */
                    counterparty?: ibc.core.channel.v1.ICounterparty | null;

                    /** IdentifiedChannel connectionHops */
                    connectionHops?: string[] | null;

                    /** IdentifiedChannel version */
                    version?: string | null;

                    /** IdentifiedChannel portId */
                    portId?: string | null;

                    /** IdentifiedChannel channelId */
                    channelId?: string | null;
                }

                /** Represents an IdentifiedChannel. */
                class IdentifiedChannel implements IIdentifiedChannel {
                    /**
                     * Constructs a new IdentifiedChannel.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IIdentifiedChannel);

                    /** IdentifiedChannel state. */
                    public state: ibc.core.channel.v1.State;

                    /** IdentifiedChannel ordering. */
                    public ordering: ibc.core.channel.v1.Order;

                    /** IdentifiedChannel counterparty. */
                    public counterparty?: ibc.core.channel.v1.ICounterparty | null;

                    /** IdentifiedChannel connectionHops. */
                    public connectionHops: string[];

                    /** IdentifiedChannel version. */
                    public version: string;

                    /** IdentifiedChannel portId. */
                    public portId: string;

                    /** IdentifiedChannel channelId. */
                    public channelId: string;

                    /**
                     * Creates a new IdentifiedChannel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IdentifiedChannel instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IIdentifiedChannel,
                    ): ibc.core.channel.v1.IdentifiedChannel;

                    /**
                     * Encodes the specified IdentifiedChannel message. Does not implicitly {@link ibc.core.channel.v1.IdentifiedChannel.verify|verify} messages.
                     * @param m IdentifiedChannel message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IIdentifiedChannel,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes an IdentifiedChannel message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns IdentifiedChannel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.IdentifiedChannel;
                }

                /** State enum. */
                enum State {
                    STATE_UNINITIALIZED_UNSPECIFIED = 0,
                    STATE_INIT = 1,
                    STATE_TRYOPEN = 2,
                    STATE_OPEN = 3,
                    STATE_CLOSED = 4,
                }

                /** Order enum. */
                enum Order {
                    ORDER_NONE_UNSPECIFIED = 0,
                    ORDER_UNORDERED = 1,
                    ORDER_ORDERED = 2,
                }

                /** Properties of a Counterparty. */
                interface ICounterparty {
                    /** Counterparty portId */
                    portId?: string | null;

                    /** Counterparty channelId */
                    channelId?: string | null;
                }

                /** Represents a Counterparty. */
                class Counterparty implements ICounterparty {
                    /**
                     * Constructs a new Counterparty.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.ICounterparty);

                    /** Counterparty portId. */
                    public portId: string;

                    /** Counterparty channelId. */
                    public channelId: string;

                    /**
                     * Creates a new Counterparty instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Counterparty instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.ICounterparty,
                    ): ibc.core.channel.v1.Counterparty;

                    /**
                     * Encodes the specified Counterparty message. Does not implicitly {@link ibc.core.channel.v1.Counterparty.verify|verify} messages.
                     * @param m Counterparty message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.channel.v1.ICounterparty, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Counterparty message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Counterparty
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.Counterparty;
                }

                /** Properties of a Packet. */
                interface IPacket {
                    /** Packet sequence */
                    sequence?: Long | null;

                    /** Packet sourcePort */
                    sourcePort?: string | null;

                    /** Packet sourceChannel */
                    sourceChannel?: string | null;

                    /** Packet destinationPort */
                    destinationPort?: string | null;

                    /** Packet destinationChannel */
                    destinationChannel?: string | null;

                    /** Packet data */
                    data?: Uint8Array | null;

                    /** Packet timeoutHeight */
                    timeoutHeight?: ibc.core.client.v1.IHeight | null;

                    /** Packet timeoutTimestamp */
                    timeoutTimestamp?: Long | null;
                }

                /** Represents a Packet. */
                class Packet implements IPacket {
                    /**
                     * Constructs a new Packet.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IPacket);

                    /** Packet sequence. */
                    public sequence: Long;

                    /** Packet sourcePort. */
                    public sourcePort: string;

                    /** Packet sourceChannel. */
                    public sourceChannel: string;

                    /** Packet destinationPort. */
                    public destinationPort: string;

                    /** Packet destinationChannel. */
                    public destinationChannel: string;

                    /** Packet data. */
                    public data: Uint8Array;

                    /** Packet timeoutHeight. */
                    public timeoutHeight?: ibc.core.client.v1.IHeight | null;

                    /** Packet timeoutTimestamp. */
                    public timeoutTimestamp: Long;

                    /**
                     * Creates a new Packet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Packet instance
                     */
                    public static create(properties?: ibc.core.channel.v1.IPacket): ibc.core.channel.v1.Packet;

                    /**
                     * Encodes the specified Packet message. Does not implicitly {@link ibc.core.channel.v1.Packet.verify|verify} messages.
                     * @param m Packet message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.channel.v1.IPacket, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Packet message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Packet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.Packet;
                }

                /** Properties of a PacketState. */
                interface IPacketState {
                    /** PacketState portId */
                    portId?: string | null;

                    /** PacketState channelId */
                    channelId?: string | null;

                    /** PacketState sequence */
                    sequence?: Long | null;

                    /** PacketState data */
                    data?: Uint8Array | null;
                }

                /** Represents a PacketState. */
                class PacketState implements IPacketState {
                    /**
                     * Constructs a new PacketState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IPacketState);

                    /** PacketState portId. */
                    public portId: string;

                    /** PacketState channelId. */
                    public channelId: string;

                    /** PacketState sequence. */
                    public sequence: Long;

                    /** PacketState data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new PacketState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PacketState instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IPacketState,
                    ): ibc.core.channel.v1.PacketState;

                    /**
                     * Encodes the specified PacketState message. Does not implicitly {@link ibc.core.channel.v1.PacketState.verify|verify} messages.
                     * @param m PacketState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.channel.v1.IPacketState, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PacketState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns PacketState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.channel.v1.PacketState;
                }

                /** Properties of an Acknowledgement. */
                interface IAcknowledgement {
                    /** Acknowledgement result */
                    result?: Uint8Array | null;

                    /** Acknowledgement error */
                    error?: string | null;
                }

                /** Represents an Acknowledgement. */
                class Acknowledgement implements IAcknowledgement {
                    /**
                     * Constructs a new Acknowledgement.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.channel.v1.IAcknowledgement);

                    /** Acknowledgement result. */
                    public result: Uint8Array;

                    /** Acknowledgement error. */
                    public error: string;

                    /** Acknowledgement response. */
                    public response?: 'result' | 'error';

                    /**
                     * Creates a new Acknowledgement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Acknowledgement instance
                     */
                    public static create(
                        properties?: ibc.core.channel.v1.IAcknowledgement,
                    ): ibc.core.channel.v1.Acknowledgement;

                    /**
                     * Encodes the specified Acknowledgement message. Does not implicitly {@link ibc.core.channel.v1.Acknowledgement.verify|verify} messages.
                     * @param m Acknowledgement message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.channel.v1.IAcknowledgement,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes an Acknowledgement message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Acknowledgement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.channel.v1.Acknowledgement;
                }
            }
        }

        /** Namespace client. */
        namespace client {
            /** Namespace v1. */
            namespace v1 {
                /** Represents a Msg */
                class Msg extends $protobuf.rpc.Service {
                    /**
                     * Constructs a new Msg service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Msg service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(
                        rpcImpl: $protobuf.RPCImpl,
                        requestDelimited?: boolean,
                        responseDelimited?: boolean,
                    ): Msg;

                    /**
                     * Calls CreateClient.
                     * @param request MsgCreateClient message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgCreateClientResponse
                     */
                    public createClient(
                        request: ibc.core.client.v1.IMsgCreateClient,
                        callback: ibc.core.client.v1.Msg.CreateClientCallback,
                    ): void;

                    /**
                     * Calls CreateClient.
                     * @param request MsgCreateClient message or plain object
                     * @returns Promise
                     */
                    public createClient(
                        request: ibc.core.client.v1.IMsgCreateClient,
                    ): Promise<ibc.core.client.v1.MsgCreateClientResponse>;

                    /**
                     * Calls UpdateClient.
                     * @param request MsgUpdateClient message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgUpdateClientResponse
                     */
                    public updateClient(
                        request: ibc.core.client.v1.IMsgUpdateClient,
                        callback: ibc.core.client.v1.Msg.UpdateClientCallback,
                    ): void;

                    /**
                     * Calls UpdateClient.
                     * @param request MsgUpdateClient message or plain object
                     * @returns Promise
                     */
                    public updateClient(
                        request: ibc.core.client.v1.IMsgUpdateClient,
                    ): Promise<ibc.core.client.v1.MsgUpdateClientResponse>;

                    /**
                     * Calls UpgradeClient.
                     * @param request MsgUpgradeClient message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgUpgradeClientResponse
                     */
                    public upgradeClient(
                        request: ibc.core.client.v1.IMsgUpgradeClient,
                        callback: ibc.core.client.v1.Msg.UpgradeClientCallback,
                    ): void;

                    /**
                     * Calls UpgradeClient.
                     * @param request MsgUpgradeClient message or plain object
                     * @returns Promise
                     */
                    public upgradeClient(
                        request: ibc.core.client.v1.IMsgUpgradeClient,
                    ): Promise<ibc.core.client.v1.MsgUpgradeClientResponse>;

                    /**
                     * Calls SubmitMisbehaviour.
                     * @param request MsgSubmitMisbehaviour message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgSubmitMisbehaviourResponse
                     */
                    public submitMisbehaviour(
                        request: ibc.core.client.v1.IMsgSubmitMisbehaviour,
                        callback: ibc.core.client.v1.Msg.SubmitMisbehaviourCallback,
                    ): void;

                    /**
                     * Calls SubmitMisbehaviour.
                     * @param request MsgSubmitMisbehaviour message or plain object
                     * @returns Promise
                     */
                    public submitMisbehaviour(
                        request: ibc.core.client.v1.IMsgSubmitMisbehaviour,
                    ): Promise<ibc.core.client.v1.MsgSubmitMisbehaviourResponse>;
                }

                namespace Msg {
                    /**
                     * Callback as used by {@link ibc.core.client.v1.Msg#createClient}.
                     * @param error Error, if any
                     * @param [response] MsgCreateClientResponse
                     */
                    type CreateClientCallback = (
                        error: Error | null,
                        response?: ibc.core.client.v1.MsgCreateClientResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.client.v1.Msg#updateClient}.
                     * @param error Error, if any
                     * @param [response] MsgUpdateClientResponse
                     */
                    type UpdateClientCallback = (
                        error: Error | null,
                        response?: ibc.core.client.v1.MsgUpdateClientResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.client.v1.Msg#upgradeClient}.
                     * @param error Error, if any
                     * @param [response] MsgUpgradeClientResponse
                     */
                    type UpgradeClientCallback = (
                        error: Error | null,
                        response?: ibc.core.client.v1.MsgUpgradeClientResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.client.v1.Msg#submitMisbehaviour}.
                     * @param error Error, if any
                     * @param [response] MsgSubmitMisbehaviourResponse
                     */
                    type SubmitMisbehaviourCallback = (
                        error: Error | null,
                        response?: ibc.core.client.v1.MsgSubmitMisbehaviourResponse,
                    ) => void;
                }

                /** Properties of a MsgCreateClient. */
                interface IMsgCreateClient {
                    /** MsgCreateClient clientState */
                    clientState?: google.protobuf.IAny | null;

                    /** MsgCreateClient consensusState */
                    consensusState?: google.protobuf.IAny | null;

                    /** MsgCreateClient signer */
                    signer?: string | null;
                }

                /** Represents a MsgCreateClient. */
                class MsgCreateClient implements IMsgCreateClient {
                    /**
                     * Constructs a new MsgCreateClient.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgCreateClient);

                    /** MsgCreateClient clientState. */
                    public clientState?: google.protobuf.IAny | null;

                    /** MsgCreateClient consensusState. */
                    public consensusState?: google.protobuf.IAny | null;

                    /** MsgCreateClient signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgCreateClient instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgCreateClient instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgCreateClient,
                    ): ibc.core.client.v1.MsgCreateClient;

                    /**
                     * Encodes the specified MsgCreateClient message. Does not implicitly {@link ibc.core.client.v1.MsgCreateClient.verify|verify} messages.
                     * @param m MsgCreateClient message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgCreateClient,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgCreateClient message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgCreateClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgCreateClient;
                }

                /** Properties of a MsgCreateClientResponse. */
                interface IMsgCreateClientResponse {}

                /** Represents a MsgCreateClientResponse. */
                class MsgCreateClientResponse implements IMsgCreateClientResponse {
                    /**
                     * Constructs a new MsgCreateClientResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgCreateClientResponse);

                    /**
                     * Creates a new MsgCreateClientResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgCreateClientResponse instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgCreateClientResponse,
                    ): ibc.core.client.v1.MsgCreateClientResponse;

                    /**
                     * Encodes the specified MsgCreateClientResponse message. Does not implicitly {@link ibc.core.client.v1.MsgCreateClientResponse.verify|verify} messages.
                     * @param m MsgCreateClientResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgCreateClientResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgCreateClientResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgCreateClientResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgCreateClientResponse;
                }

                /** Properties of a MsgUpdateClient. */
                interface IMsgUpdateClient {
                    /** MsgUpdateClient clientId */
                    clientId?: string | null;

                    /** MsgUpdateClient header */
                    header?: google.protobuf.IAny | null;

                    /** MsgUpdateClient signer */
                    signer?: string | null;
                }

                /** Represents a MsgUpdateClient. */
                class MsgUpdateClient implements IMsgUpdateClient {
                    /**
                     * Constructs a new MsgUpdateClient.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgUpdateClient);

                    /** MsgUpdateClient clientId. */
                    public clientId: string;

                    /** MsgUpdateClient header. */
                    public header?: google.protobuf.IAny | null;

                    /** MsgUpdateClient signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgUpdateClient instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgUpdateClient instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgUpdateClient,
                    ): ibc.core.client.v1.MsgUpdateClient;

                    /**
                     * Encodes the specified MsgUpdateClient message. Does not implicitly {@link ibc.core.client.v1.MsgUpdateClient.verify|verify} messages.
                     * @param m MsgUpdateClient message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgUpdateClient,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgUpdateClient message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgUpdateClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgUpdateClient;
                }

                /** Properties of a MsgUpdateClientResponse. */
                interface IMsgUpdateClientResponse {}

                /** Represents a MsgUpdateClientResponse. */
                class MsgUpdateClientResponse implements IMsgUpdateClientResponse {
                    /**
                     * Constructs a new MsgUpdateClientResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgUpdateClientResponse);

                    /**
                     * Creates a new MsgUpdateClientResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgUpdateClientResponse instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgUpdateClientResponse,
                    ): ibc.core.client.v1.MsgUpdateClientResponse;

                    /**
                     * Encodes the specified MsgUpdateClientResponse message. Does not implicitly {@link ibc.core.client.v1.MsgUpdateClientResponse.verify|verify} messages.
                     * @param m MsgUpdateClientResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgUpdateClientResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgUpdateClientResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgUpdateClientResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgUpdateClientResponse;
                }

                /** Properties of a MsgUpgradeClient. */
                interface IMsgUpgradeClient {
                    /** MsgUpgradeClient clientId */
                    clientId?: string | null;

                    /** MsgUpgradeClient clientState */
                    clientState?: google.protobuf.IAny | null;

                    /** MsgUpgradeClient consensusState */
                    consensusState?: google.protobuf.IAny | null;

                    /** MsgUpgradeClient proofUpgradeClient */
                    proofUpgradeClient?: Uint8Array | null;

                    /** MsgUpgradeClient proofUpgradeConsensusState */
                    proofUpgradeConsensusState?: Uint8Array | null;

                    /** MsgUpgradeClient signer */
                    signer?: string | null;
                }

                /** Represents a MsgUpgradeClient. */
                class MsgUpgradeClient implements IMsgUpgradeClient {
                    /**
                     * Constructs a new MsgUpgradeClient.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgUpgradeClient);

                    /** MsgUpgradeClient clientId. */
                    public clientId: string;

                    /** MsgUpgradeClient clientState. */
                    public clientState?: google.protobuf.IAny | null;

                    /** MsgUpgradeClient consensusState. */
                    public consensusState?: google.protobuf.IAny | null;

                    /** MsgUpgradeClient proofUpgradeClient. */
                    public proofUpgradeClient: Uint8Array;

                    /** MsgUpgradeClient proofUpgradeConsensusState. */
                    public proofUpgradeConsensusState: Uint8Array;

                    /** MsgUpgradeClient signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgUpgradeClient instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgUpgradeClient instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgUpgradeClient,
                    ): ibc.core.client.v1.MsgUpgradeClient;

                    /**
                     * Encodes the specified MsgUpgradeClient message. Does not implicitly {@link ibc.core.client.v1.MsgUpgradeClient.verify|verify} messages.
                     * @param m MsgUpgradeClient message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgUpgradeClient,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgUpgradeClient message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgUpgradeClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgUpgradeClient;
                }

                /** Properties of a MsgUpgradeClientResponse. */
                interface IMsgUpgradeClientResponse {}

                /** Represents a MsgUpgradeClientResponse. */
                class MsgUpgradeClientResponse implements IMsgUpgradeClientResponse {
                    /**
                     * Constructs a new MsgUpgradeClientResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgUpgradeClientResponse);

                    /**
                     * Creates a new MsgUpgradeClientResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgUpgradeClientResponse instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgUpgradeClientResponse,
                    ): ibc.core.client.v1.MsgUpgradeClientResponse;

                    /**
                     * Encodes the specified MsgUpgradeClientResponse message. Does not implicitly {@link ibc.core.client.v1.MsgUpgradeClientResponse.verify|verify} messages.
                     * @param m MsgUpgradeClientResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgUpgradeClientResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgUpgradeClientResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgUpgradeClientResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgUpgradeClientResponse;
                }

                /** Properties of a MsgSubmitMisbehaviour. */
                interface IMsgSubmitMisbehaviour {
                    /** MsgSubmitMisbehaviour clientId */
                    clientId?: string | null;

                    /** MsgSubmitMisbehaviour misbehaviour */
                    misbehaviour?: google.protobuf.IAny | null;

                    /** MsgSubmitMisbehaviour signer */
                    signer?: string | null;
                }

                /** Represents a MsgSubmitMisbehaviour. */
                class MsgSubmitMisbehaviour implements IMsgSubmitMisbehaviour {
                    /**
                     * Constructs a new MsgSubmitMisbehaviour.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgSubmitMisbehaviour);

                    /** MsgSubmitMisbehaviour clientId. */
                    public clientId: string;

                    /** MsgSubmitMisbehaviour misbehaviour. */
                    public misbehaviour?: google.protobuf.IAny | null;

                    /** MsgSubmitMisbehaviour signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgSubmitMisbehaviour instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgSubmitMisbehaviour instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgSubmitMisbehaviour,
                    ): ibc.core.client.v1.MsgSubmitMisbehaviour;

                    /**
                     * Encodes the specified MsgSubmitMisbehaviour message. Does not implicitly {@link ibc.core.client.v1.MsgSubmitMisbehaviour.verify|verify} messages.
                     * @param m MsgSubmitMisbehaviour message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgSubmitMisbehaviour,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgSubmitMisbehaviour message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgSubmitMisbehaviour
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgSubmitMisbehaviour;
                }

                /** Properties of a MsgSubmitMisbehaviourResponse. */
                interface IMsgSubmitMisbehaviourResponse {}

                /** Represents a MsgSubmitMisbehaviourResponse. */
                class MsgSubmitMisbehaviourResponse implements IMsgSubmitMisbehaviourResponse {
                    /**
                     * Constructs a new MsgSubmitMisbehaviourResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IMsgSubmitMisbehaviourResponse);

                    /**
                     * Creates a new MsgSubmitMisbehaviourResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgSubmitMisbehaviourResponse instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IMsgSubmitMisbehaviourResponse,
                    ): ibc.core.client.v1.MsgSubmitMisbehaviourResponse;

                    /**
                     * Encodes the specified MsgSubmitMisbehaviourResponse message. Does not implicitly {@link ibc.core.client.v1.MsgSubmitMisbehaviourResponse.verify|verify} messages.
                     * @param m MsgSubmitMisbehaviourResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IMsgSubmitMisbehaviourResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgSubmitMisbehaviourResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgSubmitMisbehaviourResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.MsgSubmitMisbehaviourResponse;
                }

                /** Properties of an IdentifiedClientState. */
                interface IIdentifiedClientState {
                    /** IdentifiedClientState clientId */
                    clientId?: string | null;

                    /** IdentifiedClientState clientState */
                    clientState?: google.protobuf.IAny | null;
                }

                /** Represents an IdentifiedClientState. */
                class IdentifiedClientState implements IIdentifiedClientState {
                    /**
                     * Constructs a new IdentifiedClientState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IIdentifiedClientState);

                    /** IdentifiedClientState clientId. */
                    public clientId: string;

                    /** IdentifiedClientState clientState. */
                    public clientState?: google.protobuf.IAny | null;

                    /**
                     * Creates a new IdentifiedClientState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IdentifiedClientState instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IIdentifiedClientState,
                    ): ibc.core.client.v1.IdentifiedClientState;

                    /**
                     * Encodes the specified IdentifiedClientState message. Does not implicitly {@link ibc.core.client.v1.IdentifiedClientState.verify|verify} messages.
                     * @param m IdentifiedClientState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IIdentifiedClientState,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes an IdentifiedClientState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns IdentifiedClientState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.IdentifiedClientState;
                }

                /** Properties of a ConsensusStateWithHeight. */
                interface IConsensusStateWithHeight {
                    /** ConsensusStateWithHeight height */
                    height?: ibc.core.client.v1.IHeight | null;

                    /** ConsensusStateWithHeight consensusState */
                    consensusState?: google.protobuf.IAny | null;
                }

                /** Represents a ConsensusStateWithHeight. */
                class ConsensusStateWithHeight implements IConsensusStateWithHeight {
                    /**
                     * Constructs a new ConsensusStateWithHeight.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IConsensusStateWithHeight);

                    /** ConsensusStateWithHeight height. */
                    public height?: ibc.core.client.v1.IHeight | null;

                    /** ConsensusStateWithHeight consensusState. */
                    public consensusState?: google.protobuf.IAny | null;

                    /**
                     * Creates a new ConsensusStateWithHeight instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsensusStateWithHeight instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IConsensusStateWithHeight,
                    ): ibc.core.client.v1.ConsensusStateWithHeight;

                    /**
                     * Encodes the specified ConsensusStateWithHeight message. Does not implicitly {@link ibc.core.client.v1.ConsensusStateWithHeight.verify|verify} messages.
                     * @param m ConsensusStateWithHeight message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IConsensusStateWithHeight,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConsensusStateWithHeight message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConsensusStateWithHeight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.ConsensusStateWithHeight;
                }

                /** Properties of a ClientConsensusStates. */
                interface IClientConsensusStates {
                    /** ClientConsensusStates clientId */
                    clientId?: string | null;

                    /** ClientConsensusStates consensusStates */
                    consensusStates?: ibc.core.client.v1.IConsensusStateWithHeight[] | null;
                }

                /** Represents a ClientConsensusStates. */
                class ClientConsensusStates implements IClientConsensusStates {
                    /**
                     * Constructs a new ClientConsensusStates.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IClientConsensusStates);

                    /** ClientConsensusStates clientId. */
                    public clientId: string;

                    /** ClientConsensusStates consensusStates. */
                    public consensusStates: ibc.core.client.v1.IConsensusStateWithHeight[];

                    /**
                     * Creates a new ClientConsensusStates instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConsensusStates instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IClientConsensusStates,
                    ): ibc.core.client.v1.ClientConsensusStates;

                    /**
                     * Encodes the specified ClientConsensusStates message. Does not implicitly {@link ibc.core.client.v1.ClientConsensusStates.verify|verify} messages.
                     * @param m ClientConsensusStates message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IClientConsensusStates,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientConsensusStates message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientConsensusStates
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.ClientConsensusStates;
                }

                /** Properties of a ClientUpdateProposal. */
                interface IClientUpdateProposal {
                    /** ClientUpdateProposal title */
                    title?: string | null;

                    /** ClientUpdateProposal description */
                    description?: string | null;

                    /** ClientUpdateProposal subjectClientId */
                    subjectClientId?: string | null;

                    /** ClientUpdateProposal substituteClientId */
                    substituteClientId?: string | null;
                }

                /** Represents a ClientUpdateProposal. */
                class ClientUpdateProposal implements IClientUpdateProposal {
                    /**
                     * Constructs a new ClientUpdateProposal.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IClientUpdateProposal);

                    /** ClientUpdateProposal title. */
                    public title: string;

                    /** ClientUpdateProposal description. */
                    public description: string;

                    /** ClientUpdateProposal subjectClientId. */
                    public subjectClientId: string;

                    /** ClientUpdateProposal substituteClientId. */
                    public substituteClientId: string;

                    /**
                     * Creates a new ClientUpdateProposal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientUpdateProposal instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IClientUpdateProposal,
                    ): ibc.core.client.v1.ClientUpdateProposal;

                    /**
                     * Encodes the specified ClientUpdateProposal message. Does not implicitly {@link ibc.core.client.v1.ClientUpdateProposal.verify|verify} messages.
                     * @param m ClientUpdateProposal message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IClientUpdateProposal,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientUpdateProposal message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientUpdateProposal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.ClientUpdateProposal;
                }

                /** Properties of an UpgradeProposal. */
                interface IUpgradeProposal {
                    /** UpgradeProposal title */
                    title?: string | null;

                    /** UpgradeProposal description */
                    description?: string | null;

                    /** UpgradeProposal plan */
                    plan?: cosmos.upgrade.v1beta1.IPlan | null;

                    /** UpgradeProposal upgradedClientState */
                    upgradedClientState?: google.protobuf.IAny | null;
                }

                /** Represents an UpgradeProposal. */
                class UpgradeProposal implements IUpgradeProposal {
                    /**
                     * Constructs a new UpgradeProposal.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IUpgradeProposal);

                    /** UpgradeProposal title. */
                    public title: string;

                    /** UpgradeProposal description. */
                    public description: string;

                    /** UpgradeProposal plan. */
                    public plan?: cosmos.upgrade.v1beta1.IPlan | null;

                    /** UpgradeProposal upgradedClientState. */
                    public upgradedClientState?: google.protobuf.IAny | null;

                    /**
                     * Creates a new UpgradeProposal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeProposal instance
                     */
                    public static create(
                        properties?: ibc.core.client.v1.IUpgradeProposal,
                    ): ibc.core.client.v1.UpgradeProposal;

                    /**
                     * Encodes the specified UpgradeProposal message. Does not implicitly {@link ibc.core.client.v1.UpgradeProposal.verify|verify} messages.
                     * @param m UpgradeProposal message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.client.v1.IUpgradeProposal,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeProposal message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns UpgradeProposal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.client.v1.UpgradeProposal;
                }

                /** Properties of an Height. */
                interface IHeight {
                    /** Height revisionNumber */
                    revisionNumber?: Long | null;

                    /** Height revisionHeight */
                    revisionHeight?: Long | null;
                }

                /** Represents an Height. */
                class Height implements IHeight {
                    /**
                     * Constructs a new Height.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IHeight);

                    /** Height revisionNumber. */
                    public revisionNumber: Long;

                    /** Height revisionHeight. */
                    public revisionHeight: Long;

                    /**
                     * Creates a new Height instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Height instance
                     */
                    public static create(properties?: ibc.core.client.v1.IHeight): ibc.core.client.v1.Height;

                    /**
                     * Encodes the specified Height message. Does not implicitly {@link ibc.core.client.v1.Height.verify|verify} messages.
                     * @param m Height message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.client.v1.IHeight, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Height message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Height
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.client.v1.Height;
                }

                /** Properties of a Params. */
                interface IParams {
                    /** Params allowedClients */
                    allowedClients?: string[] | null;
                }

                /** Represents a Params. */
                class Params implements IParams {
                    /**
                     * Constructs a new Params.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.client.v1.IParams);

                    /** Params allowedClients. */
                    public allowedClients: string[];

                    /**
                     * Creates a new Params instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Params instance
                     */
                    public static create(properties?: ibc.core.client.v1.IParams): ibc.core.client.v1.Params;

                    /**
                     * Encodes the specified Params message. Does not implicitly {@link ibc.core.client.v1.Params.verify|verify} messages.
                     * @param m Params message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.client.v1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Params message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Params
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.client.v1.Params;
                }
            }
        }

        /** Namespace connection. */
        namespace connection {
            /** Namespace v1. */
            namespace v1 {
                /** Represents a Msg */
                class Msg extends $protobuf.rpc.Service {
                    /**
                     * Constructs a new Msg service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Msg service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(
                        rpcImpl: $protobuf.RPCImpl,
                        requestDelimited?: boolean,
                        responseDelimited?: boolean,
                    ): Msg;

                    /**
                     * Calls ConnectionOpenInit.
                     * @param request MsgConnectionOpenInit message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgConnectionOpenInitResponse
                     */
                    public connectionOpenInit(
                        request: ibc.core.connection.v1.IMsgConnectionOpenInit,
                        callback: ibc.core.connection.v1.Msg.ConnectionOpenInitCallback,
                    ): void;

                    /**
                     * Calls ConnectionOpenInit.
                     * @param request MsgConnectionOpenInit message or plain object
                     * @returns Promise
                     */
                    public connectionOpenInit(
                        request: ibc.core.connection.v1.IMsgConnectionOpenInit,
                    ): Promise<ibc.core.connection.v1.MsgConnectionOpenInitResponse>;

                    /**
                     * Calls ConnectionOpenTry.
                     * @param request MsgConnectionOpenTry message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgConnectionOpenTryResponse
                     */
                    public connectionOpenTry(
                        request: ibc.core.connection.v1.IMsgConnectionOpenTry,
                        callback: ibc.core.connection.v1.Msg.ConnectionOpenTryCallback,
                    ): void;

                    /**
                     * Calls ConnectionOpenTry.
                     * @param request MsgConnectionOpenTry message or plain object
                     * @returns Promise
                     */
                    public connectionOpenTry(
                        request: ibc.core.connection.v1.IMsgConnectionOpenTry,
                    ): Promise<ibc.core.connection.v1.MsgConnectionOpenTryResponse>;

                    /**
                     * Calls ConnectionOpenAck.
                     * @param request MsgConnectionOpenAck message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgConnectionOpenAckResponse
                     */
                    public connectionOpenAck(
                        request: ibc.core.connection.v1.IMsgConnectionOpenAck,
                        callback: ibc.core.connection.v1.Msg.ConnectionOpenAckCallback,
                    ): void;

                    /**
                     * Calls ConnectionOpenAck.
                     * @param request MsgConnectionOpenAck message or plain object
                     * @returns Promise
                     */
                    public connectionOpenAck(
                        request: ibc.core.connection.v1.IMsgConnectionOpenAck,
                    ): Promise<ibc.core.connection.v1.MsgConnectionOpenAckResponse>;

                    /**
                     * Calls ConnectionOpenConfirm.
                     * @param request MsgConnectionOpenConfirm message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgConnectionOpenConfirmResponse
                     */
                    public connectionOpenConfirm(
                        request: ibc.core.connection.v1.IMsgConnectionOpenConfirm,
                        callback: ibc.core.connection.v1.Msg.ConnectionOpenConfirmCallback,
                    ): void;

                    /**
                     * Calls ConnectionOpenConfirm.
                     * @param request MsgConnectionOpenConfirm message or plain object
                     * @returns Promise
                     */
                    public connectionOpenConfirm(
                        request: ibc.core.connection.v1.IMsgConnectionOpenConfirm,
                    ): Promise<ibc.core.connection.v1.MsgConnectionOpenConfirmResponse>;
                }

                namespace Msg {
                    /**
                     * Callback as used by {@link ibc.core.connection.v1.Msg#connectionOpenInit}.
                     * @param error Error, if any
                     * @param [response] MsgConnectionOpenInitResponse
                     */
                    type ConnectionOpenInitCallback = (
                        error: Error | null,
                        response?: ibc.core.connection.v1.MsgConnectionOpenInitResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.connection.v1.Msg#connectionOpenTry}.
                     * @param error Error, if any
                     * @param [response] MsgConnectionOpenTryResponse
                     */
                    type ConnectionOpenTryCallback = (
                        error: Error | null,
                        response?: ibc.core.connection.v1.MsgConnectionOpenTryResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.connection.v1.Msg#connectionOpenAck}.
                     * @param error Error, if any
                     * @param [response] MsgConnectionOpenAckResponse
                     */
                    type ConnectionOpenAckCallback = (
                        error: Error | null,
                        response?: ibc.core.connection.v1.MsgConnectionOpenAckResponse,
                    ) => void;

                    /**
                     * Callback as used by {@link ibc.core.connection.v1.Msg#connectionOpenConfirm}.
                     * @param error Error, if any
                     * @param [response] MsgConnectionOpenConfirmResponse
                     */
                    type ConnectionOpenConfirmCallback = (
                        error: Error | null,
                        response?: ibc.core.connection.v1.MsgConnectionOpenConfirmResponse,
                    ) => void;
                }

                /** Properties of a MsgConnectionOpenInit. */
                interface IMsgConnectionOpenInit {
                    /** MsgConnectionOpenInit clientId */
                    clientId?: string | null;

                    /** MsgConnectionOpenInit counterparty */
                    counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** MsgConnectionOpenInit version */
                    version?: ibc.core.connection.v1.IVersion | null;

                    /** MsgConnectionOpenInit delayPeriod */
                    delayPeriod?: Long | null;

                    /** MsgConnectionOpenInit signer */
                    signer?: string | null;
                }

                /** Represents a MsgConnectionOpenInit. */
                class MsgConnectionOpenInit implements IMsgConnectionOpenInit {
                    /**
                     * Constructs a new MsgConnectionOpenInit.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenInit);

                    /** MsgConnectionOpenInit clientId. */
                    public clientId: string;

                    /** MsgConnectionOpenInit counterparty. */
                    public counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** MsgConnectionOpenInit version. */
                    public version?: ibc.core.connection.v1.IVersion | null;

                    /** MsgConnectionOpenInit delayPeriod. */
                    public delayPeriod: Long;

                    /** MsgConnectionOpenInit signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgConnectionOpenInit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenInit instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenInit,
                    ): ibc.core.connection.v1.MsgConnectionOpenInit;

                    /**
                     * Encodes the specified MsgConnectionOpenInit message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenInit.verify|verify} messages.
                     * @param m MsgConnectionOpenInit message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenInit,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenInit message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenInit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenInit;
                }

                /** Properties of a MsgConnectionOpenInitResponse. */
                interface IMsgConnectionOpenInitResponse {}

                /** Represents a MsgConnectionOpenInitResponse. */
                class MsgConnectionOpenInitResponse implements IMsgConnectionOpenInitResponse {
                    /**
                     * Constructs a new MsgConnectionOpenInitResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenInitResponse);

                    /**
                     * Creates a new MsgConnectionOpenInitResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenInitResponse instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenInitResponse,
                    ): ibc.core.connection.v1.MsgConnectionOpenInitResponse;

                    /**
                     * Encodes the specified MsgConnectionOpenInitResponse message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenInitResponse.verify|verify} messages.
                     * @param m MsgConnectionOpenInitResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenInitResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenInitResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenInitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenInitResponse;
                }

                /** Properties of a MsgConnectionOpenTry. */
                interface IMsgConnectionOpenTry {
                    /** MsgConnectionOpenTry clientId */
                    clientId?: string | null;

                    /** MsgConnectionOpenTry previousConnectionId */
                    previousConnectionId?: string | null;

                    /** MsgConnectionOpenTry clientState */
                    clientState?: google.protobuf.IAny | null;

                    /** MsgConnectionOpenTry counterparty */
                    counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** MsgConnectionOpenTry delayPeriod */
                    delayPeriod?: Long | null;

                    /** MsgConnectionOpenTry counterpartyVersions */
                    counterpartyVersions?: ibc.core.connection.v1.IVersion[] | null;

                    /** MsgConnectionOpenTry proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenTry proofInit */
                    proofInit?: Uint8Array | null;

                    /** MsgConnectionOpenTry proofClient */
                    proofClient?: Uint8Array | null;

                    /** MsgConnectionOpenTry proofConsensus */
                    proofConsensus?: Uint8Array | null;

                    /** MsgConnectionOpenTry consensusHeight */
                    consensusHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenTry signer */
                    signer?: string | null;
                }

                /** Represents a MsgConnectionOpenTry. */
                class MsgConnectionOpenTry implements IMsgConnectionOpenTry {
                    /**
                     * Constructs a new MsgConnectionOpenTry.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenTry);

                    /** MsgConnectionOpenTry clientId. */
                    public clientId: string;

                    /** MsgConnectionOpenTry previousConnectionId. */
                    public previousConnectionId: string;

                    /** MsgConnectionOpenTry clientState. */
                    public clientState?: google.protobuf.IAny | null;

                    /** MsgConnectionOpenTry counterparty. */
                    public counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** MsgConnectionOpenTry delayPeriod. */
                    public delayPeriod: Long;

                    /** MsgConnectionOpenTry counterpartyVersions. */
                    public counterpartyVersions: ibc.core.connection.v1.IVersion[];

                    /** MsgConnectionOpenTry proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenTry proofInit. */
                    public proofInit: Uint8Array;

                    /** MsgConnectionOpenTry proofClient. */
                    public proofClient: Uint8Array;

                    /** MsgConnectionOpenTry proofConsensus. */
                    public proofConsensus: Uint8Array;

                    /** MsgConnectionOpenTry consensusHeight. */
                    public consensusHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenTry signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgConnectionOpenTry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenTry instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenTry,
                    ): ibc.core.connection.v1.MsgConnectionOpenTry;

                    /**
                     * Encodes the specified MsgConnectionOpenTry message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenTry.verify|verify} messages.
                     * @param m MsgConnectionOpenTry message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenTry,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenTry message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenTry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenTry;
                }

                /** Properties of a MsgConnectionOpenTryResponse. */
                interface IMsgConnectionOpenTryResponse {}

                /** Represents a MsgConnectionOpenTryResponse. */
                class MsgConnectionOpenTryResponse implements IMsgConnectionOpenTryResponse {
                    /**
                     * Constructs a new MsgConnectionOpenTryResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenTryResponse);

                    /**
                     * Creates a new MsgConnectionOpenTryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenTryResponse instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenTryResponse,
                    ): ibc.core.connection.v1.MsgConnectionOpenTryResponse;

                    /**
                     * Encodes the specified MsgConnectionOpenTryResponse message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenTryResponse.verify|verify} messages.
                     * @param m MsgConnectionOpenTryResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenTryResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenTryResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenTryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenTryResponse;
                }

                /** Properties of a MsgConnectionOpenAck. */
                interface IMsgConnectionOpenAck {
                    /** MsgConnectionOpenAck connectionId */
                    connectionId?: string | null;

                    /** MsgConnectionOpenAck counterpartyConnectionId */
                    counterpartyConnectionId?: string | null;

                    /** MsgConnectionOpenAck version */
                    version?: ibc.core.connection.v1.IVersion | null;

                    /** MsgConnectionOpenAck clientState */
                    clientState?: google.protobuf.IAny | null;

                    /** MsgConnectionOpenAck proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenAck proofTry */
                    proofTry?: Uint8Array | null;

                    /** MsgConnectionOpenAck proofClient */
                    proofClient?: Uint8Array | null;

                    /** MsgConnectionOpenAck proofConsensus */
                    proofConsensus?: Uint8Array | null;

                    /** MsgConnectionOpenAck consensusHeight */
                    consensusHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenAck signer */
                    signer?: string | null;
                }

                /** Represents a MsgConnectionOpenAck. */
                class MsgConnectionOpenAck implements IMsgConnectionOpenAck {
                    /**
                     * Constructs a new MsgConnectionOpenAck.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenAck);

                    /** MsgConnectionOpenAck connectionId. */
                    public connectionId: string;

                    /** MsgConnectionOpenAck counterpartyConnectionId. */
                    public counterpartyConnectionId: string;

                    /** MsgConnectionOpenAck version. */
                    public version?: ibc.core.connection.v1.IVersion | null;

                    /** MsgConnectionOpenAck clientState. */
                    public clientState?: google.protobuf.IAny | null;

                    /** MsgConnectionOpenAck proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenAck proofTry. */
                    public proofTry: Uint8Array;

                    /** MsgConnectionOpenAck proofClient. */
                    public proofClient: Uint8Array;

                    /** MsgConnectionOpenAck proofConsensus. */
                    public proofConsensus: Uint8Array;

                    /** MsgConnectionOpenAck consensusHeight. */
                    public consensusHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenAck signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgConnectionOpenAck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenAck instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenAck,
                    ): ibc.core.connection.v1.MsgConnectionOpenAck;

                    /**
                     * Encodes the specified MsgConnectionOpenAck message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenAck.verify|verify} messages.
                     * @param m MsgConnectionOpenAck message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenAck,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenAck message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenAck;
                }

                /** Properties of a MsgConnectionOpenAckResponse. */
                interface IMsgConnectionOpenAckResponse {}

                /** Represents a MsgConnectionOpenAckResponse. */
                class MsgConnectionOpenAckResponse implements IMsgConnectionOpenAckResponse {
                    /**
                     * Constructs a new MsgConnectionOpenAckResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenAckResponse);

                    /**
                     * Creates a new MsgConnectionOpenAckResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenAckResponse instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenAckResponse,
                    ): ibc.core.connection.v1.MsgConnectionOpenAckResponse;

                    /**
                     * Encodes the specified MsgConnectionOpenAckResponse message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenAckResponse.verify|verify} messages.
                     * @param m MsgConnectionOpenAckResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenAckResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenAckResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenAckResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenAckResponse;
                }

                /** Properties of a MsgConnectionOpenConfirm. */
                interface IMsgConnectionOpenConfirm {
                    /** MsgConnectionOpenConfirm connectionId */
                    connectionId?: string | null;

                    /** MsgConnectionOpenConfirm proofAck */
                    proofAck?: Uint8Array | null;

                    /** MsgConnectionOpenConfirm proofHeight */
                    proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenConfirm signer */
                    signer?: string | null;
                }

                /** Represents a MsgConnectionOpenConfirm. */
                class MsgConnectionOpenConfirm implements IMsgConnectionOpenConfirm {
                    /**
                     * Constructs a new MsgConnectionOpenConfirm.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenConfirm);

                    /** MsgConnectionOpenConfirm connectionId. */
                    public connectionId: string;

                    /** MsgConnectionOpenConfirm proofAck. */
                    public proofAck: Uint8Array;

                    /** MsgConnectionOpenConfirm proofHeight. */
                    public proofHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgConnectionOpenConfirm signer. */
                    public signer: string;

                    /**
                     * Creates a new MsgConnectionOpenConfirm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenConfirm instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenConfirm,
                    ): ibc.core.connection.v1.MsgConnectionOpenConfirm;

                    /**
                     * Encodes the specified MsgConnectionOpenConfirm message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenConfirm.verify|verify} messages.
                     * @param m MsgConnectionOpenConfirm message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenConfirm,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenConfirm message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenConfirm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenConfirm;
                }

                /** Properties of a MsgConnectionOpenConfirmResponse. */
                interface IMsgConnectionOpenConfirmResponse {}

                /** Represents a MsgConnectionOpenConfirmResponse. */
                class MsgConnectionOpenConfirmResponse implements IMsgConnectionOpenConfirmResponse {
                    /**
                     * Constructs a new MsgConnectionOpenConfirmResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IMsgConnectionOpenConfirmResponse);

                    /**
                     * Creates a new MsgConnectionOpenConfirmResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgConnectionOpenConfirmResponse instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IMsgConnectionOpenConfirmResponse,
                    ): ibc.core.connection.v1.MsgConnectionOpenConfirmResponse;

                    /**
                     * Encodes the specified MsgConnectionOpenConfirmResponse message. Does not implicitly {@link ibc.core.connection.v1.MsgConnectionOpenConfirmResponse.verify|verify} messages.
                     * @param m MsgConnectionOpenConfirmResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IMsgConnectionOpenConfirmResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgConnectionOpenConfirmResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgConnectionOpenConfirmResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.MsgConnectionOpenConfirmResponse;
                }

                /** Properties of a ConnectionEnd. */
                interface IConnectionEnd {
                    /** ConnectionEnd clientId */
                    clientId?: string | null;

                    /** ConnectionEnd versions */
                    versions?: ibc.core.connection.v1.IVersion[] | null;

                    /** ConnectionEnd state */
                    state?: ibc.core.connection.v1.State | null;

                    /** ConnectionEnd counterparty */
                    counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** ConnectionEnd delayPeriod */
                    delayPeriod?: Long | null;
                }

                /** Represents a ConnectionEnd. */
                class ConnectionEnd implements IConnectionEnd {
                    /**
                     * Constructs a new ConnectionEnd.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IConnectionEnd);

                    /** ConnectionEnd clientId. */
                    public clientId: string;

                    /** ConnectionEnd versions. */
                    public versions: ibc.core.connection.v1.IVersion[];

                    /** ConnectionEnd state. */
                    public state: ibc.core.connection.v1.State;

                    /** ConnectionEnd counterparty. */
                    public counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** ConnectionEnd delayPeriod. */
                    public delayPeriod: Long;

                    /**
                     * Creates a new ConnectionEnd instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionEnd instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IConnectionEnd,
                    ): ibc.core.connection.v1.ConnectionEnd;

                    /**
                     * Encodes the specified ConnectionEnd message. Does not implicitly {@link ibc.core.connection.v1.ConnectionEnd.verify|verify} messages.
                     * @param m ConnectionEnd message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IConnectionEnd,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionEnd message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConnectionEnd
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.ConnectionEnd;
                }

                /** Properties of an IdentifiedConnection. */
                interface IIdentifiedConnection {
                    /** IdentifiedConnection id */
                    id?: string | null;

                    /** IdentifiedConnection clientId */
                    clientId?: string | null;

                    /** IdentifiedConnection versions */
                    versions?: ibc.core.connection.v1.IVersion[] | null;

                    /** IdentifiedConnection state */
                    state?: ibc.core.connection.v1.State | null;

                    /** IdentifiedConnection counterparty */
                    counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** IdentifiedConnection delayPeriod */
                    delayPeriod?: Long | null;
                }

                /** Represents an IdentifiedConnection. */
                class IdentifiedConnection implements IIdentifiedConnection {
                    /**
                     * Constructs a new IdentifiedConnection.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IIdentifiedConnection);

                    /** IdentifiedConnection id. */
                    public id: string;

                    /** IdentifiedConnection clientId. */
                    public clientId: string;

                    /** IdentifiedConnection versions. */
                    public versions: ibc.core.connection.v1.IVersion[];

                    /** IdentifiedConnection state. */
                    public state: ibc.core.connection.v1.State;

                    /** IdentifiedConnection counterparty. */
                    public counterparty?: ibc.core.connection.v1.ICounterparty | null;

                    /** IdentifiedConnection delayPeriod. */
                    public delayPeriod: Long;

                    /**
                     * Creates a new IdentifiedConnection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IdentifiedConnection instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IIdentifiedConnection,
                    ): ibc.core.connection.v1.IdentifiedConnection;

                    /**
                     * Encodes the specified IdentifiedConnection message. Does not implicitly {@link ibc.core.connection.v1.IdentifiedConnection.verify|verify} messages.
                     * @param m IdentifiedConnection message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IIdentifiedConnection,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes an IdentifiedConnection message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns IdentifiedConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.IdentifiedConnection;
                }

                /** State enum. */
                enum State {
                    STATE_UNINITIALIZED_UNSPECIFIED = 0,
                    STATE_INIT = 1,
                    STATE_TRYOPEN = 2,
                    STATE_OPEN = 3,
                }

                /** Properties of a Counterparty. */
                interface ICounterparty {
                    /** Counterparty clientId */
                    clientId?: string | null;

                    /** Counterparty connectionId */
                    connectionId?: string | null;

                    /** Counterparty prefix */
                    prefix?: ibc.core.commitment.v1.IMerklePrefix | null;
                }

                /** Represents a Counterparty. */
                class Counterparty implements ICounterparty {
                    /**
                     * Constructs a new Counterparty.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.ICounterparty);

                    /** Counterparty clientId. */
                    public clientId: string;

                    /** Counterparty connectionId. */
                    public connectionId: string;

                    /** Counterparty prefix. */
                    public prefix?: ibc.core.commitment.v1.IMerklePrefix | null;

                    /**
                     * Creates a new Counterparty instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Counterparty instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.ICounterparty,
                    ): ibc.core.connection.v1.Counterparty;

                    /**
                     * Encodes the specified Counterparty message. Does not implicitly {@link ibc.core.connection.v1.Counterparty.verify|verify} messages.
                     * @param m Counterparty message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.ICounterparty,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a Counterparty message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Counterparty
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.Counterparty;
                }

                /** Properties of a ClientPaths. */
                interface IClientPaths {
                    /** ClientPaths paths */
                    paths?: string[] | null;
                }

                /** Represents a ClientPaths. */
                class ClientPaths implements IClientPaths {
                    /**
                     * Constructs a new ClientPaths.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IClientPaths);

                    /** ClientPaths paths. */
                    public paths: string[];

                    /**
                     * Creates a new ClientPaths instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientPaths instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IClientPaths,
                    ): ibc.core.connection.v1.ClientPaths;

                    /**
                     * Encodes the specified ClientPaths message. Does not implicitly {@link ibc.core.connection.v1.ClientPaths.verify|verify} messages.
                     * @param m ClientPaths message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IClientPaths,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientPaths message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientPaths
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.ClientPaths;
                }

                /** Properties of a ConnectionPaths. */
                interface IConnectionPaths {
                    /** ConnectionPaths clientId */
                    clientId?: string | null;

                    /** ConnectionPaths paths */
                    paths?: string[] | null;
                }

                /** Represents a ConnectionPaths. */
                class ConnectionPaths implements IConnectionPaths {
                    /**
                     * Constructs a new ConnectionPaths.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IConnectionPaths);

                    /** ConnectionPaths clientId. */
                    public clientId: string;

                    /** ConnectionPaths paths. */
                    public paths: string[];

                    /**
                     * Creates a new ConnectionPaths instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionPaths instance
                     */
                    public static create(
                        properties?: ibc.core.connection.v1.IConnectionPaths,
                    ): ibc.core.connection.v1.ConnectionPaths;

                    /**
                     * Encodes the specified ConnectionPaths message. Does not implicitly {@link ibc.core.connection.v1.ConnectionPaths.verify|verify} messages.
                     * @param m ConnectionPaths message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.core.connection.v1.IConnectionPaths,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionPaths message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConnectionPaths
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.core.connection.v1.ConnectionPaths;
                }

                /** Properties of a Version. */
                interface IVersion {
                    /** Version identifier */
                    identifier?: string | null;

                    /** Version features */
                    features?: string[] | null;
                }

                /** Represents a Version. */
                class Version implements IVersion {
                    /**
                     * Constructs a new Version.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IVersion);

                    /** Version identifier. */
                    public identifier: string;

                    /** Version features. */
                    public features: string[];

                    /**
                     * Creates a new Version instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Version instance
                     */
                    public static create(properties?: ibc.core.connection.v1.IVersion): ibc.core.connection.v1.Version;

                    /**
                     * Encodes the specified Version message. Does not implicitly {@link ibc.core.connection.v1.Version.verify|verify} messages.
                     * @param m Version message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.connection.v1.IVersion, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Version message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.connection.v1.Version;
                }

                /** Properties of a Params. */
                interface IParams {
                    /** Params maxExpectedTimePerBlock */
                    maxExpectedTimePerBlock?: Long | null;
                }

                /** Represents a Params. */
                class Params implements IParams {
                    /**
                     * Constructs a new Params.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.core.connection.v1.IParams);

                    /** Params maxExpectedTimePerBlock. */
                    public maxExpectedTimePerBlock: Long;

                    /**
                     * Creates a new Params instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Params instance
                     */
                    public static create(properties?: ibc.core.connection.v1.IParams): ibc.core.connection.v1.Params;

                    /**
                     * Encodes the specified Params message. Does not implicitly {@link ibc.core.connection.v1.Params.verify|verify} messages.
                     * @param m Params message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: ibc.core.connection.v1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Params message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Params
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: $protobuf.Reader | Uint8Array, l?: number): ibc.core.connection.v1.Params;
                }
            }
        }
    }

    /** Namespace applications. */
    namespace applications {
        /** Namespace transfer. */
        namespace transfer {
            /** Namespace v1. */
            namespace v1 {
                /** Represents a Msg */
                class Msg extends $protobuf.rpc.Service {
                    /**
                     * Constructs a new Msg service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Msg service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(
                        rpcImpl: $protobuf.RPCImpl,
                        requestDelimited?: boolean,
                        responseDelimited?: boolean,
                    ): Msg;

                    /**
                     * Calls Transfer.
                     * @param request MsgTransfer message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgTransferResponse
                     */
                    public transfer(
                        request: ibc.applications.transfer.v1.IMsgTransfer,
                        callback: ibc.applications.transfer.v1.Msg.TransferCallback,
                    ): void;

                    /**
                     * Calls Transfer.
                     * @param request MsgTransfer message or plain object
                     * @returns Promise
                     */
                    public transfer(
                        request: ibc.applications.transfer.v1.IMsgTransfer,
                    ): Promise<ibc.applications.transfer.v1.MsgTransferResponse>;
                }

                namespace Msg {
                    /**
                     * Callback as used by {@link ibc.applications.transfer.v1.Msg#transfer}.
                     * @param error Error, if any
                     * @param [response] MsgTransferResponse
                     */
                    type TransferCallback = (
                        error: Error | null,
                        response?: ibc.applications.transfer.v1.MsgTransferResponse,
                    ) => void;
                }

                /** Properties of a MsgTransfer. */
                interface IMsgTransfer {
                    /** MsgTransfer sourcePort */
                    sourcePort?: string | null;

                    /** MsgTransfer sourceChannel */
                    sourceChannel?: string | null;

                    /** MsgTransfer token */
                    token?: cosmos.base.v1beta1.ICoin | null;

                    /** MsgTransfer sender */
                    sender?: string | null;

                    /** MsgTransfer receiver */
                    receiver?: string | null;

                    /** MsgTransfer timeoutHeight */
                    timeoutHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgTransfer timeoutTimestamp */
                    timeoutTimestamp?: Long | null;
                }

                /** Represents a MsgTransfer. */
                class MsgTransfer implements IMsgTransfer {
                    /**
                     * Constructs a new MsgTransfer.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.applications.transfer.v1.IMsgTransfer);

                    /** MsgTransfer sourcePort. */
                    public sourcePort: string;

                    /** MsgTransfer sourceChannel. */
                    public sourceChannel: string;

                    /** MsgTransfer token. */
                    public token?: cosmos.base.v1beta1.ICoin | null;

                    /** MsgTransfer sender. */
                    public sender: string;

                    /** MsgTransfer receiver. */
                    public receiver: string;

                    /** MsgTransfer timeoutHeight. */
                    public timeoutHeight?: ibc.core.client.v1.IHeight | null;

                    /** MsgTransfer timeoutTimestamp. */
                    public timeoutTimestamp: Long;

                    /**
                     * Creates a new MsgTransfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgTransfer instance
                     */
                    public static create(
                        properties?: ibc.applications.transfer.v1.IMsgTransfer,
                    ): ibc.applications.transfer.v1.MsgTransfer;

                    /**
                     * Encodes the specified MsgTransfer message. Does not implicitly {@link ibc.applications.transfer.v1.MsgTransfer.verify|verify} messages.
                     * @param m MsgTransfer message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.applications.transfer.v1.IMsgTransfer,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgTransfer message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgTransfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.applications.transfer.v1.MsgTransfer;
                }

                /** Properties of a MsgTransferResponse. */
                interface IMsgTransferResponse {}

                /** Represents a MsgTransferResponse. */
                class MsgTransferResponse implements IMsgTransferResponse {
                    /**
                     * Constructs a new MsgTransferResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.applications.transfer.v1.IMsgTransferResponse);

                    /**
                     * Creates a new MsgTransferResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgTransferResponse instance
                     */
                    public static create(
                        properties?: ibc.applications.transfer.v1.IMsgTransferResponse,
                    ): ibc.applications.transfer.v1.MsgTransferResponse;

                    /**
                     * Encodes the specified MsgTransferResponse message. Does not implicitly {@link ibc.applications.transfer.v1.MsgTransferResponse.verify|verify} messages.
                     * @param m MsgTransferResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.applications.transfer.v1.IMsgTransferResponse,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a MsgTransferResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns MsgTransferResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.applications.transfer.v1.MsgTransferResponse;
                }
            }
        }
    }

    /** Namespace lightclients. */
    namespace lightclients {
        /** Namespace tendermint. */
        namespace tendermint {
            /** Namespace v1. */
            namespace v1 {
                /** Properties of a ClientState. */
                interface IClientState {
                    /** ClientState chainId */
                    chainId?: string | null;

                    /** ClientState trustLevel */
                    trustLevel?: ibc.lightclients.tendermint.v1.IFraction | null;

                    /** ClientState trustingPeriod */
                    trustingPeriod?: google.protobuf.IDuration | null;

                    /** ClientState unbondingPeriod */
                    unbondingPeriod?: google.protobuf.IDuration | null;

                    /** ClientState maxClockDrift */
                    maxClockDrift?: google.protobuf.IDuration | null;

                    /** ClientState frozenHeight */
                    frozenHeight?: ibc.core.client.v1.IHeight | null;

                    /** ClientState latestHeight */
                    latestHeight?: ibc.core.client.v1.IHeight | null;

                    /** ClientState proofSpecs */
                    proofSpecs?: ics23.IProofSpec[] | null;

                    /** ClientState upgradePath */
                    upgradePath?: string[] | null;

                    /** ClientState allowUpdateAfterExpiry */
                    allowUpdateAfterExpiry?: boolean | null;

                    /** ClientState allowUpdateAfterMisbehaviour */
                    allowUpdateAfterMisbehaviour?: boolean | null;
                }

                /** Represents a ClientState. */
                class ClientState implements IClientState {
                    /**
                     * Constructs a new ClientState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.tendermint.v1.IClientState);

                    /** ClientState chainId. */
                    public chainId: string;

                    /** ClientState trustLevel. */
                    public trustLevel?: ibc.lightclients.tendermint.v1.IFraction | null;

                    /** ClientState trustingPeriod. */
                    public trustingPeriod?: google.protobuf.IDuration | null;

                    /** ClientState unbondingPeriod. */
                    public unbondingPeriod?: google.protobuf.IDuration | null;

                    /** ClientState maxClockDrift. */
                    public maxClockDrift?: google.protobuf.IDuration | null;

                    /** ClientState frozenHeight. */
                    public frozenHeight?: ibc.core.client.v1.IHeight | null;

                    /** ClientState latestHeight. */
                    public latestHeight?: ibc.core.client.v1.IHeight | null;

                    /** ClientState proofSpecs. */
                    public proofSpecs: ics23.IProofSpec[];

                    /** ClientState upgradePath. */
                    public upgradePath: string[];

                    /** ClientState allowUpdateAfterExpiry. */
                    public allowUpdateAfterExpiry: boolean;

                    /** ClientState allowUpdateAfterMisbehaviour. */
                    public allowUpdateAfterMisbehaviour: boolean;

                    /**
                     * Creates a new ClientState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientState instance
                     */
                    public static create(
                        properties?: ibc.lightclients.tendermint.v1.IClientState,
                    ): ibc.lightclients.tendermint.v1.ClientState;

                    /**
                     * Encodes the specified ClientState message. Does not implicitly {@link ibc.lightclients.tendermint.v1.ClientState.verify|verify} messages.
                     * @param m ClientState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.tendermint.v1.IClientState,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.tendermint.v1.ClientState;
                }

                /** Properties of a ConsensusState. */
                interface IConsensusState {
                    /** ConsensusState timestamp */
                    timestamp?: google.protobuf.ITimestamp | null;

                    /** ConsensusState root */
                    root?: ibc.core.commitment.v1.IMerkleRoot | null;

                    /** ConsensusState nextValidatorsHash */
                    nextValidatorsHash?: Uint8Array | null;
                }

                /** Represents a ConsensusState. */
                class ConsensusState implements IConsensusState {
                    /**
                     * Constructs a new ConsensusState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.tendermint.v1.IConsensusState);

                    /** ConsensusState timestamp. */
                    public timestamp?: google.protobuf.ITimestamp | null;

                    /** ConsensusState root. */
                    public root?: ibc.core.commitment.v1.IMerkleRoot | null;

                    /** ConsensusState nextValidatorsHash. */
                    public nextValidatorsHash: Uint8Array;

                    /**
                     * Creates a new ConsensusState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsensusState instance
                     */
                    public static create(
                        properties?: ibc.lightclients.tendermint.v1.IConsensusState,
                    ): ibc.lightclients.tendermint.v1.ConsensusState;

                    /**
                     * Encodes the specified ConsensusState message. Does not implicitly {@link ibc.lightclients.tendermint.v1.ConsensusState.verify|verify} messages.
                     * @param m ConsensusState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.tendermint.v1.IConsensusState,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConsensusState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConsensusState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.tendermint.v1.ConsensusState;
                }

                /** Properties of a Misbehaviour. */
                interface IMisbehaviour {
                    /** Misbehaviour clientId */
                    clientId?: string | null;

                    /** Misbehaviour header_1 */
                    header_1?: ibc.lightclients.tendermint.v1.IHeader | null;

                    /** Misbehaviour header_2 */
                    header_2?: ibc.lightclients.tendermint.v1.IHeader | null;
                }

                /** Represents a Misbehaviour. */
                class Misbehaviour implements IMisbehaviour {
                    /**
                     * Constructs a new Misbehaviour.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.tendermint.v1.IMisbehaviour);

                    /** Misbehaviour clientId. */
                    public clientId: string;

                    /** Misbehaviour header_1. */
                    public header_1?: ibc.lightclients.tendermint.v1.IHeader | null;

                    /** Misbehaviour header_2. */
                    public header_2?: ibc.lightclients.tendermint.v1.IHeader | null;

                    /**
                     * Creates a new Misbehaviour instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Misbehaviour instance
                     */
                    public static create(
                        properties?: ibc.lightclients.tendermint.v1.IMisbehaviour,
                    ): ibc.lightclients.tendermint.v1.Misbehaviour;

                    /**
                     * Encodes the specified Misbehaviour message. Does not implicitly {@link ibc.lightclients.tendermint.v1.Misbehaviour.verify|verify} messages.
                     * @param m Misbehaviour message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.tendermint.v1.IMisbehaviour,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a Misbehaviour message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Misbehaviour
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.tendermint.v1.Misbehaviour;
                }

                /** Properties of a Header. */
                interface IHeader {
                    /** Header signedHeader */
                    signedHeader?: tendermintV2.types.ISignedHeader | null;

                    /** Header validatorSet */
                    validatorSet?: tendermintV2.types.IValidatorSet | null;

                    /** Header trustedHeight */
                    trustedHeight?: ibc.core.client.v1.IHeight | null;

                    /** Header trustedValidators */
                    trustedValidators?: tendermintV2.types.IValidatorSet | null;
                }

                /** Represents a Header. */
                class Header implements IHeader {
                    /**
                     * Constructs a new Header.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.tendermint.v1.IHeader);

                    /** Header signedHeader. */
                    public signedHeader?: tendermintV2.types.ISignedHeader | null;

                    /** Header validatorSet. */
                    public validatorSet?: tendermintV2.types.IValidatorSet | null;

                    /** Header trustedHeight. */
                    public trustedHeight?: ibc.core.client.v1.IHeight | null;

                    /** Header trustedValidators. */
                    public trustedValidators?: tendermintV2.types.IValidatorSet | null;

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Header instance
                     */
                    public static create(
                        properties?: ibc.lightclients.tendermint.v1.IHeader,
                    ): ibc.lightclients.tendermint.v1.Header;

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link ibc.lightclients.tendermint.v1.Header.verify|verify} messages.
                     * @param m Header message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.tendermint.v1.IHeader,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.tendermint.v1.Header;
                }

                /** Properties of a Fraction. */
                interface IFraction {
                    /** Fraction numerator */
                    numerator?: Long | null;

                    /** Fraction denominator */
                    denominator?: Long | null;
                }

                /** Represents a Fraction. */
                class Fraction implements IFraction {
                    /**
                     * Constructs a new Fraction.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.tendermint.v1.IFraction);

                    /** Fraction numerator. */
                    public numerator: Long;

                    /** Fraction denominator. */
                    public denominator: Long;

                    /**
                     * Creates a new Fraction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Fraction instance
                     */
                    public static create(
                        properties?: ibc.lightclients.tendermint.v1.IFraction,
                    ): ibc.lightclients.tendermint.v1.Fraction;

                    /**
                     * Encodes the specified Fraction message. Does not implicitly {@link ibc.lightclients.tendermint.v1.Fraction.verify|verify} messages.
                     * @param m Fraction message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.tendermint.v1.IFraction,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a Fraction message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Fraction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.tendermint.v1.Fraction;
                }
            }
        }

        /** Namespace localhost. */
        namespace localhost {
            /** Namespace v1. */
            namespace v1 {
                /** Properties of a ClientState. */
                interface IClientState {
                    /** ClientState chainId */
                    chainId?: string | null;

                    /** ClientState height */
                    height?: ibc.core.client.v1.IHeight | null;
                }

                /** Represents a ClientState. */
                class ClientState implements IClientState {
                    /**
                     * Constructs a new ClientState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.localhost.v1.IClientState);

                    /** ClientState chainId. */
                    public chainId: string;

                    /** ClientState height. */
                    public height?: ibc.core.client.v1.IHeight | null;

                    /**
                     * Creates a new ClientState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientState instance
                     */
                    public static create(
                        properties?: ibc.lightclients.localhost.v1.IClientState,
                    ): ibc.lightclients.localhost.v1.ClientState;

                    /**
                     * Encodes the specified ClientState message. Does not implicitly {@link ibc.lightclients.localhost.v1.ClientState.verify|verify} messages.
                     * @param m ClientState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.localhost.v1.IClientState,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.localhost.v1.ClientState;
                }
            }
        }

        /** Namespace solomachine. */
        namespace solomachine {
            /** Namespace v1. */
            namespace v1 {
                /** Properties of a ClientState. */
                interface IClientState {
                    /** ClientState sequence */
                    sequence?: Long | null;

                    /** ClientState frozenSequence */
                    frozenSequence?: Long | null;

                    /** ClientState consensusState */
                    consensusState?: ibc.lightclients.solomachine.v1.IConsensusState | null;

                    /** ClientState allowUpdateAfterProposal */
                    allowUpdateAfterProposal?: boolean | null;
                }

                /** Represents a ClientState. */
                class ClientState implements IClientState {
                    /**
                     * Constructs a new ClientState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IClientState);

                    /** ClientState sequence. */
                    public sequence: Long;

                    /** ClientState frozenSequence. */
                    public frozenSequence: Long;

                    /** ClientState consensusState. */
                    public consensusState?: ibc.lightclients.solomachine.v1.IConsensusState | null;

                    /** ClientState allowUpdateAfterProposal. */
                    public allowUpdateAfterProposal: boolean;

                    /**
                     * Creates a new ClientState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientState instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IClientState,
                    ): ibc.lightclients.solomachine.v1.ClientState;

                    /**
                     * Encodes the specified ClientState message. Does not implicitly {@link ibc.lightclients.solomachine.v1.ClientState.verify|verify} messages.
                     * @param m ClientState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IClientState,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.ClientState;
                }

                /** Properties of a ConsensusState. */
                interface IConsensusState {
                    /** ConsensusState publicKey */
                    publicKey?: google.protobuf.IAny | null;

                    /** ConsensusState diversifier */
                    diversifier?: string | null;

                    /** ConsensusState timestamp */
                    timestamp?: Long | null;
                }

                /** Represents a ConsensusState. */
                class ConsensusState implements IConsensusState {
                    /**
                     * Constructs a new ConsensusState.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IConsensusState);

                    /** ConsensusState publicKey. */
                    public publicKey?: google.protobuf.IAny | null;

                    /** ConsensusState diversifier. */
                    public diversifier: string;

                    /** ConsensusState timestamp. */
                    public timestamp: Long;

                    /**
                     * Creates a new ConsensusState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsensusState instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IConsensusState,
                    ): ibc.lightclients.solomachine.v1.ConsensusState;

                    /**
                     * Encodes the specified ConsensusState message. Does not implicitly {@link ibc.lightclients.solomachine.v1.ConsensusState.verify|verify} messages.
                     * @param m ConsensusState message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IConsensusState,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConsensusState message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConsensusState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.ConsensusState;
                }

                /** Properties of a Header. */
                interface IHeader {
                    /** Header sequence */
                    sequence?: Long | null;

                    /** Header timestamp */
                    timestamp?: Long | null;

                    /** Header signature */
                    signature?: Uint8Array | null;

                    /** Header newPublicKey */
                    newPublicKey?: google.protobuf.IAny | null;

                    /** Header newDiversifier */
                    newDiversifier?: string | null;
                }

                /** Represents a Header. */
                class Header implements IHeader {
                    /**
                     * Constructs a new Header.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IHeader);

                    /** Header sequence. */
                    public sequence: Long;

                    /** Header timestamp. */
                    public timestamp: Long;

                    /** Header signature. */
                    public signature: Uint8Array;

                    /** Header newPublicKey. */
                    public newPublicKey?: google.protobuf.IAny | null;

                    /** Header newDiversifier. */
                    public newDiversifier: string;

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Header instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IHeader,
                    ): ibc.lightclients.solomachine.v1.Header;

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link ibc.lightclients.solomachine.v1.Header.verify|verify} messages.
                     * @param m Header message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IHeader,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.Header;
                }

                /** Properties of a Misbehaviour. */
                interface IMisbehaviour {
                    /** Misbehaviour clientId */
                    clientId?: string | null;

                    /** Misbehaviour sequence */
                    sequence?: Long | null;

                    /** Misbehaviour signatureOne */
                    signatureOne?: ibc.lightclients.solomachine.v1.ISignatureAndData | null;

                    /** Misbehaviour signatureTwo */
                    signatureTwo?: ibc.lightclients.solomachine.v1.ISignatureAndData | null;
                }

                /** Represents a Misbehaviour. */
                class Misbehaviour implements IMisbehaviour {
                    /**
                     * Constructs a new Misbehaviour.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IMisbehaviour);

                    /** Misbehaviour clientId. */
                    public clientId: string;

                    /** Misbehaviour sequence. */
                    public sequence: Long;

                    /** Misbehaviour signatureOne. */
                    public signatureOne?: ibc.lightclients.solomachine.v1.ISignatureAndData | null;

                    /** Misbehaviour signatureTwo. */
                    public signatureTwo?: ibc.lightclients.solomachine.v1.ISignatureAndData | null;

                    /**
                     * Creates a new Misbehaviour instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Misbehaviour instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IMisbehaviour,
                    ): ibc.lightclients.solomachine.v1.Misbehaviour;

                    /**
                     * Encodes the specified Misbehaviour message. Does not implicitly {@link ibc.lightclients.solomachine.v1.Misbehaviour.verify|verify} messages.
                     * @param m Misbehaviour message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IMisbehaviour,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a Misbehaviour message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Misbehaviour
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.Misbehaviour;
                }

                /** Properties of a SignatureAndData. */
                interface ISignatureAndData {
                    /** SignatureAndData signature */
                    signature?: Uint8Array | null;

                    /** SignatureAndData dataType */
                    dataType?: ibc.lightclients.solomachine.v1.DataType | null;

                    /** SignatureAndData data */
                    data?: Uint8Array | null;

                    /** SignatureAndData timestamp */
                    timestamp?: Long | null;
                }

                /** Represents a SignatureAndData. */
                class SignatureAndData implements ISignatureAndData {
                    /**
                     * Constructs a new SignatureAndData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.ISignatureAndData);

                    /** SignatureAndData signature. */
                    public signature: Uint8Array;

                    /** SignatureAndData dataType. */
                    public dataType: ibc.lightclients.solomachine.v1.DataType;

                    /** SignatureAndData data. */
                    public data: Uint8Array;

                    /** SignatureAndData timestamp. */
                    public timestamp: Long;

                    /**
                     * Creates a new SignatureAndData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignatureAndData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.ISignatureAndData,
                    ): ibc.lightclients.solomachine.v1.SignatureAndData;

                    /**
                     * Encodes the specified SignatureAndData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.SignatureAndData.verify|verify} messages.
                     * @param m SignatureAndData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.ISignatureAndData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a SignatureAndData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns SignatureAndData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.SignatureAndData;
                }

                /** Properties of a TimestampedSignatureData. */
                interface ITimestampedSignatureData {
                    /** TimestampedSignatureData signatureData */
                    signatureData?: Uint8Array | null;

                    /** TimestampedSignatureData timestamp */
                    timestamp?: Long | null;
                }

                /** Represents a TimestampedSignatureData. */
                class TimestampedSignatureData implements ITimestampedSignatureData {
                    /**
                     * Constructs a new TimestampedSignatureData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.ITimestampedSignatureData);

                    /** TimestampedSignatureData signatureData. */
                    public signatureData: Uint8Array;

                    /** TimestampedSignatureData timestamp. */
                    public timestamp: Long;

                    /**
                     * Creates a new TimestampedSignatureData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimestampedSignatureData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.ITimestampedSignatureData,
                    ): ibc.lightclients.solomachine.v1.TimestampedSignatureData;

                    /**
                     * Encodes the specified TimestampedSignatureData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.TimestampedSignatureData.verify|verify} messages.
                     * @param m TimestampedSignatureData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.ITimestampedSignatureData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a TimestampedSignatureData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns TimestampedSignatureData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.TimestampedSignatureData;
                }

                /** Properties of a SignBytes. */
                interface ISignBytes {
                    /** SignBytes sequence */
                    sequence?: Long | null;

                    /** SignBytes timestamp */
                    timestamp?: Long | null;

                    /** SignBytes diversifier */
                    diversifier?: string | null;

                    /** SignBytes dataType */
                    dataType?: ibc.lightclients.solomachine.v1.DataType | null;

                    /** SignBytes data */
                    data?: Uint8Array | null;
                }

                /** Represents a SignBytes. */
                class SignBytes implements ISignBytes {
                    /**
                     * Constructs a new SignBytes.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.ISignBytes);

                    /** SignBytes sequence. */
                    public sequence: Long;

                    /** SignBytes timestamp. */
                    public timestamp: Long;

                    /** SignBytes diversifier. */
                    public diversifier: string;

                    /** SignBytes dataType. */
                    public dataType: ibc.lightclients.solomachine.v1.DataType;

                    /** SignBytes data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new SignBytes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignBytes instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.ISignBytes,
                    ): ibc.lightclients.solomachine.v1.SignBytes;

                    /**
                     * Encodes the specified SignBytes message. Does not implicitly {@link ibc.lightclients.solomachine.v1.SignBytes.verify|verify} messages.
                     * @param m SignBytes message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.ISignBytes,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a SignBytes message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns SignBytes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.SignBytes;
                }

                /** DataType enum. */
                enum DataType {
                    DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
                    DATA_TYPE_CLIENT_STATE = 1,
                    DATA_TYPE_CONSENSUS_STATE = 2,
                    DATA_TYPE_CONNECTION_STATE = 3,
                    DATA_TYPE_CHANNEL_STATE = 4,
                    DATA_TYPE_PACKET_COMMITMENT = 5,
                    DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
                    DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
                    DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
                    DATA_TYPE_HEADER = 9,
                }

                /** Properties of a HeaderData. */
                interface IHeaderData {
                    /** HeaderData newPubKey */
                    newPubKey?: google.protobuf.IAny | null;

                    /** HeaderData newDiversifier */
                    newDiversifier?: string | null;
                }

                /** Represents a HeaderData. */
                class HeaderData implements IHeaderData {
                    /**
                     * Constructs a new HeaderData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IHeaderData);

                    /** HeaderData newPubKey. */
                    public newPubKey?: google.protobuf.IAny | null;

                    /** HeaderData newDiversifier. */
                    public newDiversifier: string;

                    /**
                     * Creates a new HeaderData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HeaderData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IHeaderData,
                    ): ibc.lightclients.solomachine.v1.HeaderData;

                    /**
                     * Encodes the specified HeaderData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.HeaderData.verify|verify} messages.
                     * @param m HeaderData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IHeaderData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a HeaderData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns HeaderData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.HeaderData;
                }

                /** Properties of a ClientStateData. */
                interface IClientStateData {
                    /** ClientStateData path */
                    path?: Uint8Array | null;

                    /** ClientStateData clientState */
                    clientState?: google.protobuf.IAny | null;
                }

                /** Represents a ClientStateData. */
                class ClientStateData implements IClientStateData {
                    /**
                     * Constructs a new ClientStateData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IClientStateData);

                    /** ClientStateData path. */
                    public path: Uint8Array;

                    /** ClientStateData clientState. */
                    public clientState?: google.protobuf.IAny | null;

                    /**
                     * Creates a new ClientStateData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientStateData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IClientStateData,
                    ): ibc.lightclients.solomachine.v1.ClientStateData;

                    /**
                     * Encodes the specified ClientStateData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.ClientStateData.verify|verify} messages.
                     * @param m ClientStateData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IClientStateData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ClientStateData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ClientStateData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.ClientStateData;
                }

                /** Properties of a ConsensusStateData. */
                interface IConsensusStateData {
                    /** ConsensusStateData path */
                    path?: Uint8Array | null;

                    /** ConsensusStateData consensusState */
                    consensusState?: google.protobuf.IAny | null;
                }

                /** Represents a ConsensusStateData. */
                class ConsensusStateData implements IConsensusStateData {
                    /**
                     * Constructs a new ConsensusStateData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IConsensusStateData);

                    /** ConsensusStateData path. */
                    public path: Uint8Array;

                    /** ConsensusStateData consensusState. */
                    public consensusState?: google.protobuf.IAny | null;

                    /**
                     * Creates a new ConsensusStateData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsensusStateData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IConsensusStateData,
                    ): ibc.lightclients.solomachine.v1.ConsensusStateData;

                    /**
                     * Encodes the specified ConsensusStateData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.ConsensusStateData.verify|verify} messages.
                     * @param m ConsensusStateData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IConsensusStateData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConsensusStateData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConsensusStateData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.ConsensusStateData;
                }

                /** Properties of a ConnectionStateData. */
                interface IConnectionStateData {
                    /** ConnectionStateData path */
                    path?: Uint8Array | null;

                    /** ConnectionStateData connection */
                    connection?: ibc.core.connection.v1.IConnectionEnd | null;
                }

                /** Represents a ConnectionStateData. */
                class ConnectionStateData implements IConnectionStateData {
                    /**
                     * Constructs a new ConnectionStateData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IConnectionStateData);

                    /** ConnectionStateData path. */
                    public path: Uint8Array;

                    /** ConnectionStateData connection. */
                    public connection?: ibc.core.connection.v1.IConnectionEnd | null;

                    /**
                     * Creates a new ConnectionStateData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionStateData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IConnectionStateData,
                    ): ibc.lightclients.solomachine.v1.ConnectionStateData;

                    /**
                     * Encodes the specified ConnectionStateData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.ConnectionStateData.verify|verify} messages.
                     * @param m ConnectionStateData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IConnectionStateData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionStateData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ConnectionStateData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.ConnectionStateData;
                }

                /** Properties of a ChannelStateData. */
                interface IChannelStateData {
                    /** ChannelStateData path */
                    path?: Uint8Array | null;

                    /** ChannelStateData channel */
                    channel?: ibc.core.channel.v1.IChannel | null;
                }

                /** Represents a ChannelStateData. */
                class ChannelStateData implements IChannelStateData {
                    /**
                     * Constructs a new ChannelStateData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IChannelStateData);

                    /** ChannelStateData path. */
                    public path: Uint8Array;

                    /** ChannelStateData channel. */
                    public channel?: ibc.core.channel.v1.IChannel | null;

                    /**
                     * Creates a new ChannelStateData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChannelStateData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IChannelStateData,
                    ): ibc.lightclients.solomachine.v1.ChannelStateData;

                    /**
                     * Encodes the specified ChannelStateData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.ChannelStateData.verify|verify} messages.
                     * @param m ChannelStateData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IChannelStateData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a ChannelStateData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ChannelStateData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.ChannelStateData;
                }

                /** Properties of a PacketCommitmentData. */
                interface IPacketCommitmentData {
                    /** PacketCommitmentData path */
                    path?: Uint8Array | null;

                    /** PacketCommitmentData commitment */
                    commitment?: Uint8Array | null;
                }

                /** Represents a PacketCommitmentData. */
                class PacketCommitmentData implements IPacketCommitmentData {
                    /**
                     * Constructs a new PacketCommitmentData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IPacketCommitmentData);

                    /** PacketCommitmentData path. */
                    public path: Uint8Array;

                    /** PacketCommitmentData commitment. */
                    public commitment: Uint8Array;

                    /**
                     * Creates a new PacketCommitmentData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PacketCommitmentData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IPacketCommitmentData,
                    ): ibc.lightclients.solomachine.v1.PacketCommitmentData;

                    /**
                     * Encodes the specified PacketCommitmentData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.PacketCommitmentData.verify|verify} messages.
                     * @param m PacketCommitmentData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IPacketCommitmentData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a PacketCommitmentData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns PacketCommitmentData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.PacketCommitmentData;
                }

                /** Properties of a PacketAcknowledgementData. */
                interface IPacketAcknowledgementData {
                    /** PacketAcknowledgementData path */
                    path?: Uint8Array | null;

                    /** PacketAcknowledgementData acknowledgement */
                    acknowledgement?: Uint8Array | null;
                }

                /** Represents a PacketAcknowledgementData. */
                class PacketAcknowledgementData implements IPacketAcknowledgementData {
                    /**
                     * Constructs a new PacketAcknowledgementData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IPacketAcknowledgementData);

                    /** PacketAcknowledgementData path. */
                    public path: Uint8Array;

                    /** PacketAcknowledgementData acknowledgement. */
                    public acknowledgement: Uint8Array;

                    /**
                     * Creates a new PacketAcknowledgementData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PacketAcknowledgementData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IPacketAcknowledgementData,
                    ): ibc.lightclients.solomachine.v1.PacketAcknowledgementData;

                    /**
                     * Encodes the specified PacketAcknowledgementData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.PacketAcknowledgementData.verify|verify} messages.
                     * @param m PacketAcknowledgementData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IPacketAcknowledgementData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a PacketAcknowledgementData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns PacketAcknowledgementData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.PacketAcknowledgementData;
                }

                /** Properties of a PacketReceiptAbsenceData. */
                interface IPacketReceiptAbsenceData {
                    /** PacketReceiptAbsenceData path */
                    path?: Uint8Array | null;
                }

                /** Represents a PacketReceiptAbsenceData. */
                class PacketReceiptAbsenceData implements IPacketReceiptAbsenceData {
                    /**
                     * Constructs a new PacketReceiptAbsenceData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.IPacketReceiptAbsenceData);

                    /** PacketReceiptAbsenceData path. */
                    public path: Uint8Array;

                    /**
                     * Creates a new PacketReceiptAbsenceData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PacketReceiptAbsenceData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.IPacketReceiptAbsenceData,
                    ): ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData;

                    /**
                     * Encodes the specified PacketReceiptAbsenceData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData.verify|verify} messages.
                     * @param m PacketReceiptAbsenceData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.IPacketReceiptAbsenceData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a PacketReceiptAbsenceData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns PacketReceiptAbsenceData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData;
                }

                /** Properties of a NextSequenceRecvData. */
                interface INextSequenceRecvData {
                    /** NextSequenceRecvData path */
                    path?: Uint8Array | null;

                    /** NextSequenceRecvData nextSeqRecv */
                    nextSeqRecv?: Long | null;
                }

                /** Represents a NextSequenceRecvData. */
                class NextSequenceRecvData implements INextSequenceRecvData {
                    /**
                     * Constructs a new NextSequenceRecvData.
                     * @param [p] Properties to set
                     */
                    constructor(p?: ibc.lightclients.solomachine.v1.INextSequenceRecvData);

                    /** NextSequenceRecvData path. */
                    public path: Uint8Array;

                    /** NextSequenceRecvData nextSeqRecv. */
                    public nextSeqRecv: Long;

                    /**
                     * Creates a new NextSequenceRecvData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NextSequenceRecvData instance
                     */
                    public static create(
                        properties?: ibc.lightclients.solomachine.v1.INextSequenceRecvData,
                    ): ibc.lightclients.solomachine.v1.NextSequenceRecvData;

                    /**
                     * Encodes the specified NextSequenceRecvData message. Does not implicitly {@link ibc.lightclients.solomachine.v1.NextSequenceRecvData.verify|verify} messages.
                     * @param m NextSequenceRecvData message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(
                        m: ibc.lightclients.solomachine.v1.INextSequenceRecvData,
                        w?: $protobuf.Writer,
                    ): $protobuf.Writer;

                    /**
                     * Decodes a NextSequenceRecvData message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns NextSequenceRecvData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(
                        r: $protobuf.Reader | Uint8Array,
                        l?: number,
                    ): ibc.lightclients.solomachine.v1.NextSequenceRecvData;
                }
            }
        }
    }
}

/** Namespace chainmain. */
export namespace chainmain {
    /** Namespace nft. */
    namespace nft {
        /** Namespace v1. */
        namespace v1 {
            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {
                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(
                    rpcImpl: $protobuf.RPCImpl,
                    requestDelimited?: boolean,
                    responseDelimited?: boolean,
                ): Msg;

                /**
                 * Calls IssueDenom.
                 * @param request MsgIssueDenom message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgIssueDenomResponse
                 */
                public issueDenom(
                    request: chainmain.nft.v1.IMsgIssueDenom,
                    callback: chainmain.nft.v1.Msg.IssueDenomCallback,
                ): void;

                /**
                 * Calls IssueDenom.
                 * @param request MsgIssueDenom message or plain object
                 * @returns Promise
                 */
                public issueDenom(
                    request: chainmain.nft.v1.IMsgIssueDenom,
                ): Promise<chainmain.nft.v1.MsgIssueDenomResponse>;

                /**
                 * Calls MintNFT.
                 * @param request MsgMintNFT message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgMintNFTResponse
                 */
                public mintNFT(
                    request: chainmain.nft.v1.IMsgMintNFT,
                    callback: chainmain.nft.v1.Msg.MintNFTCallback,
                ): void;

                /**
                 * Calls MintNFT.
                 * @param request MsgMintNFT message or plain object
                 * @returns Promise
                 */
                public mintNFT(request: chainmain.nft.v1.IMsgMintNFT): Promise<chainmain.nft.v1.MsgMintNFTResponse>;

                /**
                 * Calls EditNFT.
                 * @param request MsgEditNFT message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgEditNFTResponse
                 */
                public editNFT(
                    request: chainmain.nft.v1.IMsgEditNFT,
                    callback: chainmain.nft.v1.Msg.EditNFTCallback,
                ): void;

                /**
                 * Calls EditNFT.
                 * @param request MsgEditNFT message or plain object
                 * @returns Promise
                 */
                public editNFT(request: chainmain.nft.v1.IMsgEditNFT): Promise<chainmain.nft.v1.MsgEditNFTResponse>;

                /**
                 * Calls TransferNFT.
                 * @param request MsgTransferNFT message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgTransferNFTResponse
                 */
                public transferNFT(
                    request: chainmain.nft.v1.IMsgTransferNFT,
                    callback: chainmain.nft.v1.Msg.TransferNFTCallback,
                ): void;

                /**
                 * Calls TransferNFT.
                 * @param request MsgTransferNFT message or plain object
                 * @returns Promise
                 */
                public transferNFT(
                    request: chainmain.nft.v1.IMsgTransferNFT,
                ): Promise<chainmain.nft.v1.MsgTransferNFTResponse>;

                /**
                 * Calls BurnNFT.
                 * @param request MsgBurnNFT message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgBurnNFTResponse
                 */
                public burnNFT(
                    request: chainmain.nft.v1.IMsgBurnNFT,
                    callback: chainmain.nft.v1.Msg.BurnNFTCallback,
                ): void;

                /**
                 * Calls BurnNFT.
                 * @param request MsgBurnNFT message or plain object
                 * @returns Promise
                 */
                public burnNFT(request: chainmain.nft.v1.IMsgBurnNFT): Promise<chainmain.nft.v1.MsgBurnNFTResponse>;
            }

            namespace Msg {
                /**
                 * Callback as used by {@link chainmain.nft.v1.Msg#issueDenom}.
                 * @param error Error, if any
                 * @param [response] MsgIssueDenomResponse
                 */
                type IssueDenomCallback = (
                    error: Error | null,
                    response?: chainmain.nft.v1.MsgIssueDenomResponse,
                ) => void;

                /**
                 * Callback as used by {@link chainmain.nft.v1.Msg#mintNFT}.
                 * @param error Error, if any
                 * @param [response] MsgMintNFTResponse
                 */
                type MintNFTCallback = (error: Error | null, response?: chainmain.nft.v1.MsgMintNFTResponse) => void;

                /**
                 * Callback as used by {@link chainmain.nft.v1.Msg#editNFT}.
                 * @param error Error, if any
                 * @param [response] MsgEditNFTResponse
                 */
                type EditNFTCallback = (error: Error | null, response?: chainmain.nft.v1.MsgEditNFTResponse) => void;

                /**
                 * Callback as used by {@link chainmain.nft.v1.Msg#transferNFT}.
                 * @param error Error, if any
                 * @param [response] MsgTransferNFTResponse
                 */
                type TransferNFTCallback = (
                    error: Error | null,
                    response?: chainmain.nft.v1.MsgTransferNFTResponse,
                ) => void;

                /**
                 * Callback as used by {@link chainmain.nft.v1.Msg#burnNFT}.
                 * @param error Error, if any
                 * @param [response] MsgBurnNFTResponse
                 */
                type BurnNFTCallback = (error: Error | null, response?: chainmain.nft.v1.MsgBurnNFTResponse) => void;
            }

            /** Properties of a MsgIssueDenom. */
            interface IMsgIssueDenom {
                /** MsgIssueDenom id */
                id?: string | null;

                /** MsgIssueDenom name */
                name?: string | null;

                /** MsgIssueDenom schema */
                schema?: string | null;

                /** MsgIssueDenom sender */
                sender?: string | null;
            }

            /** Represents a MsgIssueDenom. */
            class MsgIssueDenom implements IMsgIssueDenom {
                /**
                 * Constructs a new MsgIssueDenom.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgIssueDenom);

                /** MsgIssueDenom id. */
                public id: string;

                /** MsgIssueDenom name. */
                public name: string;

                /** MsgIssueDenom schema. */
                public schema: string;

                /** MsgIssueDenom sender. */
                public sender: string;

                /**
                 * Creates a new MsgIssueDenom instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgIssueDenom instance
                 */
                public static create(properties?: chainmain.nft.v1.IMsgIssueDenom): chainmain.nft.v1.MsgIssueDenom;

                /**
                 * Encodes the specified MsgIssueDenom message. Does not implicitly {@link chainmain.nft.v1.MsgIssueDenom.verify|verify} messages.
                 * @param m MsgIssueDenom message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgIssueDenom, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgIssueDenom message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgIssueDenom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgIssueDenom;
            }

            /** Properties of a MsgIssueDenomResponse. */
            interface IMsgIssueDenomResponse {}

            /** Represents a MsgIssueDenomResponse. */
            class MsgIssueDenomResponse implements IMsgIssueDenomResponse {
                /**
                 * Constructs a new MsgIssueDenomResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgIssueDenomResponse);

                /**
                 * Creates a new MsgIssueDenomResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgIssueDenomResponse instance
                 */
                public static create(
                    properties?: chainmain.nft.v1.IMsgIssueDenomResponse,
                ): chainmain.nft.v1.MsgIssueDenomResponse;

                /**
                 * Encodes the specified MsgIssueDenomResponse message. Does not implicitly {@link chainmain.nft.v1.MsgIssueDenomResponse.verify|verify} messages.
                 * @param m MsgIssueDenomResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: chainmain.nft.v1.IMsgIssueDenomResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgIssueDenomResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgIssueDenomResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): chainmain.nft.v1.MsgIssueDenomResponse;
            }

            /** Properties of a MsgTransferNFT. */
            interface IMsgTransferNFT {
                /** MsgTransferNFT id */
                id?: string | null;

                /** MsgTransferNFT denomId */
                denomId?: string | null;

                /** MsgTransferNFT sender */
                sender?: string | null;

                /** MsgTransferNFT recipient */
                recipient?: string | null;
            }

            /** Represents a MsgTransferNFT. */
            class MsgTransferNFT implements IMsgTransferNFT {
                /**
                 * Constructs a new MsgTransferNFT.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgTransferNFT);

                /** MsgTransferNFT id. */
                public id: string;

                /** MsgTransferNFT denomId. */
                public denomId: string;

                /** MsgTransferNFT sender. */
                public sender: string;

                /** MsgTransferNFT recipient. */
                public recipient: string;

                /**
                 * Creates a new MsgTransferNFT instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgTransferNFT instance
                 */
                public static create(properties?: chainmain.nft.v1.IMsgTransferNFT): chainmain.nft.v1.MsgTransferNFT;

                /**
                 * Encodes the specified MsgTransferNFT message. Does not implicitly {@link chainmain.nft.v1.MsgTransferNFT.verify|verify} messages.
                 * @param m MsgTransferNFT message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgTransferNFT, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgTransferNFT message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgTransferNFT
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgTransferNFT;
            }

            /** Properties of a MsgTransferNFTResponse. */
            interface IMsgTransferNFTResponse {}

            /** Represents a MsgTransferNFTResponse. */
            class MsgTransferNFTResponse implements IMsgTransferNFTResponse {
                /**
                 * Constructs a new MsgTransferNFTResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgTransferNFTResponse);

                /**
                 * Creates a new MsgTransferNFTResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgTransferNFTResponse instance
                 */
                public static create(
                    properties?: chainmain.nft.v1.IMsgTransferNFTResponse,
                ): chainmain.nft.v1.MsgTransferNFTResponse;

                /**
                 * Encodes the specified MsgTransferNFTResponse message. Does not implicitly {@link chainmain.nft.v1.MsgTransferNFTResponse.verify|verify} messages.
                 * @param m MsgTransferNFTResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(
                    m: chainmain.nft.v1.IMsgTransferNFTResponse,
                    w?: $protobuf.Writer,
                ): $protobuf.Writer;

                /**
                 * Decodes a MsgTransferNFTResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgTransferNFTResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(
                    r: $protobuf.Reader | Uint8Array,
                    l?: number,
                ): chainmain.nft.v1.MsgTransferNFTResponse;
            }

            /** Properties of a MsgEditNFT. */
            interface IMsgEditNFT {
                /** MsgEditNFT id */
                id?: string | null;

                /** MsgEditNFT denomId */
                denomId?: string | null;

                /** MsgEditNFT name */
                name?: string | null;

                /** MsgEditNFT uri */
                uri?: string | null;

                /** MsgEditNFT data */
                data?: string | null;

                /** MsgEditNFT sender */
                sender?: string | null;
            }

            /** Represents a MsgEditNFT. */
            class MsgEditNFT implements IMsgEditNFT {
                /**
                 * Constructs a new MsgEditNFT.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgEditNFT);

                /** MsgEditNFT id. */
                public id: string;

                /** MsgEditNFT denomId. */
                public denomId: string;

                /** MsgEditNFT name. */
                public name: string;

                /** MsgEditNFT uri. */
                public uri: string;

                /** MsgEditNFT data. */
                public data: string;

                /** MsgEditNFT sender. */
                public sender: string;

                /**
                 * Creates a new MsgEditNFT instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgEditNFT instance
                 */
                public static create(properties?: chainmain.nft.v1.IMsgEditNFT): chainmain.nft.v1.MsgEditNFT;

                /**
                 * Encodes the specified MsgEditNFT message. Does not implicitly {@link chainmain.nft.v1.MsgEditNFT.verify|verify} messages.
                 * @param m MsgEditNFT message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgEditNFT, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgEditNFT message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgEditNFT
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgEditNFT;
            }

            /** Properties of a MsgEditNFTResponse. */
            interface IMsgEditNFTResponse {}

            /** Represents a MsgEditNFTResponse. */
            class MsgEditNFTResponse implements IMsgEditNFTResponse {
                /**
                 * Constructs a new MsgEditNFTResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgEditNFTResponse);

                /**
                 * Creates a new MsgEditNFTResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgEditNFTResponse instance
                 */
                public static create(
                    properties?: chainmain.nft.v1.IMsgEditNFTResponse,
                ): chainmain.nft.v1.MsgEditNFTResponse;

                /**
                 * Encodes the specified MsgEditNFTResponse message. Does not implicitly {@link chainmain.nft.v1.MsgEditNFTResponse.verify|verify} messages.
                 * @param m MsgEditNFTResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgEditNFTResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgEditNFTResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgEditNFTResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgEditNFTResponse;
            }

            /** Properties of a MsgMintNFT. */
            interface IMsgMintNFT {
                /** MsgMintNFT id */
                id?: string | null;

                /** MsgMintNFT denomId */
                denomId?: string | null;

                /** MsgMintNFT name */
                name?: string | null;

                /** MsgMintNFT uri */
                uri?: string | null;

                /** MsgMintNFT data */
                data?: string | null;

                /** MsgMintNFT sender */
                sender?: string | null;

                /** MsgMintNFT recipient */
                recipient?: string | null;
            }

            /** Represents a MsgMintNFT. */
            class MsgMintNFT implements IMsgMintNFT {
                /**
                 * Constructs a new MsgMintNFT.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgMintNFT);

                /** MsgMintNFT id. */
                public id: string;

                /** MsgMintNFT denomId. */
                public denomId: string;

                /** MsgMintNFT name. */
                public name: string;

                /** MsgMintNFT uri. */
                public uri: string;

                /** MsgMintNFT data. */
                public data: string;

                /** MsgMintNFT sender. */
                public sender: string;

                /** MsgMintNFT recipient. */
                public recipient: string;

                /**
                 * Creates a new MsgMintNFT instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgMintNFT instance
                 */
                public static create(properties?: chainmain.nft.v1.IMsgMintNFT): chainmain.nft.v1.MsgMintNFT;

                /**
                 * Encodes the specified MsgMintNFT message. Does not implicitly {@link chainmain.nft.v1.MsgMintNFT.verify|verify} messages.
                 * @param m MsgMintNFT message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgMintNFT, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgMintNFT message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgMintNFT
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgMintNFT;
            }

            /** Properties of a MsgMintNFTResponse. */
            interface IMsgMintNFTResponse {}

            /** Represents a MsgMintNFTResponse. */
            class MsgMintNFTResponse implements IMsgMintNFTResponse {
                /**
                 * Constructs a new MsgMintNFTResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgMintNFTResponse);

                /**
                 * Creates a new MsgMintNFTResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgMintNFTResponse instance
                 */
                public static create(
                    properties?: chainmain.nft.v1.IMsgMintNFTResponse,
                ): chainmain.nft.v1.MsgMintNFTResponse;

                /**
                 * Encodes the specified MsgMintNFTResponse message. Does not implicitly {@link chainmain.nft.v1.MsgMintNFTResponse.verify|verify} messages.
                 * @param m MsgMintNFTResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgMintNFTResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgMintNFTResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgMintNFTResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgMintNFTResponse;
            }

            /** Properties of a MsgBurnNFT. */
            interface IMsgBurnNFT {
                /** MsgBurnNFT id */
                id?: string | null;

                /** MsgBurnNFT denomId */
                denomId?: string | null;

                /** MsgBurnNFT sender */
                sender?: string | null;
            }

            /** Represents a MsgBurnNFT. */
            class MsgBurnNFT implements IMsgBurnNFT {
                /**
                 * Constructs a new MsgBurnNFT.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgBurnNFT);

                /** MsgBurnNFT id. */
                public id: string;

                /** MsgBurnNFT denomId. */
                public denomId: string;

                /** MsgBurnNFT sender. */
                public sender: string;

                /**
                 * Creates a new MsgBurnNFT instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBurnNFT instance
                 */
                public static create(properties?: chainmain.nft.v1.IMsgBurnNFT): chainmain.nft.v1.MsgBurnNFT;

                /**
                 * Encodes the specified MsgBurnNFT message. Does not implicitly {@link chainmain.nft.v1.MsgBurnNFT.verify|verify} messages.
                 * @param m MsgBurnNFT message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgBurnNFT, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgBurnNFT message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgBurnNFT
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgBurnNFT;
            }

            /** Properties of a MsgBurnNFTResponse. */
            interface IMsgBurnNFTResponse {}

            /** Represents a MsgBurnNFTResponse. */
            class MsgBurnNFTResponse implements IMsgBurnNFTResponse {
                /**
                 * Constructs a new MsgBurnNFTResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: chainmain.nft.v1.IMsgBurnNFTResponse);

                /**
                 * Creates a new MsgBurnNFTResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBurnNFTResponse instance
                 */
                public static create(
                    properties?: chainmain.nft.v1.IMsgBurnNFTResponse,
                ): chainmain.nft.v1.MsgBurnNFTResponse;

                /**
                 * Encodes the specified MsgBurnNFTResponse message. Does not implicitly {@link chainmain.nft.v1.MsgBurnNFTResponse.verify|verify} messages.
                 * @param m MsgBurnNFTResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: chainmain.nft.v1.IMsgBurnNFTResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgBurnNFTResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgBurnNFTResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: $protobuf.Reader | Uint8Array, l?: number): chainmain.nft.v1.MsgBurnNFTResponse;
            }
        }
    }
}

/** Namespace tendermint. */
export namespace tendermintV2 {
    /** Namespace types. */
    namespace types {
        /** BlockIDFlag enum. */
        enum BlockIDFlag {
            BLOCK_ID_FLAG_UNKNOWN = 0,
            BLOCK_ID_FLAG_ABSENT = 1,
            BLOCK_ID_FLAG_COMMIT = 2,
            BLOCK_ID_FLAG_NIL = 3,
        }

        /** SignedMsgType enum. */
        enum SignedMsgType {
            SIGNED_MSG_TYPE_UNKNOWN = 0,
            SIGNED_MSG_TYPE_PREVOTE = 1,
            SIGNED_MSG_TYPE_PRECOMMIT = 2,
            SIGNED_MSG_TYPE_PROPOSAL = 32,
        }

        /** Properties of a PartSetHeader. */
        interface IPartSetHeader {
            /** PartSetHeader total */
            total?: number | null;

            /** PartSetHeader hash */
            hash?: Uint8Array | null;
        }

        /** Represents a PartSetHeader. */
        class PartSetHeader implements IPartSetHeader {
            /**
             * Constructs a new PartSetHeader.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IPartSetHeader);

            /** PartSetHeader total. */
            public total: number;

            /** PartSetHeader hash. */
            public hash: Uint8Array;

            /**
             * Creates a new PartSetHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartSetHeader instance
             */
            public static create(properties?: tendermintV2.types.IPartSetHeader): tendermintV2.types.PartSetHeader;

            /**
             * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermintV2.types.PartSetHeader.verify|verify} messages.
             * @param m PartSetHeader message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IPartSetHeader, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.PartSetHeader;
        }

        /** Properties of a Part. */
        interface IPart {
            /** Part index */
            index?: number | null;

            /** Part bytes */
            bytes?: Uint8Array | null;

            /** Part proof */
            proof?: tendermintV2.crypto.IProof | null;
        }

        /** Represents a Part. */
        class Part implements IPart {
            /**
             * Constructs a new Part.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IPart);

            /** Part index. */
            public index: number;

            /** Part bytes. */
            public bytes: Uint8Array;

            /** Part proof. */
            public proof?: tendermintV2.crypto.IProof | null;

            /**
             * Creates a new Part instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Part instance
             */
            public static create(properties?: tendermintV2.types.IPart): tendermintV2.types.Part;

            /**
             * Encodes the specified Part message. Does not implicitly {@link tendermintV2.types.Part.verify|verify} messages.
             * @param m Part message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IPart, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Part message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Part
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Part;
        }

        /** Properties of a BlockID. */
        interface IBlockID {
            /** BlockID hash */
            hash?: Uint8Array | null;

            /** BlockID partSetHeader */
            partSetHeader?: tendermintV2.types.IPartSetHeader | null;
        }

        /** Represents a BlockID. */
        class BlockID implements IBlockID {
            /**
             * Constructs a new BlockID.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IBlockID);

            /** BlockID hash. */
            public hash: Uint8Array;

            /** BlockID partSetHeader. */
            public partSetHeader?: tendermintV2.types.IPartSetHeader | null;

            /**
             * Creates a new BlockID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockID instance
             */
            public static create(properties?: tendermintV2.types.IBlockID): tendermintV2.types.BlockID;

            /**
             * Encodes the specified BlockID message. Does not implicitly {@link tendermintV2.types.BlockID.verify|verify} messages.
             * @param m BlockID message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IBlockID, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockID message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.BlockID;
        }

        /** Properties of a Header. */
        interface IHeader {
            /** Header version */
            version?: tendermintV2.version.IConsensus | null;

            /** Header chainId */
            chainId?: string | null;

            /** Header height */
            height?: Long | null;

            /** Header time */
            time?: google.protobuf.ITimestamp | null;

            /** Header lastBlockId */
            lastBlockId?: tendermintV2.types.IBlockID | null;

            /** Header lastCommitHash */
            lastCommitHash?: Uint8Array | null;

            /** Header dataHash */
            dataHash?: Uint8Array | null;

            /** Header validatorsHash */
            validatorsHash?: Uint8Array | null;

            /** Header nextValidatorsHash */
            nextValidatorsHash?: Uint8Array | null;

            /** Header consensusHash */
            consensusHash?: Uint8Array | null;

            /** Header appHash */
            appHash?: Uint8Array | null;

            /** Header lastResultsHash */
            lastResultsHash?: Uint8Array | null;

            /** Header evidenceHash */
            evidenceHash?: Uint8Array | null;

            /** Header proposerAddress */
            proposerAddress?: Uint8Array | null;
        }

        /** Represents a Header. */
        class Header implements IHeader {
            /**
             * Constructs a new Header.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IHeader);

            /** Header version. */
            public version?: tendermintV2.version.IConsensus | null;

            /** Header chainId. */
            public chainId: string;

            /** Header height. */
            public height: Long;

            /** Header time. */
            public time?: google.protobuf.ITimestamp | null;

            /** Header lastBlockId. */
            public lastBlockId?: tendermintV2.types.IBlockID | null;

            /** Header lastCommitHash. */
            public lastCommitHash: Uint8Array;

            /** Header dataHash. */
            public dataHash: Uint8Array;

            /** Header validatorsHash. */
            public validatorsHash: Uint8Array;

            /** Header nextValidatorsHash. */
            public nextValidatorsHash: Uint8Array;

            /** Header consensusHash. */
            public consensusHash: Uint8Array;

            /** Header appHash. */
            public appHash: Uint8Array;

            /** Header lastResultsHash. */
            public lastResultsHash: Uint8Array;

            /** Header evidenceHash. */
            public evidenceHash: Uint8Array;

            /** Header proposerAddress. */
            public proposerAddress: Uint8Array;

            /**
             * Creates a new Header instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Header instance
             */
            public static create(properties?: tendermintV2.types.IHeader): tendermintV2.types.Header;

            /**
             * Encodes the specified Header message. Does not implicitly {@link tendermintV2.types.Header.verify|verify} messages.
             * @param m Header message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IHeader, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Header;
        }

        /** Properties of a Data. */
        interface IData {
            /** Data txs */
            txs?: Uint8Array[] | null;
        }

        /** Represents a Data. */
        class Data implements IData {
            /**
             * Constructs a new Data.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IData);

            /** Data txs. */
            public txs: Uint8Array[];

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(properties?: tendermintV2.types.IData): tendermintV2.types.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link tendermintV2.types.Data.verify|verify} messages.
             * @param m Data message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IData, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Data;
        }

        /** Properties of a Vote. */
        interface IVote {
            /** Vote type */
            type?: tendermintV2.types.SignedMsgType | null;

            /** Vote height */
            height?: Long | null;

            /** Vote round */
            round?: number | null;

            /** Vote blockId */
            blockId?: tendermintV2.types.IBlockID | null;

            /** Vote timestamp */
            timestamp?: google.protobuf.ITimestamp | null;

            /** Vote validatorAddress */
            validatorAddress?: Uint8Array | null;

            /** Vote validatorIndex */
            validatorIndex?: number | null;

            /** Vote signature */
            signature?: Uint8Array | null;
        }

        /** Represents a Vote. */
        class Vote implements IVote {
            /**
             * Constructs a new Vote.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IVote);

            /** Vote type. */
            public type: tendermintV2.types.SignedMsgType;

            /** Vote height. */
            public height: Long;

            /** Vote round. */
            public round: number;

            /** Vote blockId. */
            public blockId?: tendermintV2.types.IBlockID | null;

            /** Vote timestamp. */
            public timestamp?: google.protobuf.ITimestamp | null;

            /** Vote validatorAddress. */
            public validatorAddress: Uint8Array;

            /** Vote validatorIndex. */
            public validatorIndex: number;

            /** Vote signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Vote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vote instance
             */
            public static create(properties?: tendermintV2.types.IVote): tendermintV2.types.Vote;

            /**
             * Encodes the specified Vote message. Does not implicitly {@link tendermintV2.types.Vote.verify|verify} messages.
             * @param m Vote message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IVote, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vote message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Vote;
        }

        /** Properties of a Commit. */
        interface ICommit {
            /** Commit height */
            height?: Long | null;

            /** Commit round */
            round?: number | null;

            /** Commit blockId */
            blockId?: tendermintV2.types.IBlockID | null;

            /** Commit signatures */
            signatures?: tendermintV2.types.ICommitSig[] | null;
        }

        /** Represents a Commit. */
        class Commit implements ICommit {
            /**
             * Constructs a new Commit.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.ICommit);

            /** Commit height. */
            public height: Long;

            /** Commit round. */
            public round: number;

            /** Commit blockId. */
            public blockId?: tendermintV2.types.IBlockID | null;

            /** Commit signatures. */
            public signatures: tendermintV2.types.ICommitSig[];

            /**
             * Creates a new Commit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Commit instance
             */
            public static create(properties?: tendermintV2.types.ICommit): tendermintV2.types.Commit;

            /**
             * Encodes the specified Commit message. Does not implicitly {@link tendermintV2.types.Commit.verify|verify} messages.
             * @param m Commit message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.ICommit, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Commit message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Commit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Commit;
        }

        /** Properties of a CommitSig. */
        interface ICommitSig {
            /** CommitSig blockIdFlag */
            blockIdFlag?: tendermintV2.types.BlockIDFlag | null;

            /** CommitSig validatorAddress */
            validatorAddress?: Uint8Array | null;

            /** CommitSig timestamp */
            timestamp?: google.protobuf.ITimestamp | null;

            /** CommitSig signature */
            signature?: Uint8Array | null;
        }

        /** Represents a CommitSig. */
        class CommitSig implements ICommitSig {
            /**
             * Constructs a new CommitSig.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.ICommitSig);

            /** CommitSig blockIdFlag. */
            public blockIdFlag: tendermintV2.types.BlockIDFlag;

            /** CommitSig validatorAddress. */
            public validatorAddress: Uint8Array;

            /** CommitSig timestamp. */
            public timestamp?: google.protobuf.ITimestamp | null;

            /** CommitSig signature. */
            public signature: Uint8Array;

            /**
             * Creates a new CommitSig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommitSig instance
             */
            public static create(properties?: tendermintV2.types.ICommitSig): tendermintV2.types.CommitSig;

            /**
             * Encodes the specified CommitSig message. Does not implicitly {@link tendermintV2.types.CommitSig.verify|verify} messages.
             * @param m CommitSig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.ICommitSig, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitSig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CommitSig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.CommitSig;
        }

        /** Properties of a Proposal. */
        interface IProposal {
            /** Proposal type */
            type?: tendermintV2.types.SignedMsgType | null;

            /** Proposal height */
            height?: Long | null;

            /** Proposal round */
            round?: number | null;

            /** Proposal polRound */
            polRound?: number | null;

            /** Proposal blockId */
            blockId?: tendermintV2.types.IBlockID | null;

            /** Proposal timestamp */
            timestamp?: google.protobuf.ITimestamp | null;

            /** Proposal signature */
            signature?: Uint8Array | null;
        }

        /** Represents a Proposal. */
        class Proposal implements IProposal {
            /**
             * Constructs a new Proposal.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IProposal);

            /** Proposal type. */
            public type: tendermintV2.types.SignedMsgType;

            /** Proposal height. */
            public height: Long;

            /** Proposal round. */
            public round: number;

            /** Proposal polRound. */
            public polRound: number;

            /** Proposal blockId. */
            public blockId?: tendermintV2.types.IBlockID | null;

            /** Proposal timestamp. */
            public timestamp?: google.protobuf.ITimestamp | null;

            /** Proposal signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Proposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proposal instance
             */
            public static create(properties?: tendermintV2.types.IProposal): tendermintV2.types.Proposal;

            /**
             * Encodes the specified Proposal message. Does not implicitly {@link tendermintV2.types.Proposal.verify|verify} messages.
             * @param m Proposal message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IProposal, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proposal message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Proposal;
        }

        /** Properties of a SignedHeader. */
        interface ISignedHeader {
            /** SignedHeader header */
            header?: tendermintV2.types.IHeader | null;

            /** SignedHeader commit */
            commit?: tendermintV2.types.ICommit | null;
        }

        /** Represents a SignedHeader. */
        class SignedHeader implements ISignedHeader {
            /**
             * Constructs a new SignedHeader.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.ISignedHeader);

            /** SignedHeader header. */
            public header?: tendermintV2.types.IHeader | null;

            /** SignedHeader commit. */
            public commit?: tendermintV2.types.ICommit | null;

            /**
             * Creates a new SignedHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedHeader instance
             */
            public static create(properties?: tendermintV2.types.ISignedHeader): tendermintV2.types.SignedHeader;

            /**
             * Encodes the specified SignedHeader message. Does not implicitly {@link tendermintV2.types.SignedHeader.verify|verify} messages.
             * @param m SignedHeader message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.ISignedHeader, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedHeader message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SignedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.SignedHeader;
        }

        /** Properties of a LightBlock. */
        interface ILightBlock {
            /** LightBlock signedHeader */
            signedHeader?: tendermintV2.types.ISignedHeader | null;

            /** LightBlock validatorSet */
            validatorSet?: tendermintV2.types.IValidatorSet | null;
        }

        /** Represents a LightBlock. */
        class LightBlock implements ILightBlock {
            /**
             * Constructs a new LightBlock.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.ILightBlock);

            /** LightBlock signedHeader. */
            public signedHeader?: tendermintV2.types.ISignedHeader | null;

            /** LightBlock validatorSet. */
            public validatorSet?: tendermintV2.types.IValidatorSet | null;

            /**
             * Creates a new LightBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LightBlock instance
             */
            public static create(properties?: tendermintV2.types.ILightBlock): tendermintV2.types.LightBlock;

            /**
             * Encodes the specified LightBlock message. Does not implicitly {@link tendermintV2.types.LightBlock.verify|verify} messages.
             * @param m LightBlock message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.ILightBlock, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LightBlock message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns LightBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.LightBlock;
        }

        /** Properties of a BlockMeta. */
        interface IBlockMeta {
            /** BlockMeta blockId */
            blockId?: tendermintV2.types.IBlockID | null;

            /** BlockMeta blockSize */
            blockSize?: Long | null;

            /** BlockMeta header */
            header?: tendermintV2.types.IHeader | null;

            /** BlockMeta numTxs */
            numTxs?: Long | null;
        }

        /** Represents a BlockMeta. */
        class BlockMeta implements IBlockMeta {
            /**
             * Constructs a new BlockMeta.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IBlockMeta);

            /** BlockMeta blockId. */
            public blockId?: tendermintV2.types.IBlockID | null;

            /** BlockMeta blockSize. */
            public blockSize: Long;

            /** BlockMeta header. */
            public header?: tendermintV2.types.IHeader | null;

            /** BlockMeta numTxs. */
            public numTxs: Long;

            /**
             * Creates a new BlockMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockMeta instance
             */
            public static create(properties?: tendermintV2.types.IBlockMeta): tendermintV2.types.BlockMeta;

            /**
             * Encodes the specified BlockMeta message. Does not implicitly {@link tendermintV2.types.BlockMeta.verify|verify} messages.
             * @param m BlockMeta message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IBlockMeta, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockMeta message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BlockMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.BlockMeta;
        }

        /** Properties of a TxProof. */
        interface ITxProof {
            /** TxProof rootHash */
            rootHash?: Uint8Array | null;

            /** TxProof data */
            data?: Uint8Array | null;

            /** TxProof proof */
            proof?: tendermintV2.crypto.IProof | null;
        }

        /** Represents a TxProof. */
        class TxProof implements ITxProof {
            /**
             * Constructs a new TxProof.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.ITxProof);

            /** TxProof rootHash. */
            public rootHash: Uint8Array;

            /** TxProof data. */
            public data: Uint8Array;

            /** TxProof proof. */
            public proof?: tendermintV2.crypto.IProof | null;

            /**
             * Creates a new TxProof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxProof instance
             */
            public static create(properties?: tendermintV2.types.ITxProof): tendermintV2.types.TxProof;

            /**
             * Encodes the specified TxProof message. Does not implicitly {@link tendermintV2.types.TxProof.verify|verify} messages.
             * @param m TxProof message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.ITxProof, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxProof message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns TxProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.TxProof;
        }

        /** Properties of a ValidatorSet. */
        interface IValidatorSet {
            /** ValidatorSet validators */
            validators?: tendermintV2.types.IValidator[] | null;

            /** ValidatorSet proposer */
            proposer?: tendermintV2.types.IValidator | null;

            /** ValidatorSet totalVotingPower */
            totalVotingPower?: Long | null;
        }

        /** Represents a ValidatorSet. */
        class ValidatorSet implements IValidatorSet {
            /**
             * Constructs a new ValidatorSet.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IValidatorSet);

            /** ValidatorSet validators. */
            public validators: tendermintV2.types.IValidator[];

            /** ValidatorSet proposer. */
            public proposer?: tendermintV2.types.IValidator | null;

            /** ValidatorSet totalVotingPower. */
            public totalVotingPower: Long;

            /**
             * Creates a new ValidatorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorSet instance
             */
            public static create(properties?: tendermintV2.types.IValidatorSet): tendermintV2.types.ValidatorSet;

            /**
             * Encodes the specified ValidatorSet message. Does not implicitly {@link tendermintV2.types.ValidatorSet.verify|verify} messages.
             * @param m ValidatorSet message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IValidatorSet, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorSet message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ValidatorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.ValidatorSet;
        }

        /** Properties of a Validator. */
        interface IValidator {
            /** Validator address */
            address?: Uint8Array | null;

            /** Validator pubKey */
            pubKey?: tendermintV2.crypto.IPublicKey | null;

            /** Validator votingPower */
            votingPower?: Long | null;

            /** Validator proposerPriority */
            proposerPriority?: Long | null;
        }

        /** Represents a Validator. */
        class Validator implements IValidator {
            /**
             * Constructs a new Validator.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.IValidator);

            /** Validator address. */
            public address: Uint8Array;

            /** Validator pubKey. */
            public pubKey?: tendermintV2.crypto.IPublicKey | null;

            /** Validator votingPower. */
            public votingPower: Long;

            /** Validator proposerPriority. */
            public proposerPriority: Long;

            /**
             * Creates a new Validator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validator instance
             */
            public static create(properties?: tendermintV2.types.IValidator): tendermintV2.types.Validator;

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermintV2.types.Validator.verify|verify} messages.
             * @param m Validator message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.IValidator, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.Validator;
        }

        /** Properties of a SimpleValidator. */
        interface ISimpleValidator {
            /** SimpleValidator pubKey */
            pubKey?: tendermintV2.crypto.IPublicKey | null;

            /** SimpleValidator votingPower */
            votingPower?: Long | null;
        }

        /** Represents a SimpleValidator. */
        class SimpleValidator implements ISimpleValidator {
            /**
             * Constructs a new SimpleValidator.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.types.ISimpleValidator);

            /** SimpleValidator pubKey. */
            public pubKey?: tendermintV2.crypto.IPublicKey | null;

            /** SimpleValidator votingPower. */
            public votingPower: Long;

            /**
             * Creates a new SimpleValidator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SimpleValidator instance
             */
            public static create(properties?: tendermintV2.types.ISimpleValidator): tendermintV2.types.SimpleValidator;

            /**
             * Encodes the specified SimpleValidator message. Does not implicitly {@link tendermintV2.types.SimpleValidator.verify|verify} messages.
             * @param m SimpleValidator message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.types.ISimpleValidator, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SimpleValidator message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SimpleValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.types.SimpleValidator;
        }
    }

    /** Namespace crypto. */
    namespace crypto {
        /** Properties of a Proof. */
        interface IProof {
            /** Proof total */
            total?: Long | null;

            /** Proof index */
            index?: Long | null;

            /** Proof leafHash */
            leafHash?: Uint8Array | null;

            /** Proof aunts */
            aunts?: Uint8Array[] | null;
        }

        /** Represents a Proof. */
        class Proof implements IProof {
            /**
             * Constructs a new Proof.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.crypto.IProof);

            /** Proof total. */
            public total: Long;

            /** Proof index. */
            public index: Long;

            /** Proof leafHash. */
            public leafHash: Uint8Array;

            /** Proof aunts. */
            public aunts: Uint8Array[];

            /**
             * Creates a new Proof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proof instance
             */
            public static create(properties?: tendermintV2.crypto.IProof): tendermintV2.crypto.Proof;

            /**
             * Encodes the specified Proof message. Does not implicitly {@link tendermintV2.crypto.Proof.verify|verify} messages.
             * @param m Proof message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.crypto.IProof, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proof message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.crypto.Proof;
        }

        /** Properties of a ValueOp. */
        interface IValueOp {
            /** ValueOp key */
            key?: Uint8Array | null;

            /** ValueOp proof */
            proof?: tendermintV2.crypto.IProof | null;
        }

        /** Represents a ValueOp. */
        class ValueOp implements IValueOp {
            /**
             * Constructs a new ValueOp.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.crypto.IValueOp);

            /** ValueOp key. */
            public key: Uint8Array;

            /** ValueOp proof. */
            public proof?: tendermintV2.crypto.IProof | null;

            /**
             * Creates a new ValueOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValueOp instance
             */
            public static create(properties?: tendermintV2.crypto.IValueOp): tendermintV2.crypto.ValueOp;

            /**
             * Encodes the specified ValueOp message. Does not implicitly {@link tendermintV2.crypto.ValueOp.verify|verify} messages.
             * @param m ValueOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.crypto.IValueOp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValueOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.crypto.ValueOp;
        }

        /** Properties of a DominoOp. */
        interface IDominoOp {
            /** DominoOp key */
            key?: string | null;

            /** DominoOp input */
            input?: string | null;

            /** DominoOp output */
            output?: string | null;
        }

        /** Represents a DominoOp. */
        class DominoOp implements IDominoOp {
            /**
             * Constructs a new DominoOp.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.crypto.IDominoOp);

            /** DominoOp key. */
            public key: string;

            /** DominoOp input. */
            public input: string;

            /** DominoOp output. */
            public output: string;

            /**
             * Creates a new DominoOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DominoOp instance
             */
            public static create(properties?: tendermintV2.crypto.IDominoOp): tendermintV2.crypto.DominoOp;

            /**
             * Encodes the specified DominoOp message. Does not implicitly {@link tendermintV2.crypto.DominoOp.verify|verify} messages.
             * @param m DominoOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.crypto.IDominoOp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DominoOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.crypto.DominoOp;
        }

        /** Properties of a ProofOp. */
        interface IProofOp {
            /** ProofOp type */
            type?: string | null;

            /** ProofOp key */
            key?: Uint8Array | null;

            /** ProofOp data */
            data?: Uint8Array | null;
        }

        /** Represents a ProofOp. */
        class ProofOp implements IProofOp {
            /**
             * Constructs a new ProofOp.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.crypto.IProofOp);

            /** ProofOp type. */
            public type: string;

            /** ProofOp key. */
            public key: Uint8Array;

            /** ProofOp data. */
            public data: Uint8Array;

            /**
             * Creates a new ProofOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOp instance
             */
            public static create(properties?: tendermintV2.crypto.IProofOp): tendermintV2.crypto.ProofOp;

            /**
             * Encodes the specified ProofOp message. Does not implicitly {@link tendermintV2.crypto.ProofOp.verify|verify} messages.
             * @param m ProofOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.crypto.IProofOp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.crypto.ProofOp;
        }

        /** Properties of a ProofOps. */
        interface IProofOps {
            /** ProofOps ops */
            ops?: tendermintV2.crypto.IProofOp[] | null;
        }

        /** Represents a ProofOps. */
        class ProofOps implements IProofOps {
            /**
             * Constructs a new ProofOps.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.crypto.IProofOps);

            /** ProofOps ops. */
            public ops: tendermintV2.crypto.IProofOp[];

            /**
             * Creates a new ProofOps instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOps instance
             */
            public static create(properties?: tendermintV2.crypto.IProofOps): tendermintV2.crypto.ProofOps;

            /**
             * Encodes the specified ProofOps message. Does not implicitly {@link tendermintV2.crypto.ProofOps.verify|verify} messages.
             * @param m ProofOps message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.crypto.IProofOps, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOps message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.crypto.ProofOps;
        }

        /** Properties of a PublicKey. */
        interface IPublicKey {
            /** PublicKey ed25519 */
            ed25519?: Uint8Array | null;

            /** PublicKey secp256k1 */
            secp256k1?: Uint8Array | null;
        }

        /** Represents a PublicKey. */
        class PublicKey implements IPublicKey {
            /**
             * Constructs a new PublicKey.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.crypto.IPublicKey);

            /** PublicKey ed25519. */
            public ed25519: Uint8Array;

            /** PublicKey secp256k1. */
            public secp256k1: Uint8Array;

            /** PublicKey sum. */
            public sum?: 'ed25519' | 'secp256k1';

            /**
             * Creates a new PublicKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PublicKey instance
             */
            public static create(properties?: tendermintV2.crypto.IPublicKey): tendermintV2.crypto.PublicKey;

            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link tendermintV2.crypto.PublicKey.verify|verify} messages.
             * @param m PublicKey message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.crypto.IPublicKey, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.crypto.PublicKey;
        }
    }

    /** Namespace version. */
    namespace version {
        /** Properties of an App. */
        interface IApp {
            /** App protocol */
            protocol?: Long | null;

            /** App software */
            software?: string | null;
        }

        /** Represents an App. */
        class App implements IApp {
            /**
             * Constructs a new App.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.version.IApp);

            /** App protocol. */
            public protocol: Long;

            /** App software. */
            public software: string;

            /**
             * Creates a new App instance using the specified properties.
             * @param [properties] Properties to set
             * @returns App instance
             */
            public static create(properties?: tendermintV2.version.IApp): tendermintV2.version.App;

            /**
             * Encodes the specified App message. Does not implicitly {@link tendermintV2.version.App.verify|verify} messages.
             * @param m App message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.version.IApp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an App message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.version.App;
        }

        /** Properties of a Consensus. */
        interface IConsensus {
            /** Consensus block */
            block?: Long | null;

            /** Consensus app */
            app?: Long | null;
        }

        /** Represents a Consensus. */
        class Consensus implements IConsensus {
            /**
             * Constructs a new Consensus.
             * @param [p] Properties to set
             */
            constructor(p?: tendermintV2.version.IConsensus);

            /** Consensus block. */
            public block: Long;

            /** Consensus app. */
            public app: Long;

            /**
             * Creates a new Consensus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Consensus instance
             */
            public static create(properties?: tendermintV2.version.IConsensus): tendermintV2.version.Consensus;

            /**
             * Encodes the specified Consensus message. Does not implicitly {@link tendermintV2.version.Consensus.verify|verify} messages.
             * @param m Consensus message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermintV2.version.IConsensus, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consensus message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermintV2.version.Consensus;
        }
    }
}
