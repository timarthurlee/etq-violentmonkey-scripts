// ==UserScript==
// @name        EtQ: Add Password ID to Input Field
// @namespace   Violentmonkey Scripts
// @match       https://*.etq.com/*
// @grant       none
// @version     1.0
// @author      Tim Lee
// @description Adds an ID to the password input field that lacks one
// ==/UserScript==

(function () {
  'use strict';

  function addIdIfReady() {
    const passwordInput = document.querySelector(
      'div#_FIELD--PASSWORD input.form-control.common-input.password-text-security'
    );
    if (passwordInput && !passwordInput.id) {
      passwordInput.id = 'password-input';
      console.log('Password input ID added:', passwordInput);
      return true;
    }
    return false;
  }

  const maxTries = 50;
  let tries = 0;

  const interval = setInterval(() => {
    if (addIdIfReady() || ++tries >= maxTries) {
      clearInterval(interval);
    }
  }, 200);
})();
