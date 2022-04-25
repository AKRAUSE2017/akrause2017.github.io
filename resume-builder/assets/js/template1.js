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

var dbBusiness3 = "";
var dbPosition3 = "";
var dbJobStart3 = "";
var dbJobEnd3 = "";
var dbJobDescription3 = "";

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
var dbSkills3;

var dbSummary;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var currUser = user;
        if (document.referrer == 'https://lamp.eng.fau.edu/~akrause2017/resume-application/www/adjustResume1.html' || document.referrer == 'https://lamp.eng.fau.edu/~akrause2017/resume-application/www/profile.html') {
            getTemplateDB(currUser);
        }else{
            getDBInfo(currUser);
        }
    }else{
        console.log("error: no user found");
    }
});

function getTemplateDB(currUser){
    var dbInfo = db.collection(currUser.email).doc("Template 1");
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
            dbSummary = data.summary;
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
            dbBusiness3 = data.business3;
            dbPosition3 = data.position3;
            dbJobStart3 =  data.workStart3;
            dbJobEnd3 = data.workEnd3;
            dbJobDescription3 = data.jobDescription3;
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
            dbSkills1 = data.skills1;
            dbSkills2 = data.skills2;
            dbSkills3 = data.skills3;
            setPDF();
        }else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 
    
}

function getDBInfo(currUser){
    var dbInfo = db.collection(currUser.email).doc("Information");
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
            dbSummary = data.summary;
        } else {
            // doc.data() will be undefined in this case
            alert("Please build your profile before using the templates!");
            window.location.href = "profile.html";
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbJob1 = db.collection(currUser.email).doc("Previous Job 1");
    dbJob1.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbBusiness1 = data.business;
            dbPosition1 = data.position;
            dbJobStart1 = data.start;
            dbJobEnd1 = data.end;
            dbJobDescription1 = data.description;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbJob2 = db.collection(currUser.email).doc("Previous Job 2");
    dbJob2.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbBusiness2 = data.business;
            dbPosition2 = data.position;
            dbJobStart2 = data.start;
            dbJobEnd2 = data.end;
            dbJobDescription2 = data.description;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbJob3 = db.collection(currUser.email).doc("Previous Job 3");
    dbJob3.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbBusiness3 = data.business;
            dbJobStart3 = data.start;
            dbJobEnd3 = data.end;
            dbPosition3 = data.position;
            dbJobDescription3 = data.description;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbEd1 = db.collection(currUser.email).doc("Education 1");
    dbEd1.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbInstitution1 = data.institution;
            dbDegree1 = data.degree;
            dbEnroll1 = data.start;
            dbGrad1 = data.end;
            dbEdDescription1 = data.description;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbEd2 = db.collection(currUser.email).doc("Education 2");
    dbEd2.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbInstitution2 = data.institution;
            dbDegree2 = data.degree;
            dbEnroll2 = data.start;
            dbGrad2 = data.end;
            dbEdDescription2 = data.description;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });  

    var dbSkills = db.collection(currUser.email).doc("Skills");
    dbSkills.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbSkills1 = data.skillOne;
            dbSkills2 = data.skillTwo;
            dbSkills3 = data.skillThree;
            setPDF();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    }); 
}

function setPDF(){
    var doc = new jsPDF();
    var divider = "________________________________________________________________________________"
    var divider2 = "________________________________________________________________________"
    var bullet = "•     "
    var spacing = 20;
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text(dbName, 20, spacing);
    
    doc.setFontSize(10);
    spacing = spacing + 7;
    doc.text(dbCity, 20, spacing);
    
    doc.setFontSize(10);
    spacing = spacing + 5;
    doc.text(dbPhone, 20, spacing);
    
    doc.setFontSize(10);
    spacing = spacing + 5;
    doc.text(dbEmail, 20, spacing);
    
    doc.setFont("times");
    doc.setFontType("italic");
    doc.setFontSize(15);
    spacing = spacing + 10;
    doc.text("Summary ", 20, spacing);
    doc.setFontSize(10);
    spacing = spacing - 2;
    doc.text(divider, 45, spacing);
    
    doc.setFontSize(12);
    var spiltSummary = doc.splitTextToSize(dbSummary, 150);
    spacing = spacing + 13;
    doc.text(spiltSummary, 30, spacing);
    
    doc.setFontSize(15);
    spacing = spacing + 25;
    doc.text("Highlights ", 20, spacing);
    doc.setFontSize(10);
    spacing = spacing - 2;
    doc.text(divider, 45, spacing);
    
    doc.setFontSize(12);
    spacing = spacing + 10;
    doc.text(bullet + dbSkills1, 30, spacing);
    spacing = spacing + 5;
    doc.text(bullet + dbSkills2, 30, spacing);
    spacing = spacing + 5;
    doc.text(bullet + dbSkills3, 30, spacing);
    spacing = spacing + 5;


    if(dbBusiness1 != ""){
        doc.setFontSize(15);
        spacing = spacing + 5;
        doc.text("Work Experience ", 20, spacing);
        doc.setFontSize(10);
        spacing = spacing - 2;
        doc.text(divider2, 60, spacing);
        
        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        doc.setFontType("bold")
        spacing = spacing + 10;
        doc.text(dbBusiness1, 20, spacing);
        
        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        spacing = spacing + 5;
        doc.text(dbPosition1 + ", " + dbJobStart1 + " - " + dbJobEnd1, 20, spacing);
        spacing = spacing + 5;
        doc.text(bullet, 20, spacing);
        var splitJob1 = doc.splitTextToSize(dbJobDescription1, 150);
        doc.text(splitJob1, 25, spacing);


        if(dbBusiness2 != ""){
            doc.setFontType("italic");
            doc.setFont("times");
            doc.setFontType("bold")
            spacing = spacing + 22;
            doc.text(dbBusiness2, 20, spacing);
            
            doc.setFontSize(12);
            doc.setFontType("italic");
            doc.setFont("times");
            spacing = spacing + 5;
            doc.text(dbPosition2 + ", " + dbJobStart2 + " - " + dbJobEnd2, 20, spacing);
            spacing = spacing + 5;
            doc.text(bullet, 20, spacing);
            var splitJob2 = doc.splitTextToSize(dbJobDescription2, 150);
            doc.text(splitJob2, 25, spacing);
        }

        if(dbBusiness3 != ""){
            doc.setFontType("italic");
            doc.setFont("times");
            doc.setFontType("bold")
            spacing = spacing + 22;
            doc.text(dbBusiness3, 20, spacing);
            
            doc.setFontSize(12);
            doc.setFontType("italic");
            doc.setFont("times");
            spacing = spacing + 5;
            doc.text(dbPosition3 + ", " + dbJobStart3 + " - " + dbJobEnd3, 20, spacing);
            spacing = spacing + 5;
            doc.text(bullet, 20, spacing);
            var splitJob3 = doc.splitTextToSize(dbJobDescription3, 150);
            doc.text(splitJob3, 25, spacing);
        }
    }

    if(dbInstitution1 != ""){
        doc.setFontSize(15);
        spacing = spacing + 25;
        doc.text("Education ", 20, spacing);
        doc.setFontSize(10);
        spacing = spacing - 2;
        doc.text(divider, 45, spacing);
        
        doc.setFontSize(12);
        doc.setFont("times");
        doc.setFontType("bold")
        spacing = spacing + 9;
        doc.text(dbInstitution1, 20, spacing);
        
        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        spacing = spacing + 5;
        doc.text(dbDegree1 + ", " + dbEnroll1 + " - " + dbGrad1, 20, spacing);
        spacing = spacing + 5;
        doc.text(bullet, 20, spacing);
        var splitEd1 = doc.splitTextToSize(dbEdDescription1, 150);
        doc.text(splitEd1, 25, spacing);

        if(dbInstitution2 != ""){
            doc.setFontSize(12);
            doc.setFont("times");
            doc.setFontType("bold")
            spacing = spacing + 23;
            doc.text(dbInstitution2, 20, spacing);

            doc.setFontSize(12);
            doc.setFontType("italic");
            doc.setFont("times");
            spacing = spacing + 5;
            doc.text(dbDegree2 + ", " + dbEnroll2 + " - " + dbGrad2, 20, spacing);
            spacing = spacing + 5;
            doc.text(bullet, 20, spacing);
            var splitEd2 = doc.splitTextToSize(dbEdDescription2, 150);
            doc.text(splitEd2, 25, spacing);
        }
    }

    db.collection(currUser.email).doc("Template 1").set({
        firstName: dbFirst,
        lastName: dbLast,
        phone: dbPhone,
        city: dbCity,
        email: dbEmail,
        summary: dbSummary,
        business1: dbBusiness1,
        position1: dbPosition1,
        workStart1: dbJobStart1,
        workEnd1: dbJobEnd1,
        jobDescription1: dbJobDescription1,
        business2: dbBusiness2,
        position2: dbPosition2,
        workStart2: dbJobStart2,
        workEnd2: dbJobEnd2,
        jobDescription2: dbJobDescription2,
        business3: dbBusiness3,
        position3: dbPosition3,
        workStart3: dbJobStart3,
        workEnd3: dbJobEnd3,
        jobDescription3: dbJobDescription3,
        institution1: dbInstitution1,
        degree1: dbDegree1,
        enroll1: dbEnroll1,
        grad1: dbGrad1,
        edDescription1: dbEdDescription1,
        institution2: dbInstitution2,
        degree2: dbDegree2,
        enroll2: dbEnroll2,
        grad2: dbGrad2,
        edDescription2: dbEdDescription2,
        skills1: dbSkills1,
        skills2: dbSkills2,
        skills3: dbSkills3,
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });

    var iframe = document.getElementById("pdfView");
    iframe.src = doc.output('datauristring');
}

function adjust(){
    window.location.href = "adjustResume1.html";
}

