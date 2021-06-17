document.getElementById('frmSearch').onsubmit = function() { 
window.location = 'http://google.com' + document.getElementById('txtSearch').value; 
return false; 
}