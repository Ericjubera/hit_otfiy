import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form} from '../styled/Form'
import UserPage from './userpage'

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        name:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            password
        }
        // Logs in user
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     setIsloading(true);
    //     fetch("/login",{
    //         method:"POST",
    //         headers: {
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify({name,password}),
    //     }).then((r)=>{
    //         setIsLoading(false);
    //         if (r.ok){
    //             r.json().then((user)=> onLogin(user));
    //         } else{
    //             r.json().then((err)=>setErrors(err.errors));
    //         }
    //     });
    // }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <> 
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='name' value={name} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
       
        <input type='submit' value='Log in!' />
      </Form>
      {errors? <div>{errors}</div>:null}
        </>
    )
}

export default Login