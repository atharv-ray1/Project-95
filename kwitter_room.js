const firebaseConfig = {
    apiKey: "AIzaSyCM69yeXy54loJw4GNNTwOB30htljK_L44",
    authDomain: "project-94-bb860.firebaseapp.com",
    databaseURL: "https://project-94-bb860-default-rtdb.firebaseio.com",
    projectId: "project-94-bb860",
    storageBucket: "project-94-bb860.appspot.com",
    messagingSenderId: "643685454752",
    appId: "1:643685454752:web:409a44c556844cf74c4ac5",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log(Room_names);
row="<div class='roomname' id="+Room_names+" onclick='takeToHtml(this.id)'># "+Room_names+"</div> <br> <hr>";
document.getElementById("output").innerHTML+=row;

   //End code
   });});}
getData();
function addRoom(){
room_name=document.getElementById("roomname").value;
firebase.database().ref("/").child(room_name).update({
});
localStorage.setItem("roomname",room_name);
window.location="kwitter_page.html";
}
function takeToHtml(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location.replace("index.html");
}
