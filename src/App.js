import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TaskList from "./Components/TaskList";
 

function App() {
 

  return (
    <div className="App">
   
      <>
     
        {/* component */}
       <TaskList/>
      </>
    </div>
  );
}

export default App;
