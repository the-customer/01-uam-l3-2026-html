
// const test = document.getElementById("form");;
const test = document.getElementsByClassName("form-controle");

const el = document.querySelector("#form")



const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

username.addEventListener("blur",function(){
    
    console.log("ok")
})
// username.value = "Moussa";
// username.style.color = "red"
// username.className = "toto"
// username.classList.add("tata")



// Les fonction du programme:
// function checkRequired(input){
//     // recuperer la valeur saisie dans le champ username:
//     const inputValue = input.value.trim();
//     const inputDivParent = input.parentNode;
//     const inputSmall = inputDivParent.querySelector("small");
//     if(inputValue === ""){
//         // Recuper la balise div (le parent de username)
//         inputDivParent.classList.remove("success")
//         inputDivParent.classList.add("error")
//         inputSmall.textContent =  getInputName(input) + " is required!"
//         // inputSmall.innerText = "Username is required!"
//         // inutSmall.innerHTML = "Username is required!"
//     }else{
//         inputDivParent.classList.remove("error")
//         inputDivParent.classList.add("success")
//     }
// }

tab = [12,12,3,5,56]

tab.forEach(i => {
    
});
function checkRequired(inputs){
    inputs.forEach(function(input){
        // recuperer la valeur saisie dans le champ username:
        
        if(input.value === ""){
            // Recuper la balise div (le parent de username)
            showErrorOrSuccess(input,"error","is required!");
            // inputSmall.innerText = "Username is required!"
            // inutSmall.innerHTML = "Username is required!"
        }else{
            showErrorOrSuccess(input);
        }
    });
}

function getInputName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input,min,max){
    inputLength = input.value.length
    if(inputLength < min){
        showErrorOrSuccess(input,'error', `must have at least ${min} characters!`);
    }else if(inputLength > max){
        showErrorOrSuccess(input,'error', ` must have less than ${max} characters!`)
    }else{
        showErrorOrSuccess(input);
    }
}

function showError(input,errorMsg){
    const inputValue = input.value.trim();
    const inputDivParent = input.parentNode;
    const inputSmall = inputDivParent.querySelector("small");

    inputDivParent.classList.remove("success")
    inputDivParent.classList.add("error")
    inputSmall.textContent =  getInputName(input) + ` ${errorMsg}`
}

function showSuccess(input){
    const inputDivParent = input.parentNode;
    inputDivParent.classList.remove("error")
    inputDivParent.classList.add("success")
}


function showErrorOrSuccess(input,type="success",errorMsg=""){
    const inputValue = input.value.trim();
    const inputDivParent = input.parentNode;
    const inputSmall = inputDivParent.querySelector("small");
    if(type.toLowerCase() === "error"){
        inputDivParent.classList.remove("success")
        inputDivParent.classList.add("error")
        inputSmall.textContent =  getInputName(input) + ` ${errorMsg}`
    }else{
        inputDivParent.classList.remove("error")
        inputDivParent.classList.add("success")
    }    
}

function checkPasswordMatch(input1,input2){
    if(input1.value === input2.value){
        showErrorOrSuccess(input1)
    }else{
        showErrorOrSuccess(input2,"error","s not match!")
    }
}


function checkEmail(input){
    // Source - https://stackoverflow.com/a/46181
// Posted by John Rutherford, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-02, License - CC BY-SA 4.0

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(input.value.toLowerCase().match(re)){
        showErrorOrSuccess(input);
    }else{
        showErrorOrSuccess(input,"error"," is not valid!");
    }

}

// events: 
const btn = document.querySelector("button");
btn.addEventListener("click",function(){
    // checkRequired(username);
    // checkRequired(email);
    // checkRequired(password);
    // checkRequired(password2);

    // a faire :
    checkRequired([username,email,password,password2]);

    checkLength(username,3,25);
    checkLength(password,6,25);

    checkPasswordMatch(password,password2);

    checkEmail(email);
});




// les fonctions

function sayHi(){
    console.log("Hi there!")
}

function sayHi2(){
    return "Hi there";
}

function sayHi3(name="Anonymous"){
    return "Hi " + name;
}

// appel de fonction, on met le nom de la fonction. et pour l'exccuter il faut mettre les parenthse
// sayHi()
// console.log(result)
console.log(sayHi3("Toto"))
console.log(sayHi3("Aly"))
console.log(sayHi3())
