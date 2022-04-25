var dbName;
var dbFirst;
var dbLast;
var dbCity;
var dbPhone;
var dbEmail;
var dbSummary;

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

var dbOtherTitle;
var dbOtherDescription;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var currUser = user;
        if (document.referrer == 'https://lamp.eng.fau.edu/~akrause2017/resume-application/www/adjustResume6.html' || document.referrer == 'https://lamp.eng.fau.edu/~akrause2017/resume-application/www/profile.html') {
            getTemplateDB(currUser);
        }else{
            getDBInfo(currUser);
        }
    }else{
        console.log("error: no user found");
    }
});

function getTemplateDB(currUser){
    var dbInfo = db.collection(currUser.email).doc("Template 6");
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
            dbOtherTitle = data.otherTitle;
            dbOtherDescription = data.otherDescription;
            setPDF();
        }else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 
    
}

function getDBInfo(){
    var dbInfo = db.collection(currUser.email).doc("Information");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbName = data.firstName + " " + data.lastName;
            dbFirst = data.firstName;
            dbLast = data.lastName;
            dbCity = data.city;
            dbPhone = data.phone;
            dbEmail = data.email;
            dbSummary = data.summary;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert("Please build your profile before using the templates!");
            window.location.href = "profile.html";
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
            setPDF();
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
            setPDF();
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
            setPDF();
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

    var dbOther = db.collection(currUser.email).doc("Other");
    dbOther.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbOtherTitle = data.title;
            dbOtherDescription = data.description;
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
    var divider = "_________________________________________________________________________________________________"
    var bullet = "•     "
    var placeholder = "";
    var split = doc.splitTextToSize(placeholder, 5);
    var spacing = 0;

    doc.setFont("times");
    doc.setFontSize(30);
    spacing = spacing + 20;
    doc.text(dbName, 20, spacing);

    doc.setFontSize(11);
    spacing = spacing + 5;
    doc.text("Phone: " + dbPhone, 20,spacing);
    spacing = spacing + 5;
    doc.text("Email: " + dbEmail, 20,spacing);
    spacing = spacing + 5;
    doc.text("Location: " + dbCity, 20,spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 5;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 10;
    doc.text("Professional Summary", 20, spacing);

    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.setFont("times");
    var split = doc.splitTextToSize(dbSummary, 120);
    doc.text(split, 70, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 25;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 10;
    doc.text("Work Experience", 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.setFont("times");
    doc.setFontType("bold")
    doc.text(dbBusiness1, 70, spacing);

    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.setFont("times");
    spacing = spacing + 5;
    doc.text(dbPosition1 + ", " + dbJobStart1 + " - " + dbJobEnd1, 70, spacing);
    spacing = spacing + 5;
    var split = doc.splitTextToSize(dbJobDescription1, 120);
    doc.text(split, 70, spacing);

    if(dbBusiness2 != ""){
        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        doc.setFontType("bold")
        spacing = spacing + 30;
        doc.text(dbBusiness2, 70, spacing);
    
        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        spacing = spacing + 5;
        doc.text(dbPosition2 + ", " + dbJobStart2 + " - " + dbJobEnd2, 70, spacing);
        spacing = spacing + 5;
        var split = doc.splitTextToSize(dbJobDescription2, 120);
        doc.text(split, 70, spacing);
    }
    

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 25;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 10;
    doc.text("Education", 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.setFont("times");
    doc.setFontType("bold")
    doc.text(dbInstitution1, 70, spacing);

    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.setFont("times");
    spacing = spacing + 5;
    doc.text(dbDegree1 + ", " + dbEnroll1 + " - " + dbEnroll1, 70, spacing);
    spacing = spacing + 5;
    var split = doc.splitTextToSize(dbEdDescription1, 120);
    doc.text(split, 70, spacing);

    if(dbInstitution2 != ""){
        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        doc.setFontType("bold")
        spacing = spacing + 27;
        doc.text(dbInstitution1, 70, spacing);

        doc.setFontSize(12);
        doc.setFontType("italic");
        doc.setFont("times");
        spacing = spacing + 5;
        doc.text("Bachelors in Computer Science", 70, spacing);
        spacing = spacing + 5;
        var split = doc.splitTextToSize(dbEdDescription2, 120);
        doc.text(split, 70, spacing);
    }

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 25;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 10;
    doc.text("Other", 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.setFont("times");
    doc.setFontType("bold")
    doc.text(dbOtherTitle, 70, spacing);

    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.setFont("times");
    spacing = spacing + 5;
    var split = doc.splitTextToSize(dbOtherDescription, 120);
    doc.text(split, 70, spacing);

    db.collection(currUser.email).doc("Template 6").set({
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
        otherTitle: dbOtherTitle,
        otherDescription: dbOtherDescription,
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
    
    var iframe = document.getElementById("pdfView");
    iframe.src = doc.output('datauristring');
}

function adjust(){
    window.location.href = "adjustResume6.html";
}



