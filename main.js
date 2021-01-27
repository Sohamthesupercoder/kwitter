var username;


function addUser(){
    username=document.getElementById("user_name").value;
if(username == ""){
    document.getElementById("user_name").placeholder="please type a username";
} else {
    localStorage.setItem("user_name" ,username);
    window.location="kwitter_room.html";
}
}