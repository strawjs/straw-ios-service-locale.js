

/* global describe, it, chai, sinon, straw */

var expect = chai.expect;

describe('straw.service.locale', function () {
    'use strict';

    it('is a object', function () {
        expect(straw.service.locale).to.be.a('object');
    });

    describe('.getLanguage', function () {

        it('calls straw.core.serviceCall', function () {

            var mock = sinon.mock(straw.core);
            mock.expects('serviceCall').withArgs('locale', 'getLanguage').once();

            straw.service.locale.getLanguage();

            mock.verify();
            mock.restore();

        });

        it('returns a Promise', function () {

            var mock = sinon.mock(straw.core);

            expect(straw.service.locale.getLanguage() instanceof window.Promise).to.be.true;

            mock.restore();

        });

        describe('returns promise', function () {

            it('resolves with string value', function (done) {

                var originalServiceCall = straw.core.serviceCall;

                straw.core.serviceCall = function (service, method, params, success) {
                    success({value: 'en-Latn-US'});
                };

                straw.service.locale.getLanguage().then(function (language) {
                    setTimeout(function () {
                        expect(language).to.equal('en-Latn-US');

                        straw.core.serviceCall = originalServiceCall;

                        done();
                    });
                });

            });

            it('rejects with error object', function (done) {

                var originalServiceCall = straw.core.serviceCall;

                straw.core.serviceCall = function (service, method, params, success, failure) {
                    failure({code: -1, message: 'abc'});
                };

                straw.service.locale.getLanguage().then(null, function (obj) {
                    setTimeout(function () {
                        expect(obj).to.deep.equal({code: -1, message: 'abc'});

                        straw.core.serviceCall = originalServiceCall;

                        done();
                    });
                });

            });

        });

    });

});
