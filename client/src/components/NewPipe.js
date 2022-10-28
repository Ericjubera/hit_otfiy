import { useState } from "react";



export default function NewPipe (){
const [formData,setFormData]=useState({item_name:"", image:"",size:"",color:""})

function handleSubmit(){
    const newForm={
        item_name:formData.item_name,
        image:formData.image,
        size:formData.size,
        color:formData.color
    }
    fetch("/pipes",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify((newForm))
    })
    .then(res=>res.json())
    // .then(addnew)
}

const handleFormChange = (e) => {
    const { name,value } = e.target
    setFormData({ ...formData, [name]: value })
  }
    return(
            <div className> new pipe 
                <form className="plant-form" onSubmit={handleSubmit}>
            <h2>Add your Pipes</h2>
        <input type="text" name="item_name" value={formData.item_name} onChange={handleFormChange} id="item_name" placeholder="nameski" ></input>
        <input type="text" name="image" value={formData.image} id="image" onChange={handleFormChange} placeholder="image" />
        {/* <select name="size" value={""} onChange={""}>
                    <option>Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select> */}
                {/* <select name="color" value={""} onChange={""}>
                    <option>Color</option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="clear">clear</option>
                    <option value="green">green</option>
                    <option value="black">black</option>
                </select> */}
                        <input type="text" name="color" value={formData.color} onChange={handleFormChange} id="color" placeholder="color" ></input>
                        <input type="text" name="size" value={formData.size} onChange={handleFormChange} id="size" placeholder="size" ></input>
                <input type="submit" value="Create" id="create" />
                



                </form>            
            </div>


    )
}