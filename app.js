const submit = document.querySelector("button");
const form = document.getElementById("form");
const text = document.querySelector("p");
const input = document.querySelector("input")

form.addEventListener("submit",function(e){
    text.textContent = input.value;
    e.preventDefault();
    form.reset();
});



