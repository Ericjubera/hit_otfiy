
import {Link} from 'react-router-dom'
import { useState } from "react"
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
function NavBar({updateUser}){
    const[menu,setMenu]= useState(false)
    const handleLogOut = () => {
        fetch("/logout",{
          method:"DELETE"
        })
        .then(res=>{
          if(res.ok){
            updateUser(false)
            
          }
        })
      }
    return(
       
<Nav> 
         <NavH1>hit-ofity</NavH1>
         <Menu>
           <button onClick={handleLogOut}>Log OutSki</button>
           {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={30}/> 
           </div>:
           <ul>
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><Link to='/users/1'>User Page</Link></li>
            <li><Link to='/users/new'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
           
        
           </ul>
           }
         </Menu>

        </Nav>
    )}
export default NavBar
const NavH1 = styled.h1`
font-family: 
`
const Nav = styled.div`
  display: flex;
  justify-content:space-between;
  background-color: green;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color:white;
    font-family:Arial;
  }
  a:hover{
    color:pink
  }
  ul{
    list-style:none;
  }
  
`;