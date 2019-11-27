import React from 'react';

export class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: '',
      computerChoice: '',
      userScore: 0,
      computerScore: 0,
    };
  }

  setComputerPlay = () => {
    const shifumiChoices = ['ROCK', 'PAPER', 'SCISSORS'];
    this.setState(
      {
        computerChoice: shifumiChoices[Math.floor(Math.random() * 3)],
      },
      this.checkResults
    );
  };

  startTheGame = userChoice => {
    this.setState(
      {
        userChoice,
      },
      this.setComputerPlay
    );
  };

  checkResults = () => {
    const { userChoice, computerChoice } = this.state;

    const fights = {
      ROCK: 'SCISSORS',
      SCISSORS: 'PAPER',
      PAPER: 'ROCK',
    };
    if (userChoice === computerChoice) {
      return null;
    } else if (fights[userChoice] === computerChoice) {
      this.setState(prevState => {
        return {
          userScore: prevState.userScore + 1,
        };
      }, this.props.setUserScore);
    } else {
      this.setState(prevState => {
        return {
          computerScore: prevState.computerScore + 1,
        };
      }, this.props.setComputerScore);
    }
  };

  render() {
    const { userScore, computerScore } = this.state;
    return (
      <div>
        Playing
        <p>Choose your weapon:</p>
        <button onClick={this.startTheGame.bind(this, 'ROCK')}>ROCK</button>
        <button onClick={this.startTheGame.bind(this, 'PAPER')}>PAPER</button>
        <button onClick={this.startTheGame.bind(this, 'SCISSORS')}>
          SCISSORS
        </button>
        {this.state.computerChoice && <div>{this.state.computerChoice}</div>}
        <div>
          <table style={{ border: '1px solid black' }}>
              <tr>
                <th>STATS</th>
              </tr>
            <thead>
            </thead>
            <tbody>
                <
            </tbody>

          </table>
          <ul>
            <li>YOU : {userScore}</li>
            <li>COMPUTER : {computerScore}</li>
          </ul>
        </div>
      </div>
    );
  }
}
