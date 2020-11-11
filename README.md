# Crypto.com Chain JS library

## 1. Quick Guide

### 1.0. Installing the library ⬇️

```
npm install chain-jslib
```

### 1.1. Working with private keys and key pairs 🔐

```
// Imports
const sdk = require("chain-jslib");
const HDKey = sdk.HDKey;
const Secp256k1KeyPair = sdk.Secp256k1KeyPair;
const Bytes = sdk.utils.Bytes;


// Initializing the library configurations with TestNet config
const cro = sdk.CroSDK({ network: sdk.CroNetwork.Testnet });

// Generating a random HD Key
let randomHDKey = HDKey.generateMnemonic(12);

// Import an HDKey from a previous mnemonic phrase
const importedHDKey = HDKey.fromMnemonic(
  "curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther"
);

// Derive a private key from an HDKey at the specified path
const privateKey = importedHDKey.derivePrivKey("m/44'/1'/0'/0/0");

// Getting a keyPair from a private key
const keyPair = Secp256k1KeyPair.fromPrivKey(privateKey);

```

### 1.2. Generating an address 🔖

```
// Initializing the library configurations with TestNet config
const cro = sdk.CroSDK({ network: sdk.CroNetwork.Testnet });

// Import private key from hex key value
let privKey = Bytes.fromHexString(
  "66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3"
);
// Get keyPair from the imported private key
const importedKeyPair = Secp256k1KeyPair.fromPrivKey(privKey);

// Generate address from the imported key pair
let address = new cro.Address(importedKeyPair).account();
console.log(address); // tcro1sxe3v6gka3u8j7d2xhl8rmfyjnmggqlh6e82hq
```

### 1.3. Build and Sign a transfer transaction ✅

```
// Imports

const sdk = require("chain-jslib");
const HDKey = sdk.HDKey;
const Secp256k1KeyPair = sdk.Secp256k1KeyPair;
const Units = sdk.Units;
const Big = sdk.utils.Big;

// Initialize the library configurations with TestNet configs
const cro = sdk.CroSDK({ network: sdk.CroNetwork.Testnet });

const importedHDKey = HDKey.fromMnemonic(
  "curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther"
);

// Derive a private key from an HDKey at the specified path
const privateKey = importedHDKey.derivePrivKey("m/44'/1'/0'/0/0");

// Getting a keyPair from a private key
const keyPair = Secp256k1KeyPair.fromPrivKey(privateKey);

// Init Raw transaction
const rawTx = new cro.RawTransaction();

const feeAmount = new cro.Coin("6500", Units.BASE);

// Custom properties set
rawTx.setMemo("Hello Test Memo");
rawTx.setGasLimit("280000");
rawTx.setFee(feeAmount);
rawTx.setTimeOutHeight(341910);

const msgSend = new cro.bank.MsgSend({
  fromAddress: "tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3",
  toAddress: "tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3",
  amount: new cro.Coin("1210", Units.BASE),
});

const signableTx = rawTx
  .appendMessage(msgSend)
  .addSigner({
    publicKey: keyPair.getPubKey(),
    accountNumber: new Big(41),
    accountSequence: new Big(13),
  })
  .toSignable();

const signedTx = signableTx
  .setSignature(0, keyPair.sign(signableTx.toSignDoc(0)))
  .toSigned();

console.log(signedTx.getHexEncoded());
// 0aa4010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63331a100a08626173657463726f120431323130120f48656c6c6f2054657374204d656d6f1896ef14126a0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a020801180d12160a100a08626173657463726f12043635303010c08b111a40fe9b30f29bb9a83df3685f5bf8b7e6c34bae9ee8ba93115af4136289354c5bf947698ef3a3c0a1f6092ba7a2069616c436f4bcf6f3ecef11b92ad4d319ec0347

// Note that the result of signedTx.getHexEncoded() can be directly broadcasted to the network as a raw tx
```

## 2. Cosmos Protobuf Definitions

### Generate Cosmos Protobuf Definitions in JavaScript

1. Download Cosmos proto definitions folder

    ```bash
    npm run get-proto
    ```

2. Generate definitions files in JavaScript

    ```bash
    npm run define-proto
    ```

### Update Supported Modules

1. To support more Cosmos modules, edit `lib/src/cosmos/v1beta1/scripts/predefine-proto.sh` and append the lines

    ```
    "$COSMOS_PROTO_DIR/bank/v1beta1/bank.proto" \
    "$COSMOS_PROTO_DIR/bank/v1beta1/tx.proto" \
    ```
    In this example it is adding `bank` module support, replace the paths with the modules and its protbuf files accordingly.

2. edit `lib/src/cosmos/v1beta1/types/typeurls.ts` to add the protobuf type URLs to JS definitions mapping

