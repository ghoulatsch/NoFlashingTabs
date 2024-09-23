// ==UserScript==
// @name         No flashing tabs
// @namespace    https://stackoverflow.com/questions/36740937/how-do-i-prevent-a-page-and-tabs-document-title-from-changing
// @homepage     https://github.com/ghoulatsch
// @version      1.0
// @description  Stop tabs from flashing.
// @author       see namespace
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Object.defineProperty(document, 'title', {
        set: function(){}
    });
})();
