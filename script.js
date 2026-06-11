
// const test = document.getElementById("form");;
const test = document.getElementsByClassName("form-controle");

const el = document.querySelector("#form")

console.log(el)

const username = document.querySelector("#username");

username.addEventListener("blur",function(){
    console.log("ok")
})
// username.value = "Moussa";
// username.style.color = "red"
// username.className = "toto"
// username.classList.add("tata")


// events:
const btn = document.querySelector("button");
btn.addEventListener("click",function(){
    alert("You have clicked")
})
console.dir(username)