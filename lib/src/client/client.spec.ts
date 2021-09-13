import { expect } from 'chai';
import nock from 'nock';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';

import { CroNetwork, CroSDK } from '../core/cro';

const cro = CroSDK({ network: CroNetwork.TestnetCroeseid4 });
const statusQueryResponse = {
    jsonrpc: '2.0',
    id: -1,
    result: {
        node_info: {
            protocol_version: {
                p2p: '8',
                block: '11',
                app: '0',
            },
            id: 'd3d2139a61c2a841545e78ff0e0cd03094a5197d',
            listen_addr: '18.136.230.70:26656',
            network: 'testnet-croeseid-2',
            version: '',
            channels: '40202122233038606100',
            moniker: 'sentry_node2',
            other: {
                tx_index: 'on',
                rpc_address: 'tcp://0.0.0.0:26657',
            },
        },
        sync_info: {
            latest_block_hash: '216560677E2EA28B3E31180F8A33402E2840AFEC032A407ADB665393E7E9158C',
            latest_app_hash: 'BEC774B38C6C0E30BCE8550BA95B138894B07DBA983FA740F79B596713FECFD8',
            latest_block_height: '1815891',
            latest_block_time: '2021-05-02T18:13:56.54267643Z',
            earliest_block_hash: 'F77B98D728E00876B840AC137A3D3BFAB0FA763FA0C077C8D7F41C947ED94BA7',
            earliest_app_hash: 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
            earliest_block_height: '1',
            earliest_block_time: '2020-12-23T07:30:28.674523Z',
            catching_up: false,
        },
        validator_info: {
            address: '856CF9215DB1274EA07CF3FE12D5B299C42114A6',
            pub_key: {
                type: 'tendermint/PubKeyEd25519',
                value: 'zTA+BT6DkK2cgQ98LZsIAr9whjpTRaNNlz33Az+gT3M=',
            },
            voting_power: '0',
        },
    },
};
const abciQueryResponse = {
    jsonrpc: '2.0',
    id: -1,
    result: {
        response: {
            code: 0,
            log: '',
            info: '',
            index: '0',
            key: null,
            value:
                'CqABCiAvY29zbW9zLmF1dGgudjFiZXRhMS5CYXNlQWNjb3VudBJ8Cit0Y3JvMW16NXJkdGY5d3Vmd2toOHRlMnp3dzd0d3RtbmE2cmhsMnFsaGxjEkYKHy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkSIwohAob4I2sjPo331LScKWdPIyotGEKG9ZGRFD/xPUBIzDBtGOICIMiCJQ==',
            proofOps: null,
            height: '1825383',
            codespace: '',
        },
    },
};

describe('CroClient', function () {
    describe('connect', function () {
        fuzzyDescribe('should throw Error when the provided argument is not url', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('test'));
            testRunner(
                async function (args0) {
                    if (args0.valid) {
                        return;
                    }
                    try {
                        await cro.CroClient.connect(args0.value);
                    } catch (e) {
                        expect(e.toString()).to.be.contain(
                            'ArgumentError: Expected `endpoint` to be of type `string` but received type',
                        );
                    }
                },
                { invalidArgsOnly: true },
            );
        });

        context('When input is a string', function () {
            it('should throw Error when the provided string is not a url', async function () {
                try {
                    await cro.CroClient.connect('invalid');
                } catch (e) {
                    expect(e.toString()).to.be.equals(
                        'ArgumentError: Expected string `endpoint` to be an url, got `invalid`',
                    );
                }
            });
        });

        context('Getting On-Chain details', function () {
            it('Should fetch correct details from the network', async function () {
                nock.disableNetConnect();
                const rpcUrl: string = CroNetwork.Testnet.rpcUrl ?? '';
                nock(rpcUrl).persist(true).post('/').reply(200, statusQueryResponse);

                const croHttpClient = await cro.CroClient.connect(rpcUrl);

                expect(await croHttpClient.getChainId()).to.be.equal('testnet-croeseid-2');
                expect(typeof (await croHttpClient.getHeight())).to.equal('number');

                remockNockForAbciQuery();

                expect(
                    typeof (await (await croHttpClient.getSequence('tcro1mz5rdtf9wufwkh8te2zww7twtmna6rhl2qlhlc'))
                        .sequence),
                ).to.equal('number');

                croHttpClient.disconnect();
                nock.cleanAll();
            });

            function remockNockForAbciQuery() {
                const rpcUrl: string = CroNetwork.Testnet.rpcUrl ?? '';
                nock.cleanAll();
                nock(rpcUrl).persist(true).post('/').reply(200, abciQueryResponse);
            }
        });
    });
});
