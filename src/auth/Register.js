import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './login.css';
import Login from'./Login';


export default function Register() {
    const[isRegistered,setIsRegistered] = useState(false);
    const navigate = useNavigate();

    let data = JSON.parse(localStorage.getItem("user")) || [];
    const getInput=(id)=>{
        return document.getElementById(id).value;
    } 
    const handleRegister = (event) => {
        event.preventDefault();
        let email = getInput("email");
        let password = getInput("password");
        let fullname = getInput("fullname");

        //check the given validation 
        if(!fullname || fullname.length < 3){
            toast.error("Please enter your correct Username");
            return;
        }
        if(!email){
            toast.error("Please enter your email");
            return;
        }

        if(password.length < 6 || !password){
            toast.error("Please enter your correct password");
            return;
        }
       
       

        let obj = {email,password,fullname};
        let userFound = data.some(user=>user.email === obj.email);
        if(!userFound){
            data.push(obj);
            localStorage.setItem("user",JSON.stringify(data));
            setIsRegistered(true);
            toast.success("You are registered successfully");
            navigate('/');
        }else{
            toast.error("Email already exists");
        }
    
        }
    
  return (

    <>
    {isRegistered ?(
        <Login />
    ) : (<div className="container">
        <div className="row">
            <div className="col">
   
 <div className="form-box register">

     <form onSubmit={handleRegister}>
     <h1>Register</h1>
        <div className="row">
            <div className="col-12 mb-3">
               <div className="input-field">
    <input type="text"  placeholder="Username" id='fullname' required />
    </div>
            </div>

    <div className="col-12 mb-3">
    <div className="input-field">
    <input type="email"  placeholder="Email" id='email' required />
    </div>
            </div>

            <div className="col-12 mb-3">
    <div className="input-field">
    <input type="text"  placeholder="Password" id='password' required />
    </div>
         </div>

         <div className="col-12">
         <div className="login-button">
        <button type='submit' onClick={handleRegister}>Sign up</button>
    </div>
    <div className="register-link">
    <p>Have already an account.
    <Link to="/">Login here</Link>
    </p>
    </div>

    </div>
       
    </div>
        

            
    </form>

</div>
</div>
</div>
</div>
)}
          
           </>
           
  );

}


