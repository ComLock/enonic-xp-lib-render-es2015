/*
 This file might be replaced with src/class.es in render-js@2.0.0
 Use html.es or dist/html.js instead.
*/

import {HTML_AND_SVG_ELEMENTS} from './src/html/elements.es';


export {cdata} from './src/html/cdata.es';
export {doctype} from './src/html/doctype.es';
export {el} from './src/html/el.es';
export {render} from './src/html/render.es';
export {ELEMENTS} from './src/html/elements.es'; // TODO backwardscompat remove in 2.0.0

HTML_AND_SVG_ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});

export default exports;
