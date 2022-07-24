function checkfunction() {
    
    var checked = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < checked.length; i++) {
      if (checked[i].checked) {
        txt = txt + checked[i].value + ", ";
      }
    }
    alert("You will get notifications from " + txt);
  }