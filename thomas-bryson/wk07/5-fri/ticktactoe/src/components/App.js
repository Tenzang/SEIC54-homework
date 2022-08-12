import { useEffect, useState } from 'react';
import Box from './Box';

function App() {
  const [board, setBoard] = useState(
    ['', '', '',
      '', '', '',
      '', '', '']
  );

  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);
  const changeTurn = () => {
    setTurn(turn === 0 ? 1 : 0);
  };
  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 3, 7],
      [2, 4, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winningCombos.forEach((combo) => {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]])
        return board[combo[0]];
    })
  };
  useEffect(() => {
    checkWinner();
  }, [board])

  return (
    <div className="App">
      {winner !== null ? <div>{winner} wins</div> : <div></div>}
      <div class="container">
      <div className="gameBoard-container">
        <div clasNames="gameBoard">
          <div className="row">
            <Box currPosition={1} />
            <Box currPosition={1} />
            <Box currPosition={1} />
          </div>
          <div className="row">
            <Box currPosition={1} />
            <Box currPosition={1} />
            <Box currPosition={1} />
          </div>
          <div className="row">
            <Box currPosition={1} />
            <Box currPosition={1} />
            <Box currPosition={1} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}


export default App;
