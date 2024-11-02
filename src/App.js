import React, {useState} from 'react';

function App(){
  const[isVisible, setIsVisible] = useState(false);
  const setVisibility = ()=>{
    setIsVisible(!isVisible);
  };

  return(
    <div style = {{textAlign : 'center', marginTop : '50px'}}>
      <h1>Simple Visibilty check</h1>
      
      <button onClick={setVisibility}>{isVisible ? 'Hide Text' : 'Show Text'}</button>
      {
      isVisible && <p>This is the text content that can be shown or hidden</p>
    }
    </div>
    
  );
  
}


export default App;