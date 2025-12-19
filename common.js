// common.js - no HTML issues here
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    var data2=document.getElementById('fsPageWrapper').innerHTML;
    document.getElementById('fsPageWrapper').innerHTML = data + data2;
  });

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('fsFooter').innerHTML = data;
  });

  
