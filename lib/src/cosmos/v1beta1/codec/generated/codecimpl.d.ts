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
    }
}

/** Namespace tendermint. */
export namespace tendermint {
    /** Namespace crypto. */
    namespace crypto {
        /** Properties of a PublicKey. */
        interface IPublicKey {
            /** PublicKey ed25519 */
            ed25519?: Uint8Array | null;
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

            /** PublicKey sum. */
            public sum?: 'ed25519';

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
}
