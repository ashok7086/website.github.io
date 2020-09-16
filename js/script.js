var steps=document.getElementsByClassName('step');
var n1;
var n2;
var n3;
var lg;
//alert(steps.length);
fstop();
function fstop(){
    document.getElementById("n1").disabled=true;
    document.getElementById("n2").disabled=true;
    document.getElementById("n3").disabled=true;
    document.getElementById("out").disabled=true;
}
var i=1;
function myFunction(){
    steps[i].style.color="#abc";
    if(i!=1){
        precolor();
    }
    switch(i){
        case 3:
            steps[i+1].style.color="white";
            document.getElementById('n1').disabled=false;
            i=4;
            break;

        case 5:
            steps[i+1].style.color="white";
            steps[i-2].style.color="black";
            document.getElementById('n2').disabled=false;
            i=6;
            break;

        case 7:
            steps[i+1].style.color="white";
            steps[i-2].style.color="black";
            document.getElementById('n3').disabled=false;
            i=8;
            break;

        case 9:
            steps[i-2].style.color="black";
            var a=getValue();
            if(a){
            return (document.getElementById('next').disabled=true);}
            else{
         // alert(i);
            if(n1>=n2 && n1>=n3){
            lg=n1;
        //alert(lg);
             }
            else{
            i=10;}}
            break;
        case 10:
           
            document.getElementById('out').innerHTML=n1;
            break;

        case 11:
            steps[9].style.color="black";
            if(n2>=n1 && n2>=n3){
            lg=n2;}
            else{
            i=12;}
            break;
        case 12:
           
            document.getElementById('out').innerHTML=n2;

            break;

        case 13:
            steps[11].style.color="black";
            if(n3>=n1 && n3>=n2){
            lg=n3;}
            else{
            i=14;}
            break;
        case 14:
          
            document.getElementById('out').innerHTML=n3;
            break;

        case 15:
            steps[13].style.color="black";
            break;
        
        case 17:
            alert("");
    }
    i++;
  //  alert("i++ "+i)
}
                //*********** change text color as previous********
function precolor(){
    steps[i-1].style.color="black";
}
function getValue(){
    n1=(document.getElementById('n1').value);
    n2=(document.getElementById('n2').value);
    n3=(document.getElementById('n3').value);
    
    if(n1=="" || n2=="" || n3==""){
    return true;
    }
    else{
        n1= parseInt(document.getElementById('n1').value);
        n2=parseInt(document.getElementById('n2').value);
        n3=parseInt(document.getElementById('n3').value);
    return false;
}
}


/* ***************checks for valid input i.e. only number****************** */
document.getElementById('n1').addEventListener('keydown', function(ev){
    if (!(ev.keyCode>=48 && ev.keyCode<=57) && ev.keyCode!=109 && ev.keyCode!=189 && ev.keyCode!=8) {
        ev.preventDefault();
        alert("Must input integer number");
        document.getElementById('next').disabled=true;
    }
    else
    document.getElementById('next').disabled=false;
});
 document.getElementById('n2').addEventListener('keydown', function(ev){
    if (!(ev.keyCode>=48 && ev.keyCode<=57) && ev.keyCode!=109 && ev.keyCode!=189 && ev.keyCode!=8) {
        ev.preventDefault();
        alert("Must input integer number");
        document.getElementById('next').disabled=true;
    }
    else
    document.getElementById('next').disabled=false;
});
 document.getElementById('n3').addEventListener('keydown', function(ev){
    if (!(ev.keyCode>=48 && ev.keyCode<=57) && ev.keyCode!=109 && ev.keyCode!=189 && ev.keyCode!=8) {
        ev.preventDefault();
        alert("Must input integer number");

        document.getElementById('next').disabled=true;
    }
    else
    document.getElementById('next').disabled=false;
});

            //********sidebar code*********

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
