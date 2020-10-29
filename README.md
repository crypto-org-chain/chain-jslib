# Crypto.com Chain JS library

## Cosmos Protobuf Definitions

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

