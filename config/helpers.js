/*
* @Author: Yuk·
* @Date:   2016-09-25 13:21:19
* @Last Modified by:   yukyuk
* @Last Modified time: 2016-09-25 13:21:23
*/

'use strict';
var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;
