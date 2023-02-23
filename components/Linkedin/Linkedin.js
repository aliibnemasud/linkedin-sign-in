import React, { useState } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";


function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "861qb9wf2l994n",
    redirectUri: `${typeof window === 'object' && window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (token) => {


   /*  await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },                     
            grant_type: "authorization_code",
            code: token,    
            client_id: "861qb9wf2l994n",
            client_secret: "2XCrMvvsdOIinznb",
          }) */

          let tokenn = token

    fetch(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${tokenn}&client_id=861qb9wf2l994n&client_secret=2XCrMvvsdOIinznb&redirect_uri=${typeof window === 'object' && window.location.origin}/linkedin`, {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" }            
          })
  .then(res => res.json())
  .then(data => console.log(data))
        
     

    },
    onError: (error) => {
      console.log(error);
    },
  });
  return <button onClick={linkedInLogin} >Log in with Linkedin</button>;
}

export default LinkedInPage;
