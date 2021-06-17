function showForgot() {
document.getElementById("background").style.display = "block";
document.getElementById("back").style.display = "block";
document.getElementById("sendMail").style.display = "block";
document.getElementById("cancel").style.display = "block";
document.getElementById("title").style.display = "block";
document.getElementById("emailF").style.display = "block";
document.getElementById("emailF1").style.display = "block";
document.getElementById("emailS").style.display = "none";
document.getElementById("emailS1").style.display = "none";
document.getElementById("dismiss").style.display = "none";
}

function closeForgot() {
document.getElementById("background").style.display = "none";
document.getElementById("back").style.display = "none";
document.getElementById("sendMail").style.display = "none";
document.getElementById("cancel").style.display = "none";
document.getElementById("title").style.display = "none";
document.getElementById("emailF").style.display = "none";
document.getElementById("emailF1").style.display = "none";
}

function showT() {
document.getElementById("background").style.display = "none";
document.getElementById("back").style.display = "none";
document.getElementById("sendMail").style.display = "none";
document.getElementById("cancel").style.display = "none";
document.getElementById("title").style.display = "none";
document.getElementById("emailF").style.display = "none";
document.getElementById("emailF1").style.display = "none";
document.getElementById("emailS").style.display = "block";
document.getElementById("emailS1").style.display = "block";
document.getElementById("dismiss").style.display = "block";
}

function remove() {
document.getElementById("emailS").style.display = "none";
document.getElementById("emailS1").style.display = "none";
document.getElementById("dismiss").style.display = "none";
}

function testResults(form) {
var getEmail = form.email.value;
document.getElementById("welcome").style.display = "block";
document.getElementById("continue").style.display = "block";
document.getElementById("you").style.display = "block";
document.getElementById("you1").style.display = "block";
document.getElementById("breakL2").style.display = "block";
document.getElementById("breakR2").style.display = "block";
document.getElementById("you").innerHTML = "You sign as " + getEmail;
document.getElementById("email").style.display = "none";
document.getElementById("nav").style.display = "none";
document.getElementById("email1").style.display = "none";
document.getElementById("password").style.display = "none";
document.getElementById("password1").style.display = "none";
document.getElementById("login").style.display = "none";
document.getElementById("breakL").style.display = "none";
document.getElementById("breakR").style.display = "none";
document.getElementById("forgot").style.display = "none";
document.getElementById("top").style.display = "none";
document.getElementById("name").style.display = "none";
document.getElementById("cre").style.display = "none";
}