import { useState } from "react";

export default function SodukuGame() {
    const [board, setBoard] = useState([
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
                                }>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <table>
    <tr>
        <th scope="row">A</th>
        <td>Alfa</td>
        <td>AL fah</td>
    </tr>
    <tr>
        <th scope="row">B</th>
        <td>Bravo</td>
        <td>BRAH voh</td>
    </tr>
    <tr>
        <th scope="row">C</th>
        <td>Charlie</td>
        <td>CHAR lee</td>
    </tr>
    <tr>
        <th scope="row">D</th>
        <td>Delta</td>
        <td>DELL tah</td>
    </tr>
</table>
        </div>
    );
}
