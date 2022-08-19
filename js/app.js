function getPin(){
    const pin = generatePin();
    const pinStr = pin + '';
    if(pinStr.length === 4){
        return pin;
    }
    else{
       return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
   const pin = getPin();
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;

});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedFieldId = document.getElementById('typed-numbers');
    const previousTypedNumber = typedFieldId.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedFieldId.value = '';

        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedFieldId.value = remainingDigits;
        }
    }

    else{
       typedFieldId.value = previousTypedNumber + number;
    }   
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const pin = document.getElementById('display-pin');
    const currentPin = pin.value;
    const typedNumbers = document.getElementById('typed-numbers');
    const typedPin = typedNumbers.value;
    const matchedPinId = document.getElementById('matched');
    const unMatchedPinId = document.getElementById('unmatched');
    if(currentPin === typedPin){
        matchedPinId.style.display='block';
        unMatchedPinId.style.display='none';
    }
    else{
        unMatchedPinId.style.display='block';
        matchedPinId.style.display='none';
    }
});