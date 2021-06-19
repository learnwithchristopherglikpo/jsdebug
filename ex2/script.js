const submitButton=document.getElementById("subButton");
const inputElement=document.getElementById("textElement");

submitButton.addEventListener("click",function(){
    console.log('You entered '+inputElement.value+' has your input');
})