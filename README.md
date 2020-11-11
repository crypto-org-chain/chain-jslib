# Crypto.com Chain JS library

## 1. Quick Guide

### 1.0. Installing the library ⬇️

```
npm install chain-jslib
```

### 1.1. Working with private key and key pairs 🔐

```
const sdk = require("chain-jslib");
const HDKey = sdk.HDKey;
const Secp256k1KeyPair = sdk.Secp256k1KeyPair;

// Initializing the library configurations with TestNet config
const cro = sdk.CroSDK({ network: sdk.CroNetwork.Testnet });

// Generating a random HD Key
let randomHDKey = HDKey.generateMnemonic(12);

// Import an HDKey from a previous mnemonic phrase
const importedHDKey = HDKey.fromMnemonic(
  "curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther"
);

```

### 1.1. Generating an address 🔖


### 1.1. Sign a transaction ✅

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

