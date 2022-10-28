import Pipe from "./Pipe"
import  "./Pipe.css";
import { useState,useEffect } from "react";

function PipeCards()
{ 
    const [pipes,setPipes]= useState([]);

    function onDelete(id){
    let newCard=pipes.filter((neww)=>neww.id !== id)
    setPipes(newCard)
  }
//   const handleBuy = () => {
//     fetch(`/hits`,{
//       method:'POST',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify({production_id:id, user_id:1, price:30.50})
//     })
    useEffect(() => {
        fetch("/pipes")
          .then(r => r.json())
          .then(setPipes)
      }, [])
      


    const cards=pipes.map((pipe)=>
    <Pipe key={pipe.id} onDelete={onDelete} pipes={pipe} />)
    

    return(

    <div>


<div className="pipe-list">

{cards}
</div>
    </div>
    );
}
export default PipeCards