import * as types from '../constants/action_types';

export default (state=null, action) => {
  switch (action.type) {
    case types.ADD_USER_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case types.ADD_USER_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding user',
      });
    }
    case types.ADD_USER_FULFILLED: {
      const user = action.user;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added user to Firebase',
        user
      });
      return newState.user;
    }

    default:
      return state;
  }
}
