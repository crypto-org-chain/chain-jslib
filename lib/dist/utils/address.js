"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressValidator = exports.validateAddress = exports.AddressType = void 0;
var bech32_1 = __importDefault(require("bech32"));
var AddressType;
(function (AddressType) {
    AddressType[AddressType["USER"] = 0] = "USER";
    AddressType[AddressType["VALIDATOR"] = 1] = "VALIDATOR";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
function validateAddress(addressProps) {
    var network = addressProps.network;
    var bech32Decoded = bech32_1.default.decode(addressProps.address);
    switch (addressProps.type) {
        case AddressType.USER:
            return bech32Decoded.prefix === network.addressPrefix;
        case AddressType.VALIDATOR:
            return bech32Decoded.prefix === network.validatorAddressPrefix;
        default:
            return false;
    }
}
exports.validateAddress = validateAddress;
var AddressValidator = (function () {
    function AddressValidator(params) {
        this.params = params;
    }
    AddressValidator.prototype.validate = function () {
        return validateAddress(this.params);
    };
    AddressValidator.prototype.isValid = function () {
        try {
            return validateAddress(this.params);
        }
        catch (_a) {
            return false;
        }
    };
    return AddressValidator;
}());
exports.AddressValidator = AddressValidator;
//# sourceMappingURL=address.js.map