
var firebaseConfig = {
  apiKey: "AIzaSyAoOmXA-DD7V5FLJPdQ6KrZY72_7w6sSRA",
  authDomain: "lets-chat-a65ae.firebaseapp.com",
  databaseURL: "https://lets-chat-a65ae-default-rtdb.firebaseio.com",
  projectId: "lets-chat-a65ae",
  storageBucket: "lets-chat-a65ae.appspot.com",
  messagingSenderId: "431234539295",
  appId: "1:431234539295:web:da02278dd740be8c881a2a",
  measurementId: "G-L4NX6NRHEB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
inputvalue=""

function input1(){

  inputvalue=document.getElementById("loginid").value

  if(inputvalue==""){
    document.getElementById("login").style.display="none"
    }
    else{
      document.getElementById("login").style.display="inline-block"   
    }


    
  
}

function nextpage(){
  console.log("hi",inputvalue)

  firebase.database().ref("/").child(inputvalue).update
  (
    {

    purpose:"data"
    
    }
    );

  document.getElementById("section2").style.display="none"
  setTimeout(function(){ 
    console.log("hi")
  localStorage.setItem("username",inputvalue)
    window.location="room.html"
  },5000);  
    
    
}