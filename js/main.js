document.getElementById("generate-button").addEventListener("click",function(){
    const randomNumberField =  document.getElementById("random-num-field");
    const randomNumberFieldValue =  randomNumberField.value;
    var randomNumber = Math.round(Math.random()*10000 )+"";
    var randomNumberString = randomNumber.length ;
    if(randomNumberString <4){
        var randomNumber1 = Math.round(Math.random()*10000 )+"";
        if(randomNumber1==4){
            randomNumberField.value= randomNumber1;
        }


    }
    else{
        randomNumberField.value= randomNumber;
    }
   
})
document.getElementById("number-buttons").addEventListener("click",function(event){
    let numbers = event.target.innerText;
    let numbersValue = document.getElementById("random-num-field-2").value;
    if (isNaN(numbers)){

    }

    else{

        document.getElementById("random-num-field-2").value =numbersValue + numbers;
    }
     if(numbers == "C"){
        document.getElementById("random-num-field-2").value = " ";
    }
    else if(numbers == "<"){
        const digits = numbersValue.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        document.getElementById("random-num-field-2").value = remainingDigits;
    }
})

document.getElementById('verify-btn').addEventListener("click",function(){
    const randomNumberField =  document.getElementById("random-num-field");
    const randomNumberFieldValue =  randomNumberField.value;

    const  numbersValue = document.getElementById("random-num-field-2").value;

    const  message1 = document.getElementById("message-1"); 
    const  message2 = document.getElementById("message-2"); 
    
    if (randomNumberFieldValue == numbersValue){
        message2.style.display = "block";
        message1.style.display = "none"
        
    }
    else{
        message1.style.display = "block"
        message2.style.display = "none";
    }
})
