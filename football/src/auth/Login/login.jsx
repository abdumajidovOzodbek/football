import React from 'react';
import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css'
const Login = () => {
    const userEl=useRef()
    const passEl=useRef()
    const navigate=useNavigate()

    async function getToken(per){
        let res=await fetch('http://localhost:5999/login',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(per)
        })
    
        res=await res.json()
         console.log(res);
         if(res.acces_token && res.acces_token!=null){
          localStorage.setItem('token',res.acces_token)
          navigate('/') 
          alert(res.message)
         }else{
            alert('inncorect login')
         }
    }
    function give(){
        const user={
            email:userEl.current.value,
            password:passEl.current.value,
        
        }
        getToken(user)
    }
    return (
        <div className='login'>
            <div className="login2">
                <div>
                    <h1>WELCOME</h1>
                    <label htmlFor="football">LOGIN</label>
                    <input ref={userEl} type="text" placeholder='username' id='user'/>
                    <label htmlFor="football">PASSWORD</label>
                    <input ref={passEl} type="password" placeholder='password' id='pass'/>
                    <button onClick={give} id="btn">LOGIN</button>
                </div>
                <h2 className='title'>Now <NavLink to='/register'>sign</NavLink></h2>
            </div>
        </div>
    );
}

export default Login;
