// common.js - no HTML issues here
fetch('_header.html')
  .then(response => response.text())
  .then(data => {
    var data2=document.getElementById('fsPageWrapper').innerHTML;
    document.getElementById('fsPageWrapper').innerHTML = data + data2;
  });

fetch('_footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('fsFooter').innerHTML = data;
  });

  
fetch('_head.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('headSection').innerHTML = data;
  });
