"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CroNetwork = exports.CroSDK = void 0;
var ow_1 = __importDefault(require("ow"));
var coin_1 = require("../coin/coin");
var ow_types_1 = require("./ow.types");
var raw_1 = require("../transaction/raw");
var msgsend_1 = require("../transaction/msg/bank/msgsend");
var MsgCreateValidator_1 = require("../transaction/msg/staking/MsgCreateValidator");
var MsgWithdrawDelegatorReward_1 = require("../transaction/msg/distribution/MsgWithdrawDelegatorReward");
var MsgDelegate_1 = require("../transaction/msg/staking/MsgDelegate");
var MsgEditValidator_1 = require("../transaction/msg/staking/MsgEditValidator");
var MsgUndelegate_1 = require("../transaction/msg/staking/MsgUndelegate");
var MsgBeginRedelegate_1 = require("../transaction/msg/staking/MsgBeginRedelegate");
var address_1 = require("../address/address");
var MsgWithdrawValidatorCommission_1 = require("../transaction/msg/distribution/MsgWithdrawValidatorCommission");
var MsgDeposit_1 = require("../transaction/msg/gov/MsgDeposit");
var MsgVote_1 = require("../transaction/msg/gov/MsgVote");
var MsgSubmitProposal_1 = require("../transaction/msg/gov/MsgSubmitProposal");
var CommunityPoolSpendProposal_1 = require("../transaction/msg/gov/CommunityPoolSpendProposal");
var ParamChangeProposal_1 = require("../transaction/msg/gov/ParamChangeProposal");
exports.CroSDK = function (configs) {
    ow_1.default(configs, 'configs', ow_types_1.owCroSDKInitParams);
    return {
        Coin: coin_1.coin(configs),
        RawTransaction: raw_1.rawTransaction(configs),
        Address: address_1.userAddress(configs),
        gov: {
            MsgDeposit: MsgDeposit_1.msgDeposit(configs),
            MsgVote: MsgVote_1.msgVote(configs),
            MsgSubmitProposal: MsgSubmitProposal_1.msgSubmitProposal(configs),
            proposal: {
                CommunityPoolSpendProposal: CommunityPoolSpendProposal_1.communityPoolSpendProposal(configs),
                ParamChangeProposal: ParamChangeProposal_1.paramChangeProposal(),
            },
        },
        bank: {
            MsgSend: msgsend_1.msgSend(configs),
        },
        staking: {
            MsgCreateValidator: MsgCreateValidator_1.msgCreateValidator(configs),
            MsgEditValidator: MsgEditValidator_1.msgEditValidator(configs),
            MsgDelegate: MsgDelegate_1.msgDelegate(configs),
            MsgUndelegate: MsgUndelegate_1.msgUndelegate(configs),
            MsgBeginRedelegate: MsgBeginRedelegate_1.msgBeginRedelegate(configs),
        },
        distribution: {
            MsgWithdrawValidatorCommission: MsgWithdrawValidatorCommission_1.msgWithdrawValidatorCommission(configs),
            MsgWithdrawDelegatorReward: MsgWithdrawDelegatorReward_1.msgWithdrawDelegateReward(configs),
        },
        Options: configs,
    };
};
var CroNetwork = (function () {
    function CroNetwork() {
    }
    CroNetwork.Testnet = {
        defaultNodeUrl: 'https://testnet-croeseid.crypto.com',
        chainId: 'testnet-croeseid-2',
        addressPrefix: 'tcro',
        validatorAddressPrefix: 'tcrocncl',
        validatorPubKeyPrefix: 'tcrocnclconspub',
        coin: {
            baseDenom: 'basetcro',
            croDenom: 'tcro',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
    };
    CroNetwork.Mainnet = {
        defaultNodeUrl: 'NOT_KNOWN_YET',
        chainId: 'croeseid-1',
        addressPrefix: 'cro',
        validatorAddressPrefix: 'crocncl',
        validatorPubKeyPrefix: 'crocnclconspub',
        coin: {
            baseDenom: 'basecro',
            croDenom: 'cro',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
    };
    return CroNetwork;
}());
exports.CroNetwork = CroNetwork;
//# sourceMappingURL=cro.js.map