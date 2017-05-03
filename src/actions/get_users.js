import * as types from '../constants/action_types';
import { database, firebaseListToArray } from '../utils/firebase';

const getUsersRequestedAction = () => {
  return {
    type: types.GET_USERS_REQUESTED
  };
}

const getUsersRejectedAction = () => {
  return {
    type: types.GET_USERS_REJECTED
  }
}

const getUsersFulfilledAction = (users) => {
  return {
    type: types.GET_USERS_FULFILLED,
    users
  };
}

export const getUsers = () => {
  return dispatch => {
    dispatch(getUsersRequestedAction());
    return database.ref('/users').once('value', snap => {
      const users = firebaseListToArray(snap.val());
      dispatch(getUsersFulfilledAction(users))
    })
    .catch((error) => {
      console.log('Get Users error: ', error);
      dispatch(getUsersRejectedAction());
    });
  }
}
