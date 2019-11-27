import React from 'react';

import { Rock } from './Rock';
import { Paper } from './Paper';
import { Scissor } from './Scissor';

import { Intro } from './Intro';
import { Playing } from './Playing';
import { Score } from './Score';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'playing',
    };
  }

  getGameState = () => {
    const { gameState } = this.state;

    const GameStates = {
      intro: <Intro onClick={this.changeState} />,
      playing: <Playing />,
      score: <Score />,
    };
    return GameStates[gameState];
  };

  changeState = () => {
    this.setState({
      gameState: 'playing',
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>SHIFUMI</h1>
        <div>{this.getGameState()}</div>
      </div>
    );
  }
}

export default App;
