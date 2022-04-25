var currUser;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currUser = user;
        console.log(currUser);
        document.getElementById("userBtn").textContent = user.displayName;
        document.getElementById("userBtn").onclick = function() { window.location.href = "profile.html"; }
    }else{
        alert("Please sign in to use this feature");
        window.location.href = "index.html";
        console.log("error: no user found");
    }
});