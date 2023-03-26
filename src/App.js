import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [inrows, setInrows] = useState(0)
  const [incols, setIncols] = useState(0)
  const [rows, setRows] = useState(Array(0).fill(null));
  const [columns, setColumns] = useState(Array(0).fill(null));
  function generateBox() {
    setRows(Array(inrows).fill(null));
    setColumns(Array(incols).fill(null));
  }

  return (
    <div className="container">
      <h2>Box Generator</h2>
       <label htmlFor="row">Enter Rows: </label> <input type="number" name="row" placeholder="Enter Rows" onChange={(e) => setInrows(parseInt(e.target.value))} value={inrows} />
       <label htmlFor="column">Enter Columns: </label><input type="number" name="column" placeholder="Enter Columns" onChange={(e) => setIncols(parseInt(e.target.value))} value={incols} />
        <button onClick={generateBox}>Go</button> 

            <div className="box-container">
              <table>
                {
                  rows.map((e,i) => {
                    return <tr>
                      {columns.map((eve,idx) => {return <td></td>})}
                    </tr>
                  })
                }
              </table>
            </div>
      </div>
      );
}

      export default App;
