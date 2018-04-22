import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Dashboard
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, polls, users }) => {
  const answers = users[authedUser].answers;
  const answered = 
    answers.map((id) => polls[id])
      .sort((a, b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
  return {
    answered,
    unanswered,
  }
}

export default connect(mapStateToProps)(Dashboard);