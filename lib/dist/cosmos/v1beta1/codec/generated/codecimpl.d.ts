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
                header?: tendermint.types.IHeader | null;

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
                public header?: tendermint.types.IHeader | null;

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

/** Namespace tendermint. */
export namespace tendermint {
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
            constructor(p?: tendermint.types.IPartSetHeader);

            /** PartSetHeader total. */
            public total: number;

            /** PartSetHeader hash. */
            public hash: Uint8Array;

            /**
             * Creates a new PartSetHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartSetHeader instance
             */
            public static create(properties?: tendermint.types.IPartSetHeader): tendermint.types.PartSetHeader;

            /**
             * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param m PartSetHeader message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IPartSetHeader, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.PartSetHeader;
        }

        /** Properties of a Part. */
        interface IPart {
            /** Part index */
            index?: number | null;

            /** Part bytes */
            bytes?: Uint8Array | null;

            /** Part proof */
            proof?: tendermint.crypto.IProof | null;
        }

        /** Represents a Part. */
        class Part implements IPart {
            /**
             * Constructs a new Part.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.IPart);

            /** Part index. */
            public index: number;

            /** Part bytes. */
            public bytes: Uint8Array;

            /** Part proof. */
            public proof?: tendermint.crypto.IProof | null;

            /**
             * Creates a new Part instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Part instance
             */
            public static create(properties?: tendermint.types.IPart): tendermint.types.Part;

            /**
             * Encodes the specified Part message. Does not implicitly {@link tendermint.types.Part.verify|verify} messages.
             * @param m Part message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IPart, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Part message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Part
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Part;
        }

        /** Properties of a BlockID. */
        interface IBlockID {
            /** BlockID hash */
            hash?: Uint8Array | null;

            /** BlockID partSetHeader */
            partSetHeader?: tendermint.types.IPartSetHeader | null;
        }

        /** Represents a BlockID. */
        class BlockID implements IBlockID {
            /**
             * Constructs a new BlockID.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.IBlockID);

            /** BlockID hash. */
            public hash: Uint8Array;

            /** BlockID partSetHeader. */
            public partSetHeader?: tendermint.types.IPartSetHeader | null;

            /**
             * Creates a new BlockID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockID instance
             */
            public static create(properties?: tendermint.types.IBlockID): tendermint.types.BlockID;

            /**
             * Encodes the specified BlockID message. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param m BlockID message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IBlockID, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockID message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.BlockID;
        }

        /** Properties of a Header. */
        interface IHeader {
            /** Header version */
            version?: tendermint.version.IConsensus | null;

            /** Header chainId */
            chainId?: string | null;

            /** Header height */
            height?: Long | null;

            /** Header time */
            time?: google.protobuf.ITimestamp | null;

            /** Header lastBlockId */
            lastBlockId?: tendermint.types.IBlockID | null;

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
            constructor(p?: tendermint.types.IHeader);

            /** Header version. */
            public version?: tendermint.version.IConsensus | null;

            /** Header chainId. */
            public chainId: string;

            /** Header height. */
            public height: Long;

            /** Header time. */
            public time?: google.protobuf.ITimestamp | null;

            /** Header lastBlockId. */
            public lastBlockId?: tendermint.types.IBlockID | null;

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
            public static create(properties?: tendermint.types.IHeader): tendermint.types.Header;

            /**
             * Encodes the specified Header message. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param m Header message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IHeader, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Header;
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
            constructor(p?: tendermint.types.IData);

            /** Data txs. */
            public txs: Uint8Array[];

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(properties?: tendermint.types.IData): tendermint.types.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link tendermint.types.Data.verify|verify} messages.
             * @param m Data message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IData, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Data;
        }

        /** Properties of a Vote. */
        interface IVote {
            /** Vote type */
            type?: tendermint.types.SignedMsgType | null;

            /** Vote height */
            height?: Long | null;

            /** Vote round */
            round?: number | null;

            /** Vote blockId */
            blockId?: tendermint.types.IBlockID | null;

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
            constructor(p?: tendermint.types.IVote);

            /** Vote type. */
            public type: tendermint.types.SignedMsgType;

            /** Vote height. */
            public height: Long;

            /** Vote round. */
            public round: number;

            /** Vote blockId. */
            public blockId?: tendermint.types.IBlockID | null;

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
            public static create(properties?: tendermint.types.IVote): tendermint.types.Vote;

            /**
             * Encodes the specified Vote message. Does not implicitly {@link tendermint.types.Vote.verify|verify} messages.
             * @param m Vote message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IVote, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vote message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Vote;
        }

        /** Properties of a Commit. */
        interface ICommit {
            /** Commit height */
            height?: Long | null;

            /** Commit round */
            round?: number | null;

            /** Commit blockId */
            blockId?: tendermint.types.IBlockID | null;

            /** Commit signatures */
            signatures?: tendermint.types.ICommitSig[] | null;
        }

        /** Represents a Commit. */
        class Commit implements ICommit {
            /**
             * Constructs a new Commit.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.ICommit);

            /** Commit height. */
            public height: Long;

            /** Commit round. */
            public round: number;

            /** Commit blockId. */
            public blockId?: tendermint.types.IBlockID | null;

            /** Commit signatures. */
            public signatures: tendermint.types.ICommitSig[];

            /**
             * Creates a new Commit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Commit instance
             */
            public static create(properties?: tendermint.types.ICommit): tendermint.types.Commit;

            /**
             * Encodes the specified Commit message. Does not implicitly {@link tendermint.types.Commit.verify|verify} messages.
             * @param m Commit message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.ICommit, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Commit message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Commit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Commit;
        }

        /** Properties of a CommitSig. */
        interface ICommitSig {
            /** CommitSig blockIdFlag */
            blockIdFlag?: tendermint.types.BlockIDFlag | null;

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
            constructor(p?: tendermint.types.ICommitSig);

            /** CommitSig blockIdFlag. */
            public blockIdFlag: tendermint.types.BlockIDFlag;

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
            public static create(properties?: tendermint.types.ICommitSig): tendermint.types.CommitSig;

            /**
             * Encodes the specified CommitSig message. Does not implicitly {@link tendermint.types.CommitSig.verify|verify} messages.
             * @param m CommitSig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.ICommitSig, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitSig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CommitSig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.CommitSig;
        }

        /** Properties of a Proposal. */
        interface IProposal {
            /** Proposal type */
            type?: tendermint.types.SignedMsgType | null;

            /** Proposal height */
            height?: Long | null;

            /** Proposal round */
            round?: number | null;

            /** Proposal polRound */
            polRound?: number | null;

            /** Proposal blockId */
            blockId?: tendermint.types.IBlockID | null;

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
            constructor(p?: tendermint.types.IProposal);

            /** Proposal type. */
            public type: tendermint.types.SignedMsgType;

            /** Proposal height. */
            public height: Long;

            /** Proposal round. */
            public round: number;

            /** Proposal polRound. */
            public polRound: number;

            /** Proposal blockId. */
            public blockId?: tendermint.types.IBlockID | null;

            /** Proposal timestamp. */
            public timestamp?: google.protobuf.ITimestamp | null;

            /** Proposal signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Proposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proposal instance
             */
            public static create(properties?: tendermint.types.IProposal): tendermint.types.Proposal;

            /**
             * Encodes the specified Proposal message. Does not implicitly {@link tendermint.types.Proposal.verify|verify} messages.
             * @param m Proposal message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IProposal, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proposal message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Proposal;
        }

        /** Properties of a SignedHeader. */
        interface ISignedHeader {
            /** SignedHeader header */
            header?: tendermint.types.IHeader | null;

            /** SignedHeader commit */
            commit?: tendermint.types.ICommit | null;
        }

        /** Represents a SignedHeader. */
        class SignedHeader implements ISignedHeader {
            /**
             * Constructs a new SignedHeader.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.ISignedHeader);

            /** SignedHeader header. */
            public header?: tendermint.types.IHeader | null;

            /** SignedHeader commit. */
            public commit?: tendermint.types.ICommit | null;

            /**
             * Creates a new SignedHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedHeader instance
             */
            public static create(properties?: tendermint.types.ISignedHeader): tendermint.types.SignedHeader;

            /**
             * Encodes the specified SignedHeader message. Does not implicitly {@link tendermint.types.SignedHeader.verify|verify} messages.
             * @param m SignedHeader message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.ISignedHeader, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedHeader message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SignedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.SignedHeader;
        }

        /** Properties of a LightBlock. */
        interface ILightBlock {
            /** LightBlock signedHeader */
            signedHeader?: tendermint.types.ISignedHeader | null;

            /** LightBlock validatorSet */
            validatorSet?: tendermint.types.IValidatorSet | null;
        }

        /** Represents a LightBlock. */
        class LightBlock implements ILightBlock {
            /**
             * Constructs a new LightBlock.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.ILightBlock);

            /** LightBlock signedHeader. */
            public signedHeader?: tendermint.types.ISignedHeader | null;

            /** LightBlock validatorSet. */
            public validatorSet?: tendermint.types.IValidatorSet | null;

            /**
             * Creates a new LightBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LightBlock instance
             */
            public static create(properties?: tendermint.types.ILightBlock): tendermint.types.LightBlock;

            /**
             * Encodes the specified LightBlock message. Does not implicitly {@link tendermint.types.LightBlock.verify|verify} messages.
             * @param m LightBlock message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.ILightBlock, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LightBlock message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns LightBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.LightBlock;
        }

        /** Properties of a BlockMeta. */
        interface IBlockMeta {
            /** BlockMeta blockId */
            blockId?: tendermint.types.IBlockID | null;

            /** BlockMeta blockSize */
            blockSize?: Long | null;

            /** BlockMeta header */
            header?: tendermint.types.IHeader | null;

            /** BlockMeta numTxs */
            numTxs?: Long | null;
        }

        /** Represents a BlockMeta. */
        class BlockMeta implements IBlockMeta {
            /**
             * Constructs a new BlockMeta.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.IBlockMeta);

            /** BlockMeta blockId. */
            public blockId?: tendermint.types.IBlockID | null;

            /** BlockMeta blockSize. */
            public blockSize: Long;

            /** BlockMeta header. */
            public header?: tendermint.types.IHeader | null;

            /** BlockMeta numTxs. */
            public numTxs: Long;

            /**
             * Creates a new BlockMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockMeta instance
             */
            public static create(properties?: tendermint.types.IBlockMeta): tendermint.types.BlockMeta;

            /**
             * Encodes the specified BlockMeta message. Does not implicitly {@link tendermint.types.BlockMeta.verify|verify} messages.
             * @param m BlockMeta message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IBlockMeta, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockMeta message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BlockMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.BlockMeta;
        }

        /** Properties of a TxProof. */
        interface ITxProof {
            /** TxProof rootHash */
            rootHash?: Uint8Array | null;

            /** TxProof data */
            data?: Uint8Array | null;

            /** TxProof proof */
            proof?: tendermint.crypto.IProof | null;
        }

        /** Represents a TxProof. */
        class TxProof implements ITxProof {
            /**
             * Constructs a new TxProof.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.ITxProof);

            /** TxProof rootHash. */
            public rootHash: Uint8Array;

            /** TxProof data. */
            public data: Uint8Array;

            /** TxProof proof. */
            public proof?: tendermint.crypto.IProof | null;

            /**
             * Creates a new TxProof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxProof instance
             */
            public static create(properties?: tendermint.types.ITxProof): tendermint.types.TxProof;

            /**
             * Encodes the specified TxProof message. Does not implicitly {@link tendermint.types.TxProof.verify|verify} messages.
             * @param m TxProof message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.ITxProof, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxProof message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns TxProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.TxProof;
        }

        /** Properties of a ValidatorSet. */
        interface IValidatorSet {
            /** ValidatorSet validators */
            validators?: tendermint.types.IValidator[] | null;

            /** ValidatorSet proposer */
            proposer?: tendermint.types.IValidator | null;

            /** ValidatorSet totalVotingPower */
            totalVotingPower?: Long | null;
        }

        /** Represents a ValidatorSet. */
        class ValidatorSet implements IValidatorSet {
            /**
             * Constructs a new ValidatorSet.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.IValidatorSet);

            /** ValidatorSet validators. */
            public validators: tendermint.types.IValidator[];

            /** ValidatorSet proposer. */
            public proposer?: tendermint.types.IValidator | null;

            /** ValidatorSet totalVotingPower. */
            public totalVotingPower: Long;

            /**
             * Creates a new ValidatorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorSet instance
             */
            public static create(properties?: tendermint.types.IValidatorSet): tendermint.types.ValidatorSet;

            /**
             * Encodes the specified ValidatorSet message. Does not implicitly {@link tendermint.types.ValidatorSet.verify|verify} messages.
             * @param m ValidatorSet message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IValidatorSet, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorSet message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ValidatorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.ValidatorSet;
        }

        /** Properties of a Validator. */
        interface IValidator {
            /** Validator address */
            address?: Uint8Array | null;

            /** Validator pubKey */
            pubKey?: tendermint.crypto.IPublicKey | null;

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
            constructor(p?: tendermint.types.IValidator);

            /** Validator address. */
            public address: Uint8Array;

            /** Validator pubKey. */
            public pubKey?: tendermint.crypto.IPublicKey | null;

            /** Validator votingPower. */
            public votingPower: Long;

            /** Validator proposerPriority. */
            public proposerPriority: Long;

            /**
             * Creates a new Validator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validator instance
             */
            public static create(properties?: tendermint.types.IValidator): tendermint.types.Validator;

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermint.types.Validator.verify|verify} messages.
             * @param m Validator message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.IValidator, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.Validator;
        }

        /** Properties of a SimpleValidator. */
        interface ISimpleValidator {
            /** SimpleValidator pubKey */
            pubKey?: tendermint.crypto.IPublicKey | null;

            /** SimpleValidator votingPower */
            votingPower?: Long | null;
        }

        /** Represents a SimpleValidator. */
        class SimpleValidator implements ISimpleValidator {
            /**
             * Constructs a new SimpleValidator.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.types.ISimpleValidator);

            /** SimpleValidator pubKey. */
            public pubKey?: tendermint.crypto.IPublicKey | null;

            /** SimpleValidator votingPower. */
            public votingPower: Long;

            /**
             * Creates a new SimpleValidator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SimpleValidator instance
             */
            public static create(properties?: tendermint.types.ISimpleValidator): tendermint.types.SimpleValidator;

            /**
             * Encodes the specified SimpleValidator message. Does not implicitly {@link tendermint.types.SimpleValidator.verify|verify} messages.
             * @param m SimpleValidator message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.types.ISimpleValidator, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SimpleValidator message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SimpleValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.types.SimpleValidator;
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
            constructor(p?: tendermint.crypto.IProof);

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
            public static create(properties?: tendermint.crypto.IProof): tendermint.crypto.Proof;

            /**
             * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param m Proof message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.crypto.IProof, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proof message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.Proof;
        }

        /** Properties of a ValueOp. */
        interface IValueOp {
            /** ValueOp key */
            key?: Uint8Array | null;

            /** ValueOp proof */
            proof?: tendermint.crypto.IProof | null;
        }

        /** Represents a ValueOp. */
        class ValueOp implements IValueOp {
            /**
             * Constructs a new ValueOp.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.crypto.IValueOp);

            /** ValueOp key. */
            public key: Uint8Array;

            /** ValueOp proof. */
            public proof?: tendermint.crypto.IProof | null;

            /**
             * Creates a new ValueOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValueOp instance
             */
            public static create(properties?: tendermint.crypto.IValueOp): tendermint.crypto.ValueOp;

            /**
             * Encodes the specified ValueOp message. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param m ValueOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.crypto.IValueOp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValueOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.ValueOp;
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
            constructor(p?: tendermint.crypto.IDominoOp);

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
            public static create(properties?: tendermint.crypto.IDominoOp): tendermint.crypto.DominoOp;

            /**
             * Encodes the specified DominoOp message. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param m DominoOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.crypto.IDominoOp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DominoOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.DominoOp;
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
            constructor(p?: tendermint.crypto.IProofOp);

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
            public static create(properties?: tendermint.crypto.IProofOp): tendermint.crypto.ProofOp;

            /**
             * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param m ProofOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.crypto.IProofOp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.ProofOp;
        }

        /** Properties of a ProofOps. */
        interface IProofOps {
            /** ProofOps ops */
            ops?: tendermint.crypto.IProofOp[] | null;
        }

        /** Represents a ProofOps. */
        class ProofOps implements IProofOps {
            /**
             * Constructs a new ProofOps.
             * @param [p] Properties to set
             */
            constructor(p?: tendermint.crypto.IProofOps);

            /** ProofOps ops. */
            public ops: tendermint.crypto.IProofOp[];

            /**
             * Creates a new ProofOps instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOps instance
             */
            public static create(properties?: tendermint.crypto.IProofOps): tendermint.crypto.ProofOps;

            /**
             * Encodes the specified ProofOps message. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param m ProofOps message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.crypto.IProofOps, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOps message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.ProofOps;
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
            constructor(p?: tendermint.crypto.IPublicKey);

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
            public static create(properties?: tendermint.crypto.IPublicKey): tendermint.crypto.PublicKey;

            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param m PublicKey message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.crypto.IPublicKey, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.PublicKey;
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
            constructor(p?: tendermint.version.IApp);

            /** App protocol. */
            public protocol: Long;

            /** App software. */
            public software: string;

            /**
             * Creates a new App instance using the specified properties.
             * @param [properties] Properties to set
             * @returns App instance
             */
            public static create(properties?: tendermint.version.IApp): tendermint.version.App;

            /**
             * Encodes the specified App message. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param m App message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.version.IApp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an App message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.version.App;
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
            constructor(p?: tendermint.version.IConsensus);

            /** Consensus block. */
            public block: Long;

            /** Consensus app. */
            public app: Long;

            /**
             * Creates a new Consensus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Consensus instance
             */
            public static create(properties?: tendermint.version.IConsensus): tendermint.version.Consensus;

            /**
             * Encodes the specified Consensus message. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param m Consensus message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: tendermint.version.IConsensus, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consensus message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.version.Consensus;
        }
    }
}
