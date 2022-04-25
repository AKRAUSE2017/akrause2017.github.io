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
        var currUser = user;
        if (document.referrer == 'https://lamp.eng.fau.edu/~akrause2017/resume-application/www/adjustResume7.html' || document.referrer == 'https://lamp.eng.fau.edu/~akrause2017/resume-application/www/profile.html') {
            getTemplateDB(currUser);
        }else{
            getDBInfo(currUser);
        }
    }else{
        console.log("error: no user found");
    }
});

function getTemplateDB(currUser){
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
            dbSkills1 = data.skills1;
            dbSkills2 = data.skills2;
            dbLink1 = data.link1;
            dbLink2 = data.link2;
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

function getDBInfo(currUser){
    var dbInfo = db.collection(currUser.email).doc("Information");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbFirst = data.firstName;
            dbLast = data.lastName;
            dbName = dbFirst + " " + dbLast;
            dbCity = data.city;
            dbPhone = data.phone;
            dbEmail = data.email;
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

    var dbLinks = db.collection(currUser.email).doc("Links");
    dbLinks.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            console.log("Document data:", data);
            dbLink1 = data.linkOne;
            dbLink2 = data.linkTwo;
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
    var workDescription = "Lorem ipsum dolor sit amet. Sit quod quisquam sed architecto molestiae rem sint maiores 33 assumenda voluptatem cum quae natus aut maiores sunt. Eum cumque ut incidunt enim eos debitis aperiam sed modi nihil qui voluptas voluptatibus qui sapiente atque et recusandae dolorem!"
    var splitWork = doc.splitTextToSize(workDescription, 180);
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
    doc.text("Email: "+ dbEmail, 20,spacing);
    spacing = spacing + 5;
    doc.text("Location: " + dbCity, 20,spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 5;
    doc.text(divider, 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 0.75;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 9.25;
    doc.text("Accomplishments", 20, spacing);

    doc.setFontType("bold");
    doc.text(dbOtherTitle, 70, spacing)
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.setFont("times");
    spacing = spacing + 5;
    var split = doc.splitTextToSize(dbOtherDescription, 122);
    doc.text(split, 70, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 28;
    doc.text("Skills and Projects", 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    doc.text(divider, 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 0.75;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 9.25;
    doc.text("Skills", 20, spacing);

    placeholder = "||"
    var split = doc.splitTextToSize(placeholder, 0);
    doc.setFontSize(25);
    spacing = spacing + 2;
    doc.text(bullet, 69, spacing);
    doc.setFontSize(12);
    spacing = spacing - 9;
    doc.text(split, 70, spacing);

    doc.setFontType("normal");
    spacing = spacing + 7;
    doc.text(dbSkills1, 78, spacing)

    placeholder = "||"
    var split = doc.splitTextToSize(placeholder, 0);
    doc.setFontSize(25);
    spacing = spacing + 12;
    doc.text(bullet, 69, spacing);
    doc.setFontSize(12);
    spacing = spacing - 9;
    doc.text(split, 70, spacing);

    spacing = spacing + 7;
    doc.text(dbSkills2, 78, spacing)

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 10;
    doc.text("Projects", 20, spacing);
    spacing = spacing + 5;
    doc.text("", 20, spacing);

    placeholder = "||"
    var split = doc.splitTextToSize(placeholder, 0);
    doc.setFontSize(25);
    spacing = spacing - 3;
    doc.text(bullet, 69, spacing);
    doc.setFontSize(12);
    spacing = spacing - 9;
    doc.text(split, 70, spacing);
    doc.setFontType("normal");
    spacing = spacing + 7;
    doc.text(dbLink1, 78, spacing)

    placeholder = "||"
    var split = doc.splitTextToSize(placeholder, 0);
    doc.setFontSize(25);
    spacing = spacing + 12;
    doc.text(bullet, 69, spacing);
    doc.setFontSize(12);
    spacing = spacing - 9;
    doc.text(split, 70, spacing);
    doc.setFontType("normal");
    spacing = spacing + 7;
    doc.text(dbLink2, 78, spacing)

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 10;
    doc.text("Education", 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    doc.text(divider, 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 0.75;
    doc.text(divider, 20, spacing);

    doc.setFontSize(11);
    doc.setFontType("bold");
    spacing = spacing + 9.25;
    doc.text(dbInstitution1, 20, spacing);
    doc.setFontSize(12);
    spacing = spacing + 5;
    doc.text(dbEnroll1 + " - " + dbGrad1, 20, spacing);


    placeholder = "|||||||"
    var split = doc.splitTextToSize(placeholder, 0);
    doc.setFontSize(25);
    spacing = spacing - 3;
    doc.text(bullet, 69, spacing);
    doc.setFontSize(12);
    spacing = spacing - 9;
    doc.text(split, 70, spacing);
    doc.setFontType("bold");
    spacing = spacing + 7;
    doc.text(dbDegree1, 78, spacing)

    doc.setFontType("normal");
    spacing = spacing + 5;
    var split = doc.splitTextToSize(dbEdDescription1, 118);
    doc.text(split, 78, spacing);

    if(dbInstitution2 != ""){
        doc.setFontSize(11);
        doc.setFontType("bold");
        spacing = spacing + 30;
        doc.text(dbInstitution2, 20, spacing);
        doc.setFontSize(12);
        spacing = spacing + 5;
        doc.text(dbEnroll2 + " - " + dbGrad2, 20, spacing);
    
        placeholder = "|||||||"
        var split = doc.splitTextToSize(placeholder, 0);
        doc.setFontSize(25);
        spacing = spacing - 3;
        doc.text(bullet, 69, spacing);
        doc.setFontSize(12);
        spacing = spacing - 9;
        doc.text(split, 70, spacing);
        doc.setFontType("bold");
        spacing = spacing + 7;
        doc.text(dbDegree2, 78, spacing)
    
        doc.setFontType("normal");
        spacing = spacing + 5;
        var split = doc.splitTextToSize(dbEdDescription2, 118);
        doc.text(split, 78, spacing);
    }
    
    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 30;
    doc.text("Work Experience", 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    doc.text(divider, 20, spacing);

    doc.setFontSize(10);
    doc.setFont("times");
    doc.setFontType("italic");
    spacing = spacing + 0.75;
    doc.text(divider, 20, spacing);

    doc.setFontSize(12);
    doc.setFontType("bold");
    spacing = spacing + 9.25;
    doc.text(dbPosition1, 20, spacing);
    spacing = spacing + 5;
    doc.text(dbJobStart1 + " - " + dbJobEnd1, 20, spacing);

    placeholder = "|||||||"
    var split = doc.splitTextToSize(placeholder, 0);
    doc.setFontSize(25);
    spacing = spacing - 3;
    doc.text(bullet, 69, spacing);
    doc.setFontSize(12);
    spacing = spacing - 9;
    doc.text(split, 70, spacing);
    doc.setFontType("bold");
    spacing = spacing + 7;
    doc.text(dbBusiness1, 78, spacing)

    doc.setFontType("normal");
    spacing = spacing + 5;
    var split = doc.splitTextToSize(dbJobDescription1, 118);
    doc.text(split, 78, spacing);

    if(dbBusiness2 != ""){
        doc.setFontSize(12);
        doc.setFontType("bold");
        spacing = spacing + 30;
        doc.text(dbPosition2, 20, spacing);
        spacing = spacing + 5;
        doc.text(dbJobStart2 + " - " + dbJobEnd2, 20, spacing);
    
        placeholder = "|||||||"
        var split = doc.splitTextToSize(placeholder, 0);
        doc.setFontSize(25);
        spacing = spacing - 3;
        doc.text(bullet, 69, spacing);
        doc.setFontSize(12);
        spacing = spacing - 9;
        doc.text(split, 70, spacing);
        doc.setFontType("bold");
        spacing = spacing + 7;
        doc.text(dbBusiness2, 78, spacing)
    
        doc.setFontType("normal");
        spacing = spacing + 5;
        var split = doc.splitTextToSize(dbJobDescription2, 118);
        doc.text(split, 78, spacing);
    }

    db.collection(currUser.email).doc("Template 7").set({
        firstName: dbFirst,
        lastName: dbLast,
        phone: dbPhone,
        city: dbCity,
        email: dbEmail,
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
        link1: dbLink1,
        link2: dbLink2,
        skills1: dbSkills1,
        skills2: dbSkills2,
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
    window.location.href = "adjustResume7.html";
}
