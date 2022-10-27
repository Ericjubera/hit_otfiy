import Pipe from "./Pipe"
import  "./Pipe.css";

function PipeCards({pipes})
{ const cards=pipes.map((pipe)=>
    <Pipe key={pipe.id} pipes={pipe} />)
    

    return(

    <div>


<div className="pipe-list">

{cards}
</div>
    </div>
    );
}
export default PipeCards