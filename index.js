// straw-ios-service-locale.js

/**
 * @class
 * @singleton
 */
window.straw.service.locale = (function (straw, Promise) {
    'use strict';

    var exports = {};

    exports.getLanguage = function () {
        return new Promise(function (resolve, reject) {
            straw.core.serviceCall('locale', 'getLanguage', null, function (obj) {

                resolve(obj.value); // resolve with language string value

            }, reject);
        });
    };

    return exports;

}(window.straw, window.Promise));
