import { useState , createContext, useContext } from "react";


const BulbContext = createContext();
 
function App() {
  const [on , setOn] = useState(false);

  return (
    <div>
      <BulbContext.Provider value={{
        on: on,
        setOn: setOn
      }}>
        <LightBulb />
      </BulbContext.Provider>
    </div>
  )
}
function LightBulb(){
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
} 

function BulbState(){
  const {on} = useContext(BulbContext);
  return(
    <div>
      {on ? "Bulb On" : "Bulb off"}
    </div>
  );
}

function ToggleBulbState(){
  const {setOn} = useContext(BulbContext);
  function toggel(){
    setOn(cs => !cs);
  }
  return(
    <div>
      <button onClick={toggel} >Toggle the Bulb</button>
    </div>
  );
}


















export default App
