import React, {useState, useEffect, useRef} from 'react';

function App(){
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if(!isActive){
      setIsActive(true);
      timerRef.current = setInterval(()=>{
        setSeconds((prevSec) => prevSec +1);
      }, 1000);
    }
  };

  const stopTimer = () =>{
    if(isActive){
      clearInterval(timerRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () =>{
    clearInterval(timerRef.current);
    setIsActive(false);
    setSeconds(0);
  };

  useEffect (() =>{
    return ()=> clearInterval(timerRef.current);
  }, [])

  const minutes = Math.floor(seconds/60);
  const secs= seconds%60;

  return(
    <div style = {{textAlign : 'center', marginTop : '50px'}}>
      <h1>Timer</h1>
      <span>{minutes} mins </span>
      <span>{secs} secs </span>
      <div>
        <button onClick={startTimer}> start</button>
        <button onClick={stopTimer} >stop</button>
        <button onClick={resetTimer} >reset</button>
      </div>
    </div>
    
  );
  
}


export default App;