#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

FORCE=0
GA_ID=""
while [[ $# > 0 ]]; do
    case "$1" in
        --force,-f)
            FORCE=1
            shift 1
        ;;
        --gaid)
            shift 1
            GA_ID=$1
            shift 1
        ;;
        --)
            shift 1
            break
        ;;
        *)
            echoerr "Unknown argument: $1"
            exit 1
        ;;
    esac
done

VERSION=$(node -e 'console.log(require("./package.json").version)')
echo "Generating documentation for version ${VERSION}"

if [[ $FORCE == 1 ]]; then
    npm run typedoc:build:force -- --name "Node.js Library v${VERSION}" --gaID "${GA_ID}" "$@"
else
    npm run typedoc:build -- --name "Node.js Library v${VERSION}" --gaID "${GA_ID}" "$@"

fi