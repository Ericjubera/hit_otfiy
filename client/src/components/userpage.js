
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import PipeCards from './PipeCards'

function UserPage(){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [pipes,setPipes]=useState('')

    // useEffect(() => {
    //     fetch("/pipes")
    //       .then(r => r.json())
    //       .then(data => setPipes(data));
    //   }, []);

    //   useEffect(() => {
    //     fetch(`/pipes/`)
    //       .then(r => r.json())
    //       .then(data => setPipes(data));
    //   }, []);
     
      
   
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => { 
                    setUser(user)
                    setLoading(false)
                    console.log(user)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])
    

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h1>{user.name}'s</h1>
            <h2>age {user.age} lets go</h2>
            <h3>Your collection</h3>
            {console.log(user.id)}
      
           {/* <img src={user.pipes[0].image}/> */}
           {/* <img>{user.pipes[0].image}</img> */}
        </div>
        
    )
}

export default UserPage