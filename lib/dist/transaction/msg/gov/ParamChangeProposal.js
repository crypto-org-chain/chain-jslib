"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramChangeProposal = void 0;
var ow_1 = __importDefault(require("ow"));
var codec_1 = require("../../../cosmos/v1beta1/codec");
var ow_types_1 = require("./ow.types");
exports.paramChangeProposal = function () {
    return (function () {
        function ParamChangeProposal(options) {
            ow_1.default(options, 'options', ow_types_1.owParamChangeProposalOptions);
            this.title = options.title;
            this.description = options.description;
            this.paramChanges = options.paramChanges;
        }
        ParamChangeProposal.prototype.getEncoded = function () {
            var parameterChanges = this.paramChanges.map(function (param) {
                return codec_1.cosmos.params.v1beta1.ParamChange.create({
                    subspace: param.subspace,
                    key: param.key,
                    value: param.value,
                });
            });
            var paramChange = {
                title: this.title,
                description: this.description,
                changes: parameterChanges,
            };
            var spendProposal = codec_1.cosmos.params.v1beta1.ParameterChangeProposal.create(paramChange);
            return codec_1.google.protobuf.Any.create({
                type_url: '/cosmos.params.v1beta1.ParameterChangeProposal',
                value: codec_1.cosmos.params.v1beta1.ParameterChangeProposal.encode(spendProposal).finish(),
            });
        };
        return ParamChangeProposal;
    }());
};
//# sourceMappingURL=ParamChangeProposal.js.map