
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
function checkRequired(input){
    // recuperer la valeur saisie dans le champ username:
    const inputValue = input.value.trim();
    const inputDivParent = input.parentNode;
    const inputSmall = inputDivParent.querySelector("small");
    if(inputValue === ""){
        // Recuper la balise div (le parent de username)
        inputDivParent.classList.remove("success")
        inputDivParent.classList.add("error")
        inputSmall.textContent =  getInputName(input) + " is required!"
        // inputSmall.innerText = "Username is required!"
        // inutSmall.innerHTML = "Username is required!"
    }else{
        inputDivParent.classList.remove("error")
        inputDivParent.classList.add("success")
    }
}

function getInputName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// events:
const btn = document.querySelector("button");
btn.addEventListener("click",function(){
    checkRequired(username);
    checkRequired(email);
    checkRequired(password);
    checkRequired(password2);

    // a faire :
    // checkRequired([username,email,password,password2])
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
