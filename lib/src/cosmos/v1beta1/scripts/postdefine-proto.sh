#!/bin/bash

# Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
# Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
# Modifications Copyright (c) 2018-present Crypto.org (licensed under the Apache License, Version 2.0)
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

GENERATED_FILES="lib/src/cosmos/v1beta1/codec/generated/codecimpl.*"

./node_modules/.bin/prettier --write "$GENERATED_FILES"