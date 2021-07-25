#!/bin/bash

# Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
# Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"
ICS23_DIR="$PROTO_DIR/ics23"
NFT_DIR="$PROTO_DIR/nft"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
COSMOS_REF=${COSMOS_REF:-"master"}
COSMOS_SUFFIX=${COSMOS_REF}
ICS23_REF=${ICS23_REF:-"master"}
CHAIN_MAIN_REF=${CHAIN_MAIN_REF:-"master"}

[[ $COSMOS_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && COSMOS_SUFFIX=${COSMOS_SUFFIX#v}

mkdir -p "$COSMOS_DIR"

curl -sL -o "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$COSMOS_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
wget -P "$ICS23_DIR" "https://raw.githubusercontent.com/confio/ics23/$ICS23_REF/proofs.proto"
wget -P "$NFT_DIR" "https://raw.githubusercontent.com/crypto-org-chain/chain-main/$CHAIN_MAIN_REF/proto/nft/v1/tx.proto"
mv "$COSMOS_SDK_DIR-$COSMOS_SUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"
