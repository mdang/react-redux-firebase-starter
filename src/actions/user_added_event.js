import * as types from '../constants/action_types';
import { database } from '../utils/firebase';

const getUserAddedAction = user => {
  return {
    type: types.USER_ADDED,
    user
  };
}

export const watchUserAddedEvent = dispatch => {
  database.ref('/users').on('child_added', snap => {
    dispatch(getUserAddedAction(snap.val()));
  });
}
