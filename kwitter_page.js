

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAGfhfJvbcUc6EmIQGhFHRfMwA6OLrJcdQ",
      authDomain: "kwitter-442f5.firebaseapp.com",
      databaseURL: "https://kwitter-442f5-default-rtdb.firebaseio.com",
      projectId: "kwitter-442f5",
      storageBucket: "kwitter-442f5.appspot.com",
      messagingSenderId: "833924373424",
      appId: "1:833924373424:web:a0b48d1922ad21fb221475"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
var name=message_data["name"];
var message=message_data["message"];
var like=message_data["like"];
name_with_tag="<h4>" + name + "<img class='user_tick'src='tick.png'></h4>";
message_tag="<h3 class='message_h4'>" + message + "</h3>"
like_button="<button onclick='update_like(this.id)'id=" + firebase_message_id + " class='btn btn-warning' value=" + like + "><span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button>";
row=name_with_tag + message_tag + like_button;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();




function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
      }


      function send(){
            msg=document.getElementById("message").value;
            firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
            
            });
            document.getElementById("message").value="";
      }


      function update_like(message_id){
         button_id=message_id;   
         likes=document.getElementById(button_id).value;
         updated_likes=Number(likes) + 1;
         firebase.database().ref(room_name).child(button_id).update({
            like:updated_likes     
         });
      }