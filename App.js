import React , {useState}from "react";
import Reaction from "react-dom";


const App = () => {
  const [result,setResult] = useState("");

  const handle Click = (e){
      setResult(e.target.name);
  }

  const allClear =() =>{
      setResult("");
}

  const backspace =(){
      setResult(result.slice(0, -1))
}

  const equal = (){
      try{
          setResult(evel(result).toString):
      }
      catch{
          setResult("Error");
}
}
  return(
    <div>
        <form>
            <input value={result} />
        </form>
        <div className="keyboard">
            <button onClick={allClear}>AC</button>
            <button>C</button>
            <button name="/" onClick={handleClick}>&divide;</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="*" onClick={handleClick}>&times;</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="-" onClick={handleClick}>&ndash;</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button onClick={equal}>=</button>
        </div>
    </div>
  );
}

export default App;
