// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018-present (licensed under the Apache License, Version 2.0)
import { expect } from 'chai';
import { parse } from 'protobufjs';

import { omitDefault, omitDefaults } from './adr27';
import { Bytes } from '../../utils/bytes/bytes';

describe('adr27', function () {
    describe('omitDefault', function () {
        it('works for strings', function () {
            expect(omitDefault('abc')).to.eq('abc');
            expect(omitDefault('')).to.eq(null);
        });

        it('works for bytes', function () {
            expect(omitDefault(Bytes.fromHexString('ab').toUint8Array())).to.deep.eq(
                Bytes.fromHexString('ab').toUint8Array(),
            );
            expect(omitDefault(Bytes.fromHexString('').toUint8Array())).to.eq(null);
        });

        it('works for integers', function () {
            expect(omitDefault(123)).to.eq(123);
            expect(omitDefault(0)).to.eq(null);
        });

        it('works for floats', function () {
            expect(omitDefault(1.234)).to.eq(1.234);
            expect(omitDefault(0.0)).to.eq(null);
        });

        it('works for booleans', function () {
            expect(omitDefault(true)).to.eq(true);
            expect(omitDefault(false)).to.eq(null);
        });

        it('works for repeated', function () {
            expect(omitDefault(['a', 'b', 'c'])).to.deep.eq(['a', 'b', 'c']);
            expect(omitDefault([])).to.eq(null);
        });

        it('works for enums', function () {
            const proto = `
        package blog;
        syntax = "proto3";

        enum Review {
          UNSPECIFIED = 0;
          ACCEPTED = 1;
          REJECTED = 2;
        };
      `;
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const Review = parse(proto).root.lookupEnum('blog.Review');
            expect(omitDefault(Review.values.ACCEPTED)).to.eq(Review.values.ACCEPTED);
            expect(omitDefault(Review.values.UNSPECIFIED)).to.eq(null);
        });

        it('works for unset', function () {
            // null and undefined both represent unset in protobuf.js serialization
            expect(omitDefault(undefined)).to.eq(null);
            expect(omitDefault(null)).to.eq(null);
        });
    });

    describe('omitDefaults', function () {
        it('works for scalars', function () {
            expect(omitDefaults('abc')).to.eq('abc');
            expect(omitDefaults('')).to.eq(null);

            expect(omitDefaults(Bytes.fromHexString('ab').toUint8Array())).to.deep.eq(
                Bytes.fromHexString('ab').toUint8Array(),
            );
            expect(omitDefaults(Bytes.fromHexString('').toUint8Array())).to.eq(null);

            expect(omitDefaults(123)).to.eq(123);
            expect(omitDefaults(0)).to.eq(null);

            expect(omitDefaults(1.234)).to.eq(1.234);
            expect(omitDefaults(0.0)).to.eq(null);

            expect(omitDefaults(true)).to.eq(true);
            expect(omitDefaults(false)).to.eq(null);
        });

        it('works for repeated', function () {
            expect(omitDefaults(['a', 'b', 'c'])).to.deep.eq(['a', 'b', 'c']);
            expect(omitDefaults([])).to.eq(null);
        });

        it('works for enums', function () {
            const proto = `
        package blog;
        syntax = "proto3";

        enum Review {
          UNSPECIFIED = 0;
          ACCEPTED = 1;
          REJECTED = 2;
        };
      `;
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const Review = parse(proto).root.lookupEnum('blog.Review');
            expect(omitDefaults(Review.values.ACCEPTED)).to.eq(Review.values.ACCEPTED);
            expect(omitDefaults(Review.values.UNSPECIFIED)).to.eq(null);
        });

        it('works for unset', function () {
            // null and undefined both represent unset in protobuf.js serialization
            expect(omitDefaults(undefined)).to.eq(null);
            expect(omitDefaults(null)).to.eq(null);
        });

        it('works for objects', function () {
            // empty
            expect(omitDefaults({})).to.deep.eq({});

            // simple
            expect(
                omitDefaults({
                    a: 'foo',
                    b: '',
                    c: 100,
                    d: 0,
                }),
            ).to.deep.eq({
                a: 'foo',
                b: null,
                c: 100,
                d: null,
            });

            // nested

            expect(
                omitDefaults({
                    a: {
                        x: 'foo',
                        y: '',
                    },
                    b: {
                        x: {
                            o: 1.2,
                            p: false,
                            q: 0,
                        },
                    },
                }),
            ).to.deep.eq({
                a: {
                    x: 'foo',
                    y: null,
                },
                b: {
                    x: {
                        o: 1.2,
                        p: null,
                        q: null,
                    },
                },
            });
        });

        it('can be used to reproduce ADR 027 test vector', function () {
            const proto = `
        // Article.proto

        package blog;
        syntax = "proto3";

        enum Type {
          UNSPECIFIED = 0;
          IMAGES = 1;
          NEWS = 2;
        };

        enum Review {
          UNSPECIFIED = 0;
          ACCEPTED = 1;
          REJECTED = 2;
        };

        message Article {
          string title = 1;
          string description = 2;
          uint64 created = 3;
          uint64 updated = 4;
          bool public = 5;
          bool promoted = 6;
          Type type = 7;
          Review review = 8;
          repeated string comments = 9;
          repeated string backlinks = 10;
        };
      `;
            const { root } = parse(proto);

            // eslint-disable-next-line @typescript-eslint/naming-convention
            const Article = root.lookupType('blog.Article');
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const Type = root.lookupEnum('blog.Type');
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const Review = root.lookupEnum('blog.Review');

            const expected = Bytes.fromHexString(
                '0a1654686520776f726c64206e65656473206368616e676518e8bebec8bc2e280138024a084e696365206f6e654a095468616e6b20796f75',
            ).toUint8Array();

            const serialization = Uint8Array.from(
                Article.encode(
                    omitDefaults({
                        title: 'The world needs change',
                        description: '',
                        created: 1596806111080,
                        updated: 0,
                        public: true,
                        promoted: false,
                        type: Type.values.NEWS,
                        review: Review.values.UNSPECIFIED,
                        comments: ['Nice one', 'Thank you'],
                        backlinks: [],
                    }),
                ).finish(),
            );
            expect(serialization).to.deep.eq(expected);
        });
    });
});
