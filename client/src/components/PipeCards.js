import Pipe from "./Pipe"
import "./pipeCards.css"

function PipeCards({pipes})
{ const cards=pipes.map((pipe)=>
    <Pipe pipes={pipe}/>)

    return(

    <div>


<div className="pipe-list">
{cards}
</div>
    </div>
    );
}
export default PipeCards