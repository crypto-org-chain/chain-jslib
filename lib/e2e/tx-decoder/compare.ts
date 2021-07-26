/* eslint-disable*/
import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import axios from 'axios';
import { exec as childProcessExec } from 'child_process';
import { inspect, promisify } from 'util';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { detailedDiff } from 'deep-object-diff';

import { TxDecoder } from '../../src/utils/txDecoder';
import { Bytes } from '../../src/utils/bytes/bytes';

const exec = promisify(childProcessExec);

const README = `
    Environment:
    TXDECODER_STARTING_HEIGHT: The starting height to scan for transactions
    TXDECODER_ENDING_HEIGHT: (Optional) The ending height to scan for transactions
    TXDECODER_TENDERMINT_RPC: (Optional) The base URL to Crypto.org Chain Tendermint RPC
    TXDECODER_DIFF_OUTPUT_FOLDER: (Optional) Folder to output the differences. Default ./lib/e2e/tx-decoder/diff
`;
const TENDERMINT_RPC_BASEURL = process.env.TXDECODER_TENDERMINT_RPC || 'https://mainnet.crypto.org:26657';
const GO_DECODER_PATH = './lib/e2e/tx-decoder/decode-cosmosbase64tx';
const DIFF_OUTPUT_FOLDER = process.env.TXDECODER_DIFF_OUTPUT_FOLDER || './lib/e2e/tx-decoder/diff';

if (!process.env.TXDECODER_STARTING_HEIGHT) {
    console.error('Missing argument');
    console.log(README);
    process.exit(1);
}

const STARTING_HEIGHT = process.env.TXDECODER_STARTING_HEIGHT;

const getRawTxsAtBlockHeight = async (rpcUrl: string, height: string): Promise<string[]> => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        try {
            // eslint-disable-next-line no-await-in-loop
            const block: any = await axios.get(`${rpcUrl}/block?height=${height}`);

            if (block.error) {
                return Promise.reject(new Error('Exceeded chain latest height'));
            }

            return block.data.result.block.data.txs;
        } catch (err) {
            console.error(`error when requesting Tenderint RPC: ${err.toString()}. Retry in 1 minute`);
            /* eslint-disable-next-line no-await-in-loop */
            await new Promise((resolve) => setTimeout(resolve, 60000));
            /* eslint-disable-next-line no-continue */
            continue;
        }
    }
};

const decodeRawTxWithGo = async (rawTx: string): Promise<any> => {
    const decoded = await exec(`${GO_DECODER_PATH} ${rawTx}`);
    return JSON.parse(decoded.stdout);
};

const writeReport = async (height: string, index: number, report: Report) => {
    const messageTypes = report.jslib.body.messages.map((message: any) => {
        return message['@type'];
    });

    /* eslint-disable-next-line no-restricted-syntax */
    for (const messageType of messageTypes) {
        const basePath = `${DIFF_OUTPUT_FOLDER}/${messageType}`;
        if (!existsSync(basePath)) {
            mkdirSync(basePath);
        }

        writeFileSync(`${basePath}/${height}-${index}.json`, JSON.stringify(report, null, 2));
    }
};

interface Report {
    diff: object;
    go: any;
    jslib: any;
}

describe('TxDecoder Golang vs JSlib', function () {
    it('should decode to the same result', async function () {
        const txDecoder = new TxDecoder();

        const isEnded = (height: string) =>
            process.env.TXDECODER_ENDING_HEIGHT ? height === process.env.TXDECODER_ENDING_HEIGHT : true;
        for (let height = STARTING_HEIGHT; isEnded(height); ) {
            console.log(`Comparing transactions at height ${height}`);
            /* eslint-disable-next-line no-await-in-loop */
            const txs = await getRawTxsAtBlockHeight(TENDERMINT_RPC_BASEURL, height);

            for (let i = 0; i < txs.length; i += 1) {
                const tx = txs[i];

                /* eslint-disable-next-line no-await-in-loop */
                const decodeByGo = await decodeRawTxWithGo(tx);
                const decodeByJsLib = JSON.parse(
                    txDecoder.fromHex(Bytes.fromBase64String(tx).toHexString()).toCosmosJSON(),
                );

                try {
                    expect(decodeByJsLib).to.deep.eq(decodeByGo);
                } catch (err) {
                    const diff = detailedDiff(decodeByJsLib, decodeByGo);
                    const report: Report = {
                        diff,
                        go: decodeByGo,
                        jslib: decodeByJsLib,
                    };
                    console.log(inspect(report, false, null, true));
                    // eslint-disable-next-line
                    await writeReport(height, i, report);
                }
            }

            height = new Big(height).add(1).toFixed(0);
        }
    });
});
