import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../Login/Login.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)


    const handleEmailBlur = event => {
        setEmail(event.target.value); 

    }

    const handlePasswordBlur = event => {
        setPassword (event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if(user){
        Navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your passwords did not match')
            return
        }
        if(password.length<6){
            setError('password must be 6 characters or longer')
            return; 
        }
        createUserWithEmailAndPassword(email,password)
    }


    return (
         <div className='form-container'>
            <div>
            <h2 className='form-title'>SignUp</h2>
            <form onClick={handleCreateUser} >
                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
            </div>
            <div className="input-group">

                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" required />
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm-Password</label>
                <input onBlur={handleConfirmPasswordBlur } type="password" name="password"  required/>
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="SignUp" />
            </form>
            <p>Already Have and Accounts? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;