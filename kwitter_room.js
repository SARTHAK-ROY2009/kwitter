//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCPamrnqE203LJj8tCL2ILo4OJ49DYm_Nc",
      authDomain: "kwitter-69030.firebaseapp.com",
      databaseURL: "https://kwitter-69030-default-rtdb.firebaseio.com",
      projectId: "kwitter-69030",
      storageBucket: "kwitter-69030.appspot.com",
      messagingSenderId: "842469319632",
      appId: "1:842469319632:web:29e01f974b47fb94884fd5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  //End code
            });
      });
}
getData();



function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.locationbar = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location=("index.html")
}