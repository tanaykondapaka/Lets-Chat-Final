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
  room_name=localStorage.getItem("roomname")
  username=localStorage.getItem("username")


  function send(){
    var message=document.getElementById("text-message").value
    firebase.database().ref(room_name).push(
        {
            sent_message:message,
            likes:0,
            user_name:username
        }
    )
    
    document.getElementById("text-message").value=""
  
  
  
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  
    username=message_data['user_name']
    likes=message_data['likes']
    message=message_data['sent_message']
    var name = "<div id='output'><h4 id='name' style='margin-left: -800;'><u>"+username+"</u><img id='tick' src='tick.png'>"
    var mes = "</span><br></h4><span><h4 id='message'  style='margin-left: -850;'>"+message+"</h4><hr style='color:black'>"
    var btn = "<button value='"+likes+"' id="+firebase_message_id+" style='margin-left:-800px;font-family: 'Risque', cursive;' onclick='like(this.id)' >Like<img id='TU' src='https://www.pngkey.com/png/full/131-1316419_icon-thumbs-up-teal-location-icon.png'>"+likes+"</button><br><br></div><br>"
    row=name+mes+btn;
    document.getElementById("messages").innerHTML=document.getElementById("messages").innerHTML+row
    
  
  
  
  
  }})})}
  getData();

function like(msgid)
{
  
btnid=msgid
likees=document.getElementById(btnid).value;


updated_likes=Number(likees)+1

firebase.database().ref(room_name).child(msgid).update
(

  {
    likes:updated_likes
  }
)
}



































