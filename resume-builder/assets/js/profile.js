var currUser;
var currUserEmail;

var temp1 = "";
var temp2 = "";
var temp3 = "";
var temp4 = ""; 
var temp5 = ""; 
var temp6 = ""; 
var temp7 = ""; 

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currUser = user;
        currUserEmail = user.email;
        document.getElementById("userBtn").textContent = user.displayName;
        document.getElementById("userBtn").onclick = function() { window.location.href = "profile.html"; }
        document.getElementById("username").innerHTML = user.displayName;
        loadPreviousResumes(currUser);
        loadInfo(currUser);
    }else{
        console.log("error: no user found");
    }
});

function signOut(){
    firebase.auth().signOut().then(() => {
        alert("Thanks for stopping by!");
        window.location.href = "index.html";
      }).catch((error) => {
        // An error happened.
        console.log("error with sign out");
      });
}

function loadInfo(currUser){
    var dbInfo = db.collection(currUser.email).doc("Information");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbFirst = data.firstName;
            var dbLast = data.lastName;
            //var dbCity = data.city;
            var dbPhone = data.phone;
            var dbEmail = data.email;
            var dbSummary = data.summary;

            document.getElementById("firstName").innerHTML = "First Name: " + dbFirst;
            document.getElementById("lastName").innerHTML = "Last Name: " + dbLast;
            document.getElementById("phone").innerHTML = "Phone: " + dbPhone;
            document.getElementById("email").innerHTML = "Email: " + dbEmail;
            document.getElementById("summary").innerHTML = dbSummary;
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  
}

function editProfile(){
    window.location.href = "form.html";
}

function loadPreviousResumes(currUser){

    var dbLinks = db.collection(currUser.email).doc("Template 1");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp1").classList.add("filter-used");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    }); 

    var dbLinks = db.collection(currUser.email).doc("Template 2");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp2").classList.add("filter-used");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    }); 

    var dbLinks = db.collection(currUser.email).doc("Template 3");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp3").classList.add("filter-used");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    }); 

    var dbLinks = db.collection(currUser.email).doc("Template 4");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp4").classList.add("filter-used");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbLinks = db.collection(currUser.email).doc("Template 5");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp5").classList.add("filter-used");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbLinks = db.collection(currUser.email).doc("Template 6");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp6").classList.add("filter-used");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbLinks = db.collection(currUser.email).doc("Template 7");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("temp7").classList.add("filter-used");
            document.getElementById("prof-filter").click();
            setDisplay();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            document.getElementById("prof-filter").click();
            setDisplay();
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function setDisplay(){
    var check1 = document.getElementById("temp1").classList.contains("filter-used");
    var check2 = document.getElementById("temp2").classList.contains("filter-used");
    var check3 = document.getElementById("temp3").classList.contains("filter-used");
    var check4 = document.getElementById("temp4").classList.contains("filter-used");
    var check5 = document.getElementById("temp5").classList.contains("filter-used");
    var check6 = document.getElementById("temp6").classList.contains("filter-used");
    var check7 = document.getElementById("temp7").classList.contains("filter-used");

    if(!check1 && !check2 && !check3 && !check4 && !check5 && !check6 && !check7){
        document.getElementById("noTemp").style.display = "block";
    }else{
        document.getElementById("noTemp").style.display = "none";
    }
}

