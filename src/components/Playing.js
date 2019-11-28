import React from 'react';

export class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: '',
      computerChoice: '',
      userScore: 0,
      computerScore: 0,
      round: 0,
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
    this.setState(prevState => {
      return {
        round: prevState.round + 1,
        previousRound: prevState.round,
      };
    });
  };

  setStatsArray = () => {
    const {
      userChoice,
      computerChoice,
      userScore,
      computerScore,
      round,
    } = this.state;
    const roundInfos = [
      { round },
      { userChoice },
      { computerChoice },
      { userScore },
      { computerScore },
    ];
    return (
      <tr>
        <td>{round}</td>
        <td>{userChoice}</td>
        <td>{computerChoice}</td>
        <td>{userScore}</td>
        <td>{computerScore}</td>
      </tr>
    );
  };
  render() {
    const {
      userChoice,
      computerChoice,
      userScore,
      computerScore,
      round,
    } = this.state;

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
          <table style={{ border: '1px solid black', width: '80vw' }}>
            <tr></tr>
            <thead>
              <tr>
                <th colSpan="3" style={{ border: '1px solid black' }}>
                  STATS
                </th>
                <th colSpan="2">SCORE</th>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}>Round</th>
                <th style={{ border: '1px solid black' }}>You played</th>
                <th style={{ border: '1px solid black' }}>Computer played</th>
                <th style={{ border: '1px solid black' }}>YOU</th>
                <th style={{ border: '1px solid black' }}>COMPUTER</th>
              </tr>
            </thead>
            <tbody>
              <tr>{this.setStatsArray()}</tr>
              {/* <tr>
                <td>{round}</td>
                <td>{userChoice}</td>
                <td>{computerChoice}</td>
                <td>{userScore}</td>
                <td>{computerScore}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
