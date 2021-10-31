// import React, { useState } from 'react';
// import './Login.css'
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "./Firebase";

// function Signup() {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             history.push('/home')
    //         })
    //         .catch(error => alert(error.message))
    // }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             alert('User created successfully')
    //             if (auth) {
    //                 history.push('/login')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }

    // return (
    //     <div className='login'>
    //         <Link className="link__to" to='/'>
    //             <div className="login__logo"><h1>Prime Minners</h1></div>
    //         </Link>

    //         <div className='login__container'>
    //             <h1>Sign up</h1>

    //             <form>
    //                 <h5>E-mail</h5>
    //                 <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

    //                 <h5>Password</h5>
    //                 <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

    //                 <button type='submit' onClick={register} className='login__signInButton'>Sign Up</button>
    //             </form>

               
    //             <Link to="/login">
    //                 <button className='login__registerButton'>Sign In</button>
    //             </Link>
    //         </div>
    //     </div>
//     )
// }

// export default Signup


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'


function Signup() {

    return (
        <div>
            <section id="hero" class="home-background pb-5 mb-4" style={{background:"#141414"}}>
                <div class="container ">
                    <div class="row align-items-center ">
                        <div class="col-lg-6 d-flex flex-column">
                                    <div id="carousel-testimonials" class="carousel slide carousel-fade" data-ride="carousel">
                                {/* <!-- Indicators Starts --> */}
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-testimonials" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                                    <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                                </ol>
                                {/* <!-- Indicators Ends -->
                                <!-- Carousel Inner Starts --> */}
                                <div class="carousel-inner">
                                    {/* <!-- Carousel Item Starts --> */}
                                    <div class="item active item-1">
                                    <div>
                                        <blockquote>
                                        <p>This is a realistic program for anyone looking for site to invest. Paid to me regularly, keep up good work!</p>
                                        <footer><span>Lucy Smith</span>, England</footer>
                                        </blockquote>
                                    </div>
                                    </div>
                                    {/* <!-- Carousel Item Ends -->
                                    <!-- Carousel Item Starts --> */}
                                    <div class="item item-2">
                                    <div>
                                        <blockquote>
                                        <p>Bitcoin doubled in 30 days. You should not expect anything more. Excellent customer service!</p>
                                        <footer><span>Slim Hamdi</span>, Morroco</footer>
                                        </blockquote>
                                    </div>
                                    </div>
                                    {/* <!-- Carousel Item Ends -->
                                    <!-- Carousel Item Starts --> */}
                                    <div class="item item-3">
                                    <div>
                                        <blockquote>
                                        <p>My family and me want to thank you for helping us find a great opportunity to make money online. Very happy with how things are going!</p>
                                        <footer><span>Rawia Chniti</span>, Russia</footer>
                                        </blockquote>
                                    </div>
                                    </div>
                                    {/* <!-- Carousel Item Ends --> */}
                                </div>
                                {/* <!-- Carousel Inner Ends --> */}
                                </div>
                                {/* <!-- Slider Ends --> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup
