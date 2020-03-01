/* global browser, chrome */

var b = chrome;
try {
  b = browser;
} catch (e) { }

module.exports = b;
