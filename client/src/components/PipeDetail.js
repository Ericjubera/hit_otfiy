
import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'

function PipeDetails (){
    const [user,SetUser]=useState({})
    // const [name,age,pipes,item_name,color,size,image]=user
    const params= useParams()
    useEffect(()=>{
        //GET to '/productions/:id'
        fetch(`/users/${params.id}`)
        .then(res => res.json())
        .then(data => {
              SetUser(data)
            })
      },[])
    
    // const {id}=useParams();
    return(
        <div className="pipe">
        <h2>pipe</h2>
        </div>
    )
}
export default PipeDetails