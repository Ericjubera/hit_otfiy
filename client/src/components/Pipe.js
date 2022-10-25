 import "./Pipe.css"
 function Pipe({pipes}){
    const {item_name,color,size,image} = pipes

    return(
         <div className="plant-card">
        <h3>{item_name}</h3>
        <img className="uska" src={image} />
       
        <div className="plant-flex">
        <p>Size: <span>{size}</span></p>
        <p>color: <span>{color}</span> </p>
        
        </div>
    </div>

    )
}export default Pipe