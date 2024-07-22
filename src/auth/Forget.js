import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { toast } from 'react-toastify';

export default function Forget() {
    const navigate = useNavigate();
    const getInput = (id) => {
        return document.getElementById(id).value;
      };
      
      let handleUpdate = (event) => {
        event.preventDefault();
        let email = getInput("email");
        let newPassword = getInput("updatepassword");

        if (!email || !newPassword || newPassword.length < 6) {
            toast.error("Please fill out all given fields");
            return;
          };
          let data = JSON.parse(localStorage.getItem("user")) || [];
          //check the user exist from email 
          let userExist = false;
          let updateUser = data.map((user) => {
            if(user.email === email){
                userExist = true;
            return {...user, password: newPassword};
            }
            return user

            });
            if (userExist){
                localStorage.setItem("user", JSON.stringify(updateUser));
                alert("Password updated successfully");
                navigate("/");

            }else{
                alert("User does not exist");
            }

            console.log('updateUser',updateUser);
        };
  return (
    <div className='container'>
        <div className="form-box login">
            <form  onSubmit={handleUpdate}>
                <h1>Forget Password</h1>
                <br />
                <p>Continue your design with Clarity.</p>
                <div className="input-field">
                <input type="email"  placeholder="Email Address" id='email' required />
                </div>
                <div className="input-field">
                <input type="password" placeholder="Update Password" id='updatepassword' required />
                </div>
                
                <div className="login-button">
                    <button type='submit'onClick={handleUpdate} >Update</button>
                </div>
               

            </form>

        </div>
      
    </div>
  );
      }
    
