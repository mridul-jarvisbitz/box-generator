import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [inrows, setInrows] = useState(0)
  const [incols, setIncols] = useState(0)
  const [rows, setRows] = useState(Array(0).fill(null));
  const [columns, setColumns] = useState(Array(0).fill(null));
  const [activeCell, setActiveCell] = useState({ row: 0, col: 0 });

  function generateBox() {
    setRows(Array(inrows).fill(null));
    setColumns(Array(incols).fill(null));
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowUp':
        setActiveCell({ row: Math.max(0, activeCell.row - 1), col: activeCell.col });
        break;
      case 'ArrowDown':
        setActiveCell({ row: Math.min(inrows - 1, activeCell.row + 1), col: activeCell.col });
        break;
      case 'ArrowLeft':
        setActiveCell({ row: activeCell.row, col: Math.max(0, activeCell.col - 1) });
        break;
      case 'ArrowRight':
        setActiveCell({ row: activeCell.row, col: Math.min(incols - 1, activeCell.col + 1) });
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <h2>Box Generator</h2>
       <label htmlFor="row">Enter Rows: </label> <input type="number" name="row" placeholder="Enter Rows" onChange={(e) => setInrows(parseInt(e.target.value))} value={inrows} />
       <label htmlFor="column">Enter Columns: </label><input type="number" name="column" placeholder="Enter Columns" onChange={(e) => setIncols(parseInt(e.target.value))} value={incols} />
        <button onClick={generateBox}>Go</button> 

            <div className="box-container">
              <table onKeyDown={handleKeyDown} tabIndex={0}>
                {
                  rows.map((e,i) => {
                    return <tr>
                      {columns.map((eve,idx) => {
                        const isActive = activeCell.row === i && activeCell.col === idx;
                        return <td className={isActive ? 'active' : ''}></td>})}
                    </tr>
                  })
                }
              </table>
            </div>
      </div>
      );
}

      export default App;
