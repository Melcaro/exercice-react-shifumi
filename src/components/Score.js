import React from 'react';

export const Score = ({ userScore, computerScore }) => {
  return (
    <div>
      Score
      {userScore === 5 && <div>YOU WIN!</div>}
      {computerScore === 5 && <div>YOU LOOSE </div>}
    </div>
  );
};
