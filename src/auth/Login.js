import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function login() {
   
    const getInput = (id) => {
        return document.getElementById(id).value;
      };
    
      const handleLogin = (event) => {
        event.preventDefault();
        console.log("Login");
    
        let data = JSON.parse(localStorage.getItem("user")) || [];
    
        let email = getInput("email");
        let password = getInput("password");
    
        if (!email || !password) {
          toast.error("Please fill out all given fields");
          return;
        }
    
        let obj = { email, password };
    
        let checkUser = data.find(user => user.email === obj.email && obj.password === user.password);
        console.log('chechUser', checkUser);
    
        if (checkUser) {
          toast.success("User is successfully logged in");
        } else {
          toast.error("Invalid information! Please registered first.");
        }
    }

  return (
    <div className='container'>
        <div className="form-box login">
            <form>
                <h1>Login</h1>
                <br />
                <p>Continue your design with Clarity.</p>
                <div className="input-field">
                <input type="email"  placeholder="Email Address" id='email' required />
                
                </div>
                <div className="input-field">
                <input type="password"  placeholder="Password" id='password' required />
              
                </div>
                <div className="remember">
                    <label><input type="checkbox" name="" id="remember"  />Remember me</label><Link to="/Forget" className='forget'>Forgot Password?</Link>

                </div>
                <div className="login-button">
                    <button type='submit'onClick={handleLogin} >Login</button>
                </div>
                <div className="register-link">
                <p>Don't have a Clarity account? <Link to="/Register">Register now</Link></p>
                </div>

            </form>

        </div>
      
    </div>
  );

      }