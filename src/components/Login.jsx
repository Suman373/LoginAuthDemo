import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { Header } from "./Header";
import AuthContext from "../context/AuthProvider";

const basePassword = process.env.REACT_APP_LOGIN_PASSWORD;

const Login = () => {

    // authentication from auth context
    const {setAuth} = useContext(AuthContext);
    
    const userRef = useRef(); // focus on the username, when component loads
    const errRef = useRef(); // focus on error if it occurs

    // our states for user,password and error message
    const [user, setUser] = useState(''); // state for user
    const [pass, setPass] = useState(''); // state for the password
    const [errMsg, setErrMsg] = useState(''); // state for the error message(s)
    const [success, setSuccess] = useState(false); // state for the success when authorized


    // set focus on the first input when the component loads, useEffect used
    useEffect(() => {
        userRef.current.focus(); // focuses on the input field of the user name
    }, []); // nothing in dependency array, so useEffect takes place when the component loads

    // remove error message when user changes any of the input fields b/w username and the  password
    useEffect(() => {
        setErrMsg('');
    }, [user, pass]); // dep. array contains the username(user) and the password

    // handle submit by the user
    const handleSubmit= async (e)=>{
        e.preventDefault();
        // console.log('username is:',user,'password is',pass);
        if(pass === basePassword){
            setSuccess(true);
            // setUser('');
            // setPass('');
        }
        else{
            setErrMsg('You are not authorized, wrong password');
            setSuccess(false);
        }
        errRef.current.focus();
       
    }

    return (
        <>
        {/* if success, user authorised, message display else error */}
        {success ? (
            <>
            <section>
                <h1>You are logged in , welcome back <span style={{color:'yellow'}}>{user}</span></h1>
                <p><a href="./login">Back</a></p>
            </section>
            </>
        )
        :
        (
        <>
        {/* display this when not authorized and default */}
        <Header/>
        <div style={formContainerStyle} className="form-container">
            <p ref={errRef} className={errMsg ? "error-msg" : 'no-error-msg'}>
                {errMsg}
            </p>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="name">Name :</label>
                    <input type="text"
                        placeholder='Enter your name'
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user} // clear input on submission
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password :</label>
                    <input type="password"
                        placeholder='Enter your password'
                        autoComplete="off"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        required
                    />
                </div>
                <button style={btnStyle} type="submit">Sign in</button>
                <div className="form-control">
                    <p style={paraStyle}>
                        Create an account?
                    </p>
                    {/* router */}
                    <a href="./signup" style={linkStyle}>Sign Up</a>
                </div>
            </form>
        </div>
        </>
        )}
    </>
    );

}

// form-container style
const formContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
// sign in button
const btnStyle = {
    height: 'fit-content',
    widht: 'fit-content',
    padding: '5px 10px',
    color: 'black',
    fontSize: '1.3rem'
}
// create an account para style
const paraStyle={
    fontSize:'1.3rem',
    color:'black',
    margin:'10px 0',
}
// sign up router link style
const linkStyle={
    fontSize:'1.3rem',
    color:'blue',
    margin:'10px 0'
}
export default Login;