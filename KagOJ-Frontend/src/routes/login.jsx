import React, { useRef } from 'react'
import { login } from "../auth"





export default function Login(){

    // const dispatch=useDispatch()

    const loginRef=useRef()
    const passRef=useRef()

    const loginClick=()=>{
        var loginString=loginRef.current.value
        var passwordString=passRef.current.value
        if(loginString.length===0 || passwordString.length===0)
            console.log('Please enter valid login and password')
        else{
            login({
                email:loginString,
                password:passwordString
            })
        }
    }

    return(
        <div className={'login-container'}>
            <div className={'auth-text'}>
               
                <div className={'auth-verticle-divider'}/>
                <input ref={loginRef} type="text" placeholder="Username/Email/Phone"/>
            </div>
            <div className={'auth-text'}>
                
                <div className={'auth-verticle-divider'}/>
                <input ref={passRef} type="password" placeholder="Password"/>
                
            </div>
            <div className={'auth-action-container'}>
                <label className="container">Remember Me
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                <button onClick={loginClick}>
                    Login
                </button>
            </div>
            <div className={'auth-forgot-container'}>
                <p>
                    Forgot password ?
                </p>
            </div>
            <div className={'auth-different'}>
                Don't have an Account ?
            </div>
            <button className={'auth-different-button'}  
                // onClick={()=>{props.history.push('/auth/register') }}
            >
                Register Now
            </button>
        </div>
    )
}


