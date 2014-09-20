

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
            mock.expects('serviceCall').once();

            straw.service.locale.getLanguage();

            mock.verify();
            mock.restore();

        });

    });

});
