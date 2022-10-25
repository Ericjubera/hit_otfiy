import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import PipeCards from "./components/PipeCards";

import "./App.css"
import {Route,Switch,Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  const [pipes,setPipes]= useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/pipes")
      .then(r => r.json())
      .then(data => setPipes(data));
  }, []);

  return (
    
    <div class="uska" >
      
      <NavBar/>
      <Switch>
<Route exact path="/">
    <Home/>
    </Route>
    <Route>
      
    </Route>
      {/* <h1 >My Collection{count}</h1> */}
      {/* <PipeCards pipes={pipes}/> */}
      </Switch>
    </div>
  );
}

export default App;