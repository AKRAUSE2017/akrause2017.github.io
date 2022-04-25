var currUser;
var numWorkElems = 1;
var numSchoolElems = 1;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currUser = user;
        document.getElementById("userBtn").textContent = user.displayName;
        document.getElementById("userBtn").onclick = function() { window.location.href = "profile.html"; }
        transferInfo();
    }else{
        console.log("error: no user found");
    }
});

function transferInfo(){
    var dbInfo = db.collection(currUser.email).doc("Information");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            //var dbName = data.firstName + " " + data.lastName;
            var dbCity = data.city;
            var dbPhone = data.phone;
            var dbEmail = data.email;
            var dbSummary = data.summary;

            document.getElementById("firstName").value = data.firstName;
            document.getElementById("lastName").value = data.lastName;
            document.getElementById("city").value = dbCity;
            document.getElementById("phoneNumber").value = dbPhone;
            document.getElementById("email").value = dbEmail;
            document.getElementById("summary").value = dbSummary;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbInfo = db.collection(currUser.email).doc("Previous Job 1");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbBusiness1 = data.business;
            var dbPosition1 = data.position;
            var dbJobStart1 =  data.start;
            var dbJobEnd1 = data.end;
            var dbJobDescription1 = data.description;

            document.getElementById("businessName" + 1).value = dbBusiness1;
            document.getElementById("dateStart" + 1).value = dbJobStart1;
            document.getElementById("dateEnd" + 1).value = dbJobEnd1;
            document.getElementById("jobPosition" + 1).value = dbPosition1;
            document.getElementById("jobDescription" + 1).value = dbJobDescription1;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Previous Job 2");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbBusiness2 = data.business;
            var dbPosition2 = data.position;
            var dbJobStart2 =  data.start;
            var dbJobEnd2 = data.end;
            var dbJobDescription2 = data.description;

            addWork();
            document.getElementById("businessName" + 2).value = dbBusiness2;
            document.getElementById("dateStart" + 2).value = dbJobStart2;
            document.getElementById("dateEnd" + 2).value = dbJobEnd2;
            document.getElementById("jobPosition" + 2).value = dbPosition2;
            document.getElementById("jobDescription" + 2).value = dbJobDescription2;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Previous Job 3");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbBusiness3 = data.business;
            var dbPosition3 = data.position;
            var dbJobStart3 =  data.start;
            var dbJobEnd3 = data.end;
            var dbJobDescription3 = data.description;

            addWork();
            document.getElementById("businessName" + 3).value = dbBusiness3;
            document.getElementById("dateStart" + 3).value = dbJobStart3;
            document.getElementById("dateEnd" + 3).value = dbJobEnd3;
            document.getElementById("jobPosition" + 3).value = dbPosition3;
            document.getElementById("jobDescription" + 3).value = dbJobDescription3;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Education 1");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbInstitution1 = data.institution;
            var dbDegree1 = data.degree;
            var dbEnroll1 = data.start;
            var dbGrad1 = data.end;
            var dbEdDescription1 = data.description;

            document.getElementById("institution"+1).value = dbInstitution1;
            document.getElementById("educationDegree"+1).value = dbDegree1;
            document.getElementById("dateEnroll"+1).value = dbEnroll1;
            document.getElementById("dateGrad"+1).value = dbGrad1;
            document.getElementById("educationDescription"+1).value = dbEdDescription1;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Education 2");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbInstitution2 = data.institution;
            var dbDegree2 = data.degree;
            var dbEnroll2 = data.start;
            var dbGrad2 = data.end;
            var dbEdDescription2 = data.description;

            addSchool();
            document.getElementById("institution"+2).value = dbInstitution2;
            document.getElementById("educationDegree"+2).value = dbDegree2;
            document.getElementById("dateEnroll"+2).value = dbEnroll2;
            document.getElementById("dateGrad"+2).value = dbGrad2;
            document.getElementById("educationDescription"+2).value = dbEdDescription2;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Skills");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbSkills1 = data.skillOne;
            var dbSkills2 = data.skillTwo;
            var dbSkills3 = data.skillThree;

            document.getElementById("skill1").value = dbSkills1;
            document.getElementById("skill2").value = dbSkills2;
            document.getElementById("skill3").value = dbSkills3;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Links");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbLink1 = data.linkOne;
            var dbLink2 = data.linkTwo;

            if(dbLink1 == undefined){
                document.getElementById("link1").value = "";
            }else{
                document.getElementById("link1").value = dbLink1;
            }

            if(dbLink2 == undefined){
                document.getElementById("link2").value = "";
            }else{
                document.getElementById("link2").value = dbLink1;
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    var dbInfo = db.collection(currUser.email).doc("Other");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            var dbOtherTitle = data.title;
            var dbOtherDescription = data.description;

            if(dbOtherTitle == undefined || dbOtherDescription == undefined){
                document.getElementById("otherTitle").value = "";
                document.getElementById("otherDescription").value = "";
            }else{
                document.getElementById("otherTitle").value = dbOtherTitle;
                document.getElementById("otherDescription").value = dbOtherDescription;
            }
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function saveInfo(){

    //var readyToSave = clearData();
        console.log("here");
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        //var formName = firstName + " " + lastName;
        var formCity = document.getElementById("city").value;
        var formPhone = document.getElementById("phoneNumber").value;
        var formEmail = document.getElementById("email").value;
        var formSummary = document.getElementById("summary").value;
    
        db.collection(currUser.email).doc("Information").set({
            firstName: firstName,
            lastName: lastName,
            city: formCity,
            phone: formPhone,
            email: formEmail,
            summary: formSummary,
        }).then(() => {
            //alert("Document successfully written!");
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    
        var formSkill1 = document.getElementById("skill1").value;
        var formSkill2 = document.getElementById("skill2").value;
        var formSkill3 = document.getElementById("skill3").value;
    
        db.collection(currUser.email).doc("Skills").set({
            skillOne: formSkill1,
            skillTwo: formSkill2,
            skillThree: formSkill3,
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    
        for(var i=1; i<=numWorkElems; i++){
            console.log(i);
            console.log(numWorkElems);
            saveWork(i);
        }
    
        for(var i=1; i<=numSchoolElems; i++){
            console.log(i);
            console.log(numSchoolElems);
            saveSchool(i);
        }
    
        var formLink1 = document.getElementById("link1").value;
        var formLink2 = document.getElementById("link2").value;
    
        db.collection(currUser.email).doc("Links").set({
            linkOne: formLink1,
            linkTwo: formLink2,
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });

        var formOtherTitle = document.getElementById("otherTitle").value;
        var formOtherDescription = document.getElementById("otherDescription").value;

        db.collection(currUser.email).doc("Other").set({
            title: formOtherTitle,
            description: formOtherDescription,
        }).then(() => {
            alert("Information Saved!");
            console.log("Document successfully written!");
            window.location.href="profile.html";
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
}

function saveWork(i){
    console.log(i);
    var formBusiness = document.getElementById("businessName" + i).value;
    var formDateStart = document.getElementById("dateStart" + i).value;
    var formDateEnd = document.getElementById("dateEnd" + i).value;
    var formPosition = document.getElementById("jobPosition" + i).value;
    var formJobDescription = document.getElementById("jobDescription" + i).value;
    
    db.collection(currUser.email).doc("Previous Job "+i).set({
        business: formBusiness,
        position: formPosition,
        description: formJobDescription,
        start: formDateStart,
        end: formDateEnd
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function saveSchool(i){
    console.log(i);
    var formSchool = document.getElementById("institution"+i).value;
    var formDegree = document.getElementById("educationDegree"+i).value;
    var formEnroll = document.getElementById("dateEnroll"+i).value;
    var formGrad = document.getElementById("dateGrad"+i).value;
    var formEdDescription = document.getElementById("educationDescription"+i).value;
    
    db.collection(currUser.email).doc("Education "+i).set({
        institution: formSchool,
        degree: formDegree,
        description: formEdDescription,
        start: formEnroll,
        end: formGrad
    }).then(() => {
        console.log("Document successfully written!");
        
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
    
}

function addWork(){
    if(numWorkElems == 3){
        alert("Only input your three most recent/relevant positions");
    }
    else{
        document.getElementById("removeBtnWork").style.display = "block";
        var workElem = document.getElementById("work" + numWorkElems);
        console.log(workElem);
        var clonedWork = workElem.cloneNode(true);
        numWorkElems++;
        clonedWork.id="work" + numWorkElems;
        //var cloneChildren = document.getElementById("work" + numWorkElems).childNodes;
        console.log(clonedWork.getElementsByTagName("input"));

        clonedWork.getElementsByTagName("input")[0].id = "businessName" + numWorkElems;
        clonedWork.getElementsByTagName("input")[1].id = "jobPosition" + numWorkElems;
        clonedWork.getElementsByTagName("input")[2].id = "dateStart" + numWorkElems;
        clonedWork.getElementsByTagName("input")[3].id = "dateEnd" + numWorkElems;
        clonedWork.getElementsByTagName("textArea")[0].id = "jobDescription" + numWorkElems;
        
        clonedWork.getElementsByTagName("input")[0].value = "";
        clonedWork.getElementsByTagName("input")[1].value = "";
        clonedWork.getElementsByTagName("input")[2].value = "";
        clonedWork.getElementsByTagName("input")[3].value = "";
        clonedWork.getElementsByTagName("textArea")[0].value = "";
        
        //clonedWork.childNodes.item("businessName").id = 
        //clonedWork.childNodes.item("jobPosition").id = "jobPosition" + numWorkElems;
        //clonedWork.childNodes.item("jobDescription").id = "jobDescription" + numWorkElems;
        workElem.after(clonedWork);
    }
}

function removeWork(){
    document.getElementById("work"+numWorkElems).remove();
    numWorkElems--;
    if(numWorkElems == 1){
        document.getElementById("removeBtnWork").style.display = "none";
    }
}

function addSchool(){
    if(numSchoolElems == 2){
        alert("Only input your two most recent/relevant educational experiences");
    }
    else{
        document.getElementById("removeBtnSchool").style.display = "block";
        var schoolElem = document.getElementById("school" + numSchoolElems);
        console.log(schoolElem);
        var clonedSchool = schoolElem.cloneNode(true);
        numSchoolElems++;
        clonedSchool.id="school" + numSchoolElems;
        //var cloneChildren = document.getElementById("work" + numWorkElems).childNodes;
        console.log(clonedSchool.getElementsByTagName("input"));
        clonedSchool.getElementsByTagName("input")[0].id = "institution" + numSchoolElems;
        clonedSchool.getElementsByTagName("input")[1].id = "educationDegree" + numSchoolElems;
        clonedSchool.getElementsByTagName("input")[2].id = "dateEnroll" + numSchoolElems;
        clonedSchool.getElementsByTagName("input")[3].id = "dateGrad" + numSchoolElems;
        clonedSchool.getElementsByTagName("textArea")[0].id = "educationDescription" + numSchoolElems;

        clonedSchool.getElementsByTagName("input")[0].value = "";
        clonedSchool.getElementsByTagName("input")[1].value = "";
        clonedSchool.getElementsByTagName("input")[2].value = "";
        clonedSchool.getElementsByTagName("input")[3].value = "";
        clonedSchool.getElementsByTagName("textArea")[0].value = "";
        //clonedWork.childNodes.item("businessName").id = 
        //clonedWork.childNodes.item("jobPosition").id = "jobPosition" + numWorkElems;
        //clonedWork.childNodes.item("jobDescription").id = "jobDescription" + numWorkElems;
        schoolElem.after(clonedSchool);
    }
}

function removeSchool(){
    document.getElementById("school"+numSchoolElems).remove();
    numSchoolElems--;
    if(numSchoolElems == 1){
        document.getElementById("removeBtnSchool").style.display = "none";
    }
}
