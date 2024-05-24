var inp1=document.getElementById('inp1')
var inp2=document.getElementById('inp2')
var p1='muneeb'
var p2='159'
function btnreturn(){
if(inp1.value==p1&&inp2.value==p2){
    // alert('success')
    document.getElementById('img').style.display='block';
    document.getElementById('loginbackground').innerHTML=' '
}
else{
    alert('error')
}
}

function act(){
    document.getElementById('btn').style.backgroundColor='yellow'.color='black'
}
function deact(){
    document.getElementById('btn').style.backgroundColor='orangered'
}


// OTP
var otp = Math.floor(100000 + Math.random()* 900000)
function otplink(){
    alert(otp)
    var inpotp= prompt('Enter given OTP')
    if(inpotp==otp){
        document.getElementById('img').style.display='block';
        document.getElementById('loginbackground').innerHTML=' '
    }
    else{
        alert('error')
    }
}

