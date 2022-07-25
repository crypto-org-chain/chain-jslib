#!/bin/bash

# Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
# Modifications Copyright (c) 2018-present Crypto.org (licensed under the Apache License, Version 2.0)
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

# Directory
PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"
ICS23_DIR="$PROTO_DIR/ics23"
NFT_DIR="$PROTO_DIR/nft"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
IBC_DIR="$PROTO_DIR/ibc"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
IBC_ZIP_FILE="$IBC_DIR/tmp.zip"

# Download reference
COSMOS_REF=${COSMOS_REF:-"master"}
COSMOS_SUFFIX=${COSMOS_REF}
ICS23_REF=${ICS23_REF:-"master"}
CHAIN_MAIN_REF=${CHAIN_MAIN_REF:-"master"}
IBC_GO_TAG_VERSION=${COSMOS_IBC_REF#v}
IBC_SUFFIX="ibc-go-$IBC_GO_TAG_VERSION"

[[ $COSMOS_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && COSMOS_SUFFIX=${COSMOS_SUFFIX#v}

mkdir -p "$COSMOS_DIR"
mkdir -p "$IBC_DIR"

curl -sL -o "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$COSMOS_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
wget -P "$ICS23_DIR" "https://raw.githubusercontent.com/confio/ics23/$ICS23_REF/proofs.proto"
wget -P "$NFT_DIR" "https://raw.githubusercontent.com/crypto-org-chain/chain-main/$CHAIN_MAIN_REF/proto/nft/v1/tx.proto"

curl -sL -o "$IBC_ZIP_FILE" "https://github.com/cosmos/ibc-go/archive/refs/tags/v$IBC_GO_TAG_VERSION.zip"
unzip "$IBC_ZIP_FILE" "$IBC_SUFFIX/proto/ibc/*" -d "$IBC_DIR"
mv "$IBC_DIR/$IBC_SUFFIX/proto/" "$IBC_DIR"


mv "$COSMOS_SDK_DIR-$COSMOS_SUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"
rm "$IBC_ZIP_FILE"