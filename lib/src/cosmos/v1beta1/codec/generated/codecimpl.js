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
    cosmos.staking = (function () {
        const staking = {};
        staking.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.HistoricalInfo = (function () {
                function HistoricalInfo(p) {
                    this.valset = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                HistoricalInfo.prototype.header = null;
                HistoricalInfo.prototype.valset = $util.emptyArray;
                HistoricalInfo.create = function create(properties) {
                    return new HistoricalInfo(properties);
                };
                HistoricalInfo.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.header != null && Object.hasOwnProperty.call(m, 'header'))
                        $root.tendermint.types.Header.encode(m.header, w.uint32(10).fork()).ldelim();
                    if (m.valset != null && m.valset.length) {
                        for (var i = 0; i < m.valset.length; ++i)
                            $root.cosmos.staking.v1beta1.Validator.encode(m.valset[i], w.uint32(18).fork()).ldelim();
                    }
                    return w;
                };
                HistoricalInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.HistoricalInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.header = $root.tendermint.types.Header.decode(r, r.uint32());
                                break;
                            case 2:
                                if (!(m.valset && m.valset.length)) m.valset = [];
                                m.valset.push($root.cosmos.staking.v1beta1.Validator.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return HistoricalInfo;
            })();
            v1beta1.CommissionRates = (function () {
                function CommissionRates(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                CommissionRates.prototype.rate = '';
                CommissionRates.prototype.maxRate = '';
                CommissionRates.prototype.maxChangeRate = '';
                CommissionRates.create = function create(properties) {
                    return new CommissionRates(properties);
                };
                CommissionRates.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.rate != null && Object.hasOwnProperty.call(m, 'rate')) w.uint32(10).string(m.rate);
                    if (m.maxRate != null && Object.hasOwnProperty.call(m, 'maxRate')) w.uint32(18).string(m.maxRate);
                    if (m.maxChangeRate != null && Object.hasOwnProperty.call(m, 'maxChangeRate'))
                        w.uint32(26).string(m.maxChangeRate);
                    return w;
                };
                CommissionRates.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.CommissionRates();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.rate = r.string();
                                break;
                            case 2:
                                m.maxRate = r.string();
                                break;
                            case 3:
                                m.maxChangeRate = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return CommissionRates;
            })();
            v1beta1.Commission = (function () {
                function Commission(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Commission.prototype.commissionRates = null;
                Commission.prototype.updateTime = null;
                Commission.create = function create(properties) {
                    return new Commission(properties);
                };
                Commission.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.commissionRates != null && Object.hasOwnProperty.call(m, 'commissionRates'))
                        $root.cosmos.staking.v1beta1.CommissionRates.encode(
                            m.commissionRates,
                            w.uint32(10).fork(),
                        ).ldelim();
                    if (m.updateTime != null && Object.hasOwnProperty.call(m, 'updateTime'))
                        $root.google.protobuf.Timestamp.encode(m.updateTime, w.uint32(18).fork()).ldelim();
                    return w;
                };
                Commission.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Commission();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.commissionRates = $root.cosmos.staking.v1beta1.CommissionRates.decode(r, r.uint32());
                                break;
                            case 2:
                                m.updateTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Commission;
            })();
            v1beta1.Description = (function () {
                function Description(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Description.prototype.moniker = '';
                Description.prototype.identity = '';
                Description.prototype.website = '';
                Description.prototype.securityContact = '';
                Description.prototype.details = '';
                Description.create = function create(properties) {
                    return new Description(properties);
                };
                Description.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.moniker != null && Object.hasOwnProperty.call(m, 'moniker')) w.uint32(10).string(m.moniker);
                    if (m.identity != null && Object.hasOwnProperty.call(m, 'identity'))
                        w.uint32(18).string(m.identity);
                    if (m.website != null && Object.hasOwnProperty.call(m, 'website')) w.uint32(26).string(m.website);
                    if (m.securityContact != null && Object.hasOwnProperty.call(m, 'securityContact'))
                        w.uint32(34).string(m.securityContact);
                    if (m.details != null && Object.hasOwnProperty.call(m, 'details')) w.uint32(42).string(m.details);
                    return w;
                };
                Description.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Description();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.moniker = r.string();
                                break;
                            case 2:
                                m.identity = r.string();
                                break;
                            case 3:
                                m.website = r.string();
                                break;
                            case 4:
                                m.securityContact = r.string();
                                break;
                            case 5:
                                m.details = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Description;
            })();
            v1beta1.Validator = (function () {
                function Validator(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Validator.prototype.operatorAddress = '';
                Validator.prototype.consensusPubkey = null;
                Validator.prototype.jailed = false;
                Validator.prototype.status = 0;
                Validator.prototype.tokens = '';
                Validator.prototype.delegatorShares = '';
                Validator.prototype.description = null;
                Validator.prototype.unbondingHeight = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                Validator.prototype.unbondingTime = null;
                Validator.prototype.commission = null;
                Validator.prototype.minSelfDelegation = '';
                Validator.create = function create(properties) {
                    return new Validator(properties);
                };
                Validator.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.operatorAddress != null && Object.hasOwnProperty.call(m, 'operatorAddress'))
                        w.uint32(10).string(m.operatorAddress);
                    if (m.consensusPubkey != null && Object.hasOwnProperty.call(m, 'consensusPubkey'))
                        $root.google.protobuf.Any.encode(m.consensusPubkey, w.uint32(18).fork()).ldelim();
                    if (m.jailed != null && Object.hasOwnProperty.call(m, 'jailed')) w.uint32(24).bool(m.jailed);
                    if (m.status != null && Object.hasOwnProperty.call(m, 'status')) w.uint32(32).int32(m.status);
                    if (m.tokens != null && Object.hasOwnProperty.call(m, 'tokens')) w.uint32(42).string(m.tokens);
                    if (m.delegatorShares != null && Object.hasOwnProperty.call(m, 'delegatorShares'))
                        w.uint32(50).string(m.delegatorShares);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        $root.cosmos.staking.v1beta1.Description.encode(m.description, w.uint32(58).fork()).ldelim();
                    if (m.unbondingHeight != null && Object.hasOwnProperty.call(m, 'unbondingHeight'))
                        w.uint32(64).int64(m.unbondingHeight);
                    if (m.unbondingTime != null && Object.hasOwnProperty.call(m, 'unbondingTime'))
                        $root.google.protobuf.Timestamp.encode(m.unbondingTime, w.uint32(74).fork()).ldelim();
                    if (m.commission != null && Object.hasOwnProperty.call(m, 'commission'))
                        $root.cosmos.staking.v1beta1.Commission.encode(m.commission, w.uint32(82).fork()).ldelim();
                    if (m.minSelfDelegation != null && Object.hasOwnProperty.call(m, 'minSelfDelegation'))
                        w.uint32(90).string(m.minSelfDelegation);
                    return w;
                };
                Validator.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Validator();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.operatorAddress = r.string();
                                break;
                            case 2:
                                m.consensusPubkey = $root.google.protobuf.Any.decode(r, r.uint32());
                                break;
                            case 3:
                                m.jailed = r.bool();
                                break;
                            case 4:
                                m.status = r.int32();
                                break;
                            case 5:
                                m.tokens = r.string();
                                break;
                            case 6:
                                m.delegatorShares = r.string();
                                break;
                            case 7:
                                m.description = $root.cosmos.staking.v1beta1.Description.decode(r, r.uint32());
                                break;
                            case 8:
                                m.unbondingHeight = r.int64();
                                break;
                            case 9:
                                m.unbondingTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 10:
                                m.commission = $root.cosmos.staking.v1beta1.Commission.decode(r, r.uint32());
                                break;
                            case 11:
                                m.minSelfDelegation = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Validator;
            })();
            v1beta1.BondStatus = (function () {
                const valuesById = {},
                    values = Object.create(valuesById);
                values[(valuesById[0] = 'BOND_STATUS_UNSPECIFIED')] = 0;
                values[(valuesById[1] = 'BOND_STATUS_UNBONDED')] = 1;
                values[(valuesById[2] = 'BOND_STATUS_UNBONDING')] = 2;
                values[(valuesById[3] = 'BOND_STATUS_BONDED')] = 3;
                return values;
            })();
            v1beta1.ValAddresses = (function () {
                function ValAddresses(p) {
                    this.addresses = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ValAddresses.prototype.addresses = $util.emptyArray;
                ValAddresses.create = function create(properties) {
                    return new ValAddresses(properties);
                };
                ValAddresses.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.addresses != null && m.addresses.length) {
                        for (var i = 0; i < m.addresses.length; ++i) w.uint32(10).string(m.addresses[i]);
                    }
                    return w;
                };
                ValAddresses.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.ValAddresses();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.addresses && m.addresses.length)) m.addresses = [];
                                m.addresses.push(r.string());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ValAddresses;
            })();
            v1beta1.DVPair = (function () {
                function DVPair(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DVPair.prototype.delegatorAddress = '';
                DVPair.prototype.validatorAddress = '';
                DVPair.create = function create(properties) {
                    return new DVPair(properties);
                };
                DVPair.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    return w;
                };
                DVPair.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.DVPair();
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
                return DVPair;
            })();
            v1beta1.DVPairs = (function () {
                function DVPairs(p) {
                    this.pairs = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DVPairs.prototype.pairs = $util.emptyArray;
                DVPairs.create = function create(properties) {
                    return new DVPairs(properties);
                };
                DVPairs.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.pairs != null && m.pairs.length) {
                        for (var i = 0; i < m.pairs.length; ++i)
                            $root.cosmos.staking.v1beta1.DVPair.encode(m.pairs[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };
                DVPairs.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.DVPairs();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.pairs && m.pairs.length)) m.pairs = [];
                                m.pairs.push($root.cosmos.staking.v1beta1.DVPair.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DVPairs;
            })();
            v1beta1.DVVTriplet = (function () {
                function DVVTriplet(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DVVTriplet.prototype.delegatorAddress = '';
                DVVTriplet.prototype.validatorSrcAddress = '';
                DVVTriplet.prototype.validatorDstAddress = '';
                DVVTriplet.create = function create(properties) {
                    return new DVVTriplet(properties);
                };
                DVVTriplet.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorSrcAddress != null && Object.hasOwnProperty.call(m, 'validatorSrcAddress'))
                        w.uint32(18).string(m.validatorSrcAddress);
                    if (m.validatorDstAddress != null && Object.hasOwnProperty.call(m, 'validatorDstAddress'))
                        w.uint32(26).string(m.validatorDstAddress);
                    return w;
                };
                DVVTriplet.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.DVVTriplet();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorSrcAddress = r.string();
                                break;
                            case 3:
                                m.validatorDstAddress = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DVVTriplet;
            })();
            v1beta1.DVVTriplets = (function () {
                function DVVTriplets(p) {
                    this.triplets = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DVVTriplets.prototype.triplets = $util.emptyArray;
                DVVTriplets.create = function create(properties) {
                    return new DVVTriplets(properties);
                };
                DVVTriplets.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.triplets != null && m.triplets.length) {
                        for (var i = 0; i < m.triplets.length; ++i)
                            $root.cosmos.staking.v1beta1.DVVTriplet.encode(m.triplets[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };
                DVVTriplets.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.DVVTriplets();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.triplets && m.triplets.length)) m.triplets = [];
                                m.triplets.push($root.cosmos.staking.v1beta1.DVVTriplet.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DVVTriplets;
            })();
            v1beta1.Delegation = (function () {
                function Delegation(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Delegation.prototype.delegatorAddress = '';
                Delegation.prototype.validatorAddress = '';
                Delegation.prototype.shares = '';
                Delegation.create = function create(properties) {
                    return new Delegation(properties);
                };
                Delegation.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    if (m.shares != null && Object.hasOwnProperty.call(m, 'shares')) w.uint32(26).string(m.shares);
                    return w;
                };
                Delegation.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Delegation();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorAddress = r.string();
                                break;
                            case 3:
                                m.shares = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Delegation;
            })();
            v1beta1.UnbondingDelegation = (function () {
                function UnbondingDelegation(p) {
                    this.entries = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                UnbondingDelegation.prototype.delegatorAddress = '';
                UnbondingDelegation.prototype.validatorAddress = '';
                UnbondingDelegation.prototype.entries = $util.emptyArray;
                UnbondingDelegation.create = function create(properties) {
                    return new UnbondingDelegation(properties);
                };
                UnbondingDelegation.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    if (m.entries != null && m.entries.length) {
                        for (var i = 0; i < m.entries.length; ++i)
                            $root.cosmos.staking.v1beta1.UnbondingDelegationEntry.encode(
                                m.entries[i],
                                w.uint32(26).fork(),
                            ).ldelim();
                    }
                    return w;
                };
                UnbondingDelegation.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.UnbondingDelegation();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorAddress = r.string();
                                break;
                            case 3:
                                if (!(m.entries && m.entries.length)) m.entries = [];
                                m.entries.push(
                                    $root.cosmos.staking.v1beta1.UnbondingDelegationEntry.decode(r, r.uint32()),
                                );
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return UnbondingDelegation;
            })();
            v1beta1.UnbondingDelegationEntry = (function () {
                function UnbondingDelegationEntry(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                UnbondingDelegationEntry.prototype.creationHeight = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                UnbondingDelegationEntry.prototype.completionTime = null;
                UnbondingDelegationEntry.prototype.initialBalance = '';
                UnbondingDelegationEntry.prototype.balance = '';
                UnbondingDelegationEntry.create = function create(properties) {
                    return new UnbondingDelegationEntry(properties);
                };
                UnbondingDelegationEntry.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.creationHeight != null && Object.hasOwnProperty.call(m, 'creationHeight'))
                        w.uint32(8).int64(m.creationHeight);
                    if (m.completionTime != null && Object.hasOwnProperty.call(m, 'completionTime'))
                        $root.google.protobuf.Timestamp.encode(m.completionTime, w.uint32(18).fork()).ldelim();
                    if (m.initialBalance != null && Object.hasOwnProperty.call(m, 'initialBalance'))
                        w.uint32(26).string(m.initialBalance);
                    if (m.balance != null && Object.hasOwnProperty.call(m, 'balance')) w.uint32(34).string(m.balance);
                    return w;
                };
                UnbondingDelegationEntry.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.UnbondingDelegationEntry();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.creationHeight = r.int64();
                                break;
                            case 2:
                                m.completionTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 3:
                                m.initialBalance = r.string();
                                break;
                            case 4:
                                m.balance = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return UnbondingDelegationEntry;
            })();
            v1beta1.RedelegationEntry = (function () {
                function RedelegationEntry(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                RedelegationEntry.prototype.creationHeight = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                RedelegationEntry.prototype.completionTime = null;
                RedelegationEntry.prototype.initialBalance = '';
                RedelegationEntry.prototype.sharesDst = '';
                RedelegationEntry.create = function create(properties) {
                    return new RedelegationEntry(properties);
                };
                RedelegationEntry.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.creationHeight != null && Object.hasOwnProperty.call(m, 'creationHeight'))
                        w.uint32(8).int64(m.creationHeight);
                    if (m.completionTime != null && Object.hasOwnProperty.call(m, 'completionTime'))
                        $root.google.protobuf.Timestamp.encode(m.completionTime, w.uint32(18).fork()).ldelim();
                    if (m.initialBalance != null && Object.hasOwnProperty.call(m, 'initialBalance'))
                        w.uint32(26).string(m.initialBalance);
                    if (m.sharesDst != null && Object.hasOwnProperty.call(m, 'sharesDst'))
                        w.uint32(34).string(m.sharesDst);
                    return w;
                };
                RedelegationEntry.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.RedelegationEntry();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.creationHeight = r.int64();
                                break;
                            case 2:
                                m.completionTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 3:
                                m.initialBalance = r.string();
                                break;
                            case 4:
                                m.sharesDst = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return RedelegationEntry;
            })();
            v1beta1.Redelegation = (function () {
                function Redelegation(p) {
                    this.entries = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Redelegation.prototype.delegatorAddress = '';
                Redelegation.prototype.validatorSrcAddress = '';
                Redelegation.prototype.validatorDstAddress = '';
                Redelegation.prototype.entries = $util.emptyArray;
                Redelegation.create = function create(properties) {
                    return new Redelegation(properties);
                };
                Redelegation.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorSrcAddress != null && Object.hasOwnProperty.call(m, 'validatorSrcAddress'))
                        w.uint32(18).string(m.validatorSrcAddress);
                    if (m.validatorDstAddress != null && Object.hasOwnProperty.call(m, 'validatorDstAddress'))
                        w.uint32(26).string(m.validatorDstAddress);
                    if (m.entries != null && m.entries.length) {
                        for (var i = 0; i < m.entries.length; ++i)
                            $root.cosmos.staking.v1beta1.RedelegationEntry.encode(
                                m.entries[i],
                                w.uint32(34).fork(),
                            ).ldelim();
                    }
                    return w;
                };
                Redelegation.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Redelegation();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorSrcAddress = r.string();
                                break;
                            case 3:
                                m.validatorDstAddress = r.string();
                                break;
                            case 4:
                                if (!(m.entries && m.entries.length)) m.entries = [];
                                m.entries.push($root.cosmos.staking.v1beta1.RedelegationEntry.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Redelegation;
            })();
            v1beta1.Params = (function () {
                function Params(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Params.prototype.unbondingTime = null;
                Params.prototype.maxValidators = 0;
                Params.prototype.maxEntries = 0;
                Params.prototype.historicalEntries = 0;
                Params.prototype.bondDenom = '';
                Params.create = function create(properties) {
                    return new Params(properties);
                };
                Params.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.unbondingTime != null && Object.hasOwnProperty.call(m, 'unbondingTime'))
                        $root.google.protobuf.Duration.encode(m.unbondingTime, w.uint32(10).fork()).ldelim();
                    if (m.maxValidators != null && Object.hasOwnProperty.call(m, 'maxValidators'))
                        w.uint32(16).uint32(m.maxValidators);
                    if (m.maxEntries != null && Object.hasOwnProperty.call(m, 'maxEntries'))
                        w.uint32(24).uint32(m.maxEntries);
                    if (m.historicalEntries != null && Object.hasOwnProperty.call(m, 'historicalEntries'))
                        w.uint32(32).uint32(m.historicalEntries);
                    if (m.bondDenom != null && Object.hasOwnProperty.call(m, 'bondDenom'))
                        w.uint32(42).string(m.bondDenom);
                    return w;
                };
                Params.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Params();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.unbondingTime = $root.google.protobuf.Duration.decode(r, r.uint32());
                                break;
                            case 2:
                                m.maxValidators = r.uint32();
                                break;
                            case 3:
                                m.maxEntries = r.uint32();
                                break;
                            case 4:
                                m.historicalEntries = r.uint32();
                                break;
                            case 5:
                                m.bondDenom = r.string();
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
            v1beta1.DelegationResponse = (function () {
                function DelegationResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DelegationResponse.prototype.delegation = null;
                DelegationResponse.prototype.balance = null;
                DelegationResponse.create = function create(properties) {
                    return new DelegationResponse(properties);
                };
                DelegationResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegation != null && Object.hasOwnProperty.call(m, 'delegation'))
                        $root.cosmos.staking.v1beta1.Delegation.encode(m.delegation, w.uint32(10).fork()).ldelim();
                    if (m.balance != null && Object.hasOwnProperty.call(m, 'balance'))
                        $root.cosmos.base.v1beta1.Coin.encode(m.balance, w.uint32(18).fork()).ldelim();
                    return w;
                };
                DelegationResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.DelegationResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegation = $root.cosmos.staking.v1beta1.Delegation.decode(r, r.uint32());
                                break;
                            case 2:
                                m.balance = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DelegationResponse;
            })();
            v1beta1.RedelegationEntryResponse = (function () {
                function RedelegationEntryResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                RedelegationEntryResponse.prototype.redelegationEntry = null;
                RedelegationEntryResponse.prototype.balance = '';
                RedelegationEntryResponse.create = function create(properties) {
                    return new RedelegationEntryResponse(properties);
                };
                RedelegationEntryResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.redelegationEntry != null && Object.hasOwnProperty.call(m, 'redelegationEntry'))
                        $root.cosmos.staking.v1beta1.RedelegationEntry.encode(
                            m.redelegationEntry,
                            w.uint32(10).fork(),
                        ).ldelim();
                    if (m.balance != null && Object.hasOwnProperty.call(m, 'balance')) w.uint32(34).string(m.balance);
                    return w;
                };
                RedelegationEntryResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.RedelegationEntryResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.redelegationEntry = $root.cosmos.staking.v1beta1.RedelegationEntry.decode(
                                    r,
                                    r.uint32(),
                                );
                                break;
                            case 4:
                                m.balance = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return RedelegationEntryResponse;
            })();
            v1beta1.RedelegationResponse = (function () {
                function RedelegationResponse(p) {
                    this.entries = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                RedelegationResponse.prototype.redelegation = null;
                RedelegationResponse.prototype.entries = $util.emptyArray;
                RedelegationResponse.create = function create(properties) {
                    return new RedelegationResponse(properties);
                };
                RedelegationResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.redelegation != null && Object.hasOwnProperty.call(m, 'redelegation'))
                        $root.cosmos.staking.v1beta1.Redelegation.encode(m.redelegation, w.uint32(10).fork()).ldelim();
                    if (m.entries != null && m.entries.length) {
                        for (var i = 0; i < m.entries.length; ++i)
                            $root.cosmos.staking.v1beta1.RedelegationEntryResponse.encode(
                                m.entries[i],
                                w.uint32(18).fork(),
                            ).ldelim();
                    }
                    return w;
                };
                RedelegationResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.RedelegationResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.redelegation = $root.cosmos.staking.v1beta1.Redelegation.decode(r, r.uint32());
                                break;
                            case 2:
                                if (!(m.entries && m.entries.length)) m.entries = [];
                                m.entries.push(
                                    $root.cosmos.staking.v1beta1.RedelegationEntryResponse.decode(r, r.uint32()),
                                );
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return RedelegationResponse;
            })();
            v1beta1.Pool = (function () {
                function Pool(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Pool.prototype.notBondedTokens = '';
                Pool.prototype.bondedTokens = '';
                Pool.create = function create(properties) {
                    return new Pool(properties);
                };
                Pool.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.notBondedTokens != null && Object.hasOwnProperty.call(m, 'notBondedTokens'))
                        w.uint32(10).string(m.notBondedTokens);
                    if (m.bondedTokens != null && Object.hasOwnProperty.call(m, 'bondedTokens'))
                        w.uint32(18).string(m.bondedTokens);
                    return w;
                };
                Pool.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.Pool();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.notBondedTokens = r.string();
                                break;
                            case 2:
                                m.bondedTokens = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Pool;
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
                    (Msg.prototype.createValidator = function createValidator(request, callback) {
                        return this.rpcCall(
                            createValidator,
                            $root.cosmos.staking.v1beta1.MsgCreateValidator,
                            $root.cosmos.staking.v1beta1.MsgCreateValidatorResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'CreateValidator' },
                );
                Object.defineProperty(
                    (Msg.prototype.editValidator = function editValidator(request, callback) {
                        return this.rpcCall(
                            editValidator,
                            $root.cosmos.staking.v1beta1.MsgEditValidator,
                            $root.cosmos.staking.v1beta1.MsgEditValidatorResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'EditValidator' },
                );
                Object.defineProperty(
                    (Msg.prototype.delegate = function delegate(request, callback) {
                        return this.rpcCall(
                            delegate,
                            $root.cosmos.staking.v1beta1.MsgDelegate,
                            $root.cosmos.staking.v1beta1.MsgDelegateResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'Delegate' },
                );
                Object.defineProperty(
                    (Msg.prototype.beginRedelegate = function beginRedelegate(request, callback) {
                        return this.rpcCall(
                            beginRedelegate,
                            $root.cosmos.staking.v1beta1.MsgBeginRedelegate,
                            $root.cosmos.staking.v1beta1.MsgBeginRedelegateResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'BeginRedelegate' },
                );
                Object.defineProperty(
                    (Msg.prototype.undelegate = function undelegate(request, callback) {
                        return this.rpcCall(
                            undelegate,
                            $root.cosmos.staking.v1beta1.MsgUndelegate,
                            $root.cosmos.staking.v1beta1.MsgUndelegateResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'Undelegate' },
                );
                return Msg;
            })();
            v1beta1.MsgCreateValidator = (function () {
                function MsgCreateValidator(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgCreateValidator.prototype.description = null;
                MsgCreateValidator.prototype.commission = null;
                MsgCreateValidator.prototype.minSelfDelegation = '';
                MsgCreateValidator.prototype.delegatorAddress = '';
                MsgCreateValidator.prototype.validatorAddress = '';
                MsgCreateValidator.prototype.pubkey = null;
                MsgCreateValidator.prototype.value = null;
                MsgCreateValidator.create = function create(properties) {
                    return new MsgCreateValidator(properties);
                };
                MsgCreateValidator.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        $root.cosmos.staking.v1beta1.Description.encode(m.description, w.uint32(10).fork()).ldelim();
                    if (m.commission != null && Object.hasOwnProperty.call(m, 'commission'))
                        $root.cosmos.staking.v1beta1.CommissionRates.encode(m.commission, w.uint32(18).fork()).ldelim();
                    if (m.minSelfDelegation != null && Object.hasOwnProperty.call(m, 'minSelfDelegation'))
                        w.uint32(26).string(m.minSelfDelegation);
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(34).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(42).string(m.validatorAddress);
                    if (m.pubkey != null && Object.hasOwnProperty.call(m, 'pubkey'))
                        $root.google.protobuf.Any.encode(m.pubkey, w.uint32(50).fork()).ldelim();
                    if (m.value != null && Object.hasOwnProperty.call(m, 'value'))
                        $root.cosmos.base.v1beta1.Coin.encode(m.value, w.uint32(58).fork()).ldelim();
                    return w;
                };
                MsgCreateValidator.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgCreateValidator();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.description = $root.cosmos.staking.v1beta1.Description.decode(r, r.uint32());
                                break;
                            case 2:
                                m.commission = $root.cosmos.staking.v1beta1.CommissionRates.decode(r, r.uint32());
                                break;
                            case 3:
                                m.minSelfDelegation = r.string();
                                break;
                            case 4:
                                m.delegatorAddress = r.string();
                                break;
                            case 5:
                                m.validatorAddress = r.string();
                                break;
                            case 6:
                                m.pubkey = $root.google.protobuf.Any.decode(r, r.uint32());
                                break;
                            case 7:
                                m.value = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgCreateValidator;
            })();
            v1beta1.MsgCreateValidatorResponse = (function () {
                function MsgCreateValidatorResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgCreateValidatorResponse.create = function create(properties) {
                    return new MsgCreateValidatorResponse(properties);
                };
                MsgCreateValidatorResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgCreateValidatorResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgCreateValidatorResponse();
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
                return MsgCreateValidatorResponse;
            })();
            v1beta1.MsgEditValidator = (function () {
                function MsgEditValidator(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgEditValidator.prototype.description = null;
                MsgEditValidator.prototype.validatorAddress = '';
                MsgEditValidator.prototype.commissionRate = '';
                MsgEditValidator.prototype.minSelfDelegation = '';
                MsgEditValidator.create = function create(properties) {
                    return new MsgEditValidator(properties);
                };
                MsgEditValidator.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        $root.cosmos.staking.v1beta1.Description.encode(m.description, w.uint32(10).fork()).ldelim();
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    if (m.commissionRate != null && Object.hasOwnProperty.call(m, 'commissionRate'))
                        w.uint32(26).string(m.commissionRate);
                    if (m.minSelfDelegation != null && Object.hasOwnProperty.call(m, 'minSelfDelegation'))
                        w.uint32(34).string(m.minSelfDelegation);
                    return w;
                };
                MsgEditValidator.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgEditValidator();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.description = $root.cosmos.staking.v1beta1.Description.decode(r, r.uint32());
                                break;
                            case 2:
                                m.validatorAddress = r.string();
                                break;
                            case 3:
                                m.commissionRate = r.string();
                                break;
                            case 4:
                                m.minSelfDelegation = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgEditValidator;
            })();
            v1beta1.MsgEditValidatorResponse = (function () {
                function MsgEditValidatorResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgEditValidatorResponse.create = function create(properties) {
                    return new MsgEditValidatorResponse(properties);
                };
                MsgEditValidatorResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgEditValidatorResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgEditValidatorResponse();
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
                return MsgEditValidatorResponse;
            })();
            v1beta1.MsgDelegate = (function () {
                function MsgDelegate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgDelegate.prototype.delegatorAddress = '';
                MsgDelegate.prototype.validatorAddress = '';
                MsgDelegate.prototype.amount = null;
                MsgDelegate.create = function create(properties) {
                    return new MsgDelegate(properties);
                };
                MsgDelegate.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    if (m.amount != null && Object.hasOwnProperty.call(m, 'amount'))
                        $root.cosmos.base.v1beta1.Coin.encode(m.amount, w.uint32(26).fork()).ldelim();
                    return w;
                };
                MsgDelegate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgDelegate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorAddress = r.string();
                                break;
                            case 3:
                                m.amount = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgDelegate;
            })();
            v1beta1.MsgDelegateResponse = (function () {
                function MsgDelegateResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgDelegateResponse.create = function create(properties) {
                    return new MsgDelegateResponse(properties);
                };
                MsgDelegateResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgDelegateResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgDelegateResponse();
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
                return MsgDelegateResponse;
            })();
            v1beta1.MsgBeginRedelegate = (function () {
                function MsgBeginRedelegate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgBeginRedelegate.prototype.delegatorAddress = '';
                MsgBeginRedelegate.prototype.validatorSrcAddress = '';
                MsgBeginRedelegate.prototype.validatorDstAddress = '';
                MsgBeginRedelegate.prototype.amount = null;
                MsgBeginRedelegate.create = function create(properties) {
                    return new MsgBeginRedelegate(properties);
                };
                MsgBeginRedelegate.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorSrcAddress != null && Object.hasOwnProperty.call(m, 'validatorSrcAddress'))
                        w.uint32(18).string(m.validatorSrcAddress);
                    if (m.validatorDstAddress != null && Object.hasOwnProperty.call(m, 'validatorDstAddress'))
                        w.uint32(26).string(m.validatorDstAddress);
                    if (m.amount != null && Object.hasOwnProperty.call(m, 'amount'))
                        $root.cosmos.base.v1beta1.Coin.encode(m.amount, w.uint32(34).fork()).ldelim();
                    return w;
                };
                MsgBeginRedelegate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgBeginRedelegate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorSrcAddress = r.string();
                                break;
                            case 3:
                                m.validatorDstAddress = r.string();
                                break;
                            case 4:
                                m.amount = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgBeginRedelegate;
            })();
            v1beta1.MsgBeginRedelegateResponse = (function () {
                function MsgBeginRedelegateResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgBeginRedelegateResponse.prototype.completionTime = null;
                MsgBeginRedelegateResponse.create = function create(properties) {
                    return new MsgBeginRedelegateResponse(properties);
                };
                MsgBeginRedelegateResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.completionTime != null && Object.hasOwnProperty.call(m, 'completionTime'))
                        $root.google.protobuf.Timestamp.encode(m.completionTime, w.uint32(10).fork()).ldelim();
                    return w;
                };
                MsgBeginRedelegateResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgBeginRedelegateResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.completionTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgBeginRedelegateResponse;
            })();
            v1beta1.MsgUndelegate = (function () {
                function MsgUndelegate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgUndelegate.prototype.delegatorAddress = '';
                MsgUndelegate.prototype.validatorAddress = '';
                MsgUndelegate.prototype.amount = null;
                MsgUndelegate.create = function create(properties) {
                    return new MsgUndelegate(properties);
                };
                MsgUndelegate.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.delegatorAddress != null && Object.hasOwnProperty.call(m, 'delegatorAddress'))
                        w.uint32(10).string(m.delegatorAddress);
                    if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                        w.uint32(18).string(m.validatorAddress);
                    if (m.amount != null && Object.hasOwnProperty.call(m, 'amount'))
                        $root.cosmos.base.v1beta1.Coin.encode(m.amount, w.uint32(26).fork()).ldelim();
                    return w;
                };
                MsgUndelegate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgUndelegate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.delegatorAddress = r.string();
                                break;
                            case 2:
                                m.validatorAddress = r.string();
                                break;
                            case 3:
                                m.amount = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgUndelegate;
            })();
            v1beta1.MsgUndelegateResponse = (function () {
                function MsgUndelegateResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgUndelegateResponse.prototype.completionTime = null;
                MsgUndelegateResponse.create = function create(properties) {
                    return new MsgUndelegateResponse(properties);
                };
                MsgUndelegateResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.completionTime != null && Object.hasOwnProperty.call(m, 'completionTime'))
                        $root.google.protobuf.Timestamp.encode(m.completionTime, w.uint32(10).fork()).ldelim();
                    return w;
                };
                MsgUndelegateResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.staking.v1beta1.MsgUndelegateResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.completionTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgUndelegateResponse;
            })();
            return v1beta1;
        })();
        return staking;
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
        crypto.ed25519 = (function () {
            const ed25519 = {};
            ed25519.PubKey = (function () {
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
                        m = new $root.cosmos.crypto.ed25519.PubKey();
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
            ed25519.PrivKey = (function () {
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
                        m = new $root.cosmos.crypto.ed25519.PrivKey();
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
            return ed25519;
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
    cosmos.gov = (function () {
        const gov = {};
        gov.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Msg = (function () {
                function Msg(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(
                    (Msg.prototype.submitProposal = function submitProposal(request, callback) {
                        return this.rpcCall(
                            submitProposal,
                            $root.cosmos.gov.v1beta1.MsgSubmitProposal,
                            $root.cosmos.gov.v1beta1.MsgSubmitProposalResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'SubmitProposal' },
                );
                Object.defineProperty(
                    (Msg.prototype.vote = function vote(request, callback) {
                        return this.rpcCall(
                            vote,
                            $root.cosmos.gov.v1beta1.MsgVote,
                            $root.cosmos.gov.v1beta1.MsgVoteResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'Vote' },
                );
                Object.defineProperty(
                    (Msg.prototype.deposit = function deposit(request, callback) {
                        return this.rpcCall(
                            deposit,
                            $root.cosmos.gov.v1beta1.MsgDeposit,
                            $root.cosmos.gov.v1beta1.MsgDepositResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'Deposit' },
                );
                return Msg;
            })();
            v1beta1.MsgSubmitProposal = (function () {
                function MsgSubmitProposal(p) {
                    this.initialDeposit = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgSubmitProposal.prototype.content = null;
                MsgSubmitProposal.prototype.initialDeposit = $util.emptyArray;
                MsgSubmitProposal.prototype.proposer = '';
                MsgSubmitProposal.create = function create(properties) {
                    return new MsgSubmitProposal(properties);
                };
                MsgSubmitProposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.content != null && Object.hasOwnProperty.call(m, 'content'))
                        $root.google.protobuf.Any.encode(m.content, w.uint32(10).fork()).ldelim();
                    if (m.initialDeposit != null && m.initialDeposit.length) {
                        for (var i = 0; i < m.initialDeposit.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.initialDeposit[i], w.uint32(18).fork()).ldelim();
                    }
                    if (m.proposer != null && Object.hasOwnProperty.call(m, 'proposer'))
                        w.uint32(26).string(m.proposer);
                    return w;
                };
                MsgSubmitProposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgSubmitProposal();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.content = $root.google.protobuf.Any.decode(r, r.uint32());
                                break;
                            case 2:
                                if (!(m.initialDeposit && m.initialDeposit.length)) m.initialDeposit = [];
                                m.initialDeposit.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            case 3:
                                m.proposer = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgSubmitProposal;
            })();
            v1beta1.MsgSubmitProposalResponse = (function () {
                function MsgSubmitProposalResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgSubmitProposalResponse.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                MsgSubmitProposalResponse.create = function create(properties) {
                    return new MsgSubmitProposalResponse(properties);
                };
                MsgSubmitProposalResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    return w;
                };
                MsgSubmitProposalResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgSubmitProposalResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.proposalId = r.uint64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgSubmitProposalResponse;
            })();
            v1beta1.MsgVote = (function () {
                function MsgVote(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgVote.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                MsgVote.prototype.voter = '';
                MsgVote.prototype.option = 0;
                MsgVote.create = function create(properties) {
                    return new MsgVote(properties);
                };
                MsgVote.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.voter != null && Object.hasOwnProperty.call(m, 'voter')) w.uint32(18).string(m.voter);
                    if (m.option != null && Object.hasOwnProperty.call(m, 'option')) w.uint32(24).int32(m.option);
                    return w;
                };
                MsgVote.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgVote();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.proposalId = r.uint64();
                                break;
                            case 2:
                                m.voter = r.string();
                                break;
                            case 3:
                                m.option = r.int32();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgVote;
            })();
            v1beta1.MsgVoteResponse = (function () {
                function MsgVoteResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgVoteResponse.create = function create(properties) {
                    return new MsgVoteResponse(properties);
                };
                MsgVoteResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgVoteResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgVoteResponse();
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
                return MsgVoteResponse;
            })();
            v1beta1.MsgDeposit = (function () {
                function MsgDeposit(p) {
                    this.amount = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgDeposit.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                MsgDeposit.prototype.depositor = '';
                MsgDeposit.prototype.amount = $util.emptyArray;
                MsgDeposit.create = function create(properties) {
                    return new MsgDeposit(properties);
                };
                MsgDeposit.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.depositor != null && Object.hasOwnProperty.call(m, 'depositor'))
                        w.uint32(18).string(m.depositor);
                    if (m.amount != null && m.amount.length) {
                        for (var i = 0; i < m.amount.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.amount[i], w.uint32(26).fork()).ldelim();
                    }
                    return w;
                };
                MsgDeposit.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgDeposit();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.proposalId = r.uint64();
                                break;
                            case 2:
                                m.depositor = r.string();
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
                return MsgDeposit;
            })();
            v1beta1.MsgDepositResponse = (function () {
                function MsgDepositResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgDepositResponse.create = function create(properties) {
                    return new MsgDepositResponse(properties);
                };
                MsgDepositResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgDepositResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgDepositResponse();
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
                return MsgDepositResponse;
            })();
            v1beta1.VoteOption = (function () {
                const valuesById = {},
                    values = Object.create(valuesById);
                values[(valuesById[0] = 'VOTE_OPTION_UNSPECIFIED')] = 0;
                values[(valuesById[1] = 'VOTE_OPTION_YES')] = 1;
                values[(valuesById[2] = 'VOTE_OPTION_ABSTAIN')] = 2;
                values[(valuesById[3] = 'VOTE_OPTION_NO')] = 3;
                values[(valuesById[4] = 'VOTE_OPTION_NO_WITH_VETO')] = 4;
                return values;
            })();
            v1beta1.TextProposal = (function () {
                function TextProposal(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                TextProposal.prototype.title = '';
                TextProposal.prototype.description = '';
                TextProposal.create = function create(properties) {
                    return new TextProposal(properties);
                };
                TextProposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(18).string(m.description);
                    return w;
                };
                TextProposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.TextProposal();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.title = r.string();
                                break;
                            case 2:
                                m.description = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return TextProposal;
            })();
            v1beta1.Deposit = (function () {
                function Deposit(p) {
                    this.amount = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Deposit.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                Deposit.prototype.depositor = '';
                Deposit.prototype.amount = $util.emptyArray;
                Deposit.create = function create(properties) {
                    return new Deposit(properties);
                };
                Deposit.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.depositor != null && Object.hasOwnProperty.call(m, 'depositor'))
                        w.uint32(18).string(m.depositor);
                    if (m.amount != null && m.amount.length) {
                        for (var i = 0; i < m.amount.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.amount[i], w.uint32(26).fork()).ldelim();
                    }
                    return w;
                };
                Deposit.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.Deposit();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.proposalId = r.uint64();
                                break;
                            case 2:
                                m.depositor = r.string();
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
                return Deposit;
            })();
            v1beta1.Proposal = (function () {
                function Proposal(p) {
                    this.totalDeposit = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Proposal.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                Proposal.prototype.content = null;
                Proposal.prototype.status = 0;
                Proposal.prototype.finalTallyResult = null;
                Proposal.prototype.submitTime = null;
                Proposal.prototype.depositEndTime = null;
                Proposal.prototype.totalDeposit = $util.emptyArray;
                Proposal.prototype.votingStartTime = null;
                Proposal.prototype.votingEndTime = null;
                Proposal.create = function create(properties) {
                    return new Proposal(properties);
                };
                Proposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.content != null && Object.hasOwnProperty.call(m, 'content'))
                        $root.google.protobuf.Any.encode(m.content, w.uint32(18).fork()).ldelim();
                    if (m.status != null && Object.hasOwnProperty.call(m, 'status')) w.uint32(24).int32(m.status);
                    if (m.finalTallyResult != null && Object.hasOwnProperty.call(m, 'finalTallyResult'))
                        $root.cosmos.gov.v1beta1.TallyResult.encode(m.finalTallyResult, w.uint32(34).fork()).ldelim();
                    if (m.submitTime != null && Object.hasOwnProperty.call(m, 'submitTime'))
                        $root.google.protobuf.Timestamp.encode(m.submitTime, w.uint32(42).fork()).ldelim();
                    if (m.depositEndTime != null && Object.hasOwnProperty.call(m, 'depositEndTime'))
                        $root.google.protobuf.Timestamp.encode(m.depositEndTime, w.uint32(50).fork()).ldelim();
                    if (m.totalDeposit != null && m.totalDeposit.length) {
                        for (var i = 0; i < m.totalDeposit.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.totalDeposit[i], w.uint32(58).fork()).ldelim();
                    }
                    if (m.votingStartTime != null && Object.hasOwnProperty.call(m, 'votingStartTime'))
                        $root.google.protobuf.Timestamp.encode(m.votingStartTime, w.uint32(66).fork()).ldelim();
                    if (m.votingEndTime != null && Object.hasOwnProperty.call(m, 'votingEndTime'))
                        $root.google.protobuf.Timestamp.encode(m.votingEndTime, w.uint32(74).fork()).ldelim();
                    return w;
                };
                Proposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.Proposal();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.proposalId = r.uint64();
                                break;
                            case 2:
                                m.content = $root.google.protobuf.Any.decode(r, r.uint32());
                                break;
                            case 3:
                                m.status = r.int32();
                                break;
                            case 4:
                                m.finalTallyResult = $root.cosmos.gov.v1beta1.TallyResult.decode(r, r.uint32());
                                break;
                            case 5:
                                m.submitTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 6:
                                m.depositEndTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 7:
                                if (!(m.totalDeposit && m.totalDeposit.length)) m.totalDeposit = [];
                                m.totalDeposit.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            case 8:
                                m.votingStartTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 9:
                                m.votingEndTime = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Proposal;
            })();
            v1beta1.ProposalStatus = (function () {
                const valuesById = {},
                    values = Object.create(valuesById);
                values[(valuesById[0] = 'PROPOSAL_STATUS_UNSPECIFIED')] = 0;
                values[(valuesById[1] = 'PROPOSAL_STATUS_DEPOSIT_PERIOD')] = 1;
                values[(valuesById[2] = 'PROPOSAL_STATUS_VOTING_PERIOD')] = 2;
                values[(valuesById[3] = 'PROPOSAL_STATUS_PASSED')] = 3;
                values[(valuesById[4] = 'PROPOSAL_STATUS_REJECTED')] = 4;
                values[(valuesById[5] = 'PROPOSAL_STATUS_FAILED')] = 5;
                return values;
            })();
            v1beta1.TallyResult = (function () {
                function TallyResult(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                TallyResult.prototype.yes = '';
                TallyResult.prototype.abstain = '';
                TallyResult.prototype.no = '';
                TallyResult.prototype.noWithVeto = '';
                TallyResult.create = function create(properties) {
                    return new TallyResult(properties);
                };
                TallyResult.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.yes != null && Object.hasOwnProperty.call(m, 'yes')) w.uint32(10).string(m.yes);
                    if (m.abstain != null && Object.hasOwnProperty.call(m, 'abstain')) w.uint32(18).string(m.abstain);
                    if (m.no != null && Object.hasOwnProperty.call(m, 'no')) w.uint32(26).string(m.no);
                    if (m.noWithVeto != null && Object.hasOwnProperty.call(m, 'noWithVeto'))
                        w.uint32(34).string(m.noWithVeto);
                    return w;
                };
                TallyResult.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.TallyResult();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.yes = r.string();
                                break;
                            case 2:
                                m.abstain = r.string();
                                break;
                            case 3:
                                m.no = r.string();
                                break;
                            case 4:
                                m.noWithVeto = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return TallyResult;
            })();
            v1beta1.Vote = (function () {
                function Vote(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Vote.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                Vote.prototype.voter = '';
                Vote.prototype.option = 0;
                Vote.create = function create(properties) {
                    return new Vote(properties);
                };
                Vote.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.voter != null && Object.hasOwnProperty.call(m, 'voter')) w.uint32(18).string(m.voter);
                    if (m.option != null && Object.hasOwnProperty.call(m, 'option')) w.uint32(24).int32(m.option);
                    return w;
                };
                Vote.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.Vote();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.proposalId = r.uint64();
                                break;
                            case 2:
                                m.voter = r.string();
                                break;
                            case 3:
                                m.option = r.int32();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Vote;
            })();
            v1beta1.DepositParams = (function () {
                function DepositParams(p) {
                    this.minDeposit = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                DepositParams.prototype.minDeposit = $util.emptyArray;
                DepositParams.prototype.maxDepositPeriod = null;
                DepositParams.create = function create(properties) {
                    return new DepositParams(properties);
                };
                DepositParams.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.minDeposit != null && m.minDeposit.length) {
                        for (var i = 0; i < m.minDeposit.length; ++i)
                            $root.cosmos.base.v1beta1.Coin.encode(m.minDeposit[i], w.uint32(10).fork()).ldelim();
                    }
                    if (m.maxDepositPeriod != null && Object.hasOwnProperty.call(m, 'maxDepositPeriod'))
                        $root.google.protobuf.Duration.encode(m.maxDepositPeriod, w.uint32(18).fork()).ldelim();
                    return w;
                };
                DepositParams.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.DepositParams();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                if (!(m.minDeposit && m.minDeposit.length)) m.minDeposit = [];
                                m.minDeposit.push($root.cosmos.base.v1beta1.Coin.decode(r, r.uint32()));
                                break;
                            case 2:
                                m.maxDepositPeriod = $root.google.protobuf.Duration.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return DepositParams;
            })();
            v1beta1.VotingParams = (function () {
                function VotingParams(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                VotingParams.prototype.votingPeriod = null;
                VotingParams.create = function create(properties) {
                    return new VotingParams(properties);
                };
                VotingParams.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.votingPeriod != null && Object.hasOwnProperty.call(m, 'votingPeriod'))
                        $root.google.protobuf.Duration.encode(m.votingPeriod, w.uint32(10).fork()).ldelim();
                    return w;
                };
                VotingParams.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.VotingParams();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.votingPeriod = $root.google.protobuf.Duration.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return VotingParams;
            })();
            v1beta1.TallyParams = (function () {
                function TallyParams(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                TallyParams.prototype.quorum = $util.newBuffer([]);
                TallyParams.prototype.threshold = $util.newBuffer([]);
                TallyParams.prototype.vetoThreshold = $util.newBuffer([]);
                TallyParams.create = function create(properties) {
                    return new TallyParams(properties);
                };
                TallyParams.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.quorum != null && Object.hasOwnProperty.call(m, 'quorum')) w.uint32(10).bytes(m.quorum);
                    if (m.threshold != null && Object.hasOwnProperty.call(m, 'threshold'))
                        w.uint32(18).bytes(m.threshold);
                    if (m.vetoThreshold != null && Object.hasOwnProperty.call(m, 'vetoThreshold'))
                        w.uint32(26).bytes(m.vetoThreshold);
                    return w;
                };
                TallyParams.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.TallyParams();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.quorum = r.bytes();
                                break;
                            case 2:
                                m.threshold = r.bytes();
                                break;
                            case 3:
                                m.vetoThreshold = r.bytes();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return TallyParams;
            })();
            return v1beta1;
        })();
        return gov;
    })();
    cosmos.params = (function () {
        const params = {};
        params.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.ParameterChangeProposal = (function () {
                function ParameterChangeProposal(p) {
                    this.changes = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ParameterChangeProposal.prototype.title = '';
                ParameterChangeProposal.prototype.description = '';
                ParameterChangeProposal.prototype.changes = $util.emptyArray;
                ParameterChangeProposal.create = function create(properties) {
                    return new ParameterChangeProposal(properties);
                };
                ParameterChangeProposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(18).string(m.description);
                    if (m.changes != null && m.changes.length) {
                        for (var i = 0; i < m.changes.length; ++i)
                            $root.cosmos.params.v1beta1.ParamChange.encode(m.changes[i], w.uint32(26).fork()).ldelim();
                    }
                    return w;
                };
                ParameterChangeProposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.params.v1beta1.ParameterChangeProposal();
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
                                if (!(m.changes && m.changes.length)) m.changes = [];
                                m.changes.push($root.cosmos.params.v1beta1.ParamChange.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ParameterChangeProposal;
            })();
            v1beta1.ParamChange = (function () {
                function ParamChange(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ParamChange.prototype.subspace = '';
                ParamChange.prototype.key = '';
                ParamChange.prototype.value = '';
                ParamChange.create = function create(properties) {
                    return new ParamChange(properties);
                };
                ParamChange.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.subspace != null && Object.hasOwnProperty.call(m, 'subspace'))
                        w.uint32(10).string(m.subspace);
                    if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(18).string(m.key);
                    if (m.value != null && Object.hasOwnProperty.call(m, 'value')) w.uint32(26).string(m.value);
                    return w;
                };
                ParamChange.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.params.v1beta1.ParamChange();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.subspace = r.string();
                                break;
                            case 2:
                                m.key = r.string();
                                break;
                            case 3:
                                m.value = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ParamChange;
            })();
            return v1beta1;
        })();
        return params;
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
        protobuf.Duration = (function () {
            function Duration(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Duration.prototype.nanos = 0;
            Duration.create = function create(properties) {
                return new Duration(properties);
            };
            Duration.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.seconds != null && Object.hasOwnProperty.call(m, 'seconds')) w.uint32(8).int64(m.seconds);
                if (m.nanos != null && Object.hasOwnProperty.call(m, 'nanos')) w.uint32(16).int32(m.nanos);
                return w;
            };
            Duration.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.google.protobuf.Duration();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.seconds = r.int64();
                            break;
                        case 2:
                            m.nanos = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Duration;
        })();
        protobuf.Timestamp = (function () {
            function Timestamp(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Timestamp.prototype.nanos = 0;
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };
            Timestamp.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.seconds != null && Object.hasOwnProperty.call(m, 'seconds')) w.uint32(8).int64(m.seconds);
                if (m.nanos != null && Object.hasOwnProperty.call(m, 'nanos')) w.uint32(16).int32(m.nanos);
                return w;
            };
            Timestamp.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.google.protobuf.Timestamp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.seconds = r.int64();
                            break;
                        case 2:
                            m.nanos = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Timestamp;
        })();
        return protobuf;
    })();
    return google;
})();
exports.tendermint = $root.tendermint = (() => {
    const tendermint = {};
    tendermint.types = (function () {
        const types = {};
        types.BlockIDFlag = (function () {
            const valuesById = {},
                values = Object.create(valuesById);
            values[(valuesById[0] = 'BLOCK_ID_FLAG_UNKNOWN')] = 0;
            values[(valuesById[1] = 'BLOCK_ID_FLAG_ABSENT')] = 1;
            values[(valuesById[2] = 'BLOCK_ID_FLAG_COMMIT')] = 2;
            values[(valuesById[3] = 'BLOCK_ID_FLAG_NIL')] = 3;
            return values;
        })();
        types.SignedMsgType = (function () {
            const valuesById = {},
                values = Object.create(valuesById);
            values[(valuesById[0] = 'SIGNED_MSG_TYPE_UNKNOWN')] = 0;
            values[(valuesById[1] = 'SIGNED_MSG_TYPE_PREVOTE')] = 1;
            values[(valuesById[2] = 'SIGNED_MSG_TYPE_PRECOMMIT')] = 2;
            values[(valuesById[32] = 'SIGNED_MSG_TYPE_PROPOSAL')] = 32;
            return values;
        })();
        types.PartSetHeader = (function () {
            function PartSetHeader(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            PartSetHeader.prototype.total = 0;
            PartSetHeader.prototype.hash = $util.newBuffer([]);
            PartSetHeader.create = function create(properties) {
                return new PartSetHeader(properties);
            };
            PartSetHeader.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.total != null && Object.hasOwnProperty.call(m, 'total')) w.uint32(8).uint32(m.total);
                if (m.hash != null && Object.hasOwnProperty.call(m, 'hash')) w.uint32(18).bytes(m.hash);
                return w;
            };
            PartSetHeader.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.PartSetHeader();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.total = r.uint32();
                            break;
                        case 2:
                            m.hash = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return PartSetHeader;
        })();
        types.Part = (function () {
            function Part(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Part.prototype.index = 0;
            Part.prototype.bytes = $util.newBuffer([]);
            Part.prototype.proof = null;
            Part.create = function create(properties) {
                return new Part(properties);
            };
            Part.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.index != null && Object.hasOwnProperty.call(m, 'index')) w.uint32(8).uint32(m.index);
                if (m.bytes != null && Object.hasOwnProperty.call(m, 'bytes')) w.uint32(18).bytes(m.bytes);
                if (m.proof != null && Object.hasOwnProperty.call(m, 'proof'))
                    $root.tendermint.crypto.Proof.encode(m.proof, w.uint32(26).fork()).ldelim();
                return w;
            };
            Part.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Part();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.index = r.uint32();
                            break;
                        case 2:
                            m.bytes = r.bytes();
                            break;
                        case 3:
                            m.proof = $root.tendermint.crypto.Proof.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Part;
        })();
        types.BlockID = (function () {
            function BlockID(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            BlockID.prototype.hash = $util.newBuffer([]);
            BlockID.prototype.partSetHeader = null;
            BlockID.create = function create(properties) {
                return new BlockID(properties);
            };
            BlockID.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.hash != null && Object.hasOwnProperty.call(m, 'hash')) w.uint32(10).bytes(m.hash);
                if (m.partSetHeader != null && Object.hasOwnProperty.call(m, 'partSetHeader'))
                    $root.tendermint.types.PartSetHeader.encode(m.partSetHeader, w.uint32(18).fork()).ldelim();
                return w;
            };
            BlockID.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.BlockID();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.hash = r.bytes();
                            break;
                        case 2:
                            m.partSetHeader = $root.tendermint.types.PartSetHeader.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return BlockID;
        })();
        types.Header = (function () {
            function Header(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Header.prototype.version = null;
            Header.prototype.chainId = '';
            Header.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Header.prototype.time = null;
            Header.prototype.lastBlockId = null;
            Header.prototype.lastCommitHash = $util.newBuffer([]);
            Header.prototype.dataHash = $util.newBuffer([]);
            Header.prototype.validatorsHash = $util.newBuffer([]);
            Header.prototype.nextValidatorsHash = $util.newBuffer([]);
            Header.prototype.consensusHash = $util.newBuffer([]);
            Header.prototype.appHash = $util.newBuffer([]);
            Header.prototype.lastResultsHash = $util.newBuffer([]);
            Header.prototype.evidenceHash = $util.newBuffer([]);
            Header.prototype.proposerAddress = $util.newBuffer([]);
            Header.create = function create(properties) {
                return new Header(properties);
            };
            Header.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.version != null && Object.hasOwnProperty.call(m, 'version'))
                    $root.tendermint.version.Consensus.encode(m.version, w.uint32(10).fork()).ldelim();
                if (m.chainId != null && Object.hasOwnProperty.call(m, 'chainId')) w.uint32(18).string(m.chainId);
                if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(24).int64(m.height);
                if (m.time != null && Object.hasOwnProperty.call(m, 'time'))
                    $root.google.protobuf.Timestamp.encode(m.time, w.uint32(34).fork()).ldelim();
                if (m.lastBlockId != null && Object.hasOwnProperty.call(m, 'lastBlockId'))
                    $root.tendermint.types.BlockID.encode(m.lastBlockId, w.uint32(42).fork()).ldelim();
                if (m.lastCommitHash != null && Object.hasOwnProperty.call(m, 'lastCommitHash'))
                    w.uint32(50).bytes(m.lastCommitHash);
                if (m.dataHash != null && Object.hasOwnProperty.call(m, 'dataHash')) w.uint32(58).bytes(m.dataHash);
                if (m.validatorsHash != null && Object.hasOwnProperty.call(m, 'validatorsHash'))
                    w.uint32(66).bytes(m.validatorsHash);
                if (m.nextValidatorsHash != null && Object.hasOwnProperty.call(m, 'nextValidatorsHash'))
                    w.uint32(74).bytes(m.nextValidatorsHash);
                if (m.consensusHash != null && Object.hasOwnProperty.call(m, 'consensusHash'))
                    w.uint32(82).bytes(m.consensusHash);
                if (m.appHash != null && Object.hasOwnProperty.call(m, 'appHash')) w.uint32(90).bytes(m.appHash);
                if (m.lastResultsHash != null && Object.hasOwnProperty.call(m, 'lastResultsHash'))
                    w.uint32(98).bytes(m.lastResultsHash);
                if (m.evidenceHash != null && Object.hasOwnProperty.call(m, 'evidenceHash'))
                    w.uint32(106).bytes(m.evidenceHash);
                if (m.proposerAddress != null && Object.hasOwnProperty.call(m, 'proposerAddress'))
                    w.uint32(114).bytes(m.proposerAddress);
                return w;
            };
            Header.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Header();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.version = $root.tendermint.version.Consensus.decode(r, r.uint32());
                            break;
                        case 2:
                            m.chainId = r.string();
                            break;
                        case 3:
                            m.height = r.int64();
                            break;
                        case 4:
                            m.time = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                            break;
                        case 5:
                            m.lastBlockId = $root.tendermint.types.BlockID.decode(r, r.uint32());
                            break;
                        case 6:
                            m.lastCommitHash = r.bytes();
                            break;
                        case 7:
                            m.dataHash = r.bytes();
                            break;
                        case 8:
                            m.validatorsHash = r.bytes();
                            break;
                        case 9:
                            m.nextValidatorsHash = r.bytes();
                            break;
                        case 10:
                            m.consensusHash = r.bytes();
                            break;
                        case 11:
                            m.appHash = r.bytes();
                            break;
                        case 12:
                            m.lastResultsHash = r.bytes();
                            break;
                        case 13:
                            m.evidenceHash = r.bytes();
                            break;
                        case 14:
                            m.proposerAddress = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Header;
        })();
        types.Data = (function () {
            function Data(p) {
                this.txs = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Data.prototype.txs = $util.emptyArray;
            Data.create = function create(properties) {
                return new Data(properties);
            };
            Data.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.txs != null && m.txs.length) {
                    for (var i = 0; i < m.txs.length; ++i) w.uint32(10).bytes(m.txs[i]);
                }
                return w;
            };
            Data.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Data();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            if (!(m.txs && m.txs.length)) m.txs = [];
                            m.txs.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Data;
        })();
        types.Vote = (function () {
            function Vote(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Vote.prototype.type = 0;
            Vote.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Vote.prototype.round = 0;
            Vote.prototype.blockId = null;
            Vote.prototype.timestamp = null;
            Vote.prototype.validatorAddress = $util.newBuffer([]);
            Vote.prototype.validatorIndex = 0;
            Vote.prototype.signature = $util.newBuffer([]);
            Vote.create = function create(properties) {
                return new Vote(properties);
            };
            Vote.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, 'type')) w.uint32(8).int32(m.type);
                if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(16).int64(m.height);
                if (m.round != null && Object.hasOwnProperty.call(m, 'round')) w.uint32(24).int32(m.round);
                if (m.blockId != null && Object.hasOwnProperty.call(m, 'blockId'))
                    $root.tendermint.types.BlockID.encode(m.blockId, w.uint32(34).fork()).ldelim();
                if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                    $root.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(42).fork()).ldelim();
                if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                    w.uint32(50).bytes(m.validatorAddress);
                if (m.validatorIndex != null && Object.hasOwnProperty.call(m, 'validatorIndex'))
                    w.uint32(56).int32(m.validatorIndex);
                if (m.signature != null && Object.hasOwnProperty.call(m, 'signature')) w.uint32(66).bytes(m.signature);
                return w;
            };
            Vote.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Vote();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.type = r.int32();
                            break;
                        case 2:
                            m.height = r.int64();
                            break;
                        case 3:
                            m.round = r.int32();
                            break;
                        case 4:
                            m.blockId = $root.tendermint.types.BlockID.decode(r, r.uint32());
                            break;
                        case 5:
                            m.timestamp = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                            break;
                        case 6:
                            m.validatorAddress = r.bytes();
                            break;
                        case 7:
                            m.validatorIndex = r.int32();
                            break;
                        case 8:
                            m.signature = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Vote;
        })();
        types.Commit = (function () {
            function Commit(p) {
                this.signatures = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Commit.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Commit.prototype.round = 0;
            Commit.prototype.blockId = null;
            Commit.prototype.signatures = $util.emptyArray;
            Commit.create = function create(properties) {
                return new Commit(properties);
            };
            Commit.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(8).int64(m.height);
                if (m.round != null && Object.hasOwnProperty.call(m, 'round')) w.uint32(16).int32(m.round);
                if (m.blockId != null && Object.hasOwnProperty.call(m, 'blockId'))
                    $root.tendermint.types.BlockID.encode(m.blockId, w.uint32(26).fork()).ldelim();
                if (m.signatures != null && m.signatures.length) {
                    for (var i = 0; i < m.signatures.length; ++i)
                        $root.tendermint.types.CommitSig.encode(m.signatures[i], w.uint32(34).fork()).ldelim();
                }
                return w;
            };
            Commit.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Commit();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.height = r.int64();
                            break;
                        case 2:
                            m.round = r.int32();
                            break;
                        case 3:
                            m.blockId = $root.tendermint.types.BlockID.decode(r, r.uint32());
                            break;
                        case 4:
                            if (!(m.signatures && m.signatures.length)) m.signatures = [];
                            m.signatures.push($root.tendermint.types.CommitSig.decode(r, r.uint32()));
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Commit;
        })();
        types.CommitSig = (function () {
            function CommitSig(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            CommitSig.prototype.blockIdFlag = 0;
            CommitSig.prototype.validatorAddress = $util.newBuffer([]);
            CommitSig.prototype.timestamp = null;
            CommitSig.prototype.signature = $util.newBuffer([]);
            CommitSig.create = function create(properties) {
                return new CommitSig(properties);
            };
            CommitSig.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.blockIdFlag != null && Object.hasOwnProperty.call(m, 'blockIdFlag'))
                    w.uint32(8).int32(m.blockIdFlag);
                if (m.validatorAddress != null && Object.hasOwnProperty.call(m, 'validatorAddress'))
                    w.uint32(18).bytes(m.validatorAddress);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                    $root.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(26).fork()).ldelim();
                if (m.signature != null && Object.hasOwnProperty.call(m, 'signature')) w.uint32(34).bytes(m.signature);
                return w;
            };
            CommitSig.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.CommitSig();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.blockIdFlag = r.int32();
                            break;
                        case 2:
                            m.validatorAddress = r.bytes();
                            break;
                        case 3:
                            m.timestamp = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                            break;
                        case 4:
                            m.signature = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return CommitSig;
        })();
        types.Proposal = (function () {
            function Proposal(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Proposal.prototype.type = 0;
            Proposal.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Proposal.prototype.round = 0;
            Proposal.prototype.polRound = 0;
            Proposal.prototype.blockId = null;
            Proposal.prototype.timestamp = null;
            Proposal.prototype.signature = $util.newBuffer([]);
            Proposal.create = function create(properties) {
                return new Proposal(properties);
            };
            Proposal.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, 'type')) w.uint32(8).int32(m.type);
                if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(16).int64(m.height);
                if (m.round != null && Object.hasOwnProperty.call(m, 'round')) w.uint32(24).int32(m.round);
                if (m.polRound != null && Object.hasOwnProperty.call(m, 'polRound')) w.uint32(32).int32(m.polRound);
                if (m.blockId != null && Object.hasOwnProperty.call(m, 'blockId'))
                    $root.tendermint.types.BlockID.encode(m.blockId, w.uint32(42).fork()).ldelim();
                if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                    $root.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(50).fork()).ldelim();
                if (m.signature != null && Object.hasOwnProperty.call(m, 'signature')) w.uint32(58).bytes(m.signature);
                return w;
            };
            Proposal.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Proposal();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.type = r.int32();
                            break;
                        case 2:
                            m.height = r.int64();
                            break;
                        case 3:
                            m.round = r.int32();
                            break;
                        case 4:
                            m.polRound = r.int32();
                            break;
                        case 5:
                            m.blockId = $root.tendermint.types.BlockID.decode(r, r.uint32());
                            break;
                        case 6:
                            m.timestamp = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                            break;
                        case 7:
                            m.signature = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Proposal;
        })();
        types.SignedHeader = (function () {
            function SignedHeader(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            SignedHeader.prototype.header = null;
            SignedHeader.prototype.commit = null;
            SignedHeader.create = function create(properties) {
                return new SignedHeader(properties);
            };
            SignedHeader.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, 'header'))
                    $root.tendermint.types.Header.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.commit != null && Object.hasOwnProperty.call(m, 'commit'))
                    $root.tendermint.types.Commit.encode(m.commit, w.uint32(18).fork()).ldelim();
                return w;
            };
            SignedHeader.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.SignedHeader();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.header = $root.tendermint.types.Header.decode(r, r.uint32());
                            break;
                        case 2:
                            m.commit = $root.tendermint.types.Commit.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return SignedHeader;
        })();
        types.LightBlock = (function () {
            function LightBlock(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            LightBlock.prototype.signedHeader = null;
            LightBlock.prototype.validatorSet = null;
            LightBlock.create = function create(properties) {
                return new LightBlock(properties);
            };
            LightBlock.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.signedHeader != null && Object.hasOwnProperty.call(m, 'signedHeader'))
                    $root.tendermint.types.SignedHeader.encode(m.signedHeader, w.uint32(10).fork()).ldelim();
                if (m.validatorSet != null && Object.hasOwnProperty.call(m, 'validatorSet'))
                    $root.tendermint.types.ValidatorSet.encode(m.validatorSet, w.uint32(18).fork()).ldelim();
                return w;
            };
            LightBlock.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.LightBlock();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.signedHeader = $root.tendermint.types.SignedHeader.decode(r, r.uint32());
                            break;
                        case 2:
                            m.validatorSet = $root.tendermint.types.ValidatorSet.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return LightBlock;
        })();
        types.BlockMeta = (function () {
            function BlockMeta(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            BlockMeta.prototype.blockId = null;
            BlockMeta.prototype.blockSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            BlockMeta.prototype.header = null;
            BlockMeta.prototype.numTxs = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            BlockMeta.create = function create(properties) {
                return new BlockMeta(properties);
            };
            BlockMeta.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.blockId != null && Object.hasOwnProperty.call(m, 'blockId'))
                    $root.tendermint.types.BlockID.encode(m.blockId, w.uint32(10).fork()).ldelim();
                if (m.blockSize != null && Object.hasOwnProperty.call(m, 'blockSize')) w.uint32(16).int64(m.blockSize);
                if (m.header != null && Object.hasOwnProperty.call(m, 'header'))
                    $root.tendermint.types.Header.encode(m.header, w.uint32(26).fork()).ldelim();
                if (m.numTxs != null && Object.hasOwnProperty.call(m, 'numTxs')) w.uint32(32).int64(m.numTxs);
                return w;
            };
            BlockMeta.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.BlockMeta();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.blockId = $root.tendermint.types.BlockID.decode(r, r.uint32());
                            break;
                        case 2:
                            m.blockSize = r.int64();
                            break;
                        case 3:
                            m.header = $root.tendermint.types.Header.decode(r, r.uint32());
                            break;
                        case 4:
                            m.numTxs = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return BlockMeta;
        })();
        types.TxProof = (function () {
            function TxProof(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            TxProof.prototype.rootHash = $util.newBuffer([]);
            TxProof.prototype.data = $util.newBuffer([]);
            TxProof.prototype.proof = null;
            TxProof.create = function create(properties) {
                return new TxProof(properties);
            };
            TxProof.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.rootHash != null && Object.hasOwnProperty.call(m, 'rootHash')) w.uint32(10).bytes(m.rootHash);
                if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(18).bytes(m.data);
                if (m.proof != null && Object.hasOwnProperty.call(m, 'proof'))
                    $root.tendermint.crypto.Proof.encode(m.proof, w.uint32(26).fork()).ldelim();
                return w;
            };
            TxProof.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.TxProof();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.rootHash = r.bytes();
                            break;
                        case 2:
                            m.data = r.bytes();
                            break;
                        case 3:
                            m.proof = $root.tendermint.crypto.Proof.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return TxProof;
        })();
        types.ValidatorSet = (function () {
            function ValidatorSet(p) {
                this.validators = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            ValidatorSet.prototype.validators = $util.emptyArray;
            ValidatorSet.prototype.proposer = null;
            ValidatorSet.prototype.totalVotingPower = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            ValidatorSet.create = function create(properties) {
                return new ValidatorSet(properties);
            };
            ValidatorSet.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.validators != null && m.validators.length) {
                    for (var i = 0; i < m.validators.length; ++i)
                        $root.tendermint.types.Validator.encode(m.validators[i], w.uint32(10).fork()).ldelim();
                }
                if (m.proposer != null && Object.hasOwnProperty.call(m, 'proposer'))
                    $root.tendermint.types.Validator.encode(m.proposer, w.uint32(18).fork()).ldelim();
                if (m.totalVotingPower != null && Object.hasOwnProperty.call(m, 'totalVotingPower'))
                    w.uint32(24).int64(m.totalVotingPower);
                return w;
            };
            ValidatorSet.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.ValidatorSet();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            if (!(m.validators && m.validators.length)) m.validators = [];
                            m.validators.push($root.tendermint.types.Validator.decode(r, r.uint32()));
                            break;
                        case 2:
                            m.proposer = $root.tendermint.types.Validator.decode(r, r.uint32());
                            break;
                        case 3:
                            m.totalVotingPower = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return ValidatorSet;
        })();
        types.Validator = (function () {
            function Validator(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Validator.prototype.address = $util.newBuffer([]);
            Validator.prototype.pubKey = null;
            Validator.prototype.votingPower = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Validator.prototype.proposerPriority = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Validator.create = function create(properties) {
                return new Validator(properties);
            };
            Validator.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.address != null && Object.hasOwnProperty.call(m, 'address')) w.uint32(10).bytes(m.address);
                if (m.pubKey != null && Object.hasOwnProperty.call(m, 'pubKey'))
                    $root.tendermint.crypto.PublicKey.encode(m.pubKey, w.uint32(18).fork()).ldelim();
                if (m.votingPower != null && Object.hasOwnProperty.call(m, 'votingPower'))
                    w.uint32(24).int64(m.votingPower);
                if (m.proposerPriority != null && Object.hasOwnProperty.call(m, 'proposerPriority'))
                    w.uint32(32).int64(m.proposerPriority);
                return w;
            };
            Validator.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.Validator();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.pubKey = $root.tendermint.crypto.PublicKey.decode(r, r.uint32());
                            break;
                        case 3:
                            m.votingPower = r.int64();
                            break;
                        case 4:
                            m.proposerPriority = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Validator;
        })();
        types.SimpleValidator = (function () {
            function SimpleValidator(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            SimpleValidator.prototype.pubKey = null;
            SimpleValidator.prototype.votingPower = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            SimpleValidator.create = function create(properties) {
                return new SimpleValidator(properties);
            };
            SimpleValidator.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.pubKey != null && Object.hasOwnProperty.call(m, 'pubKey'))
                    $root.tendermint.crypto.PublicKey.encode(m.pubKey, w.uint32(10).fork()).ldelim();
                if (m.votingPower != null && Object.hasOwnProperty.call(m, 'votingPower'))
                    w.uint32(16).int64(m.votingPower);
                return w;
            };
            SimpleValidator.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.types.SimpleValidator();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.pubKey = $root.tendermint.crypto.PublicKey.decode(r, r.uint32());
                            break;
                        case 2:
                            m.votingPower = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return SimpleValidator;
        })();
        return types;
    })();
    tendermint.crypto = (function () {
        const crypto = {};
        crypto.Proof = (function () {
            function Proof(p) {
                this.aunts = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Proof.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Proof.prototype.index = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            Proof.prototype.leafHash = $util.newBuffer([]);
            Proof.prototype.aunts = $util.emptyArray;
            Proof.create = function create(properties) {
                return new Proof(properties);
            };
            Proof.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.total != null && Object.hasOwnProperty.call(m, 'total')) w.uint32(8).int64(m.total);
                if (m.index != null && Object.hasOwnProperty.call(m, 'index')) w.uint32(16).int64(m.index);
                if (m.leafHash != null && Object.hasOwnProperty.call(m, 'leafHash')) w.uint32(26).bytes(m.leafHash);
                if (m.aunts != null && m.aunts.length) {
                    for (var i = 0; i < m.aunts.length; ++i) w.uint32(34).bytes(m.aunts[i]);
                }
                return w;
            };
            Proof.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.crypto.Proof();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.total = r.int64();
                            break;
                        case 2:
                            m.index = r.int64();
                            break;
                        case 3:
                            m.leafHash = r.bytes();
                            break;
                        case 4:
                            if (!(m.aunts && m.aunts.length)) m.aunts = [];
                            m.aunts.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Proof;
        })();
        crypto.ValueOp = (function () {
            function ValueOp(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            ValueOp.prototype.key = $util.newBuffer([]);
            ValueOp.prototype.proof = null;
            ValueOp.create = function create(properties) {
                return new ValueOp(properties);
            };
            ValueOp.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
                if (m.proof != null && Object.hasOwnProperty.call(m, 'proof'))
                    $root.tendermint.crypto.Proof.encode(m.proof, w.uint32(18).fork()).ldelim();
                return w;
            };
            ValueOp.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.crypto.ValueOp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.key = r.bytes();
                            break;
                        case 2:
                            m.proof = $root.tendermint.crypto.Proof.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return ValueOp;
        })();
        crypto.DominoOp = (function () {
            function DominoOp(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            DominoOp.prototype.key = '';
            DominoOp.prototype.input = '';
            DominoOp.prototype.output = '';
            DominoOp.create = function create(properties) {
                return new DominoOp(properties);
            };
            DominoOp.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).string(m.key);
                if (m.input != null && Object.hasOwnProperty.call(m, 'input')) w.uint32(18).string(m.input);
                if (m.output != null && Object.hasOwnProperty.call(m, 'output')) w.uint32(26).string(m.output);
                return w;
            };
            DominoOp.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.crypto.DominoOp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.key = r.string();
                            break;
                        case 2:
                            m.input = r.string();
                            break;
                        case 3:
                            m.output = r.string();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return DominoOp;
        })();
        crypto.ProofOp = (function () {
            function ProofOp(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            ProofOp.prototype.type = '';
            ProofOp.prototype.key = $util.newBuffer([]);
            ProofOp.prototype.data = $util.newBuffer([]);
            ProofOp.create = function create(properties) {
                return new ProofOp(properties);
            };
            ProofOp.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, 'type')) w.uint32(10).string(m.type);
                if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(18).bytes(m.key);
                if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(26).bytes(m.data);
                return w;
            };
            ProofOp.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.crypto.ProofOp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.type = r.string();
                            break;
                        case 2:
                            m.key = r.bytes();
                            break;
                        case 3:
                            m.data = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return ProofOp;
        })();
        crypto.ProofOps = (function () {
            function ProofOps(p) {
                this.ops = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            ProofOps.prototype.ops = $util.emptyArray;
            ProofOps.create = function create(properties) {
                return new ProofOps(properties);
            };
            ProofOps.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.ops != null && m.ops.length) {
                    for (var i = 0; i < m.ops.length; ++i)
                        $root.tendermint.crypto.ProofOp.encode(m.ops[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
            ProofOps.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.crypto.ProofOps();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            if (!(m.ops && m.ops.length)) m.ops = [];
                            m.ops.push($root.tendermint.crypto.ProofOp.decode(r, r.uint32()));
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return ProofOps;
        })();
        crypto.PublicKey = (function () {
            function PublicKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            PublicKey.prototype.ed25519 = $util.newBuffer([]);
            PublicKey.prototype.secp256k1 = $util.newBuffer([]);
            let $oneOfFields;
            Object.defineProperty(PublicKey.prototype, 'sum', {
                get: $util.oneOfGetter(($oneOfFields = ['ed25519', 'secp256k1'])),
                set: $util.oneOfSetter($oneOfFields),
            });
            PublicKey.create = function create(properties) {
                return new PublicKey(properties);
            };
            PublicKey.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.ed25519 != null && Object.hasOwnProperty.call(m, 'ed25519')) w.uint32(10).bytes(m.ed25519);
                if (m.secp256k1 != null && Object.hasOwnProperty.call(m, 'secp256k1')) w.uint32(18).bytes(m.secp256k1);
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
                        case 2:
                            m.secp256k1 = r.bytes();
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
    tendermint.version = (function () {
        const version = {};
        version.App = (function () {
            function App(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            App.prototype.protocol = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            App.prototype.software = '';
            App.create = function create(properties) {
                return new App(properties);
            };
            App.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.protocol != null && Object.hasOwnProperty.call(m, 'protocol')) w.uint32(8).uint64(m.protocol);
                if (m.software != null && Object.hasOwnProperty.call(m, 'software')) w.uint32(18).string(m.software);
                return w;
            };
            App.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.version.App();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.protocol = r.uint64();
                            break;
                        case 2:
                            m.software = r.string();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return App;
        })();
        version.Consensus = (function () {
            function Consensus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
            }
            Consensus.prototype.block = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            Consensus.prototype.app = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            Consensus.create = function create(properties) {
                return new Consensus(properties);
            };
            Consensus.encode = function encode(m, w) {
                if (!w) w = $Writer.create();
                if (m.block != null && Object.hasOwnProperty.call(m, 'block')) w.uint32(8).uint64(m.block);
                if (m.app != null && Object.hasOwnProperty.call(m, 'app')) w.uint32(16).uint64(m.app);
                return w;
            };
            Consensus.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermint.version.Consensus();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.block = r.uint64();
                            break;
                        case 2:
                            m.app = r.uint64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                    }
                }
                return m;
            };
            return Consensus;
        })();
        return version;
    })();
    return tendermint;
})();
module.exports = $root;
