"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phaeton_cryptography_1 = require("@phaetonhq/phaeton-cryptography");
const time_1 = require("./time");
exports.createBaseTransaction = ({ passphrase, timeOffset, }) => {
    const { address: senderId, publicKey: senderPublicKey } = passphrase
        ? phaeton_cryptography_1.getAddressAndPublicKeyFromPassphrase(passphrase)
        : { address: undefined, publicKey: undefined };
    const timestamp = time_1.getTimeWithOffset(timeOffset);
    return {
        amount: '0',
        recipientId: '',
        senderId,
        senderPublicKey,
        timestamp,
    };
};
//# sourceMappingURL=create_base_transaction.js.map
