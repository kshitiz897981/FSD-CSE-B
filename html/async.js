function wait(){
    const ms=new Date().getTime()+3000;
    while(new Date().getTime()<ms);
}
function register(){
    wait();
    console.log("Registered Successfully"); 
}
function sendEmail(){
    wait();
    console.log("Email Sent Successfully");
}
function login(){
    wait();
    console.log("Login Successfully");
}
function getUserData(){
    wait();
    console.log("Got User Data Successfully");
}
register();
sendEmail();
login();
getUserData();