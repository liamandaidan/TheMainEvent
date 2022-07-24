function checkfunction() {
    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var check3 = document.getElementById("check3");
    var check4 = document.getElementById("check4");
    var check5 = document.getElementById("check5");
    var check6 = document.getElementById("check6");
    var text = "You will get the following notifications: ";
    for(let i=1;i<6;i++){
        
        for (let i = 0; i < 6; i++) {
            if((check+[i]).checked==true){
            text += document.getElementById("check"+[i]).value; + "<br>";
            console.log("Marti");
          }
        }
      }
      document.getElementById("message").innerHTML = text;
    }
   
