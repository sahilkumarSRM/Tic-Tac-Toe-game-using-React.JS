import Board from'./Board';
import Info from'./Info';

import'./App.css';
import{useState} from "react";
import { resetWarningCache } from 'prop-types';

function App(){
    cons[resetWarningCache.SetReset] = useState(false);
    const[winner,setWinner]= useState("");
    const resetBoard=() =>{
        setReset(true);

    };

  return(
      <div vlassName="App">
         <div
                className={`winner ${
                    winner !== "" ? "" : "shrink"
                }`}
            >

          <div vlassName="winner-text">(winner)</div>
          <button onClick={() => resetBoard()}>
            </button>      
            </div>

        <Board
         reset={reset}
         setReset={setReset}
         winner={winner}
         setWinner={setWinner}
         />    
      <Info />
      </div>
  );
}
export default App;