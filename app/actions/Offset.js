'use strict'
import { OFFSET } from '../constants/types'

export function forwordOffset(offset) {
  return (dispatch, getState) => {
    dispatch({
      type: OFFSET.forword,
      offset: offset
    });
  };
}

export function backOffset(offset) {
  return (dispatch, getState) => {
    dispatch({
      type: OFFSET.back,
      offset: offset
    });
  };
}

// export default {
//   forwordOffset: forwordOffset,
//   backOffset: backOffset
// };
