"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phaeton_cryptography_1 = require("@phaetonhq/phaeton-cryptography");
const errors_1 = require("../errors");
exports.validateSenderIdAndPublicKey = (id, senderId, senderPublicKey) => {
    const actualAddress = phaeton_cryptography_1.getAddressFromPublicKey(senderPublicKey);
    return senderId.toUpperCase() !== actualAddress.toUpperCase()
        ? new errors_1.TransactionError('`senderId` does not match `senderPublicKey`', id, '.senderId', actualAddress, senderId)
        : undefined;
};
//# sourceMappingURL=address.js.map
