function move() {
var password = document.getElementById('p1').value;
var confirmata = document.getElementById('cp1').value
if(password==confirmata){
document.getElementById('te').style.animationPlayState='running';
document.getElementById('te').style.display='block';
}
else{
alert('Error 404'); 
}
}