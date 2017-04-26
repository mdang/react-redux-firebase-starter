import * as types from '../constants/ActionTypes';

export const selectUser = (user) => {
  console.log('You clicked on user: ', user);

  return {
    type: types.USER_SELECTED,
    payload: user
  }
};
