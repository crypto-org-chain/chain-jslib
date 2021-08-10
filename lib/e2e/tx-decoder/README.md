# TxDecoder End-to-End Test

This test will compare the decoding results of CosmosSDK based TxDecoder and the JSlib. Inconsistencies will be reported categorized by message type.

## How to run

### 1. Go to correct directory
```bash
cd ./lib/e2e/tx-decoder
```

### 2. Build Golang cosmos transaction decoder
```bash
git clone https://github.com/calvinlauyh/cosmosutils
cd cosmosutils && make && cd ..
cp ./cosmosutils/build/decode-cosmosbase64tx .
```

### 3. Run compare tool
```bash
# Go to jslib root directory
cd ../../../
npm run test:e2e:tx-decoder
```

### 4. Read report
```bash
cd ./lib/e2e/tx-decoder/diff
ls
```