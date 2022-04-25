var currUser;
var numWorkElems = 1;
var numSchoolElems = 1;

var dbName;
var dbFirst;
var dbLast;
var dbCity;
var dbPhone;
var dbEmail;

var dbBusiness1 = "";
var dbPosition1 = "";
var dbJobStart1 = "";
var dbJobEnd1 = "";
var dbJobDescription1 = "";

var dbBusiness2 = "";
var dbPosition2 = "";
var dbJobStart2 = "";
var dbJobEnd2 = "";
var dbJobDescription2 = "";

var dbInstitution1 ="";
var dbDegree1="";
var dbEnroll1 = "";
var dbGrad1 = "";
var dbEdDescription1 ="";

var dbInstitution2 ="";
var dbDegree2="";
var dbEnroll2 = "";
var dbGrad2 = "";
var dbEdDescription2 ="";

var dbSkills1;
var dbSkills2;

var dbLink1;
var dbLink2;

var dbOtherTitle;
var dbOtherDescription;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currUser = user;
        document.getElementById("userBtn").textContent = user.displayName;
        document.getElementById("userBtn").onclick = function() { window.location.href = "profile.html"; }
        transferInfo(currUser);
        /*db.collection(currUser.email)
        .get()
        .then(res => {
            res.forEach(element => {
            element.ref.delete();
            });
        });*/
    }else{
        console.log("error: no user found");
    }
});

function transferInfo(currUser){
    var dbInfo = db.collection(currUser.email).doc("Template 7");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbFirst = data.firstName;
            dbLast = data.lastName;
            dbName = data.firstName + " " + data.lastName;
            dbCity = data.city;
            dbPhone = data.phone;
            dbEmail = data.email;
            dbBusiness1 = data.business1;
            dbPosition1 = data.position1;
            dbJobStart1 =  data.workStart1;
            dbJobEnd1 = data.workEnd1;
            dbJobDescription1 = data.jobDescription1;
            dbBusiness2 = data.business2;
            dbPosition2 = data.position2;
            dbJobStart2 =  data.workStart2;
            dbJobEnd2 = data.workEnd2;
            dbJobDescription2 = data.jobDescription2;
            dbInstitution1 = data.institution1;
            dbDegree1 = data.degree1;
            dbEnroll1 = data.enroll1;
            dbGrad1 = data.grad1;
            dbEdDescription1 = data.edDescription1;
            dbInstitution2 = data.institution2;
            dbDegree2 = data.degree2;
            dbEnroll2 = data.enroll2;
            dbGrad2 = data.grad2;
            dbEdDescription2 = data.edDescription2;
            dbLink1 = data.link1;
            dbLink2 = data.link2;
            dbSkills1 = data.skills1;
            dbSkills2 = data.skills2;
            dbOtherTitle = data.otherTitle;
            dbOtherDescription = data.otherDescription; 

            document.getElementById("firstName").value = dbFirst;
            document.getElementById("lastName").value = dbLast;
            document.getElementById("city").value = dbCity;
            document.getElementById("phoneNumber").value = dbPhone;
            document.getElementById("email").value = dbEmail;

            document.getElementById("businessName" + 1).value = dbBusiness1;
            document.getElementById("dateStart" + 1).value = dbJobStart1;
            document.getElementById("dateEnd" + 1).value = dbJobEnd1;
            document.getElementById("jobPosition" + 1).value = dbPosition1;
            document.getElementById("jobDescription" + 1).value = dbJobDescription1;

            if(dbBusiness2 != ""){
                addWork();
                document.getElementById("businessName" + 2).value = dbBusiness2;
                document.getElementById("dateStart" + 2).value = dbJobStart2;
                document.getElementById("dateEnd" + 2).value = dbJobEnd2;
                document.getElementById("jobPosition" + 2).value = dbPosition2;
                document.getElementById("jobDescription" + 2).value = dbJobDescription2;
            }

            document.getElementById("institution"+1).value = dbInstitution1;
            document.getElementById("educationDegree"+1).value = dbDegree1;
            document.getElementById("dateEnroll"+1).value = dbEnroll1;
            document.getElementById("dateGrad"+1).value = dbGrad1;
            document.getElementById("educationDescription"+1).value = dbEdDescription1;

            if(dbInstitution2 != ""){
                addSchool();
                document.getElementById("institution"+2).value = dbInstitution2;
                document.getElementById("educationDegree"+2).value = dbDegree2;
                document.getElementById("dateEnroll"+2).value = dbEnroll2;
                document.getElementById("dateGrad"+2).value = dbGrad2;
                document.getElementById("educationDescription"+2).value = dbEdDescription2;
            }

            if(dbLink1 == undefined || dbLink2 == undefined){
                document.getElementById("link1").value = "";
                document.getElementById("link2").value = "";
            }else{
                document.getElementById("link1").value = dbLink1;
                document.getElementById("link2").value = dbLink2;
            }

            document.getElementById("skill1").value = dbSkills1;
            document.getElementById("skill2").value = dbSkills2;

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
    var formFirst = document.getElementById("firstName").value;
    var formLast = document.getElementById("lastName").value;
    var formCity = document.getElementById("city").value;
    var formPhone = document.getElementById("phoneNumber").value;
    var formEmail = document.getElementById("email").value;
    var formSkill1 = document.getElementById("skill1").value;
    var formSkill2 = document.getElementById("skill2").value;
    var formOtherTitle = document.getElementById("otherTitle").value;
    var formOtherDescription = document.getElementById("otherDescription").value;
    var formLink1 = document.getElementById("link1").value;
    var formLink2 = document.getElementById("link2").value;
    var formBusiness1 = document.getElementById("businessName" + 1).value;
    var formDateStart1 = document.getElementById("dateStart" + 1).value;
    var formDateEnd1 = document.getElementById("dateEnd" + 1).value;
    var formPosition1 = document.getElementById("jobPosition" + 1).value;
    var formJobDescription1 = document.getElementById("jobDescription" + 1).value;
    
    var formBusiness2 = document.getElementById("businessName" + 2);
    var formDateStart2;
    var formDateEnd2;
    var formPosition2;
    var formJobDescription2;

    if(formBusiness2 == null){
        formBusiness2 = "";
        formDateStart2 = "";
        formDateEnd2 = "";
        formPosition2 = "";
        formJobDescription2 = "";
    } else {
        formBusiness2 = document.getElementById("businessName" + 2).value;
        formDateStart2 = document.getElementById("dateStart" + 2).value;
        formDateEnd2 = document.getElementById("dateEnd" + 2).value;
        formPosition2 = document.getElementById("jobPosition" + 2).value;
        formJobDescription2 = document.getElementById("jobDescription" + 2).value;
    }

    var formSchool1 = document.getElementById("institution"+1).value;
    var formDegree1 = document.getElementById("educationDegree"+1).value;
    var formEnroll1 = document.getElementById("dateEnroll"+1).value;
    var formGrad1 = document.getElementById("dateGrad"+1).value;
    var formEdDescription1 = document.getElementById("educationDescription"+1).value;

    var formSchool2 = document.getElementById("institution"+2);
    var formDegree2;
    var formEnroll2;
    var formGrad2;
    var formEdDescription2;

    if(formSchool2 == null){
        formSchool2 = "";
        formDegree2 = "";
        formEnroll2 = "";
        formGrad2 = "";
        formEdDescription2 = "";
    }else{
        formSchool2 = document.getElementById("institution"+2).value;
        formDegree2 = document.getElementById("educationDegree"+2).value;
        formEnroll2 = document.getElementById("dateEnroll"+2).value;
        formGrad2 = document.getElementById("dateGrad"+2).value;
        formEdDescription2 = document.getElementById("educationDescription"+2).value;
    }

    db.collection(currUser.email).doc("Template 7").set({
        firstName: formFirst,
        lastName: formLast,
        phone: formPhone,
        city: formCity,
        email: formEmail,
        business1: formBusiness1,
        position1: formPosition1,
        workStart1: formDateStart1,
        workEnd1: formDateEnd1,
        jobDescription1: formJobDescription1,
        business2: formBusiness2,
        position2: formPosition2,
        workStart2: formDateStart2,
        workEnd2: formDateEnd2,
        jobDescription2: formJobDescription2,
        institution1: formSchool1,
        degree1: formDegree1,
        enroll1: formEnroll1,
        grad1: formGrad1,
        edDescription1: formEdDescription1,
        institution2: formSchool2,
        degree2: formDegree2,
        enroll2: formEnroll2,
        grad2: formGrad2,
        edDescription2: formEdDescription2,
        link1: formLink1,
        link2: formLink2,
        skills1: formSkill1,
        skills2: formSkill2,
        otherDescription: formOtherDescription,
        otherTitle: formOtherTitle
    }).then(() => {
        console.log("Document successfully written!");
        window.location.href = "template7.html";
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function addWork(){
    if(numWorkElems == 2){
        alert("This template accepts a maximum of two previous jobs.");
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
