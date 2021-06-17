document.getElementById('frmSearch').onsubmit = function() {
 window.location = 'http://' + document.getElementById('txtSearch').value; 
return false;
}

function anim() {
document.getElementById('te').style.background = "#F44336";
document.getElementById('te').style.animationPlayState = 'running';
}