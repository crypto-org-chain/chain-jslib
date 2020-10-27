'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.tendermint = exports.google = exports.cosmos = void 0;
var $protobuf = require('protobufjs/minimal');
const $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;
const $root = {};
exports.cosmos = $root.cosmos = (() => {
    const cosmos = {};
    cosmos.bank = (function () {
        const bank = {};
        bank.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Params = (function () {
                function Params(p) {
                    this.sendEnabled = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Params.prototype.sendEnabled = $util.emptyArray;
                Params.prototype.defaultSendEnabled = false;
                Params.create = function create(properties) {
                    return new Params(properties);
                };
                Params.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.sendEnabled != null && m.sendEnabled.length) {
                        for (var i = 0; i < m.sendEnabled.length; ++i)
                            $root.cosmos.bank.v1beta1.SendEnabled.encode(
                                m.sendEnabled[i],
                                w.uint32(10).fork(),
                            ).ldelim();
                    }
                    if (m.defaultSendEnabled != null && Object.hasOwnProperty.call(m, 'defaultSendEnabled'))
                        w.uint32(16).bool(m.defaultSendEnabled);
                    return w;
                };
                Params.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.Params();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.sendEnabled && m.sendEnabled.length)) m.sendEnabled = [];
                                m.sendEnabled.push($root.cosmos.bank.v1beta1.SendEnabled.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.defaultSendEnabled = r.bool();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Params;
            })();
            v1beta1.SendEnabled = (function () {
                function SendEnabled(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                SendEnabled.prototype.denom = '';
                SendEnabled.prototype.enabled = false;
                SendEnabled.create = function create(properties) {
                    return new SendEnabled(properties);
                };
                SendEnabled.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.denom != null && Object.hasOwnProperty.call(m, 'denom')) w.uint32(10).string(m.denom);
                    if (m.enabled != null && Object.hasOwnProperty.call(m, 'enabled')) w.uint32(16).bool(m.enabled);
                    return w;
                };
                SendEnabled.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.SendEnabled();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.denom = r.string();
                                break;
                            case 2:
                                m.enabled = r.bool();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return SendEnabled;
            })();
            v1beta1.Input = (function () {
                function Input(p) {
                    this.coins = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Input.prototype.address = '';
                Input.prototype.coins = $util.emptyArray;
                Input.create = function create(properties) {
                    return new Input(properties);
                };
                Input.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, 'address')) w.uint32(10).string(m.address);
                    if (m.coins != null && m.coins.length) {
                        for (var i = 0; i < m.coins.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.coins[i], w.uint32(18).fork()).ldelim();
                    }
                    return w;
                };
                Input.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.Input();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.address = r.string();
                                break;
                            case 2:
                                if (!(m.coins && m.coins.length)) m.coins = [];
                                m.coins.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Input;
            })();
            v1beta1.Output = (function () {
                function Output(p) {
                    this.coins = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Output.prototype.address = '';
                Output.prototype.coins = $util.emptyArray;
                Output.create = function create(properties) {
                    return new Output(properties);
                };
                Output.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, 'address')) w.uint32(10).string(m.address);
                    if (m.coins != null && m.coins.length) {
                        for (var i = 0; i < m.coins.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.coins[i], w.uint32(18).fork()).ldelim();
                    }
                    return w;
                };
                Output.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.Output();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.address = r.string();
                                break;
                            case 2:
                                if (!(m.coins && m.coins.length)) m.coins = [];
                                m.coins.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Output;
            })();
            v1beta1.Supply = (function () {
                function Supply(p) {
                    this.total = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Supply.prototype.total = $util.emptyArray;
                Supply.create = function create(properties) {
                    return new Supply(properties);
                };
                Supply.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.total != null && m.total.length) {
                        for (var i = 0; i < m.total.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.total[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };
                Supply.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.Supply();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.total && m.total.length)) m.total = [];
                                m.total.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Supply;
            })();
            v1beta1.DenomUnit = (function () {
                function DenomUnit(p) {
                    this.aliases = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DenomUnit.prototype.denom = '';
                DenomUnit.prototype.exponent = 0;
                DenomUnit.prototype.aliases = $util.emptyArray;
                DenomUnit.create = function create(properties) {
                    return new DenomUnit(properties);
                };
                DenomUnit.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.denom != null && Object.hasOwnProperty.call(m, 'denom')) w.uint32(10).string(m.denom);
                    if (m.exponent != null && Object.hasOwnProperty.call(m, 'exponent'))
                        w.uint32(16).uint32(m.exponent);
                    if (m.aliases != null && m.aliases.length) {
                        for (var i = 0; i < m.aliases.length; ++i) w.uint32(26).string(m.aliases[i]);
                    }
                    return w;
                };
                DenomUnit.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.DenomUnit();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.denom = r.string();
                                break;
                            case 2:
                                m.exponent = r.uint32();
                                break;
                            case 3:
                                if (!(m.aliases && m.aliases.length)) m.aliases = [];
                                m.aliases.push(r.string());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DenomUnit;
            })();
            v1beta1.Metadata = (function () {
                function Metadata(p) {
                    this.denomUnits = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Metadata.prototype.description = '';
                Metadata.prototype.denomUnits = $util.emptyArray;
                Metadata.prototype.base = '';
                Metadata.prototype.display = '';
                Metadata.create = function create(properties) {
                    return new Metadata(properties);
                };
                Metadata.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(10).string(m.description);
                    if (m.denomUnits != null && m.denomUnits.length) {
                        for (var i = 0; i < m.denomUnits.length; ++i)
                            $root.cosmos.bank.v1beta1.DenomUnit.encode(m.denomUnits[i], w.uint32(18).fork()).ldelim();
                    }
                    if (m.base != null && Object.hasOwnProperty.call(m, 'base')) w.uint32(26).string(m.base);
                    if (m.display != null && Object.hasOwnProperty.call(m, 'display')) w.uint32(34).string(m.display);
                    return w;
                };
                Metadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.Metadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.description = r.string();
                                break;
                            case 2:
                                if (!(m.denomUnits && m.denomUnits.length)) m.denomUnits = [];
                                m.denomUnits.push($root.cosmos.bank.v1beta1.DenomUnit.decode(r, r.uint32()));
                                break;
                            case 3:
                                m.base = r.string();
                                break;
                            case 4:
                                m.display = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Metadata;
            })();
            v1beta1.Msg = (function () {
                function Msg(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(
                    (Msg.prototype.send = function send(request, callback) {
                        return this.rpcCall(
                            send,
                            $root.cosmos.bank.v1beta1.MsgSend,
                            $root.cosmos.bank.v1beta1.MsgSendResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'Send' },
                );
                Object.defineProperty(
                    (Msg.prototype.multiSend = function multiSend(request, callback) {
                        return this.rpcCall(
                            multiSend,
                            $root.cosmos.bank.v1beta1.MsgMultiSend,
                            $root.cosmos.bank.v1beta1.MsgMultiSendResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'MultiSend' },
                );
                return Msg;
            })();
            v1beta1.MsgSend = (function () {
                function MsgSend(p) {
                    this.amount = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgSend.prototype.fromAddress = '';
                MsgSend.prototype.toAddress = '';
                MsgSend.prototype.amount = $util.emptyArray;
                MsgSend.create = function create(properties) {
                    return new MsgSend(properties);
                };
                MsgSend.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.fromAddress != null && Object.hasOwnProperty.call(m, 'fromAddress'))
                        w.uint32(10).string(m.fromAddress);
                    if (m.toAddress != null && Object.hasOwnProperty.call(m, 'toAddress'))
                        w.uint32(18).string(m.toAddress);
                    if (m.amount != null && m.amount.length) {
                        for (var i = 0; i < m.amount.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.amount[i], w.uint32(26).fork()).ldelim();
                    }
                    return w;
                };
                MsgSend.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.MsgSend();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.fromAddress = r.string();
                                break;
                            case 2:
                                m.toAddress = r.string();
                                break;
                            case 3:
                                if (!(m.amount && m.amount.length)) m.amount = [];
                                m.amount.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgSend;
            })();
            v1beta1.MsgSendResponse = (function () {
                function MsgSendResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgSendResponse.create = function create(properties) {
                    return new MsgSendResponse(properties);
                };
                MsgSendResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgSendResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.MsgSendResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgSendResponse;
            })();
            v1beta1.MsgMultiSend = (function () {
                function MsgMultiSend(p) {
                    this.inputs = [];
                    this.outputs = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgMultiSend.prototype.inputs = $util.emptyArray;
                MsgMultiSend.prototype.outputs = $util.emptyArray;
                MsgMultiSend.create = function create(properties) {
                    return new MsgMultiSend(properties);
                };
                MsgMultiSend.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.inputs != null && m.inputs.length) {
                        for (var i = 0; i < m.inputs.length; ++i)
                            $root.cosmos.bank.v1beta1.Input.encode(m.inputs[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.outputs != null && m.outputs.length) {
                        for (var i = 0; i < m.outputs.length; ++i)
                            $root.cosmos.bank.v1beta1.Output.encode(m.outputs[i], w.uint32(18).fork()).ldelim();
                    }
                    return w;
                };
                MsgMultiSend.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.MsgMultiSend();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.inputs && m.inputs.length)) m.inputs = [];
                                m.inputs.push($root.cosmos.bank.v1beta1.Input.decode(r, r.uint32()));
                                break;
                            case 2:
                                if (!(m.outputs && m.outputs.length)) m.outputs = [];
                                m.outputs.push($root.cosmos.bank.v1beta1.Output.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgMultiSend;
            })();
            v1beta1.MsgMultiSendResponse = (function () {
                function MsgMultiSendResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgMultiSendResponse.create = function create(properties) {
                    return new MsgMultiSendResponse(properties);
                };
                MsgMultiSendResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgMultiSendResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.bank.v1beta1.MsgMultiSendResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgMultiSendResponse;
            })();
            return v1beta1;
        })();
        return bank;
    })();
    cosmos.distribution = (function () {
        const distribution = {};
        distribution.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Params = (function () {
                function Params(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Params.prototype.communityTax = '';
                Params.prototype.baseProposerReward = '';
                Params.prototype.bonusProposerReward = '';
                Params.prototype.withdrawAddrEnabled = false;
                Params.create = function create(properties) {
                    return new Params(properties);
                };
                Params.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.communityTax != null && Object.hasOwnProperty.call(m, 'communityTax'))
                        w.uint32(10).string(m.communityTax);
                    if (m.baseProposerReward != null && Object.hasOwnProperty.call(m, 'baseProposerReward'))
                        w.uint32(18).string(m.baseProposerReward);
                    if (m.bonusProposerReward != null && Object.hasOwnProperty.call(m, 'bonusProposerReward'))
                        w.uint32(26).string(m.bonusProposerReward);
                    if (m.withdrawAddrEnabled != null && Object.hasOwnProperty.call(m, 'withdrawAddrEnabled'))
                        w.uint32(32).bool(m.withdrawAddrEnabled);
                    return w;
                };
                Params.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.Params();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.communityTax = r.string();
                                break;
                            case 2:
                                m.baseProposerReward = r.string();
                                break;
                            case 3:
                                m.bonusProposerReward = r.string();
                                break;
                            case 4:
                                m.withdrawAddrEnabled = r.bool();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Params;
            })();
            v1beta1.ValidatorHistoricalRewards = (function () {
                function ValidatorHistoricalRewards(p) {
                    this.cumulativeRewardRatio = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValidatorHistoricalRewards.prototype.cumulativeRewardRatio = $util.emptyArray;
                ValidatorHistoricalRewards.prototype.referenceCount = 0;
                ValidatorHistoricalRewards.create = function create(properties) {
                    return new ValidatorHistoricalRewards(properties);
                };
                ValidatorHistoricalRewards.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.cumulativeRewardRatio != null && m.cumulativeRewardRatio.length) {
                        for (var i = 0; i < m.cumulativeRewardRatio.length; ++i)
                            $root.cosmos.base.v1beta1.DecCoin.encode(
                                m.cumulativeRewardRatio[i],
                                w.uint32(10).fork(),
                            ).ldelim();
                    }
                    if (m.referenceCount != null && Object.hasOwnProperty.call(m, 'referenceCount'))
                        w.uint32(16).uint32(m.referenceCount);
                    return w;
                };
                ValidatorHistoricalRewards.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.ValidatorHistoricalRewards();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.cumulativeRewardRatio && m.cumulativeRewardRatio.length))
                                    m.cumulativeRewardRatio = [];
                                m.cumulativeRewardRatio.push($root.cosmos.base.v1beta1.DecCoin.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.referenceCount = r.uint32();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValidatorHistoricalRewards;
            })();
            v1beta1.ValidatorCurrentRewards = (function () {
                function ValidatorCurrentRewards(p) {
                    this.rewards = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValidatorCurrentRewards.prototype.rewards = $util.emptyArray;
                ValidatorCurrentRewards.prototype.period = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                ValidatorCurrentRewards.create = function create(properties) {
                    return new ValidatorCurrentRewards(properties);
                };
                ValidatorCurrentRewards.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.rewards != null && m.rewards.length) {
                        for (var i = 0; i < m.rewards.length; ++i)
                            $root.cosmos.base.v1beta1.DecCoin.encode(m.rewards[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.period != null && Object.hasOwnProperty.call(m, 'period')) w.uint32(16).uint64(m.period);
                    return w;
                };
                ValidatorCurrentRewards.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.ValidatorCurrentRewards();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.rewards && m.rewards.length)) m.rewards = [];
                                m.rewards.push($root.cosmos.base.v1beta1.DecCoin.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.period = r.uint64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValidatorCurrentRewards;
            })();
            v1beta1.ValidatorAccumulatedCommission = (function () {
                function ValidatorAccumulatedCommission(p) {
                    this.commission = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValidatorAccumulatedCommission.prototype.commission = $util.emptyArray;
                ValidatorAccumulatedCommission.create = function create(properties) {
                    return new ValidatorAccumulatedCommission(properties);
                };
                ValidatorAccumulatedCommission.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.commission != null && m.commission.length) {
                        for (var i = 0; i < m.commission.length; ++i)
                            $root.cosmos.base.v1beta1.DecCoin.encode(m.commission[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };
                ValidatorAccumulatedCommission.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.commission && m.commission.length)) m.commission = [];
                                m.commission.push($root.cosmos.base.v1beta1.DecCoin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValidatorAccumulatedCommission;
            })();
            v1beta1.ValidatorOutstandingRewards = (function () {
                function ValidatorOutstandingRewards(p) {
                    this.rewards = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValidatorOutstandingRewards.prototype.rewards = $util.emptyArray;
                ValidatorOutstandingRewards.create = function create(properties) {
                    return new ValidatorOutstandingRewards(properties);
                };
                ValidatorOutstandingRewards.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.rewards != null && m.rewards.length) {
                        for (var i = 0; i < m.rewards.length; ++i)
                            $root.cosmos.base.v1beta1.DecCoin.encode(m.rewards[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };
                ValidatorOutstandingRewards.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.ValidatorOutstandingRewards();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.rewards && m.rewards.length)) m.rewards = [];
                                m.rewards.push($root.cosmos.base.v1beta1.DecCoin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValidatorOutstandingRewards;
            })();
            v1beta1.ValidatorSlashEvent = (function () {
                function ValidatorSlashEvent(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValidatorSlashEvent.prototype.validatorPeriod = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                ValidatorSlashEvent.prototype.fraction = '';
                ValidatorSlashEvent.create = function create(properties) {
                    return new ValidatorSlashEvent(properties);
                };
                ValidatorSlashEvent.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.validatorPeriod != null && Object.hasOwnProperty.call(m, 'validatorPeriod'))
                        w.uint32(8).uint64(m.validatorPeriod);
                    if (m.fraction != null && Object.hasOwnProperty.call(m, 'fraction'))
                        w.uint32(18).string(m.fraction);
                    return w;
                };
                ValidatorSlashEvent.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.ValidatorSlashEvent();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.validatorPeriod = r.uint64();
                                break;
                            case 2:
                                m.fraction = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValidatorSlashEvent;
            })();
            v1beta1.ValidatorSlashEvents = (function () {
                function ValidatorSlashEvents(p) {
                    this.validatorSlashEvents = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValidatorSlashEvents.prototype.validatorSlashEvents = $util.emptyArray;
                ValidatorSlashEvents.create = function create(properties) {
                    return new ValidatorSlashEvents(properties);
                };
                ValidatorSlashEvents.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.validatorSlashEvents != null && m.validatorSlashEvents.length) {
                        for (var i = 0; i < m.validatorSlashEvents.length; ++i)
                            $root.cosmos.distribution.v1beta1.ValidatorSlashEvent.encode(
                                m.validatorSlashEvents[i],
                                w.uint32(10).fork(),
                            ).ldelim();
                    }
                    return w;
                };
                ValidatorSlashEvents.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.ValidatorSlashEvents();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.validatorSlashEvents && m.validatorSlashEvents.length))
                                    m.validatorSlashEvents = [];
                                m.validatorSlashEvents.push(
                                    $root.cosmos.distribution.v1beta1.ValidatorSlashEvent.decode(r, r.uint32()),
                                );
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValidatorSlashEvents;
            })();
            v1beta1.FeePool = (function () {
                function FeePool(p) {
                    this.communityPool = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                FeePool.prototype.communityPool = $util.emptyArray;
                FeePool.create = function create(properties) {
                    return new FeePool(properties);
                };
                FeePool.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.communityPool != null && m.communityPool.length) {
                        for (var i = 0; i < m.communityPool.length; ++i)
                            $root.cosmos.base.v1beta1.DecCoin.encode(m.communityPool[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };
                FeePool.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.FeePool();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.communityPool && m.communityPool.length)) m.communityPool = [];
                                m.communityPool.push($root.cosmos.base.v1beta1.DecCoin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return FeePool;
            })();
            v1beta1.CommunityPoolSpendProposal = (function () {
                function CommunityPoolSpendProposal(p) {
                    this.amount = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                CommunityPoolSpendProposal.prototype.title = '';
                CommunityPoolSpendProposal.prototype.description = '';
                CommunityPoolSpendProposal.prototype.recipient = '';
                CommunityPoolSpendProposal.prototype.amount = $util.emptyArray;
                CommunityPoolSpendProposal.create = function create(properties) {
                    return new CommunityPoolSpendProposal(properties);
                };
                CommunityPoolSpendProposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(18).string(m.description);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, 'recipient'))
                        w.uint32(26).string(m.recipient);
                    if (m.amount != null && m.amount.length) {
                        for (var i = 0; i < m.amount.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.amount[i], w.uint32(34).fork()).ldelim();
                    }
                    return w;
                };
                CommunityPoolSpendProposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.CommunityPoolSpendProposal();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.title = r.string();
                                break;
                            case 2:
                                m.description = r.string();
                                break;
                            case 3:
                                m.recipient = r.string();
                                break;
                            case 4:
                                if (!(m.amount && m.amount.length)) m.amount = [];
                                m.amount.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return CommunityPoolSpendProposal;
            })();
            v1beta1.DelegatorStartingInfo = (function () {
                function DelegatorStartingInfo(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DelegatorStartingInfo.prototype.previousPeriod = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                DelegatorStartingInfo.prototype.stake = '';
                DelegatorStartingInfo.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                DelegatorStartingInfo.create = function create(properties) {
                    return new DelegatorStartingInfo(properties);
                };
                DelegatorStartingInfo.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.previousPeriod != null && Object.hasOwnProperty.call(m, 'previousPeriod'))
                        w.uint32(8).uint64(m.previousPeriod);
                    if (m.stake != null && Object.hasOwnProperty.call(m, 'stake')) w.uint32(18).string(m.stake);
                    if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(24).uint64(m.height);
                    return w;
                };
                DelegatorStartingInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.DelegatorStartingInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.previousPeriod = r.uint64();
                                break;
                            case 2:
                                m.stake = r.string();
                                break;
                            case 3:
                                m.height = r.uint64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DelegatorStartingInfo;
            })();
            v1beta1.DelegationDelegatorReward = (function () {
                function DelegationDelegatorReward(p) {
                    this.reward = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DelegationDelegatorReward.prototype.validatorAddress = '';
                DelegationDelegatorReward.prototype.reward = $util.emptyArray;
                DelegationDelegatorReward.create = function create(properties) {
                    return new DelegationDelegatorReward(properties);
                };
                DelegationDelegatorReward.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(10).string(m.validatorAddress);
                    if (m.reward != null && m.reward.length) {
                        for (var i = 0; i < m.reward.length; ++i)
                            $root.cosmos.base.v1beta1.DecCoin.encode(m.reward[i], w.uint32(18).fork()).ldelim();
                    }
                    return w;
                };
                DelegationDelegatorReward.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.DelegationDelegatorReward();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.validatorAddress = r.string();
                                break;
                            case 2:
                                if (!(m.reward && m.reward.length)) m.reward = [];
                                m.reward.push($root.cosmos.base.v1beta1.DecCoin.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DelegationDelegatorReward;
            })();
            v1beta1.CommunityPoolSpendProposalWithDeposit = (function () {
                function CommunityPoolSpendProposalWithDeposit(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                CommunityPoolSpendProposalWithDeposit.prototype.title = '';
                CommunityPoolSpendProposalWithDeposit.prototype.description = '';
                CommunityPoolSpendProposalWithDeposit.prototype.recipient = '';
                CommunityPoolSpendProposalWithDeposit.prototype.amount = '';
                CommunityPoolSpendProposalWithDeposit.prototype.deposit = '';
                CommunityPoolSpendProposalWithDeposit.create = function create(properties) {
                    return new CommunityPoolSpendProposalWithDeposit(properties);
                };
                CommunityPoolSpendProposalWithDeposit.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(18).string(m.description);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, 'recipient'))
                        w.uint32(26).string(m.recipient);
                    if (m.amount != null && Object.hasOwnProperty.call(m, 'amount')) w.uint32(34).string(m.amount);
                    if (m.deposit != null && Object.hasOwnProperty.call(m, 'deposit')) w.uint32(42).string(m.deposit);
                    return w;
                };
                CommunityPoolSpendProposalWithDeposit.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.title = r.string();
                                break;
                            case 2:
                                m.description = r.string();
                                break;
                            case 3:
                                m.recipient = r.string();
                                break;
                            case 4:
                                m.amount = r.string();
                                break;
                            case 5:
                                m.deposit = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return CommunityPoolSpendProposalWithDeposit;
            })();
            v1beta1.Msg = (function () {
                function Msg(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(
                    (Msg.prototype.setWithdrawAddress = function setWithdrawAddress(request, callback) {
                        return this.rpcCall(
                            setWithdrawAddress,
                            $root.cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
                            $root.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'SetWithdrawAddress' },
                );
                Object.defineProperty(
                    (Msg.prototype.withdrawDelegatorReward = function withdrawDelegatorReward(request, callback) {
                        return this.rpcCall(
                            withdrawDelegatorReward,
                            $root.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
                            $root.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'WithdrawDelegatorReward' },
                );
                Object.defineProperty(
                    (Msg.prototype.withdrawValidatorCommission = function withdrawValidatorCommission(
                        request,
                        callback,
                    ) {
                        return this.rpcCall(
                            withdrawValidatorCommission,
                            $root.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
                            $root.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'WithdrawValidatorCommission' },
                );
                Object.defineProperty(
                    (Msg.prototype.fundCommunityPool = function fundCommunityPool(request, callback) {
                        return this.rpcCall(
                            fundCommunityPool,
                            $root.cosmos.distribution.v1beta1.MsgFundCommunityPool,
                            $root.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'FundCommunityPool' },
                );
                return Msg;
            })();
            v1beta1.MsgSetWithdrawAddress = (function () {
                function MsgSetWithdrawAddress(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgSetWithdrawAddress.prototype.delegatorAddress = '';
                MsgSetWithdrawAddress.prototype.withdrawAddress = '';
                MsgSetWithdrawAddress.create = function create(properties) {
                    return new MsgSetWithdrawAddress(properties);
                };
                MsgSetWithdrawAddress.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.withdrawAddress != null && Object.hasOwnProperty.call(m, 'withdrawAddress'))
                        w.uint32(18).string(m.withdrawAddress);
                    return w;
                };
                MsgSetWithdrawAddress.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgSetWithdrawAddress();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.withdrawAddress = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgSetWithdrawAddress;
            })();
            v1beta1.MsgSetWithdrawAddressResponse = (function () {
                function MsgSetWithdrawAddressResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgSetWithdrawAddressResponse.create = function create(properties) {
                    return new MsgSetWithdrawAddressResponse(properties);
                };
                MsgSetWithdrawAddressResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgSetWithdrawAddressResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgSetWithdrawAddressResponse;
            })();
            v1beta1.MsgWithdrawDelegatorReward = (function () {
                function MsgWithdrawDelegatorReward(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgWithdrawDelegatorReward.prototype.delegatorAddress = '';
                MsgWithdrawDelegatorReward.prototype.validatorAddress = '';
                MsgWithdrawDelegatorReward.create = function create(properties) {
                    return new MsgWithdrawDelegatorReward(properties);
                };
                MsgWithdrawDelegatorReward.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    return w;
                };
                MsgWithdrawDelegatorReward.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorAddress = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgWithdrawDelegatorReward;
            })();
            v1beta1.MsgWithdrawDelegatorRewardResponse = (function () {
                function MsgWithdrawDelegatorRewardResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgWithdrawDelegatorRewardResponse.create = function create(properties) {
                    return new MsgWithdrawDelegatorRewardResponse(properties);
                };
                MsgWithdrawDelegatorRewardResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgWithdrawDelegatorRewardResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgWithdrawDelegatorRewardResponse;
            })();
            v1beta1.MsgWithdrawValidatorCommission = (function () {
                function MsgWithdrawValidatorCommission(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgWithdrawValidatorCommission.prototype.validatorAddress = '';
                MsgWithdrawValidatorCommission.create = function create(properties) {
                    return new MsgWithdrawValidatorCommission(properties);
                };
                MsgWithdrawValidatorCommission.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(10).string(m.validatorAddress);
                    return w;
                };
                MsgWithdrawValidatorCommission.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.validatorAddress = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgWithdrawValidatorCommission;
            })();
            v1beta1.MsgWithdrawValidatorCommissionResponse = (function () {
                function MsgWithdrawValidatorCommissionResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgWithdrawValidatorCommissionResponse.create = function create(properties) {
                    return new MsgWithdrawValidatorCommissionResponse(properties);
                };
                MsgWithdrawValidatorCommissionResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgWithdrawValidatorCommissionResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgWithdrawValidatorCommissionResponse;
            })();
            v1beta1.MsgFundCommunityPool = (function () {
                function MsgFundCommunityPool(p) {
                    this.amount = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgFundCommunityPool.prototype.amount = $util.emptyArray;
                MsgFundCommunityPool.prototype.depositor = '';
                MsgFundCommunityPool.create = function create(properties) {
                    return new MsgFundCommunityPool(properties);
                };
                MsgFundCommunityPool.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.amount != null && m.amount.length) {
                        for (var i = 0; i < m.amount.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.amount[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.depositor != null && Object.hasOwnProperty.call(m, 'depositor'))
                        w.uint32(18).string(m.depositor);
                    return w;
                };
                MsgFundCommunityPool.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgFundCommunityPool();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.amount && m.amount.length)) m.amount = [];
                                m.amount.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.depositor = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgFundCommunityPool;
            })();
            v1beta1.MsgFundCommunityPoolResponse = (function () {
                function MsgFundCommunityPoolResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgFundCommunityPoolResponse.create = function create(properties) {
                    return new MsgFundCommunityPoolResponse(properties);
                };
                MsgFundCommunityPoolResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgFundCommunityPoolResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgFundCommunityPoolResponse;
            })();
            return v1beta1;
        })();
        return distribution;
    })();
    cosmos.base = (function () {
        const base = {};
        base.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Coin = (function () {
                function Coin(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Coin.prototype.denom = '';
                Coin.prototype.amount = '';
                Coin.create = function create(properties) {
                    return new Coin(properties);
                };
                Coin.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.denom != null && Object.hasOwnProperty.call(m, 'denom')) w.uint32(10).string(m.denom);
                    if (m.amount != null && Object.hasOwnProperty.call(m, 'amount')) w.uint32(18).string(m.amount);
                    return w;
                };
                Coin.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.base.v1beta1.Coin();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.denom = r.string();
                                break;
                            case 2:
                                m.amount = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Coin;
            })();
            v1beta1.DecCoin = (function () {
                function DecCoin(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DecCoin.prototype.denom = '';
                DecCoin.prototype.amount = '';
                DecCoin.create = function create(properties) {
                    return new DecCoin(properties);
                };
                DecCoin.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.denom != null && Object.hasOwnProperty.call(m, 'denom')) w.uint32(10).string(m.denom);
                    if (m.amount != null && Object.hasOwnProperty.call(m, 'amount')) w.uint32(18).string(m.amount);
                    return w;
                };
                DecCoin.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.base.v1beta1.DecCoin();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.denom = r.string();
                                break;
                            case 2:
                                m.amount = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DecCoin;
            })();
            v1beta1.IntProto = (function () {
                function IntProto(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                IntProto.prototype.int = '';
                IntProto.create = function create(properties) {
                    return new IntProto(properties);
                };
                IntProto.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.int != null && Object.hasOwnProperty.call(m, 'int')) w.uint32(10).string(m.int);
                    return w;
                };
                IntProto.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.base.v1beta1.IntProto();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.int = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return IntProto;
            })();
            v1beta1.DecProto = (function () {
                function DecProto(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DecProto.prototype.dec = '';
                DecProto.create = function create(properties) {
                    return new DecProto(properties);
                };
                DecProto.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.dec != null && Object.hasOwnProperty.call(m, 'dec')) w.uint32(10).string(m.dec);
                    return w;
                };
                DecProto.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.base.v1beta1.DecProto();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.dec = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DecProto;
            })();
            return v1beta1;
        })();
        return base;
    })();
    cosmos.crypto = (function () {
        const crypto = {};
        crypto.multisig = (function () {
            const multisig = {};
            multisig.v1beta1 = (function () {
                const v1beta1 = {};
                v1beta1.MultiSignature = (function () {
                    function MultiSignature(p) {
                        this.signatures = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MultiSignature.prototype.signatures = $util.emptyArray;
                    MultiSignature.create = function create(properties) {
                        return new MultiSignature(properties);
                    };
                    MultiSignature.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.signatures != null && m.signatures.length) {
                            for (var i = 0; i < m.signatures.length; ++i) w.uint32(10).bytes(m.signatures[i]);
                        }
                        return w;
                    };
                    MultiSignature.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.cosmos.crypto.multisig.v1beta1.MultiSignature();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    if (!(m.signatures && m.signatures.length)) m.signatures = [];
                                    m.signatures.push(r.bytes());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MultiSignature;
                })();
                v1beta1.CompactBitArray = (function () {
                    function CompactBitArray(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    CompactBitArray.prototype.extraBitsStored = 0;
                    CompactBitArray.prototype.elems = $util.newBuffer([]);
                    CompactBitArray.create = function create(properties) {
                        return new CompactBitArray(properties);
                    };
                    CompactBitArray.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.extraBitsStored != null && Object.hasOwnProperty.call(m, 'extraBitsStored'))
                            w.uint32(8).uint32(m.extraBitsStored);
                        if (m.elems != null && Object.hasOwnProperty.call(m, 'elems')) w.uint32(18).bytes(m.elems);
                        return w;
                    };
                    CompactBitArray.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.cosmos.crypto.multisig.v1beta1.CompactBitArray();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.extraBitsStored = r.uint32();
                                    break;
                                case 2:
                                    m.elems = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return CompactBitArray;
                })();
                return v1beta1;
            })();
            return multisig;
        })();
        crypto.secp256k1 = (function () {
            const secp256k1 = {};
            secp256k1.PubKey = (function () {
                function PubKey(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                PubKey.prototype.key = $util.newBuffer([]);
                PubKey.create = function create(properties) {
                    return new PubKey(properties);
                };
                PubKey.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
                    return w;
                };
                PubKey.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.crypto.secp256k1.PubKey();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.key = r.bytes();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return PubKey;
            })();
            secp256k1.PrivKey = (function () {
                function PrivKey(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                PrivKey.prototype.key = $util.newBuffer([]);
                PrivKey.create = function create(properties) {
                    return new PrivKey(properties);
                };
                PrivKey.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
                    return w;
                };
                PrivKey.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.crypto.secp256k1.PrivKey();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.key = r.bytes();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return PrivKey;
            })();
            return secp256k1;
        })();
        return crypto;
    })();
    cosmos.tx = (function () {
        const tx = {};
        tx.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Tx = (function () {
                function Tx(p) {
                    this.signatures = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Tx.prototype.body = null;
                Tx.prototype.authInfo = null;
                Tx.prototype.signatures = $util.emptyArray;
                Tx.create = function create(properties) {
                    return new Tx(properties);
                };
                Tx.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.body != null && Object.hasOwnProperty.call(m, 'body'))
                        $root.cosmos.tx.v1beta1.TxBody.encode(m.body, w.uint32(10).fork()).ldelim();
                    if (m.authInfo != null && Object.hasOwnProperty.call(m, 'authInfo'))
                        $root.cosmos.tx.v1beta1.AuthInfo.encode(m.authInfo, w.uint32(18).fork()).ldelim();
                    if (m.signatures != null && m.signatures.length) {
                        for (var i = 0; i < m.signatures.length; ++i) w.uint32(26).bytes(m.signatures[i]);
                    }
                    return w;
                };
                Tx.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.Tx();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.body = $root.cosmos.tx.v1beta1.TxBody.decode(r, r.uint32());
                                break;
                            case 2:
                                m.authInfo = $root.cosmos.tx.v1beta1.AuthInfo.decode(r, r.uint32());
                                break;
                            case 3:
                                if (!(m.signatures && m.signatures.length)) m.signatures = [];
                                m.signatures.push(r.bytes());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Tx;
            })();
            v1beta1.TxRaw = (function () {
                function TxRaw(p) {
                    this.signatures = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                TxRaw.prototype.bodyBytes = $util.newBuffer([]);
                TxRaw.prototype.authInfoBytes = $util.newBuffer([]);
                TxRaw.prototype.signatures = $util.emptyArray;
                TxRaw.create = function create(properties) {
                    return new TxRaw(properties);
                };
                TxRaw.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.bodyBytes != null && Object.hasOwnProperty.call(m, 'bodyBytes'))
                        w.uint32(10).bytes(m.bodyBytes);
                    if (m.authInfoBytes != null && Object.hasOwnProperty.call(m, 'authInfoBytes'))
                        w.uint32(18).bytes(m.authInfoBytes);
                    if (m.signatures != null && m.signatures.length) {
                        for (var i = 0; i < m.signatures.length; ++i) w.uint32(26).bytes(m.signatures[i]);
                    }
                    return w;
                };
                TxRaw.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.TxRaw();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.bodyBytes = r.bytes();
                                break;
                            case 2:
                                m.authInfoBytes = r.bytes();
                                break;
                            case 3:
                                if (!(m.signatures && m.signatures.length)) m.signatures = [];
                                m.signatures.push(r.bytes());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return TxRaw;
            })();
            v1beta1.SignDoc = (function () {
                function SignDoc(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                SignDoc.prototype.bodyBytes = $util.newBuffer([]);
                SignDoc.prototype.authInfoBytes = $util.newBuffer([]);
                SignDoc.prototype.chainId = '';
                SignDoc.prototype.accountNumber = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                SignDoc.create = function create(properties) {
                    return new SignDoc(properties);
                };
                SignDoc.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.bodyBytes != null && Object.hasOwnProperty.call(m, 'bodyBytes'))
                        w.uint32(10).bytes(m.bodyBytes);
                    if (m.authInfoBytes != null && Object.hasOwnProperty.call(m, 'authInfoBytes'))
                        w.uint32(18).bytes(m.authInfoBytes);
                    if (m.chainId != null && Object.hasOwnProperty.call(m, 'chainId')) w.uint32(26).string(m.chainId);
                    if (m.accountNumber != null && Object.hasOwnProperty.call(m, 'accountNumber'))
                        w.uint32(32).uint64(m.accountNumber);
                    return w;
                };
                SignDoc.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.SignDoc();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.bodyBytes = r.bytes();
                                break;
                            case 2:
                                m.authInfoBytes = r.bytes();
                                break;
                            case 3:
                                m.chainId = r.string();
                                break;
                            case 4:
                                m.accountNumber = r.uint64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return SignDoc;
            })();
            v1beta1.TxBody = (function () {
                function TxBody(p) {
                    this.messages = [];
                    this.extensionOptions = [];
                    this.nonCriticalExtensionOptions = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                TxBody.prototype.messages = $util.emptyArray;
                TxBody.prototype.memo = '';
                TxBody.prototype.timeoutHeight = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                TxBody.prototype.extensionOptions = $util.emptyArray;
                TxBody.prototype.nonCriticalExtensionOptions = $util.emptyArray;
                TxBody.create = function create(properties) {
                    return new TxBody(properties);
                };
                TxBody.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.messages != null && m.messages.length) {
                        for (var i = 0; i < m.messages.length; ++i)
                            $root.google.protobuf.Any.encode(m.messages[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.memo != null && Object.hasOwnProperty.call(m, 'memo')) w.uint32(18).string(m.memo);
                    if (m.timeoutHeight != null && Object.hasOwnProperty.call(m, 'timeoutHeight'))
                        w.uint32(24).uint64(m.timeoutHeight);
                    if (m.extensionOptions != null && m.extensionOptions.length) {
                        for (var i = 0; i < m.extensionOptions.length; ++i)
                            $root.google.protobuf.Any.encode(m.extensionOptions[i], w.uint32(8186).fork()).ldelim();
                    }
                    if (m.nonCriticalExtensionOptions != null && m.nonCriticalExtensionOptions.length) {
                        for (var i = 0; i < m.nonCriticalExtensionOptions.length; ++i)
                            $root.google.protobuf.Any.encode(
                                m.nonCriticalExtensionOptions[i],
                                w.uint32(16378).fork(),
                            ).ldelim();
                    }
                    return w;
                };
                TxBody.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.TxBody();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.messages && m.messages.length)) m.messages = [];
                                m.messages.push($root.google.protobuf.Any.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.memo = r.string();
                                break;
                            case 3:
                                m.timeoutHeight = r.uint64();
                                break;
                            case 1023:
                                if (!(m.extensionOptions && m.extensionOptions.length)) m.extensionOptions = [];
                                m.extensionOptions.push($root.google.protobuf.Any.decode(r, r.uint32()));
                                break;
                            case 2047:
                                if (!(m.nonCriticalExtensionOptions && m.nonCriticalExtensionOptions.length))
                                    m.nonCriticalExtensionOptions = [];
                                m.nonCriticalExtensionOptions.push($root.google.protobuf.Any.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return TxBody;
            })();
            v1beta1.AuthInfo = (function () {
                function AuthInfo(p) {
                    this.signerInfos = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                AuthInfo.prototype.signerInfos = $util.emptyArray;
                AuthInfo.prototype.fee = null;
                AuthInfo.create = function create(properties) {
                    return new AuthInfo(properties);
                };
                AuthInfo.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.signerInfos != null && m.signerInfos.length) {
                        for (var i = 0; i < m.signerInfos.length; ++i)
                            $root.cosmos.tx.v1beta1.SignerInfo.encode(m.signerInfos[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.fee != null && Object.hasOwnProperty.call(m, 'fee'))
                        $root.cosmos.tx.v1beta1.Fee.encode(m.fee, w.uint32(18).fork()).ldelim();
                    return w;
                };
                AuthInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.AuthInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.signerInfos && m.signerInfos.length)) m.signerInfos = [];
                                m.signerInfos.push($root.cosmos.tx.v1beta1.SignerInfo.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.fee = $root.cosmos.tx.v1beta1.Fee.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return AuthInfo;
            })();
            v1beta1.SignerInfo = (function () {
                function SignerInfo(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                SignerInfo.prototype.publicKey = null;
                SignerInfo.prototype.modeInfo = null;
                SignerInfo.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                SignerInfo.create = function create(properties) {
                    return new SignerInfo(properties);
                };
                SignerInfo.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.publicKey != null && Object.hasOwnProperty.call(m, 'publicKey'))
                        $root.google.protobuf.Any.encode(m.publicKey, w.uint32(10).fork()).ldelim();
                    if (m.modeInfo != null && Object.hasOwnProperty.call(m, 'modeInfo'))
                        $root.cosmos.tx.v1beta1.ModeInfo.encode(m.modeInfo, w.uint32(18).fork()).ldelim();
                    if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                        w.uint32(24).uint64(m.sequence);
                    return w;
                };
                SignerInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.SignerInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.publicKey = $root.google.protobuf.Any.decode(r, r.uint32());
                                break;
                            case 2:
                                m.modeInfo = $root.cosmos.tx.v1beta1.ModeInfo.decode(r, r.uint32());
                                break;
                            case 3:
                                m.sequence = r.uint64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return SignerInfo;
            })();
            v1beta1.ModeInfo = (function () {
                function ModeInfo(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ModeInfo.prototype.single = null;
                ModeInfo.prototype.multi = null;
                let $oneOfFields;
                Object.defineProperty(ModeInfo.prototype, 'sum', {
                    get: $util.oneOfGetter(($oneOfFields = ['single', 'multi'])),
                    set: $util.oneOfSetter($oneOfFields),
                });
                ModeInfo.create = function create(properties) {
                    return new ModeInfo(properties);
                };
                ModeInfo.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.single != null && Object.hasOwnProperty.call(m, 'single'))
                        $root.cosmos.tx.v1beta1.ModeInfo.Single.encode(m.single, w.uint32(10).fork()).ldelim();
                    if (m.multi != null && Object.hasOwnProperty.call(m, 'multi'))
                        $root.cosmos.tx.v1beta1.ModeInfo.Multi.encode(m.multi, w.uint32(18).fork()).ldelim();
                    return w;
                };
                ModeInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.ModeInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.single = $root.cosmos.tx.v1beta1.ModeInfo.Single.decode(r, r.uint32());
                                break;
                            case 2:
                                m.multi = $root.cosmos.tx.v1beta1.ModeInfo.Multi.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                ModeInfo.Single = (function () {
                    function Single(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Single.prototype.mode = 0;
                    Single.create = function create(properties) {
                        return new Single(properties);
                    };
                    Single.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.mode != null && Object.hasOwnProperty.call(m, 'mode')) w.uint32(8).int32(m.mode);
                        return w;
                    };
                    Single.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.cosmos.tx.v1beta1.ModeInfo.Single();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.mode = r.int32();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Single;
                })();
                ModeInfo.Multi = (function () {
                    function Multi(p) {
                        this.modeInfos = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Multi.prototype.bitarray = null;
                    Multi.prototype.modeInfos = $util.emptyArray;
                    Multi.create = function create(properties) {
                        return new Multi(properties);
                    };
                    Multi.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.bitarray != null && Object.hasOwnProperty.call(m, 'bitarray'))
                            $root.cosmos.crypto.multisig.v1beta1.CompactBitArray.encode(
                                m.bitarray,
                                w.uint32(10).fork(),
                            ).ldelim();
                        if (m.modeInfos != null && m.modeInfos.length) {
                            for (var i = 0; i < m.modeInfos.length; ++i)
                                $root.cosmos.tx.v1beta1.ModeInfo.encode(m.modeInfos[i], w.uint32(18).fork()).ldelim();
                        }
                        return w;
                    };
                    Multi.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.cosmos.tx.v1beta1.ModeInfo.Multi();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.bitarray = $root.cosmos.crypto.multisig.v1beta1.CompactBitArray.decode(
                                        r,
                                        r.uint32(),
                                    );
                                    break;
                                case 2:
                                    if (!(m.modeInfos && m.modeInfos.length)) m.modeInfos = [];
                                    m.modeInfos.push($root.cosmos.tx.v1beta1.ModeInfo.decode(r, r.uint32()));
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Multi;
                })();
                return ModeInfo;
            })();
            v1beta1.Fee = (function () {
                function Fee(p) {
                    this.amount = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Fee.prototype.amount = $util.emptyArray;
                Fee.prototype.gasLimit = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                Fee.prototype.payer = '';
                Fee.prototype.granter = '';
                Fee.create = function create(properties) {
                    return new Fee(properties);
                };
                Fee.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.amount != null && m.amount.length) {
                        for (var i = 0; i < m.amount.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.amount[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.gasLimit != null && Object.hasOwnProperty.call(m, 'gasLimit'))
                        w.uint32(16).uint64(m.gasLimit);
                    if (m.payer != null && Object.hasOwnProperty.call(m, 'payer')) w.uint32(26).string(m.payer);
                    if (m.granter != null && Object.hasOwnProperty.call(m, 'granter')) w.uint32(34).string(m.granter);
                    return w;
                };
                Fee.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.tx.v1beta1.Fee();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.amount && m.amount.length)) m.amount = [];
                                m.amount.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.gasLimit = r.uint64();
                                break;
                            case 3:
                                m.payer = r.string();
                                break;
                            case 4:
                                m.granter = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Fee;
            })();
            return v1beta1;
        })();
        tx.signing = (function () {
            const signing = {};
            signing.v1beta1 = (function () {
                const v1beta1 = {};
                v1beta1.SignMode = (function () {
                    const valuesById = {},
                        values = Object.create(valuesById);
                    values[(valuesById[0] = 'SIGN_MODE_UNSPECIFIED')] = 0;
                    values[(valuesById[1] = 'SIGN_MODE_DIRECT')] = 1;
                    values[(valuesById[2] = 'SIGN_MODE_TEXTUAL')] = 2;
                    values[(valuesById[127] = 'SIGN_MODE_LEGACY_AMINO_JSON')] = 127;
                    return values;
                })();
                v1beta1.SignatureDescriptors = (function () {
                    function SignatureDescriptors(p) {
                        this.signatures = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    SignatureDescriptors.prototype.signatures = $util.emptyArray;
                    SignatureDescriptors.create = function create(properties) {
                        return new SignatureDescriptors(properties);
                    };
                    SignatureDescriptors.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.signatures != null && m.signatures.length) {
                            for (var i = 0; i < m.signatures.length; ++i)
                                $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.encode(
                                    m.signatures[i],
                                    w.uint32(10).fork(),
                                ).ldelim();
                        }
                        return w;
                    };
                    SignatureDescriptors.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.cosmos.tx.signing.v1beta1.SignatureDescriptors();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    if (!(m.signatures && m.signatures.length)) m.signatures = [];
                                    m.signatures.push(
                                        $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.decode(r, r.uint32()),
                                    );
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return SignatureDescriptors;
                })();
                v1beta1.SignatureDescriptor = (function () {
                    function SignatureDescriptor(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    SignatureDescriptor.prototype.publicKey = null;
                    SignatureDescriptor.prototype.data = null;
                    SignatureDescriptor.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    SignatureDescriptor.create = function create(properties) {
                        return new SignatureDescriptor(properties);
                    };
                    SignatureDescriptor.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.publicKey != null && Object.hasOwnProperty.call(m, 'publicKey'))
                            $root.google.protobuf.Any.encode(m.publicKey, w.uint32(10).fork()).ldelim();
                        if (m.data != null && Object.hasOwnProperty.call(m, 'data'))
                            $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.encode(
                                m.data,
                                w.uint32(18).fork(),
                            ).ldelim();
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(24).uint64(m.sequence);
                        return w;
                    };
                    SignatureDescriptor.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.cosmos.tx.signing.v1beta1.SignatureDescriptor();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.publicKey = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.data = $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.decode(
                                        r,
                                        r.uint32(),
                                    );
                                    break;
                                case 3:
                                    m.sequence = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    SignatureDescriptor.Data = (function () {
                        function Data(p) {
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                        }
                        Data.prototype.single = null;
                        Data.prototype.multi = null;
                        let $oneOfFields;
                        Object.defineProperty(Data.prototype, 'sum', {
                            get: $util.oneOfGetter(($oneOfFields = ['single', 'multi'])),
                            set: $util.oneOfSetter($oneOfFields),
                        });
                        Data.create = function create(properties) {
                            return new Data(properties);
                        };
                        Data.encode = function encode(m, w) {
                            if (!w) w = $Writer.create();
                            if (m.single != null && Object.hasOwnProperty.call(m, 'single'))
                                $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.encode(
                                    m.single,
                                    w.uint32(10).fork(),
                                ).ldelim();
                            if (m.multi != null && Object.hasOwnProperty.call(m, 'multi'))
                                $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.encode(
                                    m.multi,
                                    w.uint32(18).fork(),
                                ).ldelim();
                            return w;
                        };
                        Data.decode = function decode(r, l) {
                            if (!(r instanceof $Reader)) r = $Reader.create(r);
                            var c = l === undefined ? r.len : r.pos + l,
                                m = new $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data();
                            while (r.pos < c) {
                                var t = r.uint32();
                                switch (t >>> 3) {
                                    case 1:
                                        m.single = $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.decode(
                                            r,
                                            r.uint32(),
                                        );
                                        break;
                                    case 2:
                                        m.multi = $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.decode(
                                            r,
                                            r.uint32(),
                                        );
                                        break;
                                    default:
                                        r.skipType(t & 7);
                                        break;
                                }
                            }
                            return m;
                        };
                        Data.Single = (function () {
                            function Single(p) {
                                if (p)
                                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                            }
                            Single.prototype.mode = 0;
                            Single.prototype.signature = $util.newBuffer([]);
                            Single.create = function create(properties) {
                                return new Single(properties);
                            };
                            Single.encode = function encode(m, w) {
                                if (!w) w = $Writer.create();
                                if (m.mode != null && Object.hasOwnProperty.call(m, 'mode')) w.uint32(8).int32(m.mode);
                                if (m.signature != null && Object.hasOwnProperty.call(m, 'signature'))
                                    w.uint32(18).bytes(m.signature);
                                return w;
                            };
                            Single.decode = function decode(r, l) {
                                if (!(r instanceof $Reader)) r = $Reader.create(r);
                                var c = l === undefined ? r.len : r.pos + l,
                                    m = new $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single();
                                while (r.pos < c) {
                                    var t = r.uint32();
                                    switch (t >>> 3) {
                                        case 1:
                                            m.mode = r.int32();
                                            break;
                                        case 2:
                                            m.signature = r.bytes();
                                            break;
                                        default:
                                            r.skipType(t & 7);
                                            break;
                                    }
                                }
                                return m;
                            };
                            return Single;
                        })();
                        Data.Multi = (function () {
                            function Multi(p) {
                                this.signatures = [];
                                if (p)
                                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                            }
                            Multi.prototype.bitarray = null;
                            Multi.prototype.signatures = $util.emptyArray;
                            Multi.create = function create(properties) {
                                return new Multi(properties);
                            };
                            Multi.encode = function encode(m, w) {
                                if (!w) w = $Writer.create();
                                if (m.bitarray != null && Object.hasOwnProperty.call(m, 'bitarray'))
                                    $root.cosmos.crypto.multisig.v1beta1.CompactBitArray.encode(
                                        m.bitarray,
                                        w.uint32(10).fork(),
                                    ).ldelim();
                                if (m.signatures != null && m.signatures.length) {
                                    for (var i = 0; i < m.signatures.length; ++i)
                                        $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.encode(
                                            m.signatures[i],
                                            w.uint32(18).fork(),
                                        ).ldelim();
                                }
                                return w;
                            };
                            Multi.decode = function decode(r, l) {
                                if (!(r instanceof $Reader)) r = $Reader.create(r);
                                var c = l === undefined ? r.len : r.pos + l,
                                    m = new $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi();
                                while (r.pos < c) {
                                    var t = r.uint32();
                                    switch (t >>> 3) {
                                        case 1:
                                            m.bitarray = $root.cosmos.crypto.multisig.v1beta1.CompactBitArray.decode(
                                                r,
                                                r.uint32(),
                                            );
                                            break;
                                        case 2:
                                            if (!(m.signatures && m.signatures.length)) m.signatures = [];
                                            m.signatures.push(
                                                $root.cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.decode(
                                                    r,
                                                    r.uint32(),
                                                ),
                                            );
                                            break;
                                        default:
                                            r.skipType(t & 7);
                                            break;
                                    }
                                }
                                return m;
                            };
                            return Multi;
                        })();
                        return Data;
                    })();
                    return SignatureDescriptor;
                })();
                return v1beta1;
            })();
            return signing;
        })();
        return tx;
    })();
    return cosmos;
})();
exports.google = $root.google = (() => {
    const google = {};
    google.protobuf = (function () {
        const protobuf = {};
        protobuf.Any = (function () {
            function Any(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Any.prototype.type_url = '';
            Any.prototype.value = $util.newBuffer([]);
            Any.create = function create(properties) {
                return new Any(properties);
            };
            Any.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.type_url != null && Object.hasOwnProperty.call(m, 'type_url')) w.uint32(10).string(m.type_url);
                if (m.value != null && Object.hasOwnProperty.call(m, 'value')) w.uint32(18).bytes(m.value);
                return w;
            };
            Any.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.google.protobuf.Any();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.type_url = r.string();
                            break;
                        case 2:
                            m.value = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Any;
        })();
        return protobuf;
    })();
    return google;
})();
exports.tendermint = $root.tendermint = (() => {
    const tendermint = {};
    tendermint.crypto = (function () {
        const crypto = {};
        crypto.PublicKey = (function () {
            function PublicKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            PublicKey.prototype.ed25519 = $util.newBuffer([]);
            let $oneOfFields;
            Object.defineProperty(PublicKey.prototype, 'sum', {
                get: $util.oneOfGetter(($oneOfFields = ['ed25519'])),
                set: $util.oneOfSetter($oneOfFields),
            });
            PublicKey.create = function create(properties) {
                return new PublicKey(properties);
            };
            PublicKey.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.ed25519 != null && Object.hasOwnProperty.call(m, 'ed25519')) w.uint32(10).bytes(m.ed25519);
                return w;
            };
            PublicKey.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.crypto.PublicKey();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.ed25519 = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return PublicKey;
        })();
        return crypto;
    })();
    return tendermint;
})();
module.exports = $root;
