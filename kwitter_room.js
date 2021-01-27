

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
document.getElementById("user_name_heading").innerHTML="Welcome " + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  if(room_name != ""){
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name" ,room_name);
    window.location="kwitter_page.html";
}else{ 
document.getElementById("room_name").placeholder="Please type a room name";
}
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name = " + Room_names);
      row="<div class='room_name' id= "+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();




function redirectToRoomName(room){
localStorage.setItem("room_name" , room);
window.location="kwitter_page.html";
}


function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "index.html";
}
