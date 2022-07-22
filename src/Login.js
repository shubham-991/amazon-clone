import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        //prevent from refreshing
        e.preventDefault();

        //some firebase code
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            //successfully created new user with EmailID and Password
                history.push('/');
        })
        .catch(error => alert(error.message));

    }

    const register = e => {
        //prevent from refreshing
        e.preventDefault();

        //some firebase code
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //successfully created new user with EmailID and Passord
            
            if(auth){
                //redirect user to homepage
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className = "login">
            <Link to = "/">
                <img className = "login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"   alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange=
                    {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button type = 'submit' onClick={signIn} className= "login__signInButton">Sign In</button>  
                
                </form>

                <p>
                By creating an account, 
                you agree to Amazon's Clone Conditions 
                of Use and Privacy Notice.
                </p>

                <button onClick = {register} className="login__registerButton">Create your Amazon Account</button>
            
            </div>
        </div>
  )
}

export default Login