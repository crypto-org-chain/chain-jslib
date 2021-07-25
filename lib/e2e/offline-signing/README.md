# Offling Signing End-to-End Test

This test will compare the offline signing results of chain-maind and the JSlib.

## How to run

### 1. Go to correct directory
```bash
cd ./lib/e2e/offling-signing
```

### 2. Download latest `chain-maind` release to the folder

https://github.com/crypto-com/chain-main/releases

### 3. Run compare tool
```bash
# Go to jslib root directory
cd ../../../
npm run test:e2e:offline-signing
```

The test will take some time to complete.