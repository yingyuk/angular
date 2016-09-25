/*
* @Author: Yuk¡¤
* @Date:   2016-09-25 14:15:43
* @Last Modified by:   Yuk·
* @Last Modified time: 2016-09-25 14:15:46
*/

'use strict';
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
