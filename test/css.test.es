/* global describe it */


import { deepStrictEqual } from 'assert';
import { classAppendAndCssFromStyle } from '../src/css.es';


describe('css', () => {
  it('pseudo', () => {
    const pseudo = ':active:checked:disabled:empty:enabled:first-child:first-of-type:hover:focus:in-range:invalid:last-child:last-of-type:link:only-of-type:only-child:optional:out-of-range:read-only:read-write:required:root:target:valid:visited::after::before::first-letter::first-line::selection';
    const className = 'ac-c-d-em-en-fc-fot-h-f-ir-i-lc-lot-l-oot-oc-o-oor-ro-rw-re-r-t-va-vi-af-b-fl-fli-s--c-r';
    deepStrictEqual(classAppendAndCssFromStyle({
      display: 'none',
      [`&${pseudo}`]: {
        color: 'red'
      },
      color: 'black'
    }), {
      classAppend: [
        'd-n',
        className,
        'c-b'
      ],
      css: [
        '.d-n{display:none}',
        `.${className}${pseudo}{color:red}`,
        '.c-b{color:black}'
      ]
    });
  });

  it('nested', () => {
    const className = 'in-div-c-r';
    deepStrictEqual(
      classAppendAndCssFromStyle({
        '& div': {
          color: 'red'
        }
      }),
      {
        classAppend: [className],
        css: [`.${className} div{color:red}`]
      }
    );
  });

  it('pseudo and nested', () => {
    const className = 'h-in-div-t-0';
    deepStrictEqual(
      classAppendAndCssFromStyle({
        '&:hover div': {
          top: 0
        }
      }),
      {
        classAppend: [className],
        css: [`.${className}:hover div{top:0}`]
      }
    );
  });

  it('autoprefixer false', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        display: 'flex'
      }, {
        autoprefixer: false
      }),
      {
        classAppend: ['d-f'],
        css: [
          '.d-f{display:flex}'
        ]
      }
    );
  }); // autoprefixer false

  /* it('autoprefixer true', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        display: 'flex'
      }, {
        autoprefixer: true
      }),
      {
        classAppend: ['d-f'],
        css: [
          '.d-f{display:-webkit-box;display:-ms-flexbox;display:flex}'
        ]
      }
    );
  }); // autoprefixer true */

  describe('float', () => {
    it('left', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'left' }, {
        autoprefixer: false
      }), {
        classAppend: ['f-l'],
        css: [
          '.f-l{float:left}'
        ]
      });
    });

    it('right', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'right' }), {
        classAppend: ['f-r'],
        css: [
          '.f-r{float:right}'
        ]
      });
    });

    it('none', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'none' }), {
        classAppend: ['f-n'],
        css: [
          '.f-n{float:none}'
        ]
      });
    });
  }); // float

  it('abbreviations', () => {
    deepStrictEqual(classAppendAndCssFromStyle({
      borderStyle: 'solid',
      boxSizing: 'border-box',
      fill: 'black',
      lineHeight: 'normal',
      overflow: 'hidden',
      overflowWrap: 'break-word',
      overflowX: 'auto',
      overflowY: 'scroll',
      position: 'absolute',
      textDecoration: 'none',
      textDecorationColor: 'black',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid'
    }), {
      classAppend: [
        'bs-s',
        'bsi-b',
        'fi-b',
        'lh-n',
        'ov-h',
        'ovw-b',
        'ovx-a',
        'ovy-s',
        'p-a',
        'td-n',
        'tdc-b',
        'tdl-u',
        'tds-s'
      ],
      css: [
        '.bs-s{border-style:solid}',
        '.bsi-b{box-sizing:border-box}',
        '.fi-b{fill:black}',
        '.lh-n{line-height:normal}',
        '.ov-h{overflow:hidden}',
        '.ovw-b{overflow-wrap:break-word}',
        '.ovx-a{overflow-x:auto}',
        '.ovy-s{overflow-y:scroll}',
        '.p-a{position:absolute}',
        '.td-n{text-decoration:none}',
        '.tdc-b{text-decoration-color:black}',
        '.tdl-u{text-decoration-line:underline}',
        '.tds-s{text-decoration-style:solid}'
      ]
    });
  }); // abbreviations
}); // css
