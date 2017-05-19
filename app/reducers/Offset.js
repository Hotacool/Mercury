'use strict'
import { OFFSET } from '../constants/types'

export default function calculateOffset(state = 0, action) {
  console.log('state is '+state);
  switch (action.type) {
    case OFFSET.forword:
      return state + action.offset;
      break;
    case OFFSET.back:
      return state - action.offset;
      break;
    default:
      return state;
  }
}
