

/* global describe, it, chai, sinon */

var expect = chai.expect;

describe('straw.service.locale', function () {
    'use strict';

    it('is a object', function () {
        expect(window.straw.service.locale).to.be.a('object');
    });

});
