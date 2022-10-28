 import "./Pipe.css"
 function Pipe({pipes,onDelete}){
    const {id,item_name,color,size,image} = pipes
    
    function handleDelete(){
        fetch(`/pipes/${id}`,{
          method:'DELETE'
        }).then(res=>res.json())
        .then(()=>onDelete(id))
      }
      const handleBuy = () => {
        fetch(`/hits`,{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({user_id:1, pipe_id:id})
        })
      .then(res=>res.json())
      

      }
    return(
        <li>
         <div  className="plant-card">
        <h3>{item_name}</h3>
        <img className="uska" src={image} />
       
        <div className="plant-flex">
        <p>Size: <span>{size}</span></p>
        <p>color: <span>{color}</span> </p>
        <button onClick={()=>handleDelete(id)}>remove</button>
        <button onClick={handleBuy}>take a Hit</button>
        </div>
    </div>
    </li>

    )
}export default Pipe