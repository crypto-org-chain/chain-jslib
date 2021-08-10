import ow from 'ow';
import Long from 'long';
import { ibc, google, tendermintV2 } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import * as legacyAmino from '../../../../cosmos/amino';
import { IGoogleAny } from '../IGoogleAny';
import { owHeaderOptions } from '../../ow.types';

export const msgHeader = function () {
    return class Header implements IGoogleAny, ibc.lightclients.tendermint.v1.IHeader {
        /** Header signedHeader. */
        public signedHeader?: tendermintV2.types.ISignedHeader | null;

        /** Header validatorSet. */
        public validatorSet?: tendermintV2.types.IValidatorSet | null;

        /** Header trustedHeight. */
        public trustedHeight?: IHeight | null;

        /** Header trustedValidators. */
        public trustedValidators?: tendermintV2.types.IValidatorSet | null;

        /**
         * Constructor to create a new IBC.Header
         * @param {HeaderOptions} options
         * @returns {Header}
         * @throws {Error} when options is invalid
         */
        constructor(options: HeaderOptions) {
            ow(options, 'options', owHeaderOptions);
            this.signedHeader = options.signedHeader;
            this.validatorSet = options.validatorSet;
            this.trustedHeight = options.trustedHeight;
            this.trustedValidators = options.trustedValidators;
        }

        getEncoded(): google.protobuf.Any {
            const HeaderOptions = {
                signedHeader: this.signedHeader,
                validatorSet: this.validatorSet,
                trustedHeight: this.trustedHeight,
                trustedValidators: this.trustedValidators,
            };

            const HeaderWrapped = ibc.lightclients.tendermint.v1.Header.create(HeaderOptions);
            return google.protobuf.Any.create({
                type_url: COSMOS_MSG_TYPEURL.ibc.LightClients.Header,
                value: ibc.lightclients.tendermint.v1.Header.encode(HeaderWrapped).finish(),
            });
        }

        /**
         * Returns the raw Msg representation of Ibc.Header
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.LightClients.Header,
                value: {
                    signedHeader: this.signedHeader,
                    validatorSet: this.validatorSet,
                    trustedHeight: this.trustedHeight,
                    trustedValidators: this.trustedValidators,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        /**
         * Returns an instance of IBC.Header
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {Header}
         */
        public static fromCosmosMsgJSON(_msgJsonStr: string): Header {
            throw new Error('IBC Module does not support JSON decoding.');
        }
    };
};

export type HeaderOptions = {
    signedHeader?: tendermintV2.types.ISignedHeader | null;
    validatorSet?: tendermintV2.types.IValidatorSet | null;
    trustedHeight?: IHeight | null;
    trustedValidators?: tendermintV2.types.IValidatorSet | null;
};

export interface IHeight {
    revisionNumber: Long;
    revisionHeight: Long;
}
