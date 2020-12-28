import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.Config";
import { useHistory, useLocation } from "react-router-dom";
import Validation from "./Validation";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from : {pathname:`/destination`}};

 if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
 }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const {displayName, email} = result.user;
        const signedInUser = {displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
        return signedInUser;
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const histories = useHistory();
  const locations = useLocation();

  const { froms } = locations.state || { froms : {pathname:`/destination`}};

 if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
 }

  const handleFaceBookSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const {displayName, name} = result.user;
        const signedInUser = {displayName, name};
        setLoggedInUser(signedInUser);
        histories.replace(froms);
        return signedInUser;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div
      className="container bg-dark"
      style={{ alignItems: "center", padding: "20px" }}
    >
      {/* <Validation />
      <p style={{ color: "white" }}>Or..</p>
      <Button onClick={handleGoogleSignIn}>
        {" "}
        Sign in With your Google account{" "}
      </Button>{" "}
      <br /> <br />
      <Button onClick={handleFaceBookSignIn}>
        {" "}
        Sign in With your Facebook account{" "}
      </Button> */}
    </div>
  );
};

export default Login;
