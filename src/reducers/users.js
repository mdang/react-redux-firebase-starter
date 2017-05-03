import * as types from '../constants/action_types';

export default function UsersReducer(state=[], action) {
  switch(action.type) {
    case types.GET_USERS_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case types.GET_USERS_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting users',
      });
    }
    case types.GET_USERS_FULFILLED: {
      const users = action.users;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got users from Firebase'
      });
      newState.users = users || [];

      return newState.users;
    }
    case types.USER_ADDED: {
      // @todo

      return state;
    }

    default:
      return state;
  }
}
