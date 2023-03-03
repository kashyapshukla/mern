import React, { useState } from 'react';
import "./p1.css";
import Create from './create';
import {GoPerson} from "react-icons/go";


function LoginPage() {
    const [loggedIn, setLoggedIn] = useState(false);

    function handleAdminLogin() {
      setLoggedIn(true);
    }
  
    if (loggedIn) {
      return <Create/>;
    }

  return (

    <div className='Admin'>
      <span class="Afflt">
       Afflt
      </span>
  
     
      <span class="How-are-you-planning-to-use-Afflt">
       How are you planning to use Afflt?
     </span>
     <div onClick={handleAdminLogin}>
      <div class="Rectangle-24"   onClick={handleAdminLogin}> 
      </div>
      <div class="Vector"><GoPerson/></div>
      <span class="AdminBT">
           Admin
      </span>
      <span class="Researchers">
          Researchers
      </span>
      </div>
      <div class="Rectangle-25"></div>
      <div class="Rectangle-26">
      <span class="Log-In">
  Log In
</span>
      </div>
      
      <span class="Already-have-an-account-Sign-in-here">
          Already have an account? Sign in here.
      </span>
      
        
      
    

    </div>
    
     
      // {/* <div className="Rectangle-24div"> */}
      //{/* <div class="Admin-login" onClick={handleUserLogin}> </div>
      //<div class="User-login" onClick={handleUserLogin}> </div>
      //{/* <button onClick={handleUserLogin} class="Admin-login">Admin Login</button> 
    // <button  class="User-login">User Login</button> */} 
     // {/* </div> */}
    
  );
}

export default LoginPage;
