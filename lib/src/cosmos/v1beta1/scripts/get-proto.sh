#!/bin/bash

# Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
# Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
REF=${REF:-"master"}
SUFFIX=${REF}

[[ $SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && SUFFIX=${SUFFIX#v}

mkdir -p "$COSMOS_DIR"

curl -sL -o "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$COSMOS_SDK_DIR-$SUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"
