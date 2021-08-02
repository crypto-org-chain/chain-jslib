import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import Long from 'long';
import { fuzzyDescribe } from '../../../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../../../keypair/secp256k1';
import { Bytes } from '../../../../../utils/bytes/bytes';
import { CroSDK } from '../../../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../../../common/constants/typeurl';
import { ics23 } from '../../../../../cosmos/v1beta1/codec';

const cro = CroSDK({
    network: {
        defaultNodeUrl: '',
        chainId: 'testnet-croeseid-1',
        addressPrefix: 'tcro',
        validatorAddressPrefix: 'tcrocncl',
        validatorPubKeyPrefix: 'tcrocnclconspub',
        coin: {
            baseDenom: 'basetcro',
            croDenom: 'tcro',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
        rpcUrl: '',
    },
});

describe('Testing MsgConnectionOpenTry', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            clientId: '07-tendermint-0',
            previousConnectionId: '',
            clientState: {
                chainId: 'testnet-croeseid-1',
                trustLevel: {
                    numerator: Long.fromString('1'),
                    denominator: Long.fromString('1'),
                },
                trustingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                unbondingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                maxClockDrift: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                frozenHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                latestHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
            counterparty: {
                clientId: '07-tendermint-39',
                connectionId: 'connection-109',
                prefix: {
                    keyPrefix: 'aWJj',
                },
            },
            delayPeriod: Long.fromString('0'),
            counterpartyVersions: [
                {
                    identifier: '1',
                    features: ['ORDERORDERED', 'ORDERUNORDERED'],
                },
            ],
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5622892'),
            },
            proofInit: Bytes.fromBase64String(
                'CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofClient: Bytes.fromBase64String(
                'CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofConsensus: Bytes.fromBase64String(
                'CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            consensusHeight: {
                revisionNumber: Long.fromString('1'),
                revisionHeight: Long.fromString('8407'),
            },
            signer: 'cro1l60esq8vche5nlk7ylvp0ssq7rmk453zh8rx6u',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.connection.MsgConnectionOpenTry(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgConnectionOpenTry conversion', function () {
        const MsgConnectionOpenTry = new cro.ibc.connection.MsgConnectionOpenTry({
            clientId: '07-tendermint-0',
            previousConnectionId: '',
            clientState: {
                chainId: 'testnet-croeseid-1',
                trustLevel: {
                    numerator: Long.fromString('1'),
                    denominator: Long.fromString('1'),
                },
                trustingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                unbondingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                maxClockDrift: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                frozenHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                latestHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
            counterparty: {
                clientId: '07-tendermint-39',
                connectionId: 'connection-109',
                prefix: {
                    keyPrefix: 'aWJj',
                },
            },
            delayPeriod: Long.fromString('0'),
            counterpartyVersions: [
                {
                    identifier: '1',
                    features: ['ORDERORDERED', 'ORDERUNORDERED'],
                },
            ],
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5622892'),
            },
            proofInit: Bytes.fromBase64String(
                'CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofClient: Bytes.fromBase64String(
                'CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofConsensus: Bytes.fromBase64String(
                'CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            consensusHeight: {
                revisionNumber: Long.fromString('1'),
                revisionHeight: Long.fromString('8407'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenTry,
            value: {
                clientId: '07-tendermint-0',
                previousConnectionId: '',
                clientState: {
                    chainId: 'testnet-croeseid-1',
                    trustLevel: {
                        numerator: Long.fromString('1'),
                        denominator: Long.fromString('1'),
                    },
                    trustingPeriod: {
                        seconds: Long.fromString('100'),
                        nanos: 100000,
                    },
                    unbondingPeriod: {
                        seconds: Long.fromString('100'),
                        nanos: 100000,
                    },
                    maxClockDrift: {
                        seconds: Long.fromString('100'),
                        nanos: 100000,
                    },
                    frozenHeight: {
                        revisionNumber: Long.fromString('100'),
                        revisionHeight: Long.fromString('100'),
                    },
                    latestHeight: {
                        revisionNumber: Long.fromString('100'),
                        revisionHeight: Long.fromString('100'),
                    },
                    proofSpecs: [
                        {
                            leafSpec: {
                                hash: ics23.HashOp.BITCOIN,
                                prehashKey: ics23.HashOp.BITCOIN,
                                prehashValue: ics23.HashOp.BITCOIN,
                                length: ics23.LengthOp.VAR_RLP,
                                prefix: Uint8Array.from([0, 1, 2]),
                            },
                            innerSpec: {
                                childOrder: [1, 2],
                                childSize: 1,
                                minPrefixLength: 0,
                                maxPrefixLength: 10,
                                emptyChild: Uint8Array.from([0, 1, 2]),
                                hash: ics23.HashOp.BITCOIN,
                            },
                            maxDepth: 10000,
                            minDepth: 10000,
                        },
                    ],
                    upgradePath: ['ibc'],
                    allowUpdateAfterExpiry: false,
                    allowUpdateAfterMisbehaviour: false,
                },
                counterparty: {
                    clientId: '07-tendermint-39',
                    connectionId: 'connection-109',
                    prefix: {
                        keyPrefix: 'aWJj',
                    },
                },
                delayPeriod: Long.fromString('0'),
                counterpartyVersions: [
                    {
                        identifier: '1',
                        features: ['ORDERORDERED', 'ORDERUNORDERED'],
                    },
                ],
                proofHeight: {
                    revisionNumber: Long.fromString('4'),
                    revisionHeight: Long.fromString('5622892'),
                },
                proofInit: Bytes.fromBase64String(
                    'CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
                ).toUint8Array(),
                proofClient: Bytes.fromBase64String(
                    'CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
                ).toUint8Array(),
                proofConsensus: Bytes.fromBase64String(
                    'CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
                ).toUint8Array(),
                consensusHeight: {
                    revisionNumber: Long.fromString('1'),
                    revisionHeight: Long.fromString('8407'),
                },
                signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            },
        };

        expect(MsgConnectionOpenTry.toRawMsg()).to.deep.equal(rawMsg);
    });

    it('Test appendTxBody MsgConnectionOpenTry Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgConnectionOpenTry = new cro.ibc.connection.MsgConnectionOpenTry({
            clientId: '07-tendermint-0',
            previousConnectionId: '',
            clientState: {
                chainId: 'testnet-croeseid-1',
                trustLevel: {
                    numerator: Long.fromString('1'),
                    denominator: Long.fromString('1'),
                },
                trustingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                unbondingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                maxClockDrift: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                frozenHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                latestHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
            counterparty: {
                clientId: '07-tendermint-39',
                connectionId: 'connection-109',
                prefix: {
                    keyPrefix: 'aWJj',
                },
            },
            delayPeriod: Long.fromString('0'),
            counterpartyVersions: [
                {
                    identifier: '1',
                    features: ['ORDERORDERED', 'ORDERUNORDERED'],
                },
            ],
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5622892'),
            },
            proofInit: Bytes.fromBase64String(
                'CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofClient: Bytes.fromBase64String(
                'CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofConsensus: Bytes.fromBase64String(
                'CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            consensusHeight: {
                revisionNumber: Long.fromString('1'),
                revisionHeight: Long.fromString('8407'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgConnectionOpenTry).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0aa7170aa4170a2c2f6962632e636f72652e636f6e6e656374696f6e2e76312e4d7367436f6e6e656374696f6e4f70656e54727912f3160a0f30372d74656e6465726d696e742d3012001a0022290a1030372d74656e6465726d696e742d3339120e636f6e6e656374696f6e2d3130391a050a03696263280032210a0131120c4f524445524f524445524544120e4f52444552554e4f5244455245443a07080410ec98d70242b7060adc040ad9040a1a636f6e6e656374696f6e732f636f6e6e656374696f6e2d31303912530a1030372d74656e6465726d696e742d333912230a0131120d4f524445525f4f524445524544120f4f524445525f554e4f524445524544180122180a0f30372d74656e6465726d696e742d301a050a036962631a0e0801180120012a060002d4b1ae05222c080112280204d4b1ae052096d7f0fdba34083b5898d347edfbfbbf1f968c471391f69cfe408f6bb0de743120222c080112280406d4b1ae05201f31bea2a2993df8b6bcd4b872255b71bfd833fb37c607c0e4b1fe6cd0d04ae920222c08011228060ad4b1ae052056618c26ac2faea333d1af7a21464c87df120ec0869a5bed6cabc0318853506120222c08011228081ad4b1ae0520cbcc6c857ab02218811af71be0f36ae4b22a9ced0e5076a28e485046a47b8eaa20222e080112070a26d4b1ae05201a21208b508c514e677c7f8e2eef7484eca3f4074c761e2e2e6e73b4144124b09b46d4222e080112070c58d4b1ae05201a2120a15b43e7827ea0c76bda049eb8af99d2704baeed8350bd671c266846aabd7dbe222d080112290e9c01d4b1ae0520bd6697f9c3d6330a0288543943d7aca3e0d5e1de5f1fb092a6af24d8a939f2aa20222f0801120810a602d4b1ae05201a21201106cd57f27f0f0e4d5b24c9ad69313e5ef3f0d6e58c79c8f80818e6341385bd222f0801120812de03d4b1ae05201a2120b7b204d60777389fa960aa53584a316f3074a5e98677afe79b9cd0c212609f62222d0801122916860cd4b1ae052027ff652d2c5831b7e5aa5eb00607d86409fcf379d1a59a93c197f077b9e6ead9200ad5010ad2010a036962631220b9fe976fb3ce9220c113cedbd7a8e33654aa14b0ac6d52bd342c86fcdf8ebe7d1a090801180120012a0100222708011201011a20f956de7f0419af4109cc1974e1f137230abd2b8cb9f527775eecca1a88170f222225080112210105a5a5a4e19e08f87ae92010ca023a1a92629c6710ae1cbb28efc6e539aacf3e222508011221016c8defde2f514dfc0f414c1f216ee93cd8cbc36c7fb4362f9cd66431ed97e822222708011201011a20049597477e69780d27290c5a446e45d8ead38eab143dcfa559737b0819d5cf244ae2070a87060a84060a24636c69656e74732f30372d74656e6465726d696e742d33392f636c69656e74537461746512c2010a2b2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436c69656e7453746174651292010a1a63727970746f2d6f72672d636861696e2d6d61696e6e65742d311204080110031a040880ea4922050880d493012a0308d80432003a05080110d74142190a090801180120012a0100120c0a02000110211804200c300142190a090801180120012a0100120c0a02000110201801200130014a07757067726164654a1075706772616465644942435374617465500158011a0e0801180120012a060002d4b1ae05222e080112070204d4b1ae05201a212021afa31f920ad80cc97dbc2d50930e8d1faf040e3d0d4c82d9c61a1c18cbf98c222c080112280408d4b1ae05209a7fb7f61f5e58d46262d327fe5f597cacab4515676e13858cf761ea91321d8020222e080112070610d4b1ae05201a2120e140aad320cab4acceecf4aa8c19a9ee76d401895cbf0db41fa4fb9d138ac48f222c080112280820d4b1ae0520f1d4c8cf0fd548dfc4908fd230fd1b438eb9727b172279bef1e2165dbe29280520222e080112070a2ad4b1ae05201a212019b0655aa367603d3360b41f4bc237b5010e049d2e06af546d887d17004c7374222e080112070c66d4b1ae05201a21200a9250a2fd891c0392530325d02db55ebeb42b24d892e953c44d7690d3cca8b6222d080112290eae01d4b1ae052061c211a10f3343cda38ffe3b508937880cd12a52ea748c4a6134c617c69d0ed320222d0801122910ea01d4b1ae0520e6f0c13c29cc4fbc0f941f1ab737ab4962ab6656949ccb91575a78661908643420222d0801122912ea02d4b1ae0520f18ad71aae009d201acf938be932c63b98d65eed2266db0c11e91f68f18c543f20222d0801122914a808d4b1ae052055a5492d665f23e1c1917938cff166ca217eb10a09b0c7729ffbf872e069566b20222f0801120816860cd4b1ae05201a21206b96c95da8f21f092c33a78391c23d1692167a841e5f8450f2578c43c9ce80f80ad5010ad2010a036962631220b9fe976fb3ce9220c113cedbd7a8e33654aa14b0ac6d52bd342c86fcdf8ebe7d1a090801180120012a0100222708011201011a20f956de7f0419af4109cc1974e1f137230abd2b8cb9f527775eecca1a88170f222225080112210105a5a5a4e19e08f87ae92010ca023a1a92629c6710ae1cbb28efc6e539aacf3e222508011221016c8defde2f514dfc0f414c1f216ee93cd8cbc36c7fb4362f9cd66431ed97e822222708011201011a20049597477e69780d27290c5a446e45d8ead38eab143dcfa559737b0819d5cf2452af070ad4050ad1050a2f636c69656e74732f30372d74656e6465726d696e742d33392f636f6e73656e7375735374617465732f312d383430371286010a2e2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436f6e73656e737573537461746512540a0c0893d8f2820610fe8edac60312220a202f91b0403dcac16a7e3c565e43c473d29ba3c49bdc1e7f4115dddcc0e160dbde1a2015d4a1bd346a1c32898a55ee9e4095e035f19b0fabbd98c7f3798948f564929e1a0e0801180120012a060002d4b1ae05222e080112070204d4b1ae05201a2120390e107da915f545496db87c621174feb7add0af41b18e2289a3c08c05faad5c222c080112280408d4b1ae0520cf12973db134c9f7acf0702199dc16b589c16601b91c639dbf61ab8dbead02f820222c080112280610d4b1ae052066f93e42fb9c9d9232aefb47b065fc61c42de229f88701679d0e21be3ff193d220222c080112280820d4b1ae0520f1d4c8cf0fd548dfc4908fd230fd1b438eb9727b172279bef1e2165dbe29280520222e080112070a2ad4b1ae05201a212019b0655aa367603d3360b41f4bc237b5010e049d2e06af546d887d17004c7374222e080112070c66d4b1ae05201a21200a9250a2fd891c0392530325d02db55ebeb42b24d892e953c44d7690d3cca8b6222d080112290eae01d4b1ae052061c211a10f3343cda38ffe3b508937880cd12a52ea748c4a6134c617c69d0ed320222d0801122910ea01d4b1ae0520e6f0c13c29cc4fbc0f941f1ab737ab4962ab6656949ccb91575a78661908643420222d0801122912ea02d4b1ae0520f18ad71aae009d201acf938be932c63b98d65eed2266db0c11e91f68f18c543f20222d0801122914a808d4b1ae052055a5492d665f23e1c1917938cff166ca217eb10a09b0c7729ffbf872e069566b20222f0801120816860cd4b1ae05201a21206b96c95da8f21f092c33a78391c23d1692167a841e5f8450f2578c43c9ce80f80ad5010ad2010a036962631220b9fe976fb3ce9220c113cedbd7a8e33654aa14b0ac6d52bd342c86fcdf8ebe7d1a090801180120012a0100222708011201011a20f956de7f0419af4109cc1974e1f137230abd2b8cb9f527775eecca1a88170f222225080112210105a5a5a4e19e08f87ae92010ca023a1a92629c6710ae1cbb28efc6e539aacf3e222508011221016c8defde2f514dfc0f414c1f216ee93cd8cbc36c7fb4362f9cd66431ed97e822222708011201011a20049597477e69780d27290c5a446e45d8ead38eab143dcfa559737b0819d5cf245a05080110d741622b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40e8c37cdb1be95db31bd759e610619ec538f54c8873e6e2efc4f26fa52388a79976606e23f9329b8aaadb4c472bb2da36c58bd9a4101cad0bd36049cd59672529',
        );
    });

    it('Should validate MsgConnectionOpenTry provided addresses with network config', function () {
        const params1 = {
            clientId: '07-tendermint-0',
            previousConnectionId: '',
            clientState: {
                chainId: 'testnet-croeseid-1',
                trustLevel: {
                    numerator: Long.fromString('1'),
                    denominator: Long.fromString('1'),
                },
                trustingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                unbondingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                maxClockDrift: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                frozenHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                latestHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
            counterparty: {
                clientId: '07-tendermint-39',
                connectionId: 'connection-109',
                prefix: {
                    keyPrefix: 'aWJj',
                },
            },
            delayPeriod: Long.fromString('0'),
            counterpartyVersions: [
                {
                    identifier: '1',
                    features: ['ORDERORDERED', 'ORDERUNORDERED'],
                },
            ],
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5622892'),
            },
            proofInit: Bytes.fromBase64String(
                'CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofClient: Bytes.fromBase64String(
                'CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofConsensus: Bytes.fromBase64String(
                'CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            consensusHeight: {
                revisionNumber: Long.fromString('1'),
                revisionHeight: Long.fromString('8407'),
            },
            signer: 'cro1l60esq8vche5nlk7ylvp0ssq7rmk453zh8rx6u',
        };

        expect(() => new cro.ibc.connection.MsgConnectionOpenTry(params1)).to.throw(
            'Provided `signer` does not match network selected',
        );
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgConnectionOpenTry = new cro.ibc.connection.MsgConnectionOpenTry({
            clientId: '07-tendermint-0',
            previousConnectionId: '',
            clientState: {
                chainId: 'testnet-croeseid-1',
                trustLevel: {
                    numerator: Long.fromString('1'),
                    denominator: Long.fromString('1'),
                },
                trustingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                unbondingPeriod: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                maxClockDrift: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                frozenHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                latestHeight: {
                    revisionNumber: Long.fromString('100'),
                    revisionHeight: Long.fromString('100'),
                },
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
            counterparty: {
                clientId: '07-tendermint-39',
                connectionId: 'connection-109',
                prefix: {
                    keyPrefix: 'aWJj',
                },
            },
            delayPeriod: Long.fromString('0'),
            counterpartyVersions: [
                {
                    identifier: '1',
                    features: ['ORDERORDERED', 'ORDERUNORDERED'],
                },
            ],
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5622892'),
            },
            proofInit: Bytes.fromBase64String(
                'CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofClient: Bytes.fromBase64String(
                'CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            proofConsensus: Bytes.fromBase64String(
                'CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==',
            ).toUint8Array(),
            consensusHeight: {
                revisionNumber: Long.fromString('1'),
                revisionHeight: Long.fromString('8407'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        expect(() => MsgConnectionOpenTry.toRawAminoMsg()).to.throw(
            'IBC Module not supported under amino encoding scheme',
        );
    });

    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a IBC MsgConnectionOpenTry', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.ibc.connection.MsgConnectionOpenTry.fromCosmosMsgJSON(json)).to.throw(
                '/ibc.core.connection.v1.MsgConnectionOpenTry but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should throw on invalid `signer`', function () {
            const json = `
            {
                "@type": "/ibc.core.connection.v1.MsgConnectionOpenTry",
                "client_id": "07-tendermint-0",
                "previous_connection_id": "",
                "counterparty": {
                  "client_id": "07-tendermint-39",
                  "connection_id": "connection-109",
                  "prefix": {
                    "key_prefix": "aWJj"
                  }
                },
                "delay_period": "0",
                "counterparty_versions": [
                  {
                    "identifier": "1",
                    "features": [
                      "ORDER_ORDERED",
                      "ORDER_UNORDERED"
                    ]
                  }
                ],
                "proof_height": {
                  "revision_number": "4",
                  "revision_height": "5622892"
                },
                "proof_init": "CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "proof_client": "CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "proof_consensus": "CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "consensus_height": {
                  "revision_number": "1",
                  "revision_height": "8407"
                },
                "signer": "cro1l60esq8vche5nlk7ylvp0ssq7rmk453zh8rx6u"
              }
            `;

            expect(() => cro.ibc.connection.MsgConnectionOpenTry.fromCosmosMsgJSON(json)).to.throw(
                'Provided `signer` does not match network selected',
            );
        });
        it('should throw on non empty `client-state`', function () {
            const json = `{
                "@type": "/ibc.core.connection.v1.MsgConnectionOpenTry",
                "client_id": "07-tendermint-0",
                "previous_connection_id": "",
                "client_state": {
                  "@type": "/ibc.lightclients.tendermint.v1.ClientState",
                  "chain_id": "crypto-org-chain-mainnet-1",
                  "trust_level": {
                    "numerator": "1",
                    "denominator": "3"
                  },
                  "trusting_period": "1209600s",
                  "unbonding_period": "2419200s",
                  "max_clock_drift": "600s",
                  "frozen_height": {
                    "revision_number": "0",
                    "revision_height": "0"
                  },
                  "latest_height": {
                    "revision_number": "1",
                    "revision_height": "8407"
                  },
                  "proof_specs": [
                    {
                      "leaf_spec": {
                        "hash": "SHA256",
                        "prehash_key": "NO_HASH",
                        "prehash_value": "SHA256",
                        "length": "VAR_PROTO",
                        "prefix": "AA=="
                      },
                      "inner_spec": {
                        "child_order": [
                          0,
                          1
                        ],
                        "child_size": 33,
                        "min_prefix_length": 4,
                        "max_prefix_length": 12,
                        "empty_child": null,
                        "hash": "SHA256"
                      },
                      "max_depth": 0,
                      "min_depth": 0
                    },
                    {
                      "leaf_spec": {
                        "hash": "SHA256",
                        "prehash_key": "NO_HASH",
                        "prehash_value": "SHA256",
                        "length": "VAR_PROTO",
                        "prefix": "AA=="
                      },
                      "inner_spec": {
                        "child_order": [
                          0,
                          1
                        ],
                        "child_size": 32,
                        "min_prefix_length": 1,
                        "max_prefix_length": 1,
                        "empty_child": null,
                        "hash": "SHA256"
                      },
                      "max_depth": 0,
                      "min_depth": 0
                    }
                  ],
                  "upgrade_path": [
                    "upgrade",
                    "upgradedIBCState"
                  ],
                  "allow_update_after_expiry": true,
                  "allow_update_after_misbehaviour": true
                },
                "counterparty": {
                  "client_id": "07-tendermint-39",
                  "connection_id": "connection-109",
                  "prefix": {
                    "key_prefix": "aWJj"
                  }
                },
                "delay_period": "0",
                "counterparty_versions": [
                  {
                    "identifier": "1",
                    "features": [
                      "ORDER_ORDERED",
                      "ORDER_UNORDERED"
                    ]
                  }
                ],
                "proof_height": {
                  "revision_number": "4",
                  "revision_height": "5622892"
                },
                "proof_init": "CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "proof_client": "CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "proof_consensus": "CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "consensus_height": {
                  "revision_number": "1",
                  "revision_height": "8407"
                },
                "signer": "tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8"
              }
                `;

            expect(() => cro.ibc.connection.MsgConnectionOpenTry.fromCosmosMsgJSON(json)).to.throw(
                'MsgConnectionOpenTry doesnot support `client_state` JSON decoding.',
            );
        });
        it('should return the IBC MsgConnectionOpenTry corresponding to the JSON', function () {
            const json = `{
                "@type": "/ibc.core.connection.v1.MsgConnectionOpenTry",
                "client_id": "07-tendermint-0",
                "previous_connection_id": "",
                "counterparty": {
                  "client_id": "07-tendermint-39",
                  "connection_id": "connection-109",
                  "prefix": {
                    "key_prefix": "aWJj"
                  }
                },
                "delay_period": "0",
                "counterparty_versions": [
                  {
                    "identifier": "1",
                    "features": [
                      "ORDER_ORDERED",
                      "ORDER_UNORDERED"
                    ]
                  }
                ],
                "proof_height": {
                  "revision_number": "4",
                  "revision_height": "5622892"
                },
                "proof_init": "CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "proof_client": "CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "proof_consensus": "CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==",
                "consensus_height": {
                  "revision_number": "1",
                  "revision_height": "8407"
                },
                "signer": "tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8"
              }
                `;

            const MsgConnectionOpenTry = cro.ibc.connection.MsgConnectionOpenTry.fromCosmosMsgJSON(json);
            expect(MsgConnectionOpenTry.signer).to.eql('tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8');
        });
    });
});
