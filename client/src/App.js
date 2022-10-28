import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import PipeCards from "./components/PipeCards"
import Login from "./components/login"
import UserPage from "./components/userpage";
import "./App.css"
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Pipe from "./components/Pipe";
import PipeDetails from "./components/PipeDetail";

function App() {
  const [count, setCount] = useState(0);
  // const [pipes,setPipes]= useState([]);
  const [errors, setErrors] = useState(false)
  const [currentUser,setCurrentUser]=useState(false)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  // useEffect(() => {
  //   fetch("/pipes")
  //     .then(r => r.json())
  //     .then(data => setPipes(data));
  // }, []);

  useEffect(()=>{
    fetch("/authorized_user")
    .then(res=>{
      if(res.ok){
        res.json().then(user=>{
          updateUser(user)
        })
      }
    })
  },[])
  
  // function onDelete(id){
  //   let newCard=pipes.filter((neww)=>neww.id !== id)
  //   setPipes(newCard)
  // }

  const updateUser = (user) => setCurrentUser(user)
  
  if(errors) return <h1>{errors}</h1>

  return (
    
    <div class="uska" >
      
      <NavBar updateUser={updateUser}/>
      { ! currentUser ? <Login error={'please login'} updateUser={updateUser} />:
      <Switch>
<Route exact path="/users/new">
    <Home  />
    </Route>

      <Route exact path="/pipes">
    <PipeCards />
      </Route>
    <Route exact path='/login'>
      <Login updateUser={updateUser} />
    </Route>
    <Route exact path='/users/:id'>
        <UserPage updateUser={updateUser} />
    
      </Route>
   
      </Switch>
    }  
      {/* <PipeCards /> */}
    </div>
  );
 } 

export default App;