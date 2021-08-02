function Login(){
    var LST = document.getElementById("username").value;
    localStorage.setItem("Username", LST);
    window.location = "kwitter_room.html";
}