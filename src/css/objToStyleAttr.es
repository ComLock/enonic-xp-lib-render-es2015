/* eslint-disable import/prefer-default-export */


import {addDefaultUnit} from './addDefaultUnit.es';
import {dasherize} from '../util/dasherize.es';


export function objToStyleAttr(props) {
  return Object.keys(props)
    .map(k => `${dasherize(k)}:${addDefaultUnit(props[k], k)}`)
    .join(';');
}
