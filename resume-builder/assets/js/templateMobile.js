const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('email');
console.log(email);
var base64PDF;

var dbInfo = db.collection(email).doc("Mobile");
    dbInfo.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            base64PDF = data.pdfOut;
            console.log(base64PDF);
            var frame = document.getElementById("pdfView");
            frame.src = base64PDF;
        }else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 


