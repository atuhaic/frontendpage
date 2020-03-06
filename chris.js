function welcome(){
let username=document.getElementById("username").value;
let password=document.getElementById("pass").value;
  

    if(username ==""){
        prompt(" Please input username");
    }
    else if( password ==""){
        prompt("Please enter your full password")
    }
    else{
        window.open("chris.html");
    }
}