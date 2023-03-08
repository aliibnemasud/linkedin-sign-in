import React, { useState } from "react";
import passport from 'passport-linkedin';


function LinkedInPage() {

    passport.use(new LinkedInStrategy({
        consumerKey: "861qb9wf2l994n",
        consumerSecret: "2XCrMvvsdOIinznb",
        callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    },

      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

 
  return <button>Log in with Linkedin</button>;
}

export default LinkedInPage;
