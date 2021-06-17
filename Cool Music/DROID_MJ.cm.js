function volume() {
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("nav1").style.display = "none";
document.getElementById("nav2").style.display = "block";
document.getElementById("volControl").style.display = "block";
document.getElementById("volControl1").style.display = "block";
document.getElementById("volControl2").style.display = "block";
document.getElementById("show").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("sr1").style.display = "none";
document.getElementById("bk1").style.display = "block";
}

function volume1() {
document.getElementById("bk1").style.display = "none";
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("sr1").style.display = "none";
document.getElementById("nav1").style.display = "block";
document.getElementById("nav2").style.display = "none";
 document.getElementById("show").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
}

function SetVolume(val) {
var player = document.getElementById("player");
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}

function sr2() {
document.getElementById("sr1").style.display = "none";
}

document.getElementById('frmSearch').onsubmit = function() { 
window.location = "https://" + document.getElementById("sss").value; 
return false; 
}

function play() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById('player').play();
document.getElementById("play").style.display = "none";
document.getElementById("play1").style.display = "block";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("show").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("logo").style.height = "56%";
document.getElementById("logo").style.width = "83%";
document.getElementById("logo").style.marginLeft = "6.2%";
document.getElementById("anim1").style.animationPlayState = "running";
document.getElementById("anim2").style.animationPlayState = "running";
document.getElementById("anim3").style.animationPlayState = "running";
document.getElementById("anim4").style.animationPlayState = "running";
document.getElementById("anim5").style.animationPlayState = "running";
document.getElementById("anim6").style.animationPlayState = "running";
document.getElementById("anim7").style.animationPlayState = "running";
document.getElementById("sr1").style.display = "none";
document.getElementById("logo").style.paddingTop = "1%";
}

function paused() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("anim1").style.animationPlayState = "paused";
document.getElementById("anim2").style.animationPlayState = "paused";
document.getElementById("anim3").style.animationPlayState = "paused";
document.getElementById("anim4").style.animationPlayState = "paused";
document.getElementById("anim5").style.animationPlayState = "paused";
document.getElementById("anim6").style.animationPlayState = "paused";
document.getElementById("anim7").style.animationPlayState = "paused";
document.getElementById("logo").style.height = "55%";
document.getElementById("logo").style.width = "82%";
document.getElementById("logo").style.marginLeft = "6.6%";
document.getElementById("logo").style.paddingTop = "0%";
document.getElementById('player').pause();
document.getElementById("play1").style.display = "none";
document.getElementById("play").style.display = "block";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("show").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sr1").style.display = "none";
}

function search1() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("sss").value = "";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("show").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("nav1").style.display = "block";
document.getElementById("nav2").style.display = "none";
document.getElementById("sr1").style.display = "none";
}

function search() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("sss").value = "";
document.getElementById("searchL").style.display = "block";
document.getElementById("close").style.display = "block";
document.getElementById("abouta").style.display = "none";
document.getElementById("bk").style.display = "none";
document.getElementById("sss").style.display = "block";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("sb1").style.display = "block";
document.getElementById("sb2").style.display = "block";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("show").style.display = "none";
document.getElementById("nav1").style.display = "none";
document.getElementById("nav2").style.display = "block";
document.getElementById("sr1").style.display = "block";
}

function st() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("bk").style.display = "none";
document.getElementById("abouta").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("show").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sr1").style.display = "none";
}

function st1() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("bk").style.display = "none";
document.getElementById("abouta").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
document.getElementById("show").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sr1").style.display = "none";
}

function menu1() {
document.getElementById("show").style.display = "none";
document.getElementById("nav2").style.display = "none";
document.getElementById("nav1").style.display = "block";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
}

function menu() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("nav2").style.borderTopLeftRadius = "7px";
document.getElementById("nav2").style.borderTopRightRadius = "7px";
document.getElementById("nav2").style.paddingTop = "0px";
document.getElementById("nav1").style.borderTopLeftRadius = "0px";
document.getElementById("nav1").style.borderTopRightRadius = "0px";
document.getElementById("nav1").style.paddingTop = "10px";
document.getElementById("nav2").style.display = "block";
document.getElementById("abouta").style.display = "none";
document.getElementById("bk").style.display = "none";
document.getElementById("show").style.display = "block";
document.getElementById("sss").style.display = "none"
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sr1").style.display = "none";
}

function change() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("abouta").style.display = "none";
document.getElementById("bk").style.display = "none";
document.getElementById("anim1").style.display = "block";
document.getElementById("anim2").style.display = "block";
document.getElementById("anim3").style.display = "block";
document.getElementById("anim4").style.display = "block";
document.getElementById("anim5").style.display = "block";
document.getElementById("anim6").style.display = "block";
document.getElementById("anim7").style.display = "block";
document.getElementById("logo").style.display = "none";
document.getElementById("vs").style.display = "none";
document.getElementById("vs1").style.display = "block";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("title").style.opacity = ".7";
document.getElementById("artist").style.opacity = ".7";
document.getElementById("sr1").style.display = "none";
}

function change1() {
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
document.getElementById("title").style.opacity = "10";
document.getElementById("bk").style.display = "none";
document.getElementById("artist").style.opacity = "10";
document.getElementById("abouta").style.display = "none";
document.getElementById("vs").style.display = "block";
document.getElementById("vs1").style.display = "none";
document.getElementById("anim1").style.display = "none";
document.getElementById("anim2").style.display = "none";
document.getElementById("anim3").style.display = "none";
document.getElementById("anim4").style.display = "none";
document.getElementById("anim5").style.display = "none";
document.getElementById("anim6").style.display = "none";
document.getElementById("anim7").style.display = "none";
document.getElementById("logo").style.display = "block";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("sr1").style.display = "none";
}

function showA() {
document.getElementById("abouta").style.display = "block";
document.getElementById("bk").style.display = "block";
document.getElementById("show").style.display = "none";
document.getElementById("nav1").style.borderTopLeftRadius = "7px";
document.getElementById("nav1").style.borderTopRightRadius = "7px";
document.getElementById("nav1").style.paddingTop = "0px";
}

function ok2() {
document.getElementById("abouta").style.display = "none";
document.getElementById("bk").style.display = "none";
document.getElementById("bk1").style.display = "none";
document.getElementById("volControl").style.display = "none";
document.getElementById("volControl1").style.display = "none";
document.getElementById("volControl2").style.display = "none";
}

function closeW() {
document.getElementById("sss").style.display = "none";
document.getElementById("sb1").style.display = "none";
document.getElementById("sb2").style.display = "none";
document.getElementById("searchL").style.display = "none";
document.getElementById("close").style.display = "none";
document.getElementById("sr1").style.display = "none";
}