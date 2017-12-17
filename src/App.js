import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src="mylogo.jpg" height="96" alt="mylogo"></img>
          <h2>What is your favorite party in 2019?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-md-offset-6 col-md-4">
              <img src="BJP_logo.jpg" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-md-4">
              <img src="Congress_logo.jpg" height="96" alt="Angular" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-md-4">
              <img src="aap_logo.jpg" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;