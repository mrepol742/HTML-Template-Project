var droid_mj = window.alert("DROID_MJ © 2019");

function see1() {
document.getElementById("reg").innerHTML = "Log In";
document.getElementById("and").style.display = "block";
document.getElementById("login").style.display = "none";
document.getElementById("try").innerHTML = "";
document.getElementById("try1").innerHTML = "Email";
document.getElementById("try2").innerHTML = "Password";
document.getElementById("try3").innerHTML = "";
document.getElementById("oo").style.background = "transparent";
document.getElementById("oo1").style.background = "#ffffff";
document.getElementById("oo2").style.background = "#ffffff";
document.getElementById("oo3").style.background = "transparent";
document.getElementById("check").style.display = "none";
document.getElementById("check1").style.color = "transparent";
document.getElementById("sup").style.display = "none";
document.getElementById("sup1").style.display = "block";
document.getElementById("sup2").style.display = "block";
document.getElementById("sup3").style.display = "none";
document.getElementById("shk").style.display = "block";
document.getElementById("shk1").style.display = "none";
document.getElementById("con2").style.display = "block";
document.getElementById("con1").style.display = "none";
document.getElementById("con").style.display = "none";
document.getElementById("te").style.display = "none";
document.getElementById('te').style.animationPlayState = 'paused';
document.getElementById("ask3").innerHTML = "";
document.getElementById("ask").style.display = "none";
document.getElementById("ask1").style.display = "none";
document.getElementById("ask2").style.display = "none";
}

function remove() {
document.getElementById("try").innerHTML = "";
}

function remove1() {
document.getElementById("try1").innerHTML = "";
}

function remove2() {
document.getElementById("try2").innerHTML = "";
}

function remove3() {
document.getElementById("try3").innerHTML = "";
}

function see() {
document.getElementById("try").innerHTML = "User Name";
document.getElementById("try1").innerHTML = "Email";
document.getElementById("try2").innerHTML = "Password";
document.getElementById("try3").innerHTML = "Confirm Password";
document.getElementById("reg").innerHTML = "Registration";
document.getElementById("oo").style.background = "#ffffff";
document.getElementById("oo1").style.background = "#ffffff";
document.getElementById("oo2").style.background = "#ffffff";
document.getElementById("oo3").style.background = "#ffffff";
document.getElementById("check").style.display = "block";
document.getElementById("check1").style.color = "#ffffff";
document.getElementById("con").style.display = "block";
document.getElementById("con1").style.display = "none";
document.getElementById("con2").style.display = "none";
document.getElementById("ask").style.display = "none";
document.getElementById("ask1").style.display = "none";
document.getElementById("ask2").style.display = "none";
document.getElementById("sup").style.display = "block";
document.getElementById("sup1").style.display = "block";
document.getElementById("sup2").style.display = "block";
document.getElementById("sup3").style.display = "block";
document.getElementById("te").style.display = "none";
document.getElementById('te').style.animationPlayState = 'paused';
document.getElementById("shk").style.display = "none";
document.getElementById("shk1").style.display = "block";
document.getElementById("and").style.display = "none";
document.getElementById("ask3").style.display = "none";
document.getElementById("login").style.display = "block";
}

function testResults(form) {
var un = form.inputbox.value;
var email = form.inputbox1.value;
var password = form.inputbox2.value;

document.getElementById("reg").innerHTML = "Creating Account";
document.getElementById("try").innerHTML = "";
document.getElementById("try1").innerHTML = "";
document.getElementById("try2").innerHTML = "";
document.getElementById("try3").innerHTML = "";
document.getElementById("oo").style.background = "transparent";
document.getElementById("oo1").style.background = "transparent";
document.getElementById("oo2").style.background = "transparent";
document.getElementById("oo3").style.background = "transparent";
document.getElementById("check").style.display = "none";
document.getElementById("check1").style.color = "transparent";
document.getElementById("con1").style.display = "block";
document.getElementById("con2").style.display = "none";
document.getElementById("sup").style.display = "none";
document.getElementById("sup1").style.display = "none";
document.getElementById("sup2").style.display = "none";
document.getElementById("sup3").style.display = "none";
document.getElementById("ask").style.display = "block";
document.getElementById("ask1").style.display = "block";
document.getElementById("ask2").style.display = "block";
document.getElementById("ask").innerHTML = "User Name: " + un;
document.getElementById("ask1").innerHTML = "Email: " + email;
document.getElementById("ask2").innerHTML = "Password: " + password;
document.getElementById("te").style.display = "block";
document.getElementById('te').style.animationPlayState = 'running';
document.getElementById("shk").style.display = "block";
document.getElementById("shk1").style.display = "none";
document.getElementById("and").style.display = "block";
document.getElementById("ask3").style.display = "block";
document.getElementById("ask3").innerHTML = "Account Created";
document.getElementById("login").style.display = "none";
}