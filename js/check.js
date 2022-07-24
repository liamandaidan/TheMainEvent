function checkfunction() {
    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var check3 = document.getElementById("check3");
    var check4 = document.getElementById("check4");
    var check5 = document.getElementById("check5");
    var check6 = document.getElementById("check6");
    var message = document.getElementById("message");
    var checked1 = document.getElementById("check1").value;  
    var checked2 = document.getElementById("check2").value; 
    var checked3 = document.getElementById("check3").value;  
    var checked4 = document.getElementById("check4").value;  
    var checked5 = document.getElementById("check5").value;
    if (check1.checked == true&&check2.checked == false&&check3.checked == false&&check4.checked == false&&check5.checked == false&&check6.checked == false) {
        alert("You will now be recieving message from the following categary: "+checked1);
    } 
    else if(check1.checked == true&&check2.checked == true&&check3.checked == false&&check4.checked == false&&check5.checked == false&&check6.checked == false){
        var checked1 = document.getElementById("check1").value;  
        var checked2 = document.getElementById("check2").value;  
        alert("You will now be recieving message from the following categary: "+checked1+" , "+checked2 );
    } else if(check1.checked == true&&check2.checked == true&&check3.checked == true&&check4.checked == false&&check5.checked == false&&check6.checked == false){
        var checked1 = document.getElementById("check1").value;  
        var checked2 = document.getElementById("check2").value; 
        var checked3 = document.getElementById("check3").value;  
        var checked4 = document.getElementById("check4").value;  
        var checked5 = document.getElementById("check5").value;
        alert("YYou will now be recieving message from the following categary: "+checked1+" , "+checked2+" , "+checked3);
    } else if(check1.checked == true&&check2.checked == true&&check3.checked == true&&check4.checked == true&&check5.checked == false&&check6.checked == false){
        var checked1 = document.getElementById("check1").value;  
        var checked2 = document.getElementById("check2").value; 
        var checked3 = document.getElementById("check3").value;  
        var checked4 = document.getElementById("check4").value;  
        var checked5 = document.getElementById("check5").value;
        alert("You will now be recieving message from the following categary: "+checked1+" , "+checked2+" , "+checked3+" , "+checked4);
    } else if(check1.checked == true&&check2.checked == true&&check3.checked == true&&check4.checked == true&&check5.checked == true&&check6.checked == false){
        var checked1 = document.getElementById("check1").value;  
        var checked2 = document.getElementById("check2").value; 
        var checked3 = document.getElementById("check3").value;  
        var checked4 = document.getElementById("check4").value;  
        var checked5 = document.getElementById("check5").value; 
        alert("You will now be recieving message from the following categary:"+checked1+" , "+checked2+" , "+checked3+" , "+checked4+" , "+checked5);
    } else if(check1.checked == true&&check2.checked == true&&check3.checked == true&&check4.checked == true&&check5.checked == true&&check6.checked == true){
        var checked1 = document.getElementById("check1").value;  
        var checked2 = document.getElementById("check2").value; 
        var checked3 = document.getElementById("check3").value;  
        var checked4 = document.getElementById("check4").value;  
        var checked5 = document.getElementById("check5").value;

        alert("You will now be recieving message from the following categary:Other");
    }else if(check1.checked == false&&check2.checked == true&&check3.checked == false&&check4.checked == false&&check5.checked == false&&check6.checked == false){
        alert("You will now be recieving message from the following categary: "+checked2);
    }else if(check1.checked == false&&check2.checked == true&&check3.checked == true&&check4.checked == false&&check5.checked == false&&check6.checked == false){
        alert("You will now be recieving message from the following categary: "+checked2+","+checked3);
        }else if(check1.checked == false&&check2.checked == true&&check3.checked == true&&check4.checked == true&&check5.checked == false&&check6.checked == false){
            alert("You will now be recieving message from the following categary: "+checked2+","+checked3+","+checked4);
            }else if(check1.checked == false&&check2.checked == true&&check3.checked == true&&check4.checked == true&&check5.checked == true&&check6.checked == false){
                alert("You will now be recieving message from the following categary: "+checked2+","+checked3+","+checked4+","+checked5);
                }else if(check1.checked == false&&check2.checked == true&&check3.checked == true&&check4.checked == true&&check5.checked == true&&check6.checked == true){
                    alert("You will now be recieving message from the following categary: "+checked2+","+checked3+","+checked4+","+checked5);
                    }else if(check1.checked == false&&check2.checked == false&&check3.checked == true&&check4.checked == false&&check5.checked == false&&check6.checked == false){
                        alert("You will now be recieving message from the following categary: "+checked3);
                    }
    }