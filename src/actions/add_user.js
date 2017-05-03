import * as types from '../constants/action_types';
import { database } from '../utils/firebase';

const addUserRequestedAction = () => {
  return {
    type: types.ADD_USER_REQUESTED
  };
}

const addUserRejectedAction = error => {
  return {
    type: types.ADD_USER_REJECTED,
    error
  }
}

const addUserFulfilledAction = user => {
  return {
    type: types.ADD_USER_FULFILLED,
    user
  };
}

export const addUser = (user) => {
  return dispatch => {
    console.log('You are adding user: ', user);
    dispatch(addUserRequestedAction(user));

    database.ref('/users').push({
      first: user.first,
      last: user.last,
      age: user.age
    }).then(() => {
      dispatch(addUserFulfilledAction(user));
    }).catch(error => {
      console.log('Add User error: ', error);
      dispatch(addUserRejectedAction());
    });
  }
}
