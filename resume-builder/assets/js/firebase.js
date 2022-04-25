var firebaseConfig = {
    apiKey: "AIzaSyB6tmRdJlHr7wpOTOP_Vcb9o6jtZHeRbnY",
    authDomain: "resume-builder-applicati-dcf58.firebaseapp.com",
    projectId: "resume-builder-applicati-dcf58",
    storageBucket: "resume-builder-applicati-dcf58.appspot.com",
    messagingSenderId: "935610073171",
    appId: "1:935610073171:web:fcd540b059f2bd0b7dc6a6",
    measurementId: "G-3MHVW5TB11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();