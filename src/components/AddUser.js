import React, { Component } from 'react';
import './AddUser.css';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      age: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => {
          e.preventDefault();
          this.props.addUser(this.state);
        } }>
          <input
            value={ this.state.first }
            onChange={ e => this.setState({ first: e.target.value }) }
            type="text"
            placeholder="First name" />
          <input
            value={ this.state.last }
            onChange={ e => this.setState({ last: e.target.value }) }
            type="text"
            placeholder="Last name" />
          <input
            value={ this.state.age }
            onChange={ e => this.setState({ age: e.target.value }) }
            type="text"
            placeholder="Age" />
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default AddUser;
