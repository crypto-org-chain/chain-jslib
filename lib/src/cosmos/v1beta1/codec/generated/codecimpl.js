'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.tendermint = exports.chainmain = exports.ibc = exports.ics23 = exports.google = exports.cosmos = void 0;
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
                Metadata.prototype.name = '';
                Metadata.prototype.symbol = '';
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
                    if (m.name != null && Object.hasOwnProperty.call(m, 'name')) w.uint32(42).string(m.name);
                    if (m.symbol != null && Object.hasOwnProperty.call(m, 'symbol')) w.uint32(50).string(m.symbol);
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
                            case 5:
                                m.name = r.string();
                                break;
                            case 6:
                                m.symbol = r.string();
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
                        $root.tendermintV2.types.Header.encode(m.header, w.uint32(10).fork()).ldelim();
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
                                m.header = $root.tendermintV2.types.Header.decode(r, r.uint32());
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
    cosmos.slashing = (function () {
        const slashing = {};
        slashing.v1beta1 = (function () {
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
                    (Msg.prototype.unjail = function unjail(request, callback) {
                        return this.rpcCall(
                            unjail,
                            $root.cosmos.slashing.v1beta1.MsgUnjail,
                            $root.cosmos.slashing.v1beta1.MsgUnjailResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'Unjail' },
                );
                return Msg;
            })();
            v1beta1.MsgUnjail = (function () {
                function MsgUnjail(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgUnjail.prototype.validatorAddr = '';
                MsgUnjail.create = function create(properties) {
                    return new MsgUnjail(properties);
                };
                MsgUnjail.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.validatorAddr != null && Object.hasOwnProperty.call(m, 'validatorAddr'))
                        w.uint32(10).string(m.validatorAddr);
                    return w;
                };
                MsgUnjail.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.slashing.v1beta1.MsgUnjail();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.validatorAddr = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgUnjail;
            })();
            v1beta1.MsgUnjailResponse = (function () {
                function MsgUnjailResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgUnjailResponse.create = function create(properties) {
                    return new MsgUnjailResponse(properties);
                };
                MsgUnjailResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgUnjailResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.slashing.v1beta1.MsgUnjailResponse();
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
                return MsgUnjailResponse;
            })();
            return v1beta1;
        })();
        return slashing;
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
            multisig.LegacyAminoPubKey = (function () {
                function LegacyAminoPubKey(p) {
                    this.publicKeys = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                LegacyAminoPubKey.prototype.threshold = 0;
                LegacyAminoPubKey.prototype.publicKeys = $util.emptyArray;
                LegacyAminoPubKey.create = function create(properties) {
                    return new LegacyAminoPubKey(properties);
                };
                LegacyAminoPubKey.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.threshold != null && Object.hasOwnProperty.call(m, 'threshold'))
                        w.uint32(8).uint32(m.threshold);
                    if (m.publicKeys != null && m.publicKeys.length) {
                        for (var i = 0; i < m.publicKeys.length; ++i)
                            $root.google.protobuf.Any.encode(m.publicKeys[i], w.uint32(18).fork()).ldelim();
                    }
                    return w;
                };
                LegacyAminoPubKey.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.crypto.multisig.LegacyAminoPubKey();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.threshold = r.uint32();
                                break;
                            case 2:
                                if (!(m.publicKeys && m.publicKeys.length)) m.publicKeys = [];
                                m.publicKeys.push($root.google.protobuf.Any.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return LegacyAminoPubKey;
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
                    (Msg.prototype.voteWeighted = function voteWeighted(request, callback) {
                        return this.rpcCall(
                            voteWeighted,
                            $root.cosmos.gov.v1beta1.MsgVoteWeighted,
                            $root.cosmos.gov.v1beta1.MsgVoteWeightedResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'VoteWeighted' },
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
            v1beta1.MsgVoteWeighted = (function () {
                function MsgVoteWeighted(p) {
                    this.options = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgVoteWeighted.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                MsgVoteWeighted.prototype.voter = '';
                MsgVoteWeighted.prototype.options = $util.emptyArray;
                MsgVoteWeighted.create = function create(properties) {
                    return new MsgVoteWeighted(properties);
                };
                MsgVoteWeighted.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.voter != null && Object.hasOwnProperty.call(m, 'voter')) w.uint32(18).string(m.voter);
                    if (m.options != null && m.options.length) {
                        for (var i = 0; i < m.options.length; ++i)
                            $root.cosmos.gov.v1beta1.WeightedVoteOption.encode(
                                m.options[i],
                                w.uint32(26).fork(),
                            ).ldelim();
                    }
                    return w;
                };
                MsgVoteWeighted.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgVoteWeighted();
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
                                if (!(m.options && m.options.length)) m.options = [];
                                m.options.push($root.cosmos.gov.v1beta1.WeightedVoteOption.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgVoteWeighted;
            })();
            v1beta1.MsgVoteWeightedResponse = (function () {
                function MsgVoteWeightedResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgVoteWeightedResponse.create = function create(properties) {
                    return new MsgVoteWeightedResponse(properties);
                };
                MsgVoteWeightedResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgVoteWeightedResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.MsgVoteWeightedResponse();
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
                return MsgVoteWeightedResponse;
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
            v1beta1.WeightedVoteOption = (function () {
                function WeightedVoteOption(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                WeightedVoteOption.prototype.option = 0;
                WeightedVoteOption.prototype.weight = '';
                WeightedVoteOption.create = function create(properties) {
                    return new WeightedVoteOption(properties);
                };
                WeightedVoteOption.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.option != null && Object.hasOwnProperty.call(m, 'option')) w.uint32(8).int32(m.option);
                    if (m.weight != null && Object.hasOwnProperty.call(m, 'weight')) w.uint32(18).string(m.weight);
                    return w;
                };
                WeightedVoteOption.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.gov.v1beta1.WeightedVoteOption();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.option = r.int32();
                                break;
                            case 2:
                                m.weight = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return WeightedVoteOption;
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
                    this.options = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Vote.prototype.proposalId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                Vote.prototype.voter = '';
                Vote.prototype.option = 0;
                Vote.prototype.options = $util.emptyArray;
                Vote.create = function create(properties) {
                    return new Vote(properties);
                };
                Vote.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.proposalId != null && Object.hasOwnProperty.call(m, 'proposalId'))
                        w.uint32(8).uint64(m.proposalId);
                    if (m.voter != null && Object.hasOwnProperty.call(m, 'voter')) w.uint32(18).string(m.voter);
                    if (m.option != null && Object.hasOwnProperty.call(m, 'option')) w.uint32(24).int32(m.option);
                    if (m.options != null && m.options.length) {
                        for (var i = 0; i < m.options.length; ++i)
                            $root.cosmos.gov.v1beta1.WeightedVoteOption.encode(
                                m.options[i],
                                w.uint32(34).fork(),
                            ).ldelim();
                    }
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
                            case 4:
                                if (!(m.options && m.options.length)) m.options = [];
                                m.options.push($root.cosmos.gov.v1beta1.WeightedVoteOption.decode(r, r.uint32()));
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
    cosmos.upgrade = (function () {
        const upgrade = {};
        upgrade.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Plan = (function () {
                function Plan(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                Plan.prototype.name = '';
                Plan.prototype.time = null;
                Plan.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                Plan.prototype.info = '';
                Plan.prototype.upgradedClientState = null;
                Plan.create = function create(properties) {
                    return new Plan(properties);
                };
                Plan.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.name != null && Object.hasOwnProperty.call(m, 'name')) w.uint32(10).string(m.name);
                    if (m.time != null && Object.hasOwnProperty.call(m, 'time'))
                        $root.google.protobuf.Timestamp.encode(m.time, w.uint32(18).fork()).ldelim();
                    if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(24).int64(m.height);
                    if (m.info != null && Object.hasOwnProperty.call(m, 'info')) w.uint32(34).string(m.info);
                    if (m.upgradedClientState != null && Object.hasOwnProperty.call(m, 'upgradedClientState'))
                        $root.google.protobuf.Any.encode(m.upgradedClientState, w.uint32(42).fork()).ldelim();
                    return w;
                };
                Plan.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.upgrade.v1beta1.Plan();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.name = r.string();
                                break;
                            case 2:
                                m.time = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                break;
                            case 3:
                                m.height = r.int64();
                                break;
                            case 4:
                                m.info = r.string();
                                break;
                            case 5:
                                m.upgradedClientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return Plan;
            })();
            v1beta1.SoftwareUpgradeProposal = (function () {
                function SoftwareUpgradeProposal(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                SoftwareUpgradeProposal.prototype.title = '';
                SoftwareUpgradeProposal.prototype.description = '';
                SoftwareUpgradeProposal.prototype.plan = null;
                SoftwareUpgradeProposal.create = function create(properties) {
                    return new SoftwareUpgradeProposal(properties);
                };
                SoftwareUpgradeProposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(18).string(m.description);
                    if (m.plan != null && Object.hasOwnProperty.call(m, 'plan'))
                        $root.cosmos.upgrade.v1beta1.Plan.encode(m.plan, w.uint32(26).fork()).ldelim();
                    return w;
                };
                SoftwareUpgradeProposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal();
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
                                m.plan = $root.cosmos.upgrade.v1beta1.Plan.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return SoftwareUpgradeProposal;
            })();
            v1beta1.CancelSoftwareUpgradeProposal = (function () {
                function CancelSoftwareUpgradeProposal(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                CancelSoftwareUpgradeProposal.prototype.title = '';
                CancelSoftwareUpgradeProposal.prototype.description = '';
                CancelSoftwareUpgradeProposal.create = function create(properties) {
                    return new CancelSoftwareUpgradeProposal(properties);
                };
                CancelSoftwareUpgradeProposal.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                        w.uint32(18).string(m.description);
                    return w;
                };
                CancelSoftwareUpgradeProposal.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal();
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
                return CancelSoftwareUpgradeProposal;
            })();
            v1beta1.ModuleVersion = (function () {
                function ModuleVersion(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                ModuleVersion.prototype.name = '';
                ModuleVersion.prototype.version = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                ModuleVersion.create = function create(properties) {
                    return new ModuleVersion(properties);
                };
                ModuleVersion.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.name != null && Object.hasOwnProperty.call(m, 'name')) w.uint32(10).string(m.name);
                    if (m.version != null && Object.hasOwnProperty.call(m, 'version')) w.uint32(16).uint64(m.version);
                    return w;
                };
                ModuleVersion.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.cosmos.upgrade.v1beta1.ModuleVersion();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.name = r.string();
                                break;
                            case 2:
                                m.version = r.uint64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return ModuleVersion;
            })();
            return v1beta1;
        })();
        return upgrade;
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
exports.ics23 = $root.ics23 = (() => {
    const ics23 = {};
    ics23.HashOp = (function () {
        const valuesById = {},
            values = Object.create(valuesById);
        values[(valuesById[0] = 'NO_HASH')] = 0;
        values[(valuesById[1] = 'SHA256')] = 1;
        values[(valuesById[2] = 'SHA512')] = 2;
        values[(valuesById[3] = 'KECCAK')] = 3;
        values[(valuesById[4] = 'RIPEMD160')] = 4;
        values[(valuesById[5] = 'BITCOIN')] = 5;
        return values;
    })();
    ics23.LengthOp = (function () {
        const valuesById = {},
            values = Object.create(valuesById);
        values[(valuesById[0] = 'NO_PREFIX')] = 0;
        values[(valuesById[1] = 'VAR_PROTO')] = 1;
        values[(valuesById[2] = 'VAR_RLP')] = 2;
        values[(valuesById[3] = 'FIXED32_BIG')] = 3;
        values[(valuesById[4] = 'FIXED32_LITTLE')] = 4;
        values[(valuesById[5] = 'FIXED64_BIG')] = 5;
        values[(valuesById[6] = 'FIXED64_LITTLE')] = 6;
        values[(valuesById[7] = 'REQUIRE_32_BYTES')] = 7;
        values[(valuesById[8] = 'REQUIRE_64_BYTES')] = 8;
        return values;
    })();
    ics23.ExistenceProof = (function () {
        function ExistenceProof(p) {
            this.path = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ExistenceProof.prototype.key = $util.newBuffer([]);
        ExistenceProof.prototype.value = $util.newBuffer([]);
        ExistenceProof.prototype.leaf = null;
        ExistenceProof.prototype.path = $util.emptyArray;
        ExistenceProof.create = function create(properties) {
            return new ExistenceProof(properties);
        };
        ExistenceProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
            if (m.value != null && Object.hasOwnProperty.call(m, 'value')) w.uint32(18).bytes(m.value);
            if (m.leaf != null && Object.hasOwnProperty.call(m, 'leaf'))
                $root.ics23.LeafOp.encode(m.leaf, w.uint32(26).fork()).ldelim();
            if (m.path != null && m.path.length) {
                for (var i = 0; i < m.path.length; ++i)
                    $root.ics23.InnerOp.encode(m.path[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };
        ExistenceProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.ExistenceProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.key = r.bytes();
                        break;
                    case 2:
                        m.value = r.bytes();
                        break;
                    case 3:
                        m.leaf = $root.ics23.LeafOp.decode(r, r.uint32());
                        break;
                    case 4:
                        if (!(m.path && m.path.length)) m.path = [];
                        m.path.push($root.ics23.InnerOp.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return ExistenceProof;
    })();
    ics23.NonExistenceProof = (function () {
        function NonExistenceProof(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        NonExistenceProof.prototype.key = $util.newBuffer([]);
        NonExistenceProof.prototype.left = null;
        NonExistenceProof.prototype.right = null;
        NonExistenceProof.create = function create(properties) {
            return new NonExistenceProof(properties);
        };
        NonExistenceProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
            if (m.left != null && Object.hasOwnProperty.call(m, 'left'))
                $root.ics23.ExistenceProof.encode(m.left, w.uint32(18).fork()).ldelim();
            if (m.right != null && Object.hasOwnProperty.call(m, 'right'))
                $root.ics23.ExistenceProof.encode(m.right, w.uint32(26).fork()).ldelim();
            return w;
        };
        NonExistenceProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.NonExistenceProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.key = r.bytes();
                        break;
                    case 2:
                        m.left = $root.ics23.ExistenceProof.decode(r, r.uint32());
                        break;
                    case 3:
                        m.right = $root.ics23.ExistenceProof.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return NonExistenceProof;
    })();
    ics23.CommitmentProof = (function () {
        function CommitmentProof(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CommitmentProof.prototype.exist = null;
        CommitmentProof.prototype.nonexist = null;
        CommitmentProof.prototype.batch = null;
        CommitmentProof.prototype.compressed = null;
        let $oneOfFields;
        Object.defineProperty(CommitmentProof.prototype, 'proof', {
            get: $util.oneOfGetter(($oneOfFields = ['exist', 'nonexist', 'batch', 'compressed'])),
            set: $util.oneOfSetter($oneOfFields),
        });
        CommitmentProof.create = function create(properties) {
            return new CommitmentProof(properties);
        };
        CommitmentProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.exist != null && Object.hasOwnProperty.call(m, 'exist'))
                $root.ics23.ExistenceProof.encode(m.exist, w.uint32(10).fork()).ldelim();
            if (m.nonexist != null && Object.hasOwnProperty.call(m, 'nonexist'))
                $root.ics23.NonExistenceProof.encode(m.nonexist, w.uint32(18).fork()).ldelim();
            if (m.batch != null && Object.hasOwnProperty.call(m, 'batch'))
                $root.ics23.BatchProof.encode(m.batch, w.uint32(26).fork()).ldelim();
            if (m.compressed != null && Object.hasOwnProperty.call(m, 'compressed'))
                $root.ics23.CompressedBatchProof.encode(m.compressed, w.uint32(34).fork()).ldelim();
            return w;
        };
        CommitmentProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.CommitmentProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.exist = $root.ics23.ExistenceProof.decode(r, r.uint32());
                        break;
                    case 2:
                        m.nonexist = $root.ics23.NonExistenceProof.decode(r, r.uint32());
                        break;
                    case 3:
                        m.batch = $root.ics23.BatchProof.decode(r, r.uint32());
                        break;
                    case 4:
                        m.compressed = $root.ics23.CompressedBatchProof.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return CommitmentProof;
    })();
    ics23.LeafOp = (function () {
        function LeafOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        LeafOp.prototype.hash = 0;
        LeafOp.prototype.prehashKey = 0;
        LeafOp.prototype.prehashValue = 0;
        LeafOp.prototype.length = 0;
        LeafOp.prototype.prefix = $util.newBuffer([]);
        LeafOp.create = function create(properties) {
            return new LeafOp(properties);
        };
        LeafOp.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.hash != null && Object.hasOwnProperty.call(m, 'hash')) w.uint32(8).int32(m.hash);
            if (m.prehashKey != null && Object.hasOwnProperty.call(m, 'prehashKey')) w.uint32(16).int32(m.prehashKey);
            if (m.prehashValue != null && Object.hasOwnProperty.call(m, 'prehashValue'))
                w.uint32(24).int32(m.prehashValue);
            if (m.length != null && Object.hasOwnProperty.call(m, 'length')) w.uint32(32).int32(m.length);
            if (m.prefix != null && Object.hasOwnProperty.call(m, 'prefix')) w.uint32(42).bytes(m.prefix);
            return w;
        };
        LeafOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.LeafOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.hash = r.int32();
                        break;
                    case 2:
                        m.prehashKey = r.int32();
                        break;
                    case 3:
                        m.prehashValue = r.int32();
                        break;
                    case 4:
                        m.length = r.int32();
                        break;
                    case 5:
                        m.prefix = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return LeafOp;
    })();
    ics23.InnerOp = (function () {
        function InnerOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        InnerOp.prototype.hash = 0;
        InnerOp.prototype.prefix = $util.newBuffer([]);
        InnerOp.prototype.suffix = $util.newBuffer([]);
        InnerOp.create = function create(properties) {
            return new InnerOp(properties);
        };
        InnerOp.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.hash != null && Object.hasOwnProperty.call(m, 'hash')) w.uint32(8).int32(m.hash);
            if (m.prefix != null && Object.hasOwnProperty.call(m, 'prefix')) w.uint32(18).bytes(m.prefix);
            if (m.suffix != null && Object.hasOwnProperty.call(m, 'suffix')) w.uint32(26).bytes(m.suffix);
            return w;
        };
        InnerOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.InnerOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.hash = r.int32();
                        break;
                    case 2:
                        m.prefix = r.bytes();
                        break;
                    case 3:
                        m.suffix = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return InnerOp;
    })();
    ics23.ProofSpec = (function () {
        function ProofSpec(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ProofSpec.prototype.leafSpec = null;
        ProofSpec.prototype.innerSpec = null;
        ProofSpec.prototype.maxDepth = 0;
        ProofSpec.prototype.minDepth = 0;
        ProofSpec.create = function create(properties) {
            return new ProofSpec(properties);
        };
        ProofSpec.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.leafSpec != null && Object.hasOwnProperty.call(m, 'leafSpec'))
                $root.ics23.LeafOp.encode(m.leafSpec, w.uint32(10).fork()).ldelim();
            if (m.innerSpec != null && Object.hasOwnProperty.call(m, 'innerSpec'))
                $root.ics23.InnerSpec.encode(m.innerSpec, w.uint32(18).fork()).ldelim();
            if (m.maxDepth != null && Object.hasOwnProperty.call(m, 'maxDepth')) w.uint32(24).int32(m.maxDepth);
            if (m.minDepth != null && Object.hasOwnProperty.call(m, 'minDepth')) w.uint32(32).int32(m.minDepth);
            return w;
        };
        ProofSpec.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.ProofSpec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.leafSpec = $root.ics23.LeafOp.decode(r, r.uint32());
                        break;
                    case 2:
                        m.innerSpec = $root.ics23.InnerSpec.decode(r, r.uint32());
                        break;
                    case 3:
                        m.maxDepth = r.int32();
                        break;
                    case 4:
                        m.minDepth = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return ProofSpec;
    })();
    ics23.InnerSpec = (function () {
        function InnerSpec(p) {
            this.childOrder = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        InnerSpec.prototype.childOrder = $util.emptyArray;
        InnerSpec.prototype.childSize = 0;
        InnerSpec.prototype.minPrefixLength = 0;
        InnerSpec.prototype.maxPrefixLength = 0;
        InnerSpec.prototype.emptyChild = $util.newBuffer([]);
        InnerSpec.prototype.hash = 0;
        InnerSpec.create = function create(properties) {
            return new InnerSpec(properties);
        };
        InnerSpec.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.childOrder != null && m.childOrder.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.childOrder.length; ++i) w.int32(m.childOrder[i]);
                w.ldelim();
            }
            if (m.childSize != null && Object.hasOwnProperty.call(m, 'childSize')) w.uint32(16).int32(m.childSize);
            if (m.minPrefixLength != null && Object.hasOwnProperty.call(m, 'minPrefixLength'))
                w.uint32(24).int32(m.minPrefixLength);
            if (m.maxPrefixLength != null && Object.hasOwnProperty.call(m, 'maxPrefixLength'))
                w.uint32(32).int32(m.maxPrefixLength);
            if (m.emptyChild != null && Object.hasOwnProperty.call(m, 'emptyChild')) w.uint32(42).bytes(m.emptyChild);
            if (m.hash != null && Object.hasOwnProperty.call(m, 'hash')) w.uint32(48).int32(m.hash);
            return w;
        };
        InnerSpec.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.InnerSpec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        if (!(m.childOrder && m.childOrder.length)) m.childOrder = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2) m.childOrder.push(r.int32());
                        } else m.childOrder.push(r.int32());
                        break;
                    case 2:
                        m.childSize = r.int32();
                        break;
                    case 3:
                        m.minPrefixLength = r.int32();
                        break;
                    case 4:
                        m.maxPrefixLength = r.int32();
                        break;
                    case 5:
                        m.emptyChild = r.bytes();
                        break;
                    case 6:
                        m.hash = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return InnerSpec;
    })();
    ics23.BatchProof = (function () {
        function BatchProof(p) {
            this.entries = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        BatchProof.prototype.entries = $util.emptyArray;
        BatchProof.create = function create(properties) {
            return new BatchProof(properties);
        };
        BatchProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.entries != null && m.entries.length) {
                for (var i = 0; i < m.entries.length; ++i)
                    $root.ics23.BatchEntry.encode(m.entries[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };
        BatchProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.BatchProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        if (!(m.entries && m.entries.length)) m.entries = [];
                        m.entries.push($root.ics23.BatchEntry.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return BatchProof;
    })();
    ics23.BatchEntry = (function () {
        function BatchEntry(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        BatchEntry.prototype.exist = null;
        BatchEntry.prototype.nonexist = null;
        let $oneOfFields;
        Object.defineProperty(BatchEntry.prototype, 'proof', {
            get: $util.oneOfGetter(($oneOfFields = ['exist', 'nonexist'])),
            set: $util.oneOfSetter($oneOfFields),
        });
        BatchEntry.create = function create(properties) {
            return new BatchEntry(properties);
        };
        BatchEntry.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.exist != null && Object.hasOwnProperty.call(m, 'exist'))
                $root.ics23.ExistenceProof.encode(m.exist, w.uint32(10).fork()).ldelim();
            if (m.nonexist != null && Object.hasOwnProperty.call(m, 'nonexist'))
                $root.ics23.NonExistenceProof.encode(m.nonexist, w.uint32(18).fork()).ldelim();
            return w;
        };
        BatchEntry.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.BatchEntry();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.exist = $root.ics23.ExistenceProof.decode(r, r.uint32());
                        break;
                    case 2:
                        m.nonexist = $root.ics23.NonExistenceProof.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return BatchEntry;
    })();
    ics23.CompressedBatchProof = (function () {
        function CompressedBatchProof(p) {
            this.entries = [];
            this.lookupInners = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CompressedBatchProof.prototype.entries = $util.emptyArray;
        CompressedBatchProof.prototype.lookupInners = $util.emptyArray;
        CompressedBatchProof.create = function create(properties) {
            return new CompressedBatchProof(properties);
        };
        CompressedBatchProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.entries != null && m.entries.length) {
                for (var i = 0; i < m.entries.length; ++i)
                    $root.ics23.CompressedBatchEntry.encode(m.entries[i], w.uint32(10).fork()).ldelim();
            }
            if (m.lookupInners != null && m.lookupInners.length) {
                for (var i = 0; i < m.lookupInners.length; ++i)
                    $root.ics23.InnerOp.encode(m.lookupInners[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };
        CompressedBatchProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.CompressedBatchProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        if (!(m.entries && m.entries.length)) m.entries = [];
                        m.entries.push($root.ics23.CompressedBatchEntry.decode(r, r.uint32()));
                        break;
                    case 2:
                        if (!(m.lookupInners && m.lookupInners.length)) m.lookupInners = [];
                        m.lookupInners.push($root.ics23.InnerOp.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return CompressedBatchProof;
    })();
    ics23.CompressedBatchEntry = (function () {
        function CompressedBatchEntry(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CompressedBatchEntry.prototype.exist = null;
        CompressedBatchEntry.prototype.nonexist = null;
        let $oneOfFields;
        Object.defineProperty(CompressedBatchEntry.prototype, 'proof', {
            get: $util.oneOfGetter(($oneOfFields = ['exist', 'nonexist'])),
            set: $util.oneOfSetter($oneOfFields),
        });
        CompressedBatchEntry.create = function create(properties) {
            return new CompressedBatchEntry(properties);
        };
        CompressedBatchEntry.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.exist != null && Object.hasOwnProperty.call(m, 'exist'))
                $root.ics23.CompressedExistenceProof.encode(m.exist, w.uint32(10).fork()).ldelim();
            if (m.nonexist != null && Object.hasOwnProperty.call(m, 'nonexist'))
                $root.ics23.CompressedNonExistenceProof.encode(m.nonexist, w.uint32(18).fork()).ldelim();
            return w;
        };
        CompressedBatchEntry.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.CompressedBatchEntry();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.exist = $root.ics23.CompressedExistenceProof.decode(r, r.uint32());
                        break;
                    case 2:
                        m.nonexist = $root.ics23.CompressedNonExistenceProof.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return CompressedBatchEntry;
    })();
    ics23.CompressedExistenceProof = (function () {
        function CompressedExistenceProof(p) {
            this.path = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CompressedExistenceProof.prototype.key = $util.newBuffer([]);
        CompressedExistenceProof.prototype.value = $util.newBuffer([]);
        CompressedExistenceProof.prototype.leaf = null;
        CompressedExistenceProof.prototype.path = $util.emptyArray;
        CompressedExistenceProof.create = function create(properties) {
            return new CompressedExistenceProof(properties);
        };
        CompressedExistenceProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
            if (m.value != null && Object.hasOwnProperty.call(m, 'value')) w.uint32(18).bytes(m.value);
            if (m.leaf != null && Object.hasOwnProperty.call(m, 'leaf'))
                $root.ics23.LeafOp.encode(m.leaf, w.uint32(26).fork()).ldelim();
            if (m.path != null && m.path.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.path.length; ++i) w.int32(m.path[i]);
                w.ldelim();
            }
            return w;
        };
        CompressedExistenceProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.CompressedExistenceProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.key = r.bytes();
                        break;
                    case 2:
                        m.value = r.bytes();
                        break;
                    case 3:
                        m.leaf = $root.ics23.LeafOp.decode(r, r.uint32());
                        break;
                    case 4:
                        if (!(m.path && m.path.length)) m.path = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2) m.path.push(r.int32());
                        } else m.path.push(r.int32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return CompressedExistenceProof;
    })();
    ics23.CompressedNonExistenceProof = (function () {
        function CompressedNonExistenceProof(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CompressedNonExistenceProof.prototype.key = $util.newBuffer([]);
        CompressedNonExistenceProof.prototype.left = null;
        CompressedNonExistenceProof.prototype.right = null;
        CompressedNonExistenceProof.create = function create(properties) {
            return new CompressedNonExistenceProof(properties);
        };
        CompressedNonExistenceProof.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, 'key')) w.uint32(10).bytes(m.key);
            if (m.left != null && Object.hasOwnProperty.call(m, 'left'))
                $root.ics23.CompressedExistenceProof.encode(m.left, w.uint32(18).fork()).ldelim();
            if (m.right != null && Object.hasOwnProperty.call(m, 'right'))
                $root.ics23.CompressedExistenceProof.encode(m.right, w.uint32(26).fork()).ldelim();
            return w;
        };
        CompressedNonExistenceProof.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
                m = new $root.ics23.CompressedNonExistenceProof();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.key = r.bytes();
                        break;
                    case 2:
                        m.left = $root.ics23.CompressedExistenceProof.decode(r, r.uint32());
                        break;
                    case 3:
                        m.right = $root.ics23.CompressedExistenceProof.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };
        return CompressedNonExistenceProof;
    })();
    return ics23;
})();
exports.ibc = $root.ibc = (() => {
    const ibc = {};
    ibc.core = (function () {
        const core = {};
        core.commitment = (function () {
            const commitment = {};
            commitment.v1 = (function () {
                const v1 = {};
                v1.MerkleRoot = (function () {
                    function MerkleRoot(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MerkleRoot.prototype.hash = $util.newBuffer([]);
                    MerkleRoot.create = function create(properties) {
                        return new MerkleRoot(properties);
                    };
                    MerkleRoot.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.hash != null && Object.hasOwnProperty.call(m, 'hash')) w.uint32(10).bytes(m.hash);
                        return w;
                    };
                    MerkleRoot.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.commitment.v1.MerkleRoot();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.hash = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MerkleRoot;
                })();
                v1.MerklePrefix = (function () {
                    function MerklePrefix(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MerklePrefix.prototype.keyPrefix = $util.newBuffer([]);
                    MerklePrefix.create = function create(properties) {
                        return new MerklePrefix(properties);
                    };
                    MerklePrefix.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.keyPrefix != null && Object.hasOwnProperty.call(m, 'keyPrefix'))
                            w.uint32(10).bytes(m.keyPrefix);
                        return w;
                    };
                    MerklePrefix.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.commitment.v1.MerklePrefix();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.keyPrefix = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MerklePrefix;
                })();
                v1.MerklePath = (function () {
                    function MerklePath(p) {
                        this.keyPath = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MerklePath.prototype.keyPath = $util.emptyArray;
                    MerklePath.create = function create(properties) {
                        return new MerklePath(properties);
                    };
                    MerklePath.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.keyPath != null && m.keyPath.length) {
                            for (var i = 0; i < m.keyPath.length; ++i) w.uint32(10).string(m.keyPath[i]);
                        }
                        return w;
                    };
                    MerklePath.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.commitment.v1.MerklePath();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    if (!(m.keyPath && m.keyPath.length)) m.keyPath = [];
                                    m.keyPath.push(r.string());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MerklePath;
                })();
                v1.MerkleProof = (function () {
                    function MerkleProof(p) {
                        this.proofs = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MerkleProof.prototype.proofs = $util.emptyArray;
                    MerkleProof.create = function create(properties) {
                        return new MerkleProof(properties);
                    };
                    MerkleProof.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.proofs != null && m.proofs.length) {
                            for (var i = 0; i < m.proofs.length; ++i)
                                $root.ics23.CommitmentProof.encode(m.proofs[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };
                    MerkleProof.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.commitment.v1.MerkleProof();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    if (!(m.proofs && m.proofs.length)) m.proofs = [];
                                    m.proofs.push($root.ics23.CommitmentProof.decode(r, r.uint32()));
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MerkleProof;
                })();
                return v1;
            })();
            return commitment;
        })();
        core.channel = (function () {
            const channel = {};
            channel.v1 = (function () {
                const v1 = {};
                v1.Msg = (function () {
                    function Msg(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
                    (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                    Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
                    Object.defineProperty(
                        (Msg.prototype.channelOpenInit = function channelOpenInit(request, callback) {
                            return this.rpcCall(
                                channelOpenInit,
                                $root.ibc.core.channel.v1.MsgChannelOpenInit,
                                $root.ibc.core.channel.v1.MsgChannelOpenInitResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ChannelOpenInit' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.channelOpenTry = function channelOpenTry(request, callback) {
                            return this.rpcCall(
                                channelOpenTry,
                                $root.ibc.core.channel.v1.MsgChannelOpenTry,
                                $root.ibc.core.channel.v1.MsgChannelOpenTryResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ChannelOpenTry' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.channelOpenAck = function channelOpenAck(request, callback) {
                            return this.rpcCall(
                                channelOpenAck,
                                $root.ibc.core.channel.v1.MsgChannelOpenAck,
                                $root.ibc.core.channel.v1.MsgChannelOpenAckResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ChannelOpenAck' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.channelOpenConfirm = function channelOpenConfirm(request, callback) {
                            return this.rpcCall(
                                channelOpenConfirm,
                                $root.ibc.core.channel.v1.MsgChannelOpenConfirm,
                                $root.ibc.core.channel.v1.MsgChannelOpenConfirmResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ChannelOpenConfirm' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.channelCloseInit = function channelCloseInit(request, callback) {
                            return this.rpcCall(
                                channelCloseInit,
                                $root.ibc.core.channel.v1.MsgChannelCloseInit,
                                $root.ibc.core.channel.v1.MsgChannelCloseInitResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ChannelCloseInit' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.channelCloseConfirm = function channelCloseConfirm(request, callback) {
                            return this.rpcCall(
                                channelCloseConfirm,
                                $root.ibc.core.channel.v1.MsgChannelCloseConfirm,
                                $root.ibc.core.channel.v1.MsgChannelCloseConfirmResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ChannelCloseConfirm' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.recvPacket = function recvPacket(request, callback) {
                            return this.rpcCall(
                                recvPacket,
                                $root.ibc.core.channel.v1.MsgRecvPacket,
                                $root.ibc.core.channel.v1.MsgRecvPacketResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'RecvPacket' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.timeout = function timeout(request, callback) {
                            return this.rpcCall(
                                timeout,
                                $root.ibc.core.channel.v1.MsgTimeout,
                                $root.ibc.core.channel.v1.MsgTimeoutResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'Timeout' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.timeoutOnClose = function timeoutOnClose(request, callback) {
                            return this.rpcCall(
                                timeoutOnClose,
                                $root.ibc.core.channel.v1.MsgTimeoutOnClose,
                                $root.ibc.core.channel.v1.MsgTimeoutOnCloseResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'TimeoutOnClose' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.acknowledgement = function acknowledgement(request, callback) {
                            return this.rpcCall(
                                acknowledgement,
                                $root.ibc.core.channel.v1.MsgAcknowledgement,
                                $root.ibc.core.channel.v1.MsgAcknowledgementResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'Acknowledgement' },
                    );
                    return Msg;
                })();
                v1.MsgChannelOpenInit = (function () {
                    function MsgChannelOpenInit(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenInit.prototype.portId = '';
                    MsgChannelOpenInit.prototype.channel = null;
                    MsgChannelOpenInit.prototype.signer = '';
                    MsgChannelOpenInit.create = function create(properties) {
                        return new MsgChannelOpenInit(properties);
                    };
                    MsgChannelOpenInit.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channel != null && Object.hasOwnProperty.call(m, 'channel'))
                            $root.ibc.core.channel.v1.Channel.encode(m.channel, w.uint32(18).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(26).string(m.signer);
                        return w;
                    };
                    MsgChannelOpenInit.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenInit();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channel = $root.ibc.core.channel.v1.Channel.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgChannelOpenInit;
                })();
                v1.MsgChannelOpenInitResponse = (function () {
                    function MsgChannelOpenInitResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenInitResponse.create = function create(properties) {
                        return new MsgChannelOpenInitResponse(properties);
                    };
                    MsgChannelOpenInitResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgChannelOpenInitResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenInitResponse();
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
                    return MsgChannelOpenInitResponse;
                })();
                v1.MsgChannelOpenTry = (function () {
                    function MsgChannelOpenTry(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenTry.prototype.portId = '';
                    MsgChannelOpenTry.prototype.previousChannelId = '';
                    MsgChannelOpenTry.prototype.channel = null;
                    MsgChannelOpenTry.prototype.counterpartyVersion = '';
                    MsgChannelOpenTry.prototype.proofInit = $util.newBuffer([]);
                    MsgChannelOpenTry.prototype.proofHeight = null;
                    MsgChannelOpenTry.prototype.signer = '';
                    MsgChannelOpenTry.create = function create(properties) {
                        return new MsgChannelOpenTry(properties);
                    };
                    MsgChannelOpenTry.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.previousChannelId != null && Object.hasOwnProperty.call(m, 'previousChannelId'))
                            w.uint32(18).string(m.previousChannelId);
                        if (m.channel != null && Object.hasOwnProperty.call(m, 'channel'))
                            $root.ibc.core.channel.v1.Channel.encode(m.channel, w.uint32(26).fork()).ldelim();
                        if (m.counterpartyVersion != null && Object.hasOwnProperty.call(m, 'counterpartyVersion'))
                            w.uint32(34).string(m.counterpartyVersion);
                        if (m.proofInit != null && Object.hasOwnProperty.call(m, 'proofInit'))
                            w.uint32(42).bytes(m.proofInit);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(50).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(58).string(m.signer);
                        return w;
                    };
                    MsgChannelOpenTry.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenTry();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.previousChannelId = r.string();
                                    break;
                                case 3:
                                    m.channel = $root.ibc.core.channel.v1.Channel.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.counterpartyVersion = r.string();
                                    break;
                                case 5:
                                    m.proofInit = r.bytes();
                                    break;
                                case 6:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 7:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgChannelOpenTry;
                })();
                v1.MsgChannelOpenTryResponse = (function () {
                    function MsgChannelOpenTryResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenTryResponse.create = function create(properties) {
                        return new MsgChannelOpenTryResponse(properties);
                    };
                    MsgChannelOpenTryResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgChannelOpenTryResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenTryResponse();
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
                    return MsgChannelOpenTryResponse;
                })();
                v1.MsgChannelOpenAck = (function () {
                    function MsgChannelOpenAck(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenAck.prototype.portId = '';
                    MsgChannelOpenAck.prototype.channelId = '';
                    MsgChannelOpenAck.prototype.counterpartyChannelId = '';
                    MsgChannelOpenAck.prototype.counterpartyVersion = '';
                    MsgChannelOpenAck.prototype.proofTry = $util.newBuffer([]);
                    MsgChannelOpenAck.prototype.proofHeight = null;
                    MsgChannelOpenAck.prototype.signer = '';
                    MsgChannelOpenAck.create = function create(properties) {
                        return new MsgChannelOpenAck(properties);
                    };
                    MsgChannelOpenAck.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(18).string(m.channelId);
                        if (m.counterpartyChannelId != null && Object.hasOwnProperty.call(m, 'counterpartyChannelId'))
                            w.uint32(26).string(m.counterpartyChannelId);
                        if (m.counterpartyVersion != null && Object.hasOwnProperty.call(m, 'counterpartyVersion'))
                            w.uint32(34).string(m.counterpartyVersion);
                        if (m.proofTry != null && Object.hasOwnProperty.call(m, 'proofTry'))
                            w.uint32(42).bytes(m.proofTry);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(50).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(58).string(m.signer);
                        return w;
                    };
                    MsgChannelOpenAck.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenAck();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channelId = r.string();
                                    break;
                                case 3:
                                    m.counterpartyChannelId = r.string();
                                    break;
                                case 4:
                                    m.counterpartyVersion = r.string();
                                    break;
                                case 5:
                                    m.proofTry = r.bytes();
                                    break;
                                case 6:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 7:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgChannelOpenAck;
                })();
                v1.MsgChannelOpenAckResponse = (function () {
                    function MsgChannelOpenAckResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenAckResponse.create = function create(properties) {
                        return new MsgChannelOpenAckResponse(properties);
                    };
                    MsgChannelOpenAckResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgChannelOpenAckResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenAckResponse();
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
                    return MsgChannelOpenAckResponse;
                })();
                v1.MsgChannelOpenConfirm = (function () {
                    function MsgChannelOpenConfirm(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenConfirm.prototype.portId = '';
                    MsgChannelOpenConfirm.prototype.channelId = '';
                    MsgChannelOpenConfirm.prototype.proofAck = $util.newBuffer([]);
                    MsgChannelOpenConfirm.prototype.proofHeight = null;
                    MsgChannelOpenConfirm.prototype.signer = '';
                    MsgChannelOpenConfirm.create = function create(properties) {
                        return new MsgChannelOpenConfirm(properties);
                    };
                    MsgChannelOpenConfirm.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(18).string(m.channelId);
                        if (m.proofAck != null && Object.hasOwnProperty.call(m, 'proofAck'))
                            w.uint32(26).bytes(m.proofAck);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(34).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(42).string(m.signer);
                        return w;
                    };
                    MsgChannelOpenConfirm.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenConfirm();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channelId = r.string();
                                    break;
                                case 3:
                                    m.proofAck = r.bytes();
                                    break;
                                case 4:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgChannelOpenConfirm;
                })();
                v1.MsgChannelOpenConfirmResponse = (function () {
                    function MsgChannelOpenConfirmResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelOpenConfirmResponse.create = function create(properties) {
                        return new MsgChannelOpenConfirmResponse(properties);
                    };
                    MsgChannelOpenConfirmResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgChannelOpenConfirmResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelOpenConfirmResponse();
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
                    return MsgChannelOpenConfirmResponse;
                })();
                v1.MsgChannelCloseInit = (function () {
                    function MsgChannelCloseInit(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelCloseInit.prototype.portId = '';
                    MsgChannelCloseInit.prototype.channelId = '';
                    MsgChannelCloseInit.prototype.signer = '';
                    MsgChannelCloseInit.create = function create(properties) {
                        return new MsgChannelCloseInit(properties);
                    };
                    MsgChannelCloseInit.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(18).string(m.channelId);
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(26).string(m.signer);
                        return w;
                    };
                    MsgChannelCloseInit.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelCloseInit();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channelId = r.string();
                                    break;
                                case 3:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgChannelCloseInit;
                })();
                v1.MsgChannelCloseInitResponse = (function () {
                    function MsgChannelCloseInitResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelCloseInitResponse.create = function create(properties) {
                        return new MsgChannelCloseInitResponse(properties);
                    };
                    MsgChannelCloseInitResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgChannelCloseInitResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelCloseInitResponse();
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
                    return MsgChannelCloseInitResponse;
                })();
                v1.MsgChannelCloseConfirm = (function () {
                    function MsgChannelCloseConfirm(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelCloseConfirm.prototype.portId = '';
                    MsgChannelCloseConfirm.prototype.channelId = '';
                    MsgChannelCloseConfirm.prototype.proofInit = $util.newBuffer([]);
                    MsgChannelCloseConfirm.prototype.proofHeight = null;
                    MsgChannelCloseConfirm.prototype.signer = '';
                    MsgChannelCloseConfirm.create = function create(properties) {
                        return new MsgChannelCloseConfirm(properties);
                    };
                    MsgChannelCloseConfirm.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(18).string(m.channelId);
                        if (m.proofInit != null && Object.hasOwnProperty.call(m, 'proofInit'))
                            w.uint32(26).bytes(m.proofInit);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(34).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(42).string(m.signer);
                        return w;
                    };
                    MsgChannelCloseConfirm.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelCloseConfirm();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channelId = r.string();
                                    break;
                                case 3:
                                    m.proofInit = r.bytes();
                                    break;
                                case 4:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgChannelCloseConfirm;
                })();
                v1.MsgChannelCloseConfirmResponse = (function () {
                    function MsgChannelCloseConfirmResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgChannelCloseConfirmResponse.create = function create(properties) {
                        return new MsgChannelCloseConfirmResponse(properties);
                    };
                    MsgChannelCloseConfirmResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgChannelCloseConfirmResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgChannelCloseConfirmResponse();
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
                    return MsgChannelCloseConfirmResponse;
                })();
                v1.MsgRecvPacket = (function () {
                    function MsgRecvPacket(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgRecvPacket.prototype.packet = null;
                    MsgRecvPacket.prototype.proofCommitment = $util.newBuffer([]);
                    MsgRecvPacket.prototype.proofHeight = null;
                    MsgRecvPacket.prototype.signer = '';
                    MsgRecvPacket.create = function create(properties) {
                        return new MsgRecvPacket(properties);
                    };
                    MsgRecvPacket.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.packet != null && Object.hasOwnProperty.call(m, 'packet'))
                            $root.ibc.core.channel.v1.Packet.encode(m.packet, w.uint32(10).fork()).ldelim();
                        if (m.proofCommitment != null && Object.hasOwnProperty.call(m, 'proofCommitment'))
                            w.uint32(18).bytes(m.proofCommitment);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(26).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(34).string(m.signer);
                        return w;
                    };
                    MsgRecvPacket.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgRecvPacket();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.packet = $root.ibc.core.channel.v1.Packet.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.proofCommitment = r.bytes();
                                    break;
                                case 3:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgRecvPacket;
                })();
                v1.MsgRecvPacketResponse = (function () {
                    function MsgRecvPacketResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgRecvPacketResponse.create = function create(properties) {
                        return new MsgRecvPacketResponse(properties);
                    };
                    MsgRecvPacketResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgRecvPacketResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgRecvPacketResponse();
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
                    return MsgRecvPacketResponse;
                })();
                v1.MsgTimeout = (function () {
                    function MsgTimeout(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgTimeout.prototype.packet = null;
                    MsgTimeout.prototype.proofUnreceived = $util.newBuffer([]);
                    MsgTimeout.prototype.proofHeight = null;
                    MsgTimeout.prototype.nextSequenceRecv = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    MsgTimeout.prototype.signer = '';
                    MsgTimeout.create = function create(properties) {
                        return new MsgTimeout(properties);
                    };
                    MsgTimeout.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.packet != null && Object.hasOwnProperty.call(m, 'packet'))
                            $root.ibc.core.channel.v1.Packet.encode(m.packet, w.uint32(10).fork()).ldelim();
                        if (m.proofUnreceived != null && Object.hasOwnProperty.call(m, 'proofUnreceived'))
                            w.uint32(18).bytes(m.proofUnreceived);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(26).fork()).ldelim();
                        if (m.nextSequenceRecv != null && Object.hasOwnProperty.call(m, 'nextSequenceRecv'))
                            w.uint32(32).uint64(m.nextSequenceRecv);
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(42).string(m.signer);
                        return w;
                    };
                    MsgTimeout.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgTimeout();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.packet = $root.ibc.core.channel.v1.Packet.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.proofUnreceived = r.bytes();
                                    break;
                                case 3:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.nextSequenceRecv = r.uint64();
                                    break;
                                case 5:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgTimeout;
                })();
                v1.MsgTimeoutResponse = (function () {
                    function MsgTimeoutResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgTimeoutResponse.create = function create(properties) {
                        return new MsgTimeoutResponse(properties);
                    };
                    MsgTimeoutResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgTimeoutResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgTimeoutResponse();
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
                    return MsgTimeoutResponse;
                })();
                v1.MsgTimeoutOnClose = (function () {
                    function MsgTimeoutOnClose(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgTimeoutOnClose.prototype.packet = null;
                    MsgTimeoutOnClose.prototype.proofUnreceived = $util.newBuffer([]);
                    MsgTimeoutOnClose.prototype.proofClose = $util.newBuffer([]);
                    MsgTimeoutOnClose.prototype.proofHeight = null;
                    MsgTimeoutOnClose.prototype.nextSequenceRecv = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    MsgTimeoutOnClose.prototype.signer = '';
                    MsgTimeoutOnClose.create = function create(properties) {
                        return new MsgTimeoutOnClose(properties);
                    };
                    MsgTimeoutOnClose.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.packet != null && Object.hasOwnProperty.call(m, 'packet'))
                            $root.ibc.core.channel.v1.Packet.encode(m.packet, w.uint32(10).fork()).ldelim();
                        if (m.proofUnreceived != null && Object.hasOwnProperty.call(m, 'proofUnreceived'))
                            w.uint32(18).bytes(m.proofUnreceived);
                        if (m.proofClose != null && Object.hasOwnProperty.call(m, 'proofClose'))
                            w.uint32(26).bytes(m.proofClose);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(34).fork()).ldelim();
                        if (m.nextSequenceRecv != null && Object.hasOwnProperty.call(m, 'nextSequenceRecv'))
                            w.uint32(40).uint64(m.nextSequenceRecv);
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(50).string(m.signer);
                        return w;
                    };
                    MsgTimeoutOnClose.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgTimeoutOnClose();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.packet = $root.ibc.core.channel.v1.Packet.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.proofUnreceived = r.bytes();
                                    break;
                                case 3:
                                    m.proofClose = r.bytes();
                                    break;
                                case 4:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.nextSequenceRecv = r.uint64();
                                    break;
                                case 6:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgTimeoutOnClose;
                })();
                v1.MsgTimeoutOnCloseResponse = (function () {
                    function MsgTimeoutOnCloseResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgTimeoutOnCloseResponse.create = function create(properties) {
                        return new MsgTimeoutOnCloseResponse(properties);
                    };
                    MsgTimeoutOnCloseResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgTimeoutOnCloseResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgTimeoutOnCloseResponse();
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
                    return MsgTimeoutOnCloseResponse;
                })();
                v1.MsgAcknowledgement = (function () {
                    function MsgAcknowledgement(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgAcknowledgement.prototype.packet = null;
                    MsgAcknowledgement.prototype.acknowledgement = $util.newBuffer([]);
                    MsgAcknowledgement.prototype.proofAcked = $util.newBuffer([]);
                    MsgAcknowledgement.prototype.proofHeight = null;
                    MsgAcknowledgement.prototype.signer = '';
                    MsgAcknowledgement.create = function create(properties) {
                        return new MsgAcknowledgement(properties);
                    };
                    MsgAcknowledgement.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.packet != null && Object.hasOwnProperty.call(m, 'packet'))
                            $root.ibc.core.channel.v1.Packet.encode(m.packet, w.uint32(10).fork()).ldelim();
                        if (m.acknowledgement != null && Object.hasOwnProperty.call(m, 'acknowledgement'))
                            w.uint32(18).bytes(m.acknowledgement);
                        if (m.proofAcked != null && Object.hasOwnProperty.call(m, 'proofAcked'))
                            w.uint32(26).bytes(m.proofAcked);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(34).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(42).string(m.signer);
                        return w;
                    };
                    MsgAcknowledgement.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgAcknowledgement();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.packet = $root.ibc.core.channel.v1.Packet.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.acknowledgement = r.bytes();
                                    break;
                                case 3:
                                    m.proofAcked = r.bytes();
                                    break;
                                case 4:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgAcknowledgement;
                })();
                v1.MsgAcknowledgementResponse = (function () {
                    function MsgAcknowledgementResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgAcknowledgementResponse.create = function create(properties) {
                        return new MsgAcknowledgementResponse(properties);
                    };
                    MsgAcknowledgementResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgAcknowledgementResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.MsgAcknowledgementResponse();
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
                    return MsgAcknowledgementResponse;
                })();
                v1.Channel = (function () {
                    function Channel(p) {
                        this.connectionHops = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Channel.prototype.state = 0;
                    Channel.prototype.ordering = 0;
                    Channel.prototype.counterparty = null;
                    Channel.prototype.connectionHops = $util.emptyArray;
                    Channel.prototype.version = '';
                    Channel.create = function create(properties) {
                        return new Channel(properties);
                    };
                    Channel.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.state != null && Object.hasOwnProperty.call(m, 'state')) w.uint32(8).int32(m.state);
                        if (m.ordering != null && Object.hasOwnProperty.call(m, 'ordering'))
                            w.uint32(16).int32(m.ordering);
                        if (m.counterparty != null && Object.hasOwnProperty.call(m, 'counterparty'))
                            $root.ibc.core.channel.v1.Counterparty.encode(m.counterparty, w.uint32(26).fork()).ldelim();
                        if (m.connectionHops != null && m.connectionHops.length) {
                            for (var i = 0; i < m.connectionHops.length; ++i) w.uint32(34).string(m.connectionHops[i]);
                        }
                        if (m.version != null && Object.hasOwnProperty.call(m, 'version'))
                            w.uint32(42).string(m.version);
                        return w;
                    };
                    Channel.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.Channel();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.state = r.int32();
                                    break;
                                case 2:
                                    m.ordering = r.int32();
                                    break;
                                case 3:
                                    m.counterparty = $root.ibc.core.channel.v1.Counterparty.decode(r, r.uint32());
                                    break;
                                case 4:
                                    if (!(m.connectionHops && m.connectionHops.length)) m.connectionHops = [];
                                    m.connectionHops.push(r.string());
                                    break;
                                case 5:
                                    m.version = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Channel;
                })();
                v1.IdentifiedChannel = (function () {
                    function IdentifiedChannel(p) {
                        this.connectionHops = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    IdentifiedChannel.prototype.state = 0;
                    IdentifiedChannel.prototype.ordering = 0;
                    IdentifiedChannel.prototype.counterparty = null;
                    IdentifiedChannel.prototype.connectionHops = $util.emptyArray;
                    IdentifiedChannel.prototype.version = '';
                    IdentifiedChannel.prototype.portId = '';
                    IdentifiedChannel.prototype.channelId = '';
                    IdentifiedChannel.create = function create(properties) {
                        return new IdentifiedChannel(properties);
                    };
                    IdentifiedChannel.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.state != null && Object.hasOwnProperty.call(m, 'state')) w.uint32(8).int32(m.state);
                        if (m.ordering != null && Object.hasOwnProperty.call(m, 'ordering'))
                            w.uint32(16).int32(m.ordering);
                        if (m.counterparty != null && Object.hasOwnProperty.call(m, 'counterparty'))
                            $root.ibc.core.channel.v1.Counterparty.encode(m.counterparty, w.uint32(26).fork()).ldelim();
                        if (m.connectionHops != null && m.connectionHops.length) {
                            for (var i = 0; i < m.connectionHops.length; ++i) w.uint32(34).string(m.connectionHops[i]);
                        }
                        if (m.version != null && Object.hasOwnProperty.call(m, 'version'))
                            w.uint32(42).string(m.version);
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(50).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(58).string(m.channelId);
                        return w;
                    };
                    IdentifiedChannel.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.IdentifiedChannel();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.state = r.int32();
                                    break;
                                case 2:
                                    m.ordering = r.int32();
                                    break;
                                case 3:
                                    m.counterparty = $root.ibc.core.channel.v1.Counterparty.decode(r, r.uint32());
                                    break;
                                case 4:
                                    if (!(m.connectionHops && m.connectionHops.length)) m.connectionHops = [];
                                    m.connectionHops.push(r.string());
                                    break;
                                case 5:
                                    m.version = r.string();
                                    break;
                                case 6:
                                    m.portId = r.string();
                                    break;
                                case 7:
                                    m.channelId = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return IdentifiedChannel;
                })();
                v1.State = (function () {
                    const valuesById = {},
                        values = Object.create(valuesById);
                    values[(valuesById[0] = 'STATE_UNINITIALIZED_UNSPECIFIED')] = 0;
                    values[(valuesById[1] = 'STATE_INIT')] = 1;
                    values[(valuesById[2] = 'STATE_TRYOPEN')] = 2;
                    values[(valuesById[3] = 'STATE_OPEN')] = 3;
                    values[(valuesById[4] = 'STATE_CLOSED')] = 4;
                    return values;
                })();
                v1.Order = (function () {
                    const valuesById = {},
                        values = Object.create(valuesById);
                    values[(valuesById[0] = 'ORDER_NONE_UNSPECIFIED')] = 0;
                    values[(valuesById[1] = 'ORDER_UNORDERED')] = 1;
                    values[(valuesById[2] = 'ORDER_ORDERED')] = 2;
                    return values;
                })();
                v1.Counterparty = (function () {
                    function Counterparty(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Counterparty.prototype.portId = '';
                    Counterparty.prototype.channelId = '';
                    Counterparty.create = function create(properties) {
                        return new Counterparty(properties);
                    };
                    Counterparty.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(18).string(m.channelId);
                        return w;
                    };
                    Counterparty.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.Counterparty();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channelId = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Counterparty;
                })();
                v1.Packet = (function () {
                    function Packet(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Packet.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Packet.prototype.sourcePort = '';
                    Packet.prototype.sourceChannel = '';
                    Packet.prototype.destinationPort = '';
                    Packet.prototype.destinationChannel = '';
                    Packet.prototype.data = $util.newBuffer([]);
                    Packet.prototype.timeoutHeight = null;
                    Packet.prototype.timeoutTimestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Packet.create = function create(properties) {
                        return new Packet(properties);
                    };
                    Packet.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(8).uint64(m.sequence);
                        if (m.sourcePort != null && Object.hasOwnProperty.call(m, 'sourcePort'))
                            w.uint32(18).string(m.sourcePort);
                        if (m.sourceChannel != null && Object.hasOwnProperty.call(m, 'sourceChannel'))
                            w.uint32(26).string(m.sourceChannel);
                        if (m.destinationPort != null && Object.hasOwnProperty.call(m, 'destinationPort'))
                            w.uint32(34).string(m.destinationPort);
                        if (m.destinationChannel != null && Object.hasOwnProperty.call(m, 'destinationChannel'))
                            w.uint32(42).string(m.destinationChannel);
                        if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(50).bytes(m.data);
                        if (m.timeoutHeight != null && Object.hasOwnProperty.call(m, 'timeoutHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.timeoutHeight, w.uint32(58).fork()).ldelim();
                        if (m.timeoutTimestamp != null && Object.hasOwnProperty.call(m, 'timeoutTimestamp'))
                            w.uint32(64).uint64(m.timeoutTimestamp);
                        return w;
                    };
                    Packet.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.Packet();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.sequence = r.uint64();
                                    break;
                                case 2:
                                    m.sourcePort = r.string();
                                    break;
                                case 3:
                                    m.sourceChannel = r.string();
                                    break;
                                case 4:
                                    m.destinationPort = r.string();
                                    break;
                                case 5:
                                    m.destinationChannel = r.string();
                                    break;
                                case 6:
                                    m.data = r.bytes();
                                    break;
                                case 7:
                                    m.timeoutHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 8:
                                    m.timeoutTimestamp = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Packet;
                })();
                v1.PacketState = (function () {
                    function PacketState(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    PacketState.prototype.portId = '';
                    PacketState.prototype.channelId = '';
                    PacketState.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    PacketState.prototype.data = $util.newBuffer([]);
                    PacketState.create = function create(properties) {
                        return new PacketState(properties);
                    };
                    PacketState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.portId != null && Object.hasOwnProperty.call(m, 'portId')) w.uint32(10).string(m.portId);
                        if (m.channelId != null && Object.hasOwnProperty.call(m, 'channelId'))
                            w.uint32(18).string(m.channelId);
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(24).uint64(m.sequence);
                        if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(34).bytes(m.data);
                        return w;
                    };
                    PacketState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.PacketState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.portId = r.string();
                                    break;
                                case 2:
                                    m.channelId = r.string();
                                    break;
                                case 3:
                                    m.sequence = r.uint64();
                                    break;
                                case 4:
                                    m.data = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return PacketState;
                })();
                v1.Acknowledgement = (function () {
                    function Acknowledgement(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Acknowledgement.prototype.result = $util.newBuffer([]);
                    Acknowledgement.prototype.error = '';
                    let $oneOfFields;
                    Object.defineProperty(Acknowledgement.prototype, 'response', {
                        get: $util.oneOfGetter(($oneOfFields = ['result', 'error'])),
                        set: $util.oneOfSetter($oneOfFields),
                    });
                    Acknowledgement.create = function create(properties) {
                        return new Acknowledgement(properties);
                    };
                    Acknowledgement.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, 'result')) w.uint32(170).bytes(m.result);
                        if (m.error != null && Object.hasOwnProperty.call(m, 'error')) w.uint32(178).string(m.error);
                        return w;
                    };
                    Acknowledgement.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.channel.v1.Acknowledgement();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 21:
                                    m.result = r.bytes();
                                    break;
                                case 22:
                                    m.error = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Acknowledgement;
                })();
                return v1;
            })();
            return channel;
        })();
        core.client = (function () {
            const client = {};
            client.v1 = (function () {
                const v1 = {};
                v1.Msg = (function () {
                    function Msg(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
                    (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                    Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
                    Object.defineProperty(
                        (Msg.prototype.createClient = function createClient(request, callback) {
                            return this.rpcCall(
                                createClient,
                                $root.ibc.core.client.v1.MsgCreateClient,
                                $root.ibc.core.client.v1.MsgCreateClientResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'CreateClient' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.updateClient = function updateClient(request, callback) {
                            return this.rpcCall(
                                updateClient,
                                $root.ibc.core.client.v1.MsgUpdateClient,
                                $root.ibc.core.client.v1.MsgUpdateClientResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'UpdateClient' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.upgradeClient = function upgradeClient(request, callback) {
                            return this.rpcCall(
                                upgradeClient,
                                $root.ibc.core.client.v1.MsgUpgradeClient,
                                $root.ibc.core.client.v1.MsgUpgradeClientResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'UpgradeClient' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.submitMisbehaviour = function submitMisbehaviour(request, callback) {
                            return this.rpcCall(
                                submitMisbehaviour,
                                $root.ibc.core.client.v1.MsgSubmitMisbehaviour,
                                $root.ibc.core.client.v1.MsgSubmitMisbehaviourResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'SubmitMisbehaviour' },
                    );
                    return Msg;
                })();
                v1.MsgCreateClient = (function () {
                    function MsgCreateClient(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgCreateClient.prototype.clientState = null;
                    MsgCreateClient.prototype.consensusState = null;
                    MsgCreateClient.prototype.signer = '';
                    MsgCreateClient.create = function create(properties) {
                        return new MsgCreateClient(properties);
                    };
                    MsgCreateClient.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientState != null && Object.hasOwnProperty.call(m, 'clientState'))
                            $root.google.protobuf.Any.encode(m.clientState, w.uint32(10).fork()).ldelim();
                        if (m.consensusState != null && Object.hasOwnProperty.call(m, 'consensusState'))
                            $root.google.protobuf.Any.encode(m.consensusState, w.uint32(18).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(26).string(m.signer);
                        return w;
                    };
                    MsgCreateClient.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgCreateClient();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.consensusState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgCreateClient;
                })();
                v1.MsgCreateClientResponse = (function () {
                    function MsgCreateClientResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgCreateClientResponse.create = function create(properties) {
                        return new MsgCreateClientResponse(properties);
                    };
                    MsgCreateClientResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgCreateClientResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgCreateClientResponse();
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
                    return MsgCreateClientResponse;
                })();
                v1.MsgUpdateClient = (function () {
                    function MsgUpdateClient(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgUpdateClient.prototype.clientId = '';
                    MsgUpdateClient.prototype.header = null;
                    MsgUpdateClient.prototype.signer = '';
                    MsgUpdateClient.create = function create(properties) {
                        return new MsgUpdateClient(properties);
                    };
                    MsgUpdateClient.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.header != null && Object.hasOwnProperty.call(m, 'header'))
                            $root.google.protobuf.Any.encode(m.header, w.uint32(18).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(26).string(m.signer);
                        return w;
                    };
                    MsgUpdateClient.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgUpdateClient();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.header = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgUpdateClient;
                })();
                v1.MsgUpdateClientResponse = (function () {
                    function MsgUpdateClientResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgUpdateClientResponse.create = function create(properties) {
                        return new MsgUpdateClientResponse(properties);
                    };
                    MsgUpdateClientResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgUpdateClientResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgUpdateClientResponse();
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
                    return MsgUpdateClientResponse;
                })();
                v1.MsgUpgradeClient = (function () {
                    function MsgUpgradeClient(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgUpgradeClient.prototype.clientId = '';
                    MsgUpgradeClient.prototype.clientState = null;
                    MsgUpgradeClient.prototype.consensusState = null;
                    MsgUpgradeClient.prototype.proofUpgradeClient = $util.newBuffer([]);
                    MsgUpgradeClient.prototype.proofUpgradeConsensusState = $util.newBuffer([]);
                    MsgUpgradeClient.prototype.signer = '';
                    MsgUpgradeClient.create = function create(properties) {
                        return new MsgUpgradeClient(properties);
                    };
                    MsgUpgradeClient.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.clientState != null && Object.hasOwnProperty.call(m, 'clientState'))
                            $root.google.protobuf.Any.encode(m.clientState, w.uint32(18).fork()).ldelim();
                        if (m.consensusState != null && Object.hasOwnProperty.call(m, 'consensusState'))
                            $root.google.protobuf.Any.encode(m.consensusState, w.uint32(26).fork()).ldelim();
                        if (m.proofUpgradeClient != null && Object.hasOwnProperty.call(m, 'proofUpgradeClient'))
                            w.uint32(34).bytes(m.proofUpgradeClient);
                        if (
                            m.proofUpgradeConsensusState != null &&
                            Object.hasOwnProperty.call(m, 'proofUpgradeConsensusState')
                        )
                            w.uint32(42).bytes(m.proofUpgradeConsensusState);
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(50).string(m.signer);
                        return w;
                    };
                    MsgUpgradeClient.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgUpgradeClient();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.clientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.consensusState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.proofUpgradeClient = r.bytes();
                                    break;
                                case 5:
                                    m.proofUpgradeConsensusState = r.bytes();
                                    break;
                                case 6:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgUpgradeClient;
                })();
                v1.MsgUpgradeClientResponse = (function () {
                    function MsgUpgradeClientResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgUpgradeClientResponse.create = function create(properties) {
                        return new MsgUpgradeClientResponse(properties);
                    };
                    MsgUpgradeClientResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgUpgradeClientResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgUpgradeClientResponse();
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
                    return MsgUpgradeClientResponse;
                })();
                v1.MsgSubmitMisbehaviour = (function () {
                    function MsgSubmitMisbehaviour(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgSubmitMisbehaviour.prototype.clientId = '';
                    MsgSubmitMisbehaviour.prototype.misbehaviour = null;
                    MsgSubmitMisbehaviour.prototype.signer = '';
                    MsgSubmitMisbehaviour.create = function create(properties) {
                        return new MsgSubmitMisbehaviour(properties);
                    };
                    MsgSubmitMisbehaviour.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.misbehaviour != null && Object.hasOwnProperty.call(m, 'misbehaviour'))
                            $root.google.protobuf.Any.encode(m.misbehaviour, w.uint32(18).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(26).string(m.signer);
                        return w;
                    };
                    MsgSubmitMisbehaviour.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgSubmitMisbehaviour();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.misbehaviour = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgSubmitMisbehaviour;
                })();
                v1.MsgSubmitMisbehaviourResponse = (function () {
                    function MsgSubmitMisbehaviourResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgSubmitMisbehaviourResponse.create = function create(properties) {
                        return new MsgSubmitMisbehaviourResponse(properties);
                    };
                    MsgSubmitMisbehaviourResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgSubmitMisbehaviourResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.MsgSubmitMisbehaviourResponse();
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
                    return MsgSubmitMisbehaviourResponse;
                })();
                v1.IdentifiedClientState = (function () {
                    function IdentifiedClientState(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    IdentifiedClientState.prototype.clientId = '';
                    IdentifiedClientState.prototype.clientState = null;
                    IdentifiedClientState.create = function create(properties) {
                        return new IdentifiedClientState(properties);
                    };
                    IdentifiedClientState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.clientState != null && Object.hasOwnProperty.call(m, 'clientState'))
                            $root.google.protobuf.Any.encode(m.clientState, w.uint32(18).fork()).ldelim();
                        return w;
                    };
                    IdentifiedClientState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.IdentifiedClientState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.clientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return IdentifiedClientState;
                })();
                v1.ConsensusStateWithHeight = (function () {
                    function ConsensusStateWithHeight(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConsensusStateWithHeight.prototype.height = null;
                    ConsensusStateWithHeight.prototype.consensusState = null;
                    ConsensusStateWithHeight.create = function create(properties) {
                        return new ConsensusStateWithHeight(properties);
                    };
                    ConsensusStateWithHeight.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.height != null && Object.hasOwnProperty.call(m, 'height'))
                            $root.ibc.core.client.v1.Height.encode(m.height, w.uint32(10).fork()).ldelim();
                        if (m.consensusState != null && Object.hasOwnProperty.call(m, 'consensusState'))
                            $root.google.protobuf.Any.encode(m.consensusState, w.uint32(18).fork()).ldelim();
                        return w;
                    };
                    ConsensusStateWithHeight.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.ConsensusStateWithHeight();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.height = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.consensusState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConsensusStateWithHeight;
                })();
                v1.ClientConsensusStates = (function () {
                    function ClientConsensusStates(p) {
                        this.consensusStates = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientConsensusStates.prototype.clientId = '';
                    ClientConsensusStates.prototype.consensusStates = $util.emptyArray;
                    ClientConsensusStates.create = function create(properties) {
                        return new ClientConsensusStates(properties);
                    };
                    ClientConsensusStates.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.consensusStates != null && m.consensusStates.length) {
                            for (var i = 0; i < m.consensusStates.length; ++i)
                                $root.ibc.core.client.v1.ConsensusStateWithHeight.encode(
                                    m.consensusStates[i],
                                    w.uint32(18).fork(),
                                ).ldelim();
                        }
                        return w;
                    };
                    ClientConsensusStates.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.ClientConsensusStates();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    if (!(m.consensusStates && m.consensusStates.length)) m.consensusStates = [];
                                    m.consensusStates.push(
                                        $root.ibc.core.client.v1.ConsensusStateWithHeight.decode(r, r.uint32()),
                                    );
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientConsensusStates;
                })();
                v1.ClientUpdateProposal = (function () {
                    function ClientUpdateProposal(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientUpdateProposal.prototype.title = '';
                    ClientUpdateProposal.prototype.description = '';
                    ClientUpdateProposal.prototype.subjectClientId = '';
                    ClientUpdateProposal.prototype.substituteClientId = '';
                    ClientUpdateProposal.create = function create(properties) {
                        return new ClientUpdateProposal(properties);
                    };
                    ClientUpdateProposal.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                        if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                            w.uint32(18).string(m.description);
                        if (m.subjectClientId != null && Object.hasOwnProperty.call(m, 'subjectClientId'))
                            w.uint32(26).string(m.subjectClientId);
                        if (m.substituteClientId != null && Object.hasOwnProperty.call(m, 'substituteClientId'))
                            w.uint32(34).string(m.substituteClientId);
                        return w;
                    };
                    ClientUpdateProposal.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.ClientUpdateProposal();
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
                                    m.subjectClientId = r.string();
                                    break;
                                case 4:
                                    m.substituteClientId = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientUpdateProposal;
                })();
                v1.UpgradeProposal = (function () {
                    function UpgradeProposal(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    UpgradeProposal.prototype.title = '';
                    UpgradeProposal.prototype.description = '';
                    UpgradeProposal.prototype.plan = null;
                    UpgradeProposal.prototype.upgradedClientState = null;
                    UpgradeProposal.create = function create(properties) {
                        return new UpgradeProposal(properties);
                    };
                    UpgradeProposal.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.title != null && Object.hasOwnProperty.call(m, 'title')) w.uint32(10).string(m.title);
                        if (m.description != null && Object.hasOwnProperty.call(m, 'description'))
                            w.uint32(18).string(m.description);
                        if (m.plan != null && Object.hasOwnProperty.call(m, 'plan'))
                            $root.cosmos.upgrade.v1beta1.Plan.encode(m.plan, w.uint32(26).fork()).ldelim();
                        if (m.upgradedClientState != null && Object.hasOwnProperty.call(m, 'upgradedClientState'))
                            $root.google.protobuf.Any.encode(m.upgradedClientState, w.uint32(34).fork()).ldelim();
                        return w;
                    };
                    UpgradeProposal.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.UpgradeProposal();
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
                                    m.plan = $root.cosmos.upgrade.v1beta1.Plan.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.upgradedClientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return UpgradeProposal;
                })();
                v1.Height = (function () {
                    function Height(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Height.prototype.revisionNumber = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Height.prototype.revisionHeight = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Height.create = function create(properties) {
                        return new Height(properties);
                    };
                    Height.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.revisionNumber != null && Object.hasOwnProperty.call(m, 'revisionNumber'))
                            w.uint32(8).uint64(m.revisionNumber);
                        if (m.revisionHeight != null && Object.hasOwnProperty.call(m, 'revisionHeight'))
                            w.uint32(16).uint64(m.revisionHeight);
                        return w;
                    };
                    Height.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.Height();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.revisionNumber = r.uint64();
                                    break;
                                case 2:
                                    m.revisionHeight = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Height;
                })();
                v1.Params = (function () {
                    function Params(p) {
                        this.allowedClients = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Params.prototype.allowedClients = $util.emptyArray;
                    Params.create = function create(properties) {
                        return new Params(properties);
                    };
                    Params.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.allowedClients != null && m.allowedClients.length) {
                            for (var i = 0; i < m.allowedClients.length; ++i) w.uint32(10).string(m.allowedClients[i]);
                        }
                        return w;
                    };
                    Params.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.client.v1.Params();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    if (!(m.allowedClients && m.allowedClients.length)) m.allowedClients = [];
                                    m.allowedClients.push(r.string());
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
                return v1;
            })();
            return client;
        })();
        core.connection = (function () {
            const connection = {};
            connection.v1 = (function () {
                const v1 = {};
                v1.Msg = (function () {
                    function Msg(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
                    (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                    Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
                    Object.defineProperty(
                        (Msg.prototype.connectionOpenInit = function connectionOpenInit(request, callback) {
                            return this.rpcCall(
                                connectionOpenInit,
                                $root.ibc.core.connection.v1.MsgConnectionOpenInit,
                                $root.ibc.core.connection.v1.MsgConnectionOpenInitResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ConnectionOpenInit' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.connectionOpenTry = function connectionOpenTry(request, callback) {
                            return this.rpcCall(
                                connectionOpenTry,
                                $root.ibc.core.connection.v1.MsgConnectionOpenTry,
                                $root.ibc.core.connection.v1.MsgConnectionOpenTryResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ConnectionOpenTry' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.connectionOpenAck = function connectionOpenAck(request, callback) {
                            return this.rpcCall(
                                connectionOpenAck,
                                $root.ibc.core.connection.v1.MsgConnectionOpenAck,
                                $root.ibc.core.connection.v1.MsgConnectionOpenAckResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ConnectionOpenAck' },
                    );
                    Object.defineProperty(
                        (Msg.prototype.connectionOpenConfirm = function connectionOpenConfirm(request, callback) {
                            return this.rpcCall(
                                connectionOpenConfirm,
                                $root.ibc.core.connection.v1.MsgConnectionOpenConfirm,
                                $root.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'ConnectionOpenConfirm' },
                    );
                    return Msg;
                })();
                v1.MsgConnectionOpenInit = (function () {
                    function MsgConnectionOpenInit(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenInit.prototype.clientId = '';
                    MsgConnectionOpenInit.prototype.counterparty = null;
                    MsgConnectionOpenInit.prototype.version = null;
                    MsgConnectionOpenInit.prototype.delayPeriod = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    MsgConnectionOpenInit.prototype.signer = '';
                    MsgConnectionOpenInit.create = function create(properties) {
                        return new MsgConnectionOpenInit(properties);
                    };
                    MsgConnectionOpenInit.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.counterparty != null && Object.hasOwnProperty.call(m, 'counterparty'))
                            $root.ibc.core.connection.v1.Counterparty.encode(
                                m.counterparty,
                                w.uint32(18).fork(),
                            ).ldelim();
                        if (m.version != null && Object.hasOwnProperty.call(m, 'version'))
                            $root.ibc.core.connection.v1.Version.encode(m.version, w.uint32(26).fork()).ldelim();
                        if (m.delayPeriod != null && Object.hasOwnProperty.call(m, 'delayPeriod'))
                            w.uint32(32).uint64(m.delayPeriod);
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(42).string(m.signer);
                        return w;
                    };
                    MsgConnectionOpenInit.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenInit();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.counterparty = $root.ibc.core.connection.v1.Counterparty.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.version = $root.ibc.core.connection.v1.Version.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.delayPeriod = r.uint64();
                                    break;
                                case 5:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgConnectionOpenInit;
                })();
                v1.MsgConnectionOpenInitResponse = (function () {
                    function MsgConnectionOpenInitResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenInitResponse.create = function create(properties) {
                        return new MsgConnectionOpenInitResponse(properties);
                    };
                    MsgConnectionOpenInitResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgConnectionOpenInitResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenInitResponse();
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
                    return MsgConnectionOpenInitResponse;
                })();
                v1.MsgConnectionOpenTry = (function () {
                    function MsgConnectionOpenTry(p) {
                        this.counterpartyVersions = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenTry.prototype.clientId = '';
                    MsgConnectionOpenTry.prototype.previousConnectionId = '';
                    MsgConnectionOpenTry.prototype.clientState = null;
                    MsgConnectionOpenTry.prototype.counterparty = null;
                    MsgConnectionOpenTry.prototype.delayPeriod = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    MsgConnectionOpenTry.prototype.counterpartyVersions = $util.emptyArray;
                    MsgConnectionOpenTry.prototype.proofHeight = null;
                    MsgConnectionOpenTry.prototype.proofInit = $util.newBuffer([]);
                    MsgConnectionOpenTry.prototype.proofClient = $util.newBuffer([]);
                    MsgConnectionOpenTry.prototype.proofConsensus = $util.newBuffer([]);
                    MsgConnectionOpenTry.prototype.consensusHeight = null;
                    MsgConnectionOpenTry.prototype.signer = '';
                    MsgConnectionOpenTry.create = function create(properties) {
                        return new MsgConnectionOpenTry(properties);
                    };
                    MsgConnectionOpenTry.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.previousConnectionId != null && Object.hasOwnProperty.call(m, 'previousConnectionId'))
                            w.uint32(18).string(m.previousConnectionId);
                        if (m.clientState != null && Object.hasOwnProperty.call(m, 'clientState'))
                            $root.google.protobuf.Any.encode(m.clientState, w.uint32(26).fork()).ldelim();
                        if (m.counterparty != null && Object.hasOwnProperty.call(m, 'counterparty'))
                            $root.ibc.core.connection.v1.Counterparty.encode(
                                m.counterparty,
                                w.uint32(34).fork(),
                            ).ldelim();
                        if (m.delayPeriod != null && Object.hasOwnProperty.call(m, 'delayPeriod'))
                            w.uint32(40).uint64(m.delayPeriod);
                        if (m.counterpartyVersions != null && m.counterpartyVersions.length) {
                            for (var i = 0; i < m.counterpartyVersions.length; ++i)
                                $root.ibc.core.connection.v1.Version.encode(
                                    m.counterpartyVersions[i],
                                    w.uint32(50).fork(),
                                ).ldelim();
                        }
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(58).fork()).ldelim();
                        if (m.proofInit != null && Object.hasOwnProperty.call(m, 'proofInit'))
                            w.uint32(66).bytes(m.proofInit);
                        if (m.proofClient != null && Object.hasOwnProperty.call(m, 'proofClient'))
                            w.uint32(74).bytes(m.proofClient);
                        if (m.proofConsensus != null && Object.hasOwnProperty.call(m, 'proofConsensus'))
                            w.uint32(82).bytes(m.proofConsensus);
                        if (m.consensusHeight != null && Object.hasOwnProperty.call(m, 'consensusHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.consensusHeight, w.uint32(90).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(98).string(m.signer);
                        return w;
                    };
                    MsgConnectionOpenTry.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenTry();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.previousConnectionId = r.string();
                                    break;
                                case 3:
                                    m.clientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.counterparty = $root.ibc.core.connection.v1.Counterparty.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.delayPeriod = r.uint64();
                                    break;
                                case 6:
                                    if (!(m.counterpartyVersions && m.counterpartyVersions.length))
                                        m.counterpartyVersions = [];
                                    m.counterpartyVersions.push(
                                        $root.ibc.core.connection.v1.Version.decode(r, r.uint32()),
                                    );
                                    break;
                                case 7:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 8:
                                    m.proofInit = r.bytes();
                                    break;
                                case 9:
                                    m.proofClient = r.bytes();
                                    break;
                                case 10:
                                    m.proofConsensus = r.bytes();
                                    break;
                                case 11:
                                    m.consensusHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 12:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgConnectionOpenTry;
                })();
                v1.MsgConnectionOpenTryResponse = (function () {
                    function MsgConnectionOpenTryResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenTryResponse.create = function create(properties) {
                        return new MsgConnectionOpenTryResponse(properties);
                    };
                    MsgConnectionOpenTryResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgConnectionOpenTryResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenTryResponse();
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
                    return MsgConnectionOpenTryResponse;
                })();
                v1.MsgConnectionOpenAck = (function () {
                    function MsgConnectionOpenAck(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenAck.prototype.connectionId = '';
                    MsgConnectionOpenAck.prototype.counterpartyConnectionId = '';
                    MsgConnectionOpenAck.prototype.version = null;
                    MsgConnectionOpenAck.prototype.clientState = null;
                    MsgConnectionOpenAck.prototype.proofHeight = null;
                    MsgConnectionOpenAck.prototype.proofTry = $util.newBuffer([]);
                    MsgConnectionOpenAck.prototype.proofClient = $util.newBuffer([]);
                    MsgConnectionOpenAck.prototype.proofConsensus = $util.newBuffer([]);
                    MsgConnectionOpenAck.prototype.consensusHeight = null;
                    MsgConnectionOpenAck.prototype.signer = '';
                    MsgConnectionOpenAck.create = function create(properties) {
                        return new MsgConnectionOpenAck(properties);
                    };
                    MsgConnectionOpenAck.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.connectionId != null && Object.hasOwnProperty.call(m, 'connectionId'))
                            w.uint32(10).string(m.connectionId);
                        if (
                            m.counterpartyConnectionId != null &&
                            Object.hasOwnProperty.call(m, 'counterpartyConnectionId')
                        )
                            w.uint32(18).string(m.counterpartyConnectionId);
                        if (m.version != null && Object.hasOwnProperty.call(m, 'version'))
                            $root.ibc.core.connection.v1.Version.encode(m.version, w.uint32(26).fork()).ldelim();
                        if (m.clientState != null && Object.hasOwnProperty.call(m, 'clientState'))
                            $root.google.protobuf.Any.encode(m.clientState, w.uint32(34).fork()).ldelim();
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(42).fork()).ldelim();
                        if (m.proofTry != null && Object.hasOwnProperty.call(m, 'proofTry'))
                            w.uint32(50).bytes(m.proofTry);
                        if (m.proofClient != null && Object.hasOwnProperty.call(m, 'proofClient'))
                            w.uint32(58).bytes(m.proofClient);
                        if (m.proofConsensus != null && Object.hasOwnProperty.call(m, 'proofConsensus'))
                            w.uint32(66).bytes(m.proofConsensus);
                        if (m.consensusHeight != null && Object.hasOwnProperty.call(m, 'consensusHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.consensusHeight, w.uint32(74).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(82).string(m.signer);
                        return w;
                    };
                    MsgConnectionOpenAck.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenAck();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.connectionId = r.string();
                                    break;
                                case 2:
                                    m.counterpartyConnectionId = r.string();
                                    break;
                                case 3:
                                    m.version = $root.ibc.core.connection.v1.Version.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.clientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 6:
                                    m.proofTry = r.bytes();
                                    break;
                                case 7:
                                    m.proofClient = r.bytes();
                                    break;
                                case 8:
                                    m.proofConsensus = r.bytes();
                                    break;
                                case 9:
                                    m.consensusHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 10:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgConnectionOpenAck;
                })();
                v1.MsgConnectionOpenAckResponse = (function () {
                    function MsgConnectionOpenAckResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenAckResponse.create = function create(properties) {
                        return new MsgConnectionOpenAckResponse(properties);
                    };
                    MsgConnectionOpenAckResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgConnectionOpenAckResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenAckResponse();
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
                    return MsgConnectionOpenAckResponse;
                })();
                v1.MsgConnectionOpenConfirm = (function () {
                    function MsgConnectionOpenConfirm(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenConfirm.prototype.connectionId = '';
                    MsgConnectionOpenConfirm.prototype.proofAck = $util.newBuffer([]);
                    MsgConnectionOpenConfirm.prototype.proofHeight = null;
                    MsgConnectionOpenConfirm.prototype.signer = '';
                    MsgConnectionOpenConfirm.create = function create(properties) {
                        return new MsgConnectionOpenConfirm(properties);
                    };
                    MsgConnectionOpenConfirm.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.connectionId != null && Object.hasOwnProperty.call(m, 'connectionId'))
                            w.uint32(10).string(m.connectionId);
                        if (m.proofAck != null && Object.hasOwnProperty.call(m, 'proofAck'))
                            w.uint32(18).bytes(m.proofAck);
                        if (m.proofHeight != null && Object.hasOwnProperty.call(m, 'proofHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.proofHeight, w.uint32(26).fork()).ldelim();
                        if (m.signer != null && Object.hasOwnProperty.call(m, 'signer')) w.uint32(34).string(m.signer);
                        return w;
                    };
                    MsgConnectionOpenConfirm.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenConfirm();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.connectionId = r.string();
                                    break;
                                case 2:
                                    m.proofAck = r.bytes();
                                    break;
                                case 3:
                                    m.proofHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.signer = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgConnectionOpenConfirm;
                })();
                v1.MsgConnectionOpenConfirmResponse = (function () {
                    function MsgConnectionOpenConfirmResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgConnectionOpenConfirmResponse.create = function create(properties) {
                        return new MsgConnectionOpenConfirmResponse(properties);
                    };
                    MsgConnectionOpenConfirmResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgConnectionOpenConfirmResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse();
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
                    return MsgConnectionOpenConfirmResponse;
                })();
                v1.ConnectionEnd = (function () {
                    function ConnectionEnd(p) {
                        this.versions = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConnectionEnd.prototype.clientId = '';
                    ConnectionEnd.prototype.versions = $util.emptyArray;
                    ConnectionEnd.prototype.state = 0;
                    ConnectionEnd.prototype.counterparty = null;
                    ConnectionEnd.prototype.delayPeriod = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    ConnectionEnd.create = function create(properties) {
                        return new ConnectionEnd(properties);
                    };
                    ConnectionEnd.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.versions != null && m.versions.length) {
                            for (var i = 0; i < m.versions.length; ++i)
                                $root.ibc.core.connection.v1.Version.encode(
                                    m.versions[i],
                                    w.uint32(18).fork(),
                                ).ldelim();
                        }
                        if (m.state != null && Object.hasOwnProperty.call(m, 'state')) w.uint32(24).int32(m.state);
                        if (m.counterparty != null && Object.hasOwnProperty.call(m, 'counterparty'))
                            $root.ibc.core.connection.v1.Counterparty.encode(
                                m.counterparty,
                                w.uint32(34).fork(),
                            ).ldelim();
                        if (m.delayPeriod != null && Object.hasOwnProperty.call(m, 'delayPeriod'))
                            w.uint32(40).uint64(m.delayPeriod);
                        return w;
                    };
                    ConnectionEnd.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.ConnectionEnd();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    if (!(m.versions && m.versions.length)) m.versions = [];
                                    m.versions.push($root.ibc.core.connection.v1.Version.decode(r, r.uint32()));
                                    break;
                                case 3:
                                    m.state = r.int32();
                                    break;
                                case 4:
                                    m.counterparty = $root.ibc.core.connection.v1.Counterparty.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.delayPeriod = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConnectionEnd;
                })();
                v1.IdentifiedConnection = (function () {
                    function IdentifiedConnection(p) {
                        this.versions = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    IdentifiedConnection.prototype.id = '';
                    IdentifiedConnection.prototype.clientId = '';
                    IdentifiedConnection.prototype.versions = $util.emptyArray;
                    IdentifiedConnection.prototype.state = 0;
                    IdentifiedConnection.prototype.counterparty = null;
                    IdentifiedConnection.prototype.delayPeriod = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    IdentifiedConnection.create = function create(properties) {
                        return new IdentifiedConnection(properties);
                    };
                    IdentifiedConnection.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.id != null && Object.hasOwnProperty.call(m, 'id')) w.uint32(10).string(m.id);
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(18).string(m.clientId);
                        if (m.versions != null && m.versions.length) {
                            for (var i = 0; i < m.versions.length; ++i)
                                $root.ibc.core.connection.v1.Version.encode(
                                    m.versions[i],
                                    w.uint32(26).fork(),
                                ).ldelim();
                        }
                        if (m.state != null && Object.hasOwnProperty.call(m, 'state')) w.uint32(32).int32(m.state);
                        if (m.counterparty != null && Object.hasOwnProperty.call(m, 'counterparty'))
                            $root.ibc.core.connection.v1.Counterparty.encode(
                                m.counterparty,
                                w.uint32(42).fork(),
                            ).ldelim();
                        if (m.delayPeriod != null && Object.hasOwnProperty.call(m, 'delayPeriod'))
                            w.uint32(48).uint64(m.delayPeriod);
                        return w;
                    };
                    IdentifiedConnection.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.IdentifiedConnection();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.id = r.string();
                                    break;
                                case 2:
                                    m.clientId = r.string();
                                    break;
                                case 3:
                                    if (!(m.versions && m.versions.length)) m.versions = [];
                                    m.versions.push($root.ibc.core.connection.v1.Version.decode(r, r.uint32()));
                                    break;
                                case 4:
                                    m.state = r.int32();
                                    break;
                                case 5:
                                    m.counterparty = $root.ibc.core.connection.v1.Counterparty.decode(r, r.uint32());
                                    break;
                                case 6:
                                    m.delayPeriod = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return IdentifiedConnection;
                })();
                v1.State = (function () {
                    const valuesById = {},
                        values = Object.create(valuesById);
                    values[(valuesById[0] = 'STATE_UNINITIALIZED_UNSPECIFIED')] = 0;
                    values[(valuesById[1] = 'STATE_INIT')] = 1;
                    values[(valuesById[2] = 'STATE_TRYOPEN')] = 2;
                    values[(valuesById[3] = 'STATE_OPEN')] = 3;
                    return values;
                })();
                v1.Counterparty = (function () {
                    function Counterparty(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Counterparty.prototype.clientId = '';
                    Counterparty.prototype.connectionId = '';
                    Counterparty.prototype.prefix = null;
                    Counterparty.create = function create(properties) {
                        return new Counterparty(properties);
                    };
                    Counterparty.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.connectionId != null && Object.hasOwnProperty.call(m, 'connectionId'))
                            w.uint32(18).string(m.connectionId);
                        if (m.prefix != null && Object.hasOwnProperty.call(m, 'prefix'))
                            $root.ibc.core.commitment.v1.MerklePrefix.encode(m.prefix, w.uint32(26).fork()).ldelim();
                        return w;
                    };
                    Counterparty.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.Counterparty();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.connectionId = r.string();
                                    break;
                                case 3:
                                    m.prefix = $root.ibc.core.commitment.v1.MerklePrefix.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Counterparty;
                })();
                v1.ClientPaths = (function () {
                    function ClientPaths(p) {
                        this.paths = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientPaths.prototype.paths = $util.emptyArray;
                    ClientPaths.create = function create(properties) {
                        return new ClientPaths(properties);
                    };
                    ClientPaths.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.paths != null && m.paths.length) {
                            for (var i = 0; i < m.paths.length; ++i) w.uint32(10).string(m.paths[i]);
                        }
                        return w;
                    };
                    ClientPaths.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.ClientPaths();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    if (!(m.paths && m.paths.length)) m.paths = [];
                                    m.paths.push(r.string());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientPaths;
                })();
                v1.ConnectionPaths = (function () {
                    function ConnectionPaths(p) {
                        this.paths = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConnectionPaths.prototype.clientId = '';
                    ConnectionPaths.prototype.paths = $util.emptyArray;
                    ConnectionPaths.create = function create(properties) {
                        return new ConnectionPaths(properties);
                    };
                    ConnectionPaths.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.paths != null && m.paths.length) {
                            for (var i = 0; i < m.paths.length; ++i) w.uint32(18).string(m.paths[i]);
                        }
                        return w;
                    };
                    ConnectionPaths.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.ConnectionPaths();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    if (!(m.paths && m.paths.length)) m.paths = [];
                                    m.paths.push(r.string());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConnectionPaths;
                })();
                v1.Version = (function () {
                    function Version(p) {
                        this.features = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Version.prototype.identifier = '';
                    Version.prototype.features = $util.emptyArray;
                    Version.create = function create(properties) {
                        return new Version(properties);
                    };
                    Version.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.identifier != null && Object.hasOwnProperty.call(m, 'identifier'))
                            w.uint32(10).string(m.identifier);
                        if (m.features != null && m.features.length) {
                            for (var i = 0; i < m.features.length; ++i) w.uint32(18).string(m.features[i]);
                        }
                        return w;
                    };
                    Version.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.Version();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.identifier = r.string();
                                    break;
                                case 2:
                                    if (!(m.features && m.features.length)) m.features = [];
                                    m.features.push(r.string());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Version;
                })();
                v1.Params = (function () {
                    function Params(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Params.prototype.maxExpectedTimePerBlock = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Params.create = function create(properties) {
                        return new Params(properties);
                    };
                    Params.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (
                            m.maxExpectedTimePerBlock != null &&
                            Object.hasOwnProperty.call(m, 'maxExpectedTimePerBlock')
                        )
                            w.uint32(8).uint64(m.maxExpectedTimePerBlock);
                        return w;
                    };
                    Params.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.core.connection.v1.Params();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.maxExpectedTimePerBlock = r.uint64();
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
                return v1;
            })();
            return connection;
        })();
        return core;
    })();
    ibc.applications = (function () {
        const applications = {};
        applications.transfer = (function () {
            const transfer = {};
            transfer.v1 = (function () {
                const v1 = {};
                v1.Msg = (function () {
                    function Msg(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
                    (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                    Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
                    Object.defineProperty(
                        (Msg.prototype.transfer = function transfer(request, callback) {
                            return this.rpcCall(
                                transfer,
                                $root.ibc.applications.transfer.v1.MsgTransfer,
                                $root.ibc.applications.transfer.v1.MsgTransferResponse,
                                request,
                                callback,
                            );
                        }),
                        'name',
                        { value: 'Transfer' },
                    );
                    return Msg;
                })();
                v1.MsgTransfer = (function () {
                    function MsgTransfer(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgTransfer.prototype.sourcePort = '';
                    MsgTransfer.prototype.sourceChannel = '';
                    MsgTransfer.prototype.token = null;
                    MsgTransfer.prototype.sender = '';
                    MsgTransfer.prototype.receiver = '';
                    MsgTransfer.prototype.timeoutHeight = null;
                    MsgTransfer.prototype.timeoutTimestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    MsgTransfer.create = function create(properties) {
                        return new MsgTransfer(properties);
                    };
                    MsgTransfer.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.sourcePort != null && Object.hasOwnProperty.call(m, 'sourcePort'))
                            w.uint32(10).string(m.sourcePort);
                        if (m.sourceChannel != null && Object.hasOwnProperty.call(m, 'sourceChannel'))
                            w.uint32(18).string(m.sourceChannel);
                        if (m.token != null && Object.hasOwnProperty.call(m, 'token'))
                            $root.cosmos.base.v1beta1.Coin.encode(m.token, w.uint32(26).fork()).ldelim();
                        if (m.sender != null && Object.hasOwnProperty.call(m, 'sender')) w.uint32(34).string(m.sender);
                        if (m.receiver != null && Object.hasOwnProperty.call(m, 'receiver'))
                            w.uint32(42).string(m.receiver);
                        if (m.timeoutHeight != null && Object.hasOwnProperty.call(m, 'timeoutHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.timeoutHeight, w.uint32(50).fork()).ldelim();
                        if (m.timeoutTimestamp != null && Object.hasOwnProperty.call(m, 'timeoutTimestamp'))
                            w.uint32(56).uint64(m.timeoutTimestamp);
                        return w;
                    };
                    MsgTransfer.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.applications.transfer.v1.MsgTransfer();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.sourcePort = r.string();
                                    break;
                                case 2:
                                    m.sourceChannel = r.string();
                                    break;
                                case 3:
                                    m.token = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.sender = r.string();
                                    break;
                                case 5:
                                    m.receiver = r.string();
                                    break;
                                case 6:
                                    m.timeoutHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 7:
                                    m.timeoutTimestamp = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return MsgTransfer;
                })();
                v1.MsgTransferResponse = (function () {
                    function MsgTransferResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    MsgTransferResponse.create = function create(properties) {
                        return new MsgTransferResponse(properties);
                    };
                    MsgTransferResponse.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        return w;
                    };
                    MsgTransferResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.applications.transfer.v1.MsgTransferResponse();
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
                    return MsgTransferResponse;
                })();
                return v1;
            })();
            return transfer;
        })();
        return applications;
    })();
    ibc.lightclients = (function () {
        const lightclients = {};
        lightclients.tendermint = (function () {
            const tendermint = {};
            tendermint.v1 = (function () {
                const v1 = {};
                v1.ClientState = (function () {
                    function ClientState(p) {
                        this.proofSpecs = [];
                        this.upgradePath = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientState.prototype.chainId = '';
                    ClientState.prototype.trustLevel = null;
                    ClientState.prototype.trustingPeriod = null;
                    ClientState.prototype.unbondingPeriod = null;
                    ClientState.prototype.maxClockDrift = null;
                    ClientState.prototype.frozenHeight = null;
                    ClientState.prototype.latestHeight = null;
                    ClientState.prototype.proofSpecs = $util.emptyArray;
                    ClientState.prototype.upgradePath = $util.emptyArray;
                    ClientState.prototype.allowUpdateAfterExpiry = false;
                    ClientState.prototype.allowUpdateAfterMisbehaviour = false;
                    ClientState.create = function create(properties) {
                        return new ClientState(properties);
                    };
                    ClientState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.chainId != null && Object.hasOwnProperty.call(m, 'chainId'))
                            w.uint32(10).string(m.chainId);
                        if (m.trustLevel != null && Object.hasOwnProperty.call(m, 'trustLevel'))
                            $root.ibc.lightclients.tendermint.v1.Fraction.encode(
                                m.trustLevel,
                                w.uint32(18).fork(),
                            ).ldelim();
                        if (m.trustingPeriod != null && Object.hasOwnProperty.call(m, 'trustingPeriod'))
                            $root.google.protobuf.Duration.encode(m.trustingPeriod, w.uint32(26).fork()).ldelim();
                        if (m.unbondingPeriod != null && Object.hasOwnProperty.call(m, 'unbondingPeriod'))
                            $root.google.protobuf.Duration.encode(m.unbondingPeriod, w.uint32(34).fork()).ldelim();
                        if (m.maxClockDrift != null && Object.hasOwnProperty.call(m, 'maxClockDrift'))
                            $root.google.protobuf.Duration.encode(m.maxClockDrift, w.uint32(42).fork()).ldelim();
                        if (m.frozenHeight != null && Object.hasOwnProperty.call(m, 'frozenHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.frozenHeight, w.uint32(50).fork()).ldelim();
                        if (m.latestHeight != null && Object.hasOwnProperty.call(m, 'latestHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.latestHeight, w.uint32(58).fork()).ldelim();
                        if (m.proofSpecs != null && m.proofSpecs.length) {
                            for (var i = 0; i < m.proofSpecs.length; ++i)
                                $root.ics23.ProofSpec.encode(m.proofSpecs[i], w.uint32(66).fork()).ldelim();
                        }
                        if (m.upgradePath != null && m.upgradePath.length) {
                            for (var i = 0; i < m.upgradePath.length; ++i) w.uint32(74).string(m.upgradePath[i]);
                        }
                        if (m.allowUpdateAfterExpiry != null && Object.hasOwnProperty.call(m, 'allowUpdateAfterExpiry'))
                            w.uint32(80).bool(m.allowUpdateAfterExpiry);
                        if (
                            m.allowUpdateAfterMisbehaviour != null &&
                            Object.hasOwnProperty.call(m, 'allowUpdateAfterMisbehaviour')
                        )
                            w.uint32(88).bool(m.allowUpdateAfterMisbehaviour);
                        return w;
                    };
                    ClientState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.tendermint.v1.ClientState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.chainId = r.string();
                                    break;
                                case 2:
                                    m.trustLevel = $root.ibc.lightclients.tendermint.v1.Fraction.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.trustingPeriod = $root.google.protobuf.Duration.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.unbondingPeriod = $root.google.protobuf.Duration.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.maxClockDrift = $root.google.protobuf.Duration.decode(r, r.uint32());
                                    break;
                                case 6:
                                    m.frozenHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 7:
                                    m.latestHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 8:
                                    if (!(m.proofSpecs && m.proofSpecs.length)) m.proofSpecs = [];
                                    m.proofSpecs.push($root.ics23.ProofSpec.decode(r, r.uint32()));
                                    break;
                                case 9:
                                    if (!(m.upgradePath && m.upgradePath.length)) m.upgradePath = [];
                                    m.upgradePath.push(r.string());
                                    break;
                                case 10:
                                    m.allowUpdateAfterExpiry = r.bool();
                                    break;
                                case 11:
                                    m.allowUpdateAfterMisbehaviour = r.bool();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientState;
                })();
                v1.ConsensusState = (function () {
                    function ConsensusState(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConsensusState.prototype.timestamp = null;
                    ConsensusState.prototype.root = null;
                    ConsensusState.prototype.nextValidatorsHash = $util.newBuffer([]);
                    ConsensusState.create = function create(properties) {
                        return new ConsensusState(properties);
                    };
                    ConsensusState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                            $root.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(10).fork()).ldelim();
                        if (m.root != null && Object.hasOwnProperty.call(m, 'root'))
                            $root.ibc.core.commitment.v1.MerkleRoot.encode(m.root, w.uint32(18).fork()).ldelim();
                        if (m.nextValidatorsHash != null && Object.hasOwnProperty.call(m, 'nextValidatorsHash'))
                            w.uint32(26).bytes(m.nextValidatorsHash);
                        return w;
                    };
                    ConsensusState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.tendermint.v1.ConsensusState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.timestamp = $root.google.protobuf.Timestamp.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.root = $root.ibc.core.commitment.v1.MerkleRoot.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.nextValidatorsHash = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConsensusState;
                })();
                v1.Misbehaviour = (function () {
                    function Misbehaviour(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Misbehaviour.prototype.clientId = '';
                    Misbehaviour.prototype.header_1 = null;
                    Misbehaviour.prototype.header_2 = null;
                    Misbehaviour.create = function create(properties) {
                        return new Misbehaviour(properties);
                    };
                    Misbehaviour.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.header_1 != null && Object.hasOwnProperty.call(m, 'header_1'))
                            $root.ibc.lightclients.tendermint.v1.Header.encode(
                                m.header_1,
                                w.uint32(18).fork(),
                            ).ldelim();
                        if (m.header_2 != null && Object.hasOwnProperty.call(m, 'header_2'))
                            $root.ibc.lightclients.tendermint.v1.Header.encode(
                                m.header_2,
                                w.uint32(26).fork(),
                            ).ldelim();
                        return w;
                    };
                    Misbehaviour.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.tendermint.v1.Misbehaviour();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.header_1 = $root.ibc.lightclients.tendermint.v1.Header.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.header_2 = $root.ibc.lightclients.tendermint.v1.Header.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Misbehaviour;
                })();
                v1.Header = (function () {
                    function Header(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Header.prototype.signedHeader = null;
                    Header.prototype.validatorSet = null;
                    Header.prototype.trustedHeight = null;
                    Header.prototype.trustedValidators = null;
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };
                    Header.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.signedHeader != null && Object.hasOwnProperty.call(m, 'signedHeader'))
                            $root.tendermintV2.types.SignedHeader.encode(m.signedHeader, w.uint32(10).fork()).ldelim();
                        if (m.validatorSet != null && Object.hasOwnProperty.call(m, 'validatorSet'))
                            $root.tendermintV2.types.ValidatorSet.encode(m.validatorSet, w.uint32(18).fork()).ldelim();
                        if (m.trustedHeight != null && Object.hasOwnProperty.call(m, 'trustedHeight'))
                            $root.ibc.core.client.v1.Height.encode(m.trustedHeight, w.uint32(26).fork()).ldelim();
                        if (m.trustedValidators != null && Object.hasOwnProperty.call(m, 'trustedValidators'))
                            $root.tendermintV2.types.ValidatorSet.encode(
                                m.trustedValidators,
                                w.uint32(34).fork(),
                            ).ldelim();
                        return w;
                    };
                    Header.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.tendermint.v1.Header();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.signedHeader = $root.tendermintV2.types.SignedHeader.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.validatorSet = $root.tendermintV2.types.ValidatorSet.decode(r, r.uint32());
                                    break;
                                case 3:
                                    m.trustedHeight = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                case 4:
                                    m.trustedValidators = $root.tendermintV2.types.ValidatorSet.decode(r, r.uint32());
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
                v1.Fraction = (function () {
                    function Fraction(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Fraction.prototype.numerator = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Fraction.prototype.denominator = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Fraction.create = function create(properties) {
                        return new Fraction(properties);
                    };
                    Fraction.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.numerator != null && Object.hasOwnProperty.call(m, 'numerator'))
                            w.uint32(8).uint64(m.numerator);
                        if (m.denominator != null && Object.hasOwnProperty.call(m, 'denominator'))
                            w.uint32(16).uint64(m.denominator);
                        return w;
                    };
                    Fraction.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.tendermint.v1.Fraction();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.numerator = r.uint64();
                                    break;
                                case 2:
                                    m.denominator = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return Fraction;
                })();
                return v1;
            })();
            return tendermint;
        })();
        lightclients.localhost = (function () {
            const localhost = {};
            localhost.v1 = (function () {
                const v1 = {};
                v1.ClientState = (function () {
                    function ClientState(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientState.prototype.chainId = '';
                    ClientState.prototype.height = null;
                    ClientState.create = function create(properties) {
                        return new ClientState(properties);
                    };
                    ClientState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.chainId != null && Object.hasOwnProperty.call(m, 'chainId'))
                            w.uint32(10).string(m.chainId);
                        if (m.height != null && Object.hasOwnProperty.call(m, 'height'))
                            $root.ibc.core.client.v1.Height.encode(m.height, w.uint32(18).fork()).ldelim();
                        return w;
                    };
                    ClientState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.localhost.v1.ClientState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.chainId = r.string();
                                    break;
                                case 2:
                                    m.height = $root.ibc.core.client.v1.Height.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientState;
                })();
                return v1;
            })();
            return localhost;
        })();
        lightclients.solomachine = (function () {
            const solomachine = {};
            solomachine.v1 = (function () {
                const v1 = {};
                v1.ClientState = (function () {
                    function ClientState(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientState.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    ClientState.prototype.frozenSequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    ClientState.prototype.consensusState = null;
                    ClientState.prototype.allowUpdateAfterProposal = false;
                    ClientState.create = function create(properties) {
                        return new ClientState(properties);
                    };
                    ClientState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(8).uint64(m.sequence);
                        if (m.frozenSequence != null && Object.hasOwnProperty.call(m, 'frozenSequence'))
                            w.uint32(16).uint64(m.frozenSequence);
                        if (m.consensusState != null && Object.hasOwnProperty.call(m, 'consensusState'))
                            $root.ibc.lightclients.solomachine.v1.ConsensusState.encode(
                                m.consensusState,
                                w.uint32(26).fork(),
                            ).ldelim();
                        if (
                            m.allowUpdateAfterProposal != null &&
                            Object.hasOwnProperty.call(m, 'allowUpdateAfterProposal')
                        )
                            w.uint32(32).bool(m.allowUpdateAfterProposal);
                        return w;
                    };
                    ClientState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.ClientState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.sequence = r.uint64();
                                    break;
                                case 2:
                                    m.frozenSequence = r.uint64();
                                    break;
                                case 3:
                                    m.consensusState = $root.ibc.lightclients.solomachine.v1.ConsensusState.decode(
                                        r,
                                        r.uint32(),
                                    );
                                    break;
                                case 4:
                                    m.allowUpdateAfterProposal = r.bool();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientState;
                })();
                v1.ConsensusState = (function () {
                    function ConsensusState(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConsensusState.prototype.publicKey = null;
                    ConsensusState.prototype.diversifier = '';
                    ConsensusState.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    ConsensusState.create = function create(properties) {
                        return new ConsensusState(properties);
                    };
                    ConsensusState.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.publicKey != null && Object.hasOwnProperty.call(m, 'publicKey'))
                            $root.google.protobuf.Any.encode(m.publicKey, w.uint32(10).fork()).ldelim();
                        if (m.diversifier != null && Object.hasOwnProperty.call(m, 'diversifier'))
                            w.uint32(18).string(m.diversifier);
                        if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                            w.uint32(24).uint64(m.timestamp);
                        return w;
                    };
                    ConsensusState.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.ConsensusState();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.publicKey = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.diversifier = r.string();
                                    break;
                                case 3:
                                    m.timestamp = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConsensusState;
                })();
                v1.Header = (function () {
                    function Header(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Header.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Header.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Header.prototype.signature = $util.newBuffer([]);
                    Header.prototype.newPublicKey = null;
                    Header.prototype.newDiversifier = '';
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };
                    Header.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(8).uint64(m.sequence);
                        if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                            w.uint32(16).uint64(m.timestamp);
                        if (m.signature != null && Object.hasOwnProperty.call(m, 'signature'))
                            w.uint32(26).bytes(m.signature);
                        if (m.newPublicKey != null && Object.hasOwnProperty.call(m, 'newPublicKey'))
                            $root.google.protobuf.Any.encode(m.newPublicKey, w.uint32(34).fork()).ldelim();
                        if (m.newDiversifier != null && Object.hasOwnProperty.call(m, 'newDiversifier'))
                            w.uint32(42).string(m.newDiversifier);
                        return w;
                    };
                    Header.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.Header();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.sequence = r.uint64();
                                    break;
                                case 2:
                                    m.timestamp = r.uint64();
                                    break;
                                case 3:
                                    m.signature = r.bytes();
                                    break;
                                case 4:
                                    m.newPublicKey = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 5:
                                    m.newDiversifier = r.string();
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
                v1.Misbehaviour = (function () {
                    function Misbehaviour(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    Misbehaviour.prototype.clientId = '';
                    Misbehaviour.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    Misbehaviour.prototype.signatureOne = null;
                    Misbehaviour.prototype.signatureTwo = null;
                    Misbehaviour.create = function create(properties) {
                        return new Misbehaviour(properties);
                    };
                    Misbehaviour.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.clientId != null && Object.hasOwnProperty.call(m, 'clientId'))
                            w.uint32(10).string(m.clientId);
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(16).uint64(m.sequence);
                        if (m.signatureOne != null && Object.hasOwnProperty.call(m, 'signatureOne'))
                            $root.ibc.lightclients.solomachine.v1.SignatureAndData.encode(
                                m.signatureOne,
                                w.uint32(26).fork(),
                            ).ldelim();
                        if (m.signatureTwo != null && Object.hasOwnProperty.call(m, 'signatureTwo'))
                            $root.ibc.lightclients.solomachine.v1.SignatureAndData.encode(
                                m.signatureTwo,
                                w.uint32(34).fork(),
                            ).ldelim();
                        return w;
                    };
                    Misbehaviour.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.Misbehaviour();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.clientId = r.string();
                                    break;
                                case 2:
                                    m.sequence = r.uint64();
                                    break;
                                case 3:
                                    m.signatureOne = $root.ibc.lightclients.solomachine.v1.SignatureAndData.decode(
                                        r,
                                        r.uint32(),
                                    );
                                    break;
                                case 4:
                                    m.signatureTwo = $root.ibc.lightclients.solomachine.v1.SignatureAndData.decode(
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
                    return Misbehaviour;
                })();
                v1.SignatureAndData = (function () {
                    function SignatureAndData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    SignatureAndData.prototype.signature = $util.newBuffer([]);
                    SignatureAndData.prototype.dataType = 0;
                    SignatureAndData.prototype.data = $util.newBuffer([]);
                    SignatureAndData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    SignatureAndData.create = function create(properties) {
                        return new SignatureAndData(properties);
                    };
                    SignatureAndData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.signature != null && Object.hasOwnProperty.call(m, 'signature'))
                            w.uint32(10).bytes(m.signature);
                        if (m.dataType != null && Object.hasOwnProperty.call(m, 'dataType'))
                            w.uint32(16).int32(m.dataType);
                        if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(26).bytes(m.data);
                        if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                            w.uint32(32).uint64(m.timestamp);
                        return w;
                    };
                    SignatureAndData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.SignatureAndData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.signature = r.bytes();
                                    break;
                                case 2:
                                    m.dataType = r.int32();
                                    break;
                                case 3:
                                    m.data = r.bytes();
                                    break;
                                case 4:
                                    m.timestamp = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return SignatureAndData;
                })();
                v1.TimestampedSignatureData = (function () {
                    function TimestampedSignatureData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    TimestampedSignatureData.prototype.signatureData = $util.newBuffer([]);
                    TimestampedSignatureData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    TimestampedSignatureData.create = function create(properties) {
                        return new TimestampedSignatureData(properties);
                    };
                    TimestampedSignatureData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.signatureData != null && Object.hasOwnProperty.call(m, 'signatureData'))
                            w.uint32(10).bytes(m.signatureData);
                        if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                            w.uint32(16).uint64(m.timestamp);
                        return w;
                    };
                    TimestampedSignatureData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.TimestampedSignatureData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.signatureData = r.bytes();
                                    break;
                                case 2:
                                    m.timestamp = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return TimestampedSignatureData;
                })();
                v1.SignBytes = (function () {
                    function SignBytes(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    SignBytes.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    SignBytes.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    SignBytes.prototype.diversifier = '';
                    SignBytes.prototype.dataType = 0;
                    SignBytes.prototype.data = $util.newBuffer([]);
                    SignBytes.create = function create(properties) {
                        return new SignBytes(properties);
                    };
                    SignBytes.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.sequence != null && Object.hasOwnProperty.call(m, 'sequence'))
                            w.uint32(8).uint64(m.sequence);
                        if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                            w.uint32(16).uint64(m.timestamp);
                        if (m.diversifier != null && Object.hasOwnProperty.call(m, 'diversifier'))
                            w.uint32(26).string(m.diversifier);
                        if (m.dataType != null && Object.hasOwnProperty.call(m, 'dataType'))
                            w.uint32(32).int32(m.dataType);
                        if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(42).bytes(m.data);
                        return w;
                    };
                    SignBytes.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.SignBytes();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.sequence = r.uint64();
                                    break;
                                case 2:
                                    m.timestamp = r.uint64();
                                    break;
                                case 3:
                                    m.diversifier = r.string();
                                    break;
                                case 4:
                                    m.dataType = r.int32();
                                    break;
                                case 5:
                                    m.data = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return SignBytes;
                })();
                v1.DataType = (function () {
                    const valuesById = {},
                        values = Object.create(valuesById);
                    values[(valuesById[0] = 'DATA_TYPE_UNINITIALIZED_UNSPECIFIED')] = 0;
                    values[(valuesById[1] = 'DATA_TYPE_CLIENT_STATE')] = 1;
                    values[(valuesById[2] = 'DATA_TYPE_CONSENSUS_STATE')] = 2;
                    values[(valuesById[3] = 'DATA_TYPE_CONNECTION_STATE')] = 3;
                    values[(valuesById[4] = 'DATA_TYPE_CHANNEL_STATE')] = 4;
                    values[(valuesById[5] = 'DATA_TYPE_PACKET_COMMITMENT')] = 5;
                    values[(valuesById[6] = 'DATA_TYPE_PACKET_ACKNOWLEDGEMENT')] = 6;
                    values[(valuesById[7] = 'DATA_TYPE_PACKET_RECEIPT_ABSENCE')] = 7;
                    values[(valuesById[8] = 'DATA_TYPE_NEXT_SEQUENCE_RECV')] = 8;
                    values[(valuesById[9] = 'DATA_TYPE_HEADER')] = 9;
                    return values;
                })();
                v1.HeaderData = (function () {
                    function HeaderData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    HeaderData.prototype.newPubKey = null;
                    HeaderData.prototype.newDiversifier = '';
                    HeaderData.create = function create(properties) {
                        return new HeaderData(properties);
                    };
                    HeaderData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.newPubKey != null && Object.hasOwnProperty.call(m, 'newPubKey'))
                            $root.google.protobuf.Any.encode(m.newPubKey, w.uint32(10).fork()).ldelim();
                        if (m.newDiversifier != null && Object.hasOwnProperty.call(m, 'newDiversifier'))
                            w.uint32(18).string(m.newDiversifier);
                        return w;
                    };
                    HeaderData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.HeaderData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.newPubKey = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                case 2:
                                    m.newDiversifier = r.string();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return HeaderData;
                })();
                v1.ClientStateData = (function () {
                    function ClientStateData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ClientStateData.prototype.path = $util.newBuffer([]);
                    ClientStateData.prototype.clientState = null;
                    ClientStateData.create = function create(properties) {
                        return new ClientStateData(properties);
                    };
                    ClientStateData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.clientState != null && Object.hasOwnProperty.call(m, 'clientState'))
                            $root.google.protobuf.Any.encode(m.clientState, w.uint32(18).fork()).ldelim();
                        return w;
                    };
                    ClientStateData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.ClientStateData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.clientState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ClientStateData;
                })();
                v1.ConsensusStateData = (function () {
                    function ConsensusStateData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConsensusStateData.prototype.path = $util.newBuffer([]);
                    ConsensusStateData.prototype.consensusState = null;
                    ConsensusStateData.create = function create(properties) {
                        return new ConsensusStateData(properties);
                    };
                    ConsensusStateData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.consensusState != null && Object.hasOwnProperty.call(m, 'consensusState'))
                            $root.google.protobuf.Any.encode(m.consensusState, w.uint32(18).fork()).ldelim();
                        return w;
                    };
                    ConsensusStateData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.ConsensusStateData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.consensusState = $root.google.protobuf.Any.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConsensusStateData;
                })();
                v1.ConnectionStateData = (function () {
                    function ConnectionStateData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ConnectionStateData.prototype.path = $util.newBuffer([]);
                    ConnectionStateData.prototype.connection = null;
                    ConnectionStateData.create = function create(properties) {
                        return new ConnectionStateData(properties);
                    };
                    ConnectionStateData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.connection != null && Object.hasOwnProperty.call(m, 'connection'))
                            $root.ibc.core.connection.v1.ConnectionEnd.encode(
                                m.connection,
                                w.uint32(18).fork(),
                            ).ldelim();
                        return w;
                    };
                    ConnectionStateData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.ConnectionStateData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.connection = $root.ibc.core.connection.v1.ConnectionEnd.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ConnectionStateData;
                })();
                v1.ChannelStateData = (function () {
                    function ChannelStateData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    ChannelStateData.prototype.path = $util.newBuffer([]);
                    ChannelStateData.prototype.channel = null;
                    ChannelStateData.create = function create(properties) {
                        return new ChannelStateData(properties);
                    };
                    ChannelStateData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.channel != null && Object.hasOwnProperty.call(m, 'channel'))
                            $root.ibc.core.channel.v1.Channel.encode(m.channel, w.uint32(18).fork()).ldelim();
                        return w;
                    };
                    ChannelStateData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.ChannelStateData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.channel = $root.ibc.core.channel.v1.Channel.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return ChannelStateData;
                })();
                v1.PacketCommitmentData = (function () {
                    function PacketCommitmentData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    PacketCommitmentData.prototype.path = $util.newBuffer([]);
                    PacketCommitmentData.prototype.commitment = $util.newBuffer([]);
                    PacketCommitmentData.create = function create(properties) {
                        return new PacketCommitmentData(properties);
                    };
                    PacketCommitmentData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.commitment != null && Object.hasOwnProperty.call(m, 'commitment'))
                            w.uint32(18).bytes(m.commitment);
                        return w;
                    };
                    PacketCommitmentData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.PacketCommitmentData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.commitment = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return PacketCommitmentData;
                })();
                v1.PacketAcknowledgementData = (function () {
                    function PacketAcknowledgementData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    PacketAcknowledgementData.prototype.path = $util.newBuffer([]);
                    PacketAcknowledgementData.prototype.acknowledgement = $util.newBuffer([]);
                    PacketAcknowledgementData.create = function create(properties) {
                        return new PacketAcknowledgementData(properties);
                    };
                    PacketAcknowledgementData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.acknowledgement != null && Object.hasOwnProperty.call(m, 'acknowledgement'))
                            w.uint32(18).bytes(m.acknowledgement);
                        return w;
                    };
                    PacketAcknowledgementData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.PacketAcknowledgementData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.acknowledgement = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return PacketAcknowledgementData;
                })();
                v1.PacketReceiptAbsenceData = (function () {
                    function PacketReceiptAbsenceData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    PacketReceiptAbsenceData.prototype.path = $util.newBuffer([]);
                    PacketReceiptAbsenceData.create = function create(properties) {
                        return new PacketReceiptAbsenceData(properties);
                    };
                    PacketReceiptAbsenceData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        return w;
                    };
                    PacketReceiptAbsenceData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return PacketReceiptAbsenceData;
                })();
                v1.NextSequenceRecvData = (function () {
                    function NextSequenceRecvData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }
                    NextSequenceRecvData.prototype.path = $util.newBuffer([]);
                    NextSequenceRecvData.prototype.nextSeqRecv = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
                    NextSequenceRecvData.create = function create(properties) {
                        return new NextSequenceRecvData(properties);
                    };
                    NextSequenceRecvData.encode = function encode(m, w) {
                        if (!w) w = $Writer.create();
                        if (m.path != null && Object.hasOwnProperty.call(m, 'path')) w.uint32(10).bytes(m.path);
                        if (m.nextSeqRecv != null && Object.hasOwnProperty.call(m, 'nextSeqRecv'))
                            w.uint32(16).uint64(m.nextSeqRecv);
                        return w;
                    };
                    NextSequenceRecvData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader)) r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l,
                            m = new $root.ibc.lightclients.solomachine.v1.NextSequenceRecvData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                                case 1:
                                    m.path = r.bytes();
                                    break;
                                case 2:
                                    m.nextSeqRecv = r.uint64();
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                            }
                        }
                        return m;
                    };
                    return NextSequenceRecvData;
                })();
                return v1;
            })();
            return solomachine;
        })();
        return lightclients;
    })();
    return ibc;
})();
exports.chainmain = $root.chainmain = (() => {
    const chainmain = {};
    chainmain.nft = (function () {
        const nft = {};
        nft.v1 = (function () {
            const v1 = {};
            v1.Msg = (function () {
                function Msg(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(
                    (Msg.prototype.issueDenom = function issueDenom(request, callback) {
                        return this.rpcCall(
                            issueDenom,
                            $root.chainmain.nft.v1.MsgIssueDenom,
                            $root.chainmain.nft.v1.MsgIssueDenomResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'IssueDenom' },
                );
                Object.defineProperty(
                    (Msg.prototype.mintNFT = function mintNFT(request, callback) {
                        return this.rpcCall(
                            mintNFT,
                            $root.chainmain.nft.v1.MsgMintNFT,
                            $root.chainmain.nft.v1.MsgMintNFTResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'MintNFT' },
                );
                Object.defineProperty(
                    (Msg.prototype.editNFT = function editNFT(request, callback) {
                        return this.rpcCall(
                            editNFT,
                            $root.chainmain.nft.v1.MsgEditNFT,
                            $root.chainmain.nft.v1.MsgEditNFTResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'EditNFT' },
                );
                Object.defineProperty(
                    (Msg.prototype.transferNFT = function transferNFT(request, callback) {
                        return this.rpcCall(
                            transferNFT,
                            $root.chainmain.nft.v1.MsgTransferNFT,
                            $root.chainmain.nft.v1.MsgTransferNFTResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'TransferNFT' },
                );
                Object.defineProperty(
                    (Msg.prototype.burnNFT = function burnNFT(request, callback) {
                        return this.rpcCall(
                            burnNFT,
                            $root.chainmain.nft.v1.MsgBurnNFT,
                            $root.chainmain.nft.v1.MsgBurnNFTResponse,
                            request,
                            callback,
                        );
                    }),
                    'name',
                    { value: 'BurnNFT' },
                );
                return Msg;
            })();
            v1.MsgIssueDenom = (function () {
                function MsgIssueDenom(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgIssueDenom.prototype.id = '';
                MsgIssueDenom.prototype.name = '';
                MsgIssueDenom.prototype.schema = '';
                MsgIssueDenom.prototype.sender = '';
                MsgIssueDenom.create = function create(properties) {
                    return new MsgIssueDenom(properties);
                };
                MsgIssueDenom.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, 'id')) w.uint32(10).string(m.id);
                    if (m.name != null && Object.hasOwnProperty.call(m, 'name')) w.uint32(18).string(m.name);
                    if (m.schema != null && Object.hasOwnProperty.call(m, 'schema')) w.uint32(26).string(m.schema);
                    if (m.sender != null && Object.hasOwnProperty.call(m, 'sender')) w.uint32(34).string(m.sender);
                    return w;
                };
                MsgIssueDenom.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgIssueDenom();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.id = r.string();
                                break;
                            case 2:
                                m.name = r.string();
                                break;
                            case 3:
                                m.schema = r.string();
                                break;
                            case 4:
                                m.sender = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgIssueDenom;
            })();
            v1.MsgIssueDenomResponse = (function () {
                function MsgIssueDenomResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgIssueDenomResponse.create = function create(properties) {
                    return new MsgIssueDenomResponse(properties);
                };
                MsgIssueDenomResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgIssueDenomResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgIssueDenomResponse();
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
                return MsgIssueDenomResponse;
            })();
            v1.MsgTransferNFT = (function () {
                function MsgTransferNFT(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgTransferNFT.prototype.id = '';
                MsgTransferNFT.prototype.denomId = '';
                MsgTransferNFT.prototype.sender = '';
                MsgTransferNFT.prototype.recipient = '';
                MsgTransferNFT.create = function create(properties) {
                    return new MsgTransferNFT(properties);
                };
                MsgTransferNFT.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, 'id')) w.uint32(10).string(m.id);
                    if (m.denomId != null && Object.hasOwnProperty.call(m, 'denomId')) w.uint32(18).string(m.denomId);
                    if (m.sender != null && Object.hasOwnProperty.call(m, 'sender')) w.uint32(26).string(m.sender);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, 'recipient'))
                        w.uint32(34).string(m.recipient);
                    return w;
                };
                MsgTransferNFT.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgTransferNFT();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.id = r.string();
                                break;
                            case 2:
                                m.denomId = r.string();
                                break;
                            case 3:
                                m.sender = r.string();
                                break;
                            case 4:
                                m.recipient = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgTransferNFT;
            })();
            v1.MsgTransferNFTResponse = (function () {
                function MsgTransferNFTResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgTransferNFTResponse.create = function create(properties) {
                    return new MsgTransferNFTResponse(properties);
                };
                MsgTransferNFTResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgTransferNFTResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgTransferNFTResponse();
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
                return MsgTransferNFTResponse;
            })();
            v1.MsgEditNFT = (function () {
                function MsgEditNFT(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgEditNFT.prototype.id = '';
                MsgEditNFT.prototype.denomId = '';
                MsgEditNFT.prototype.name = '';
                MsgEditNFT.prototype.uri = '';
                MsgEditNFT.prototype.data = '';
                MsgEditNFT.prototype.sender = '';
                MsgEditNFT.create = function create(properties) {
                    return new MsgEditNFT(properties);
                };
                MsgEditNFT.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, 'id')) w.uint32(10).string(m.id);
                    if (m.denomId != null && Object.hasOwnProperty.call(m, 'denomId')) w.uint32(18).string(m.denomId);
                    if (m.name != null && Object.hasOwnProperty.call(m, 'name')) w.uint32(26).string(m.name);
                    if (m.uri != null && Object.hasOwnProperty.call(m, 'uri')) w.uint32(34).string(m.uri);
                    if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(42).string(m.data);
                    if (m.sender != null && Object.hasOwnProperty.call(m, 'sender')) w.uint32(50).string(m.sender);
                    return w;
                };
                MsgEditNFT.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgEditNFT();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.id = r.string();
                                break;
                            case 2:
                                m.denomId = r.string();
                                break;
                            case 3:
                                m.name = r.string();
                                break;
                            case 4:
                                m.uri = r.string();
                                break;
                            case 5:
                                m.data = r.string();
                                break;
                            case 6:
                                m.sender = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgEditNFT;
            })();
            v1.MsgEditNFTResponse = (function () {
                function MsgEditNFTResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgEditNFTResponse.create = function create(properties) {
                    return new MsgEditNFTResponse(properties);
                };
                MsgEditNFTResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgEditNFTResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgEditNFTResponse();
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
                return MsgEditNFTResponse;
            })();
            v1.MsgMintNFT = (function () {
                function MsgMintNFT(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgMintNFT.prototype.id = '';
                MsgMintNFT.prototype.denomId = '';
                MsgMintNFT.prototype.name = '';
                MsgMintNFT.prototype.uri = '';
                MsgMintNFT.prototype.data = '';
                MsgMintNFT.prototype.sender = '';
                MsgMintNFT.prototype.recipient = '';
                MsgMintNFT.create = function create(properties) {
                    return new MsgMintNFT(properties);
                };
                MsgMintNFT.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, 'id')) w.uint32(10).string(m.id);
                    if (m.denomId != null && Object.hasOwnProperty.call(m, 'denomId')) w.uint32(18).string(m.denomId);
                    if (m.name != null && Object.hasOwnProperty.call(m, 'name')) w.uint32(26).string(m.name);
                    if (m.uri != null && Object.hasOwnProperty.call(m, 'uri')) w.uint32(34).string(m.uri);
                    if (m.data != null && Object.hasOwnProperty.call(m, 'data')) w.uint32(42).string(m.data);
                    if (m.sender != null && Object.hasOwnProperty.call(m, 'sender')) w.uint32(50).string(m.sender);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, 'recipient'))
                        w.uint32(58).string(m.recipient);
                    return w;
                };
                MsgMintNFT.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgMintNFT();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.id = r.string();
                                break;
                            case 2:
                                m.denomId = r.string();
                                break;
                            case 3:
                                m.name = r.string();
                                break;
                            case 4:
                                m.uri = r.string();
                                break;
                            case 5:
                                m.data = r.string();
                                break;
                            case 6:
                                m.sender = r.string();
                                break;
                            case 7:
                                m.recipient = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgMintNFT;
            })();
            v1.MsgMintNFTResponse = (function () {
                function MsgMintNFTResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgMintNFTResponse.create = function create(properties) {
                    return new MsgMintNFTResponse(properties);
                };
                MsgMintNFTResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgMintNFTResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgMintNFTResponse();
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
                return MsgMintNFTResponse;
            })();
            v1.MsgBurnNFT = (function () {
                function MsgBurnNFT(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgBurnNFT.prototype.id = '';
                MsgBurnNFT.prototype.denomId = '';
                MsgBurnNFT.prototype.sender = '';
                MsgBurnNFT.create = function create(properties) {
                    return new MsgBurnNFT(properties);
                };
                MsgBurnNFT.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, 'id')) w.uint32(10).string(m.id);
                    if (m.denomId != null && Object.hasOwnProperty.call(m, 'denomId')) w.uint32(18).string(m.denomId);
                    if (m.sender != null && Object.hasOwnProperty.call(m, 'sender')) w.uint32(26).string(m.sender);
                    return w;
                };
                MsgBurnNFT.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgBurnNFT();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.id = r.string();
                                break;
                            case 2:
                                m.denomId = r.string();
                                break;
                            case 3:
                                m.sender = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgBurnNFT;
            })();
            v1.MsgBurnNFTResponse = (function () {
                function MsgBurnNFTResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                }
                MsgBurnNFTResponse.create = function create(properties) {
                    return new MsgBurnNFTResponse(properties);
                };
                MsgBurnNFTResponse.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                };
                MsgBurnNFTResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.chainmain.nft.v1.MsgBurnNFTResponse();
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
                return MsgBurnNFTResponse;
            })();
            return v1;
        })();
        return nft;
    })();
    return chainmain;
})();
exports.tendermint= $root.tendermintV2 = (() => {
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
                    m = new $root.tendermintV2.types.PartSetHeader();
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
                    $root.tendermintV2.crypto.Proof.encode(m.proof, w.uint32(26).fork()).ldelim();
                return w;
            };
            Part.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.Part();
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
                            m.proof = $root.tendermintV2.crypto.Proof.decode(r, r.uint32());
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
                    $root.tendermintV2.types.PartSetHeader.encode(m.partSetHeader, w.uint32(18).fork()).ldelim();
                return w;
            };
            BlockID.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.BlockID();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.hash = r.bytes();
                            break;
                        case 2:
                            m.partSetHeader = $root.tendermintV2.types.PartSetHeader.decode(r, r.uint32());
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
                    $root.tendermintV2.version.Consensus.encode(m.version, w.uint32(10).fork()).ldelim();
                if (m.chainId != null && Object.hasOwnProperty.call(m, 'chainId')) w.uint32(18).string(m.chainId);
                if (m.height != null && Object.hasOwnProperty.call(m, 'height')) w.uint32(24).int64(m.height);
                if (m.time != null && Object.hasOwnProperty.call(m, 'time'))
                    $root.google.protobuf.Timestamp.encode(m.time, w.uint32(34).fork()).ldelim();
                if (m.lastBlockId != null && Object.hasOwnProperty.call(m, 'lastBlockId'))
                    $root.tendermintV2.types.BlockID.encode(m.lastBlockId, w.uint32(42).fork()).ldelim();
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
                    m = new $root.tendermintV2.types.Header();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.version = $root.tendermintV2.version.Consensus.decode(r, r.uint32());
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
                            m.lastBlockId = $root.tendermintV2.types.BlockID.decode(r, r.uint32());
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
                    m = new $root.tendermintV2.types.Data();
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
                    $root.tendermintV2.types.BlockID.encode(m.blockId, w.uint32(34).fork()).ldelim();
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
                    m = new $root.tendermintV2.types.Vote();
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
                            m.blockId = $root.tendermintV2.types.BlockID.decode(r, r.uint32());
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
                    $root.tendermintV2.types.BlockID.encode(m.blockId, w.uint32(26).fork()).ldelim();
                if (m.signatures != null && m.signatures.length) {
                    for (var i = 0; i < m.signatures.length; ++i)
                        $root.tendermintV2.types.CommitSig.encode(m.signatures[i], w.uint32(34).fork()).ldelim();
                }
                return w;
            };
            Commit.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.Commit();
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
                            m.blockId = $root.tendermintV2.types.BlockID.decode(r, r.uint32());
                            break;
                        case 4:
                            if (!(m.signatures && m.signatures.length)) m.signatures = [];
                            m.signatures.push($root.tendermintV2.types.CommitSig.decode(r, r.uint32()));
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
                    m = new $root.tendermintV2.types.CommitSig();
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
                    $root.tendermintV2.types.BlockID.encode(m.blockId, w.uint32(42).fork()).ldelim();
                if (m.timestamp != null && Object.hasOwnProperty.call(m, 'timestamp'))
                    $root.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(50).fork()).ldelim();
                if (m.signature != null && Object.hasOwnProperty.call(m, 'signature')) w.uint32(58).bytes(m.signature);
                return w;
            };
            Proposal.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.Proposal();
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
                            m.blockId = $root.tendermintV2.types.BlockID.decode(r, r.uint32());
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
                    $root.tendermintV2.types.Header.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.commit != null && Object.hasOwnProperty.call(m, 'commit'))
                    $root.tendermintV2.types.Commit.encode(m.commit, w.uint32(18).fork()).ldelim();
                return w;
            };
            SignedHeader.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.SignedHeader();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.header = $root.tendermintV2.types.Header.decode(r, r.uint32());
                            break;
                        case 2:
                            m.commit = $root.tendermintV2.types.Commit.decode(r, r.uint32());
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
                    $root.tendermintV2.types.SignedHeader.encode(m.signedHeader, w.uint32(10).fork()).ldelim();
                if (m.validatorSet != null && Object.hasOwnProperty.call(m, 'validatorSet'))
                    $root.tendermintV2.types.ValidatorSet.encode(m.validatorSet, w.uint32(18).fork()).ldelim();
                return w;
            };
            LightBlock.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.LightBlock();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.signedHeader = $root.tendermintV2.types.SignedHeader.decode(r, r.uint32());
                            break;
                        case 2:
                            m.validatorSet = $root.tendermintV2.types.ValidatorSet.decode(r, r.uint32());
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
                    $root.tendermintV2.types.BlockID.encode(m.blockId, w.uint32(10).fork()).ldelim();
                if (m.blockSize != null && Object.hasOwnProperty.call(m, 'blockSize')) w.uint32(16).int64(m.blockSize);
                if (m.header != null && Object.hasOwnProperty.call(m, 'header'))
                    $root.tendermintV2.types.Header.encode(m.header, w.uint32(26).fork()).ldelim();
                if (m.numTxs != null && Object.hasOwnProperty.call(m, 'numTxs')) w.uint32(32).int64(m.numTxs);
                return w;
            };
            BlockMeta.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.BlockMeta();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.blockId = $root.tendermintV2.types.BlockID.decode(r, r.uint32());
                            break;
                        case 2:
                            m.blockSize = r.int64();
                            break;
                        case 3:
                            m.header = $root.tendermintV2.types.Header.decode(r, r.uint32());
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
                    $root.tendermintV2.crypto.Proof.encode(m.proof, w.uint32(26).fork()).ldelim();
                return w;
            };
            TxProof.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.TxProof();
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
                            m.proof = $root.tendermintV2.crypto.Proof.decode(r, r.uint32());
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
                        $root.tendermintV2.types.Validator.encode(m.validators[i], w.uint32(10).fork()).ldelim();
                }
                if (m.proposer != null && Object.hasOwnProperty.call(m, 'proposer'))
                    $root.tendermintV2.types.Validator.encode(m.proposer, w.uint32(18).fork()).ldelim();
                if (m.totalVotingPower != null && Object.hasOwnProperty.call(m, 'totalVotingPower'))
                    w.uint32(24).int64(m.totalVotingPower);
                return w;
            };
            ValidatorSet.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.ValidatorSet();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            if (!(m.validators && m.validators.length)) m.validators = [];
                            m.validators.push($root.tendermintV2.types.Validator.decode(r, r.uint32()));
                            break;
                        case 2:
                            m.proposer = $root.tendermintV2.types.Validator.decode(r, r.uint32());
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
                    $root.tendermintV2.crypto.PublicKey.encode(m.pubKey, w.uint32(18).fork()).ldelim();
                if (m.votingPower != null && Object.hasOwnProperty.call(m, 'votingPower'))
                    w.uint32(24).int64(m.votingPower);
                if (m.proposerPriority != null && Object.hasOwnProperty.call(m, 'proposerPriority'))
                    w.uint32(32).int64(m.proposerPriority);
                return w;
            };
            Validator.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.Validator();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.pubKey = $root.tendermintV2.crypto.PublicKey.decode(r, r.uint32());
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
                    $root.tendermintV2.crypto.PublicKey.encode(m.pubKey, w.uint32(10).fork()).ldelim();
                if (m.votingPower != null && Object.hasOwnProperty.call(m, 'votingPower'))
                    w.uint32(16).int64(m.votingPower);
                return w;
            };
            SimpleValidator.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.types.SimpleValidator();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.pubKey = $root.tendermintV2.crypto.PublicKey.decode(r, r.uint32());
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
                    m = new $root.tendermintV2.crypto.Proof();
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
                    $root.tendermintV2.crypto.Proof.encode(m.proof, w.uint32(18).fork()).ldelim();
                return w;
            };
            ValueOp.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.crypto.ValueOp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            m.key = r.bytes();
                            break;
                        case 2:
                            m.proof = $root.tendermintV2.crypto.Proof.decode(r, r.uint32());
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
                    m = new $root.tendermintV2.crypto.DominoOp();
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
                    m = new $root.tendermintV2.crypto.ProofOp();
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
                        $root.tendermintV2.crypto.ProofOp.encode(m.ops[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
            ProofOps.decode = function decode(r, l) {
                if (!(r instanceof $Reader)) r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new $root.tendermintV2.crypto.ProofOps();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                        case 1:
                            if (!(m.ops && m.ops.length)) m.ops = [];
                            m.ops.push($root.tendermintV2.crypto.ProofOp.decode(r, r.uint32()));
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
                    m = new $root.tendermintV2.crypto.PublicKey();
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
                    m = new $root.tendermintV2.version.App();
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
                    m = new $root.tendermintV2.version.Consensus();
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
