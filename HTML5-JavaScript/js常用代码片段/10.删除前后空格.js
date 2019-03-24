/**
 * trim()
 * @param str [删除左右两端的空格]
 * @returns {*|void|string|XML}
 */
/* global trim */
global.trim = function(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
};
/**
 * ltrim()
 * @param str [删除左边的空格]
 * @returns {*|void|string|XML}
 */
/* global ltrim */
global.ltrim = function(str) {
  return str.replace(/(^\s*)/g, '');
};
/**
 *
 * rtrim()
 * @param str [删除右边的空格]
 * @returns {*|void|string|XML}
 */
/* global rtrim */
global.rtrim = function(str) {
  return str.replace(/(\s*$)/g, '');
};
