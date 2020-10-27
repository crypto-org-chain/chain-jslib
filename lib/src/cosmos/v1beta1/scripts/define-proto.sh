#!/bin/bash

# Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
# Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

TMP_DIR="./tmp"
JS_SOURCE_FILE="$TMP_DIR/codecimpl.js"
DEFINITIONS_FILE="$TMP_DIR/codecimpl.d.ts"
OUTPUT_DIR="./lib/src/cosmos/v1beta1/codec/generated/"


./node_modules/.bin/pbts "$JS_SOURCE_FILE" -o "$DEFINITIONS_FILE"
# Remove comments after using them for the .d.ts
# Note "When input files are specified on the command line, tsconfig.json files are ignored." (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
./node_modules/.bin/tsc --removeComments --target es2017 --module commonjs --outDir "$OUTPUT_DIR" --allowJs "$JS_SOURCE_FILE"

cp "$DEFINITIONS_FILE" "$OUTPUT_DIR"
rm "$DEFINITIONS_FILE" "$JS_SOURCE_FILE"
