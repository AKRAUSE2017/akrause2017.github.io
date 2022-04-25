var currentUser = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user;
    document.getElementById("userBtn").textContent = user.displayName;
    document.getElementById("userBtn").onclick = function() { window.location.href = "profile.html"; }
    
  }else{
      console.log("error: no user found");
      //document.getElementById("user").style.display = "block";
      //document.getElementById("profile").style.display = "none";
  }
});

function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      //document.cookie = "username="+user.displayName;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
   
}

function start(){
  if(currentUser != null){
    window.location.href = "templates.html";
  }else{
    signIn();
  }
}

function goToProfile(){
  window.location.href = "profile.html";
}

