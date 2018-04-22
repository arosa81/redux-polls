import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from '../components/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchInitData();
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        {this.props.loading === true
          ? null
          : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => (
  { loading: authedUser === null }
)

const mapDispatchToProps = (dispatch) => (
  { fetchInitData: () => dispatch(handleInitialData()) }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
