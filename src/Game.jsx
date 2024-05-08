import { useState } from "react";

export default function SodukuGame() {
    const _ = new Array(9).fill(null).map(() => new Array(9).fill(0));
    console.log(_)
    const [board, setBoard] = useState(_);

    const validate = (board) => {
        const rows = new Array(9).fill(null).map(() => new Array(9).fill(false));
        const columns = new Array(9).fill(null).map(() => new Array(9).fill(false));
        const boxes = new Array(9).fill(null).map(() => new Array(9).fill(false));

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === 0) {
                    continue;
                }

                const value = board[i][j] - 1;

                if (rows[i][value]) {
                    return false;
                }

                rows[i][value] = true;

                if (columns[j][value]) {
                    return false;
                }

                columns[j][value] = true;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (boxes[boxIndex][value]) {
                    return false;
                }

                boxes[boxIndex][value] = true;
            }
        }

        return true;
    };

    const solve = (board) => {
        const solveHelper = (board) => {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (board[i][j] === 0) {
                        for (let k = 1; k <= 9; k++) {
                            board[i][j] = k;
                            if (validate(board)) {
                                if (solveHelper(board)) {
                                    return true; // Successfully solved
                                }
                            }
                            board[i][j] = 0;
                        }
                        return false; // Backtrack
                    }
                }
            }
            return true; // All cells filled
        };
    
        const newBoard = board.map((row) => [...row]);
        solveHelper(newBoard);
        setBoard(newBoard);
    };
    

    const reset = () => {
        setBoard([
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);
    };

    return (
        <div>
            <h1>Sudoku</h1>
            <table>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j} onClick={() => setBoard((prev) => {
                                    const newBoard = prev.map((row) => [...row]);
                                    newBoard[i][j] = (newBoard[i][j] + 1) % 10;
                                    return newBoard;
                                })
                                }>{ cell }</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => solve(board)}>Solve</button>
            <button onClick={() => { if (validate(board)) { alert("Correct solution!") } else { alert("Incorrect solution!") }}}> Check</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
