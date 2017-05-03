import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddUser from '../components/AddUser';

import { addUser } from '../actions/add_user';

// "state.activeUser" is set in reducers/index.js
const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
