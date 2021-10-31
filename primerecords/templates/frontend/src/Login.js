import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }
    

    

    return (
        <div className='login'>
            <Link className="link__to" to='/'>
                <div className="login__logo"><h1>Prime Minners</h1></div>
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

               
                <Link to="/signup">
                    <button className='login__registerButton'>Sign Up</button>
                </Link>
                <Link className="link__to" to="/passwordReset">
                    <p>Forgot Password? <h4>Password Reset </h4></p>
                </Link>
            </div>
        </div>
    )
}

export default Login
