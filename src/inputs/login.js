
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
function Login(){
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('');

    // const btn ={
    //     width: '200px',
    //     height: '30px',
    //     marginTop:'3%',
    
    // }

    
    let history =useHistory();
    const login = (()=>{
        history.push("/home");
    })

    return(
        <div className='login'>
            <h1>Login</h1><br></br>
            <input id="name" type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input id="name" type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button id='btn' onClick={login}>add</button>
            


        </div>
    )
}
export default Login;
