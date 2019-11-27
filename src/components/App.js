import React from 'react';

import { Intro } from './Intro';
import { Playing } from './Playing';
import { Score } from './Score';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'playing',
      userScore: 0,
      computerScore: 0,
    };
  }

  getGameState = () => {
    const { gameState } = this.state;

    const GameStates = {
      intro: <Intro onClick={this.changeState} />,
      playing: (
        <Playing
          setUserScore={this.setUserScore}
          setComputerScore={this.setComputerScore}
        />
      ),
      score: (
        <Score
          userScore={this.state.userScore}
          computerScore={this.state.computerScore}
        />
      ),
    };
    return GameStates[gameState];
  };

  changeState = () => {
    this.setState({
      gameState: 'playing',
    });
  };

  setUserScore = () => {
    this.setState(prevState => {
      return {
        userScore: prevState.userScore + 1,
      };
    }, this.endGame);
  };

  setComputerScore = () => {
    this.setState(prevState => {
      return {
        computerScore: prevState.computerScore + 1,
      };
    }, this.endGame);
  };

  endGame = () => {
    const {
      state: { userScore, computerScore },
    } = this;

    if (userScore === 5 || computerScore === 5) {
      this.setState({
        gameState: 'score',
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>SHIFUMI</h1>
        <div>{this.getGameState()}</div>
      </div>
    );
  }
}

export default App;
