import { combineReducers } from 'redux';
import UsersReducer from './users';
import NewUserReducer from './new_user';

// We combine all reducers into a single object before updated data is dispatched (sent) to store
//  Your entire applications state (store) is just whatever gets returned from all your reducers
const rootReducer = combineReducers({
  users: UsersReducer,
  newUser: NewUserReducer
});

/*
  {
    'users': [],
    'newUser': {}
  }
*/

export default rootReducer;
