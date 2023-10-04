function moveIt(){
    w3.getHttpObject("https://api.adviceslip.com/advice", function(data){
        advice = data.slip.advice;
        id = data.slip.id;
        document.getElementById("idno").innerHTML = id;
        document.getElementById("advice").innerHTML = advice;
    })   
}