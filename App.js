import React , {useState}from "react";
import Reaction from "react-dom";


const App = () => {
  const [result,setResult] = useState("");
  return(
    <div>
        <form>
            <input value={result} />
        </form>
        <div className="keyboard">
        </div>
    </div>
  );
}

export default App;
