import * as types from '../constants/ActionTypes';

export const addUser = (user) => {
  console.log('You are adding user: ', user);

  return {
    type: types.ADD_USER,
    user
  }
};
