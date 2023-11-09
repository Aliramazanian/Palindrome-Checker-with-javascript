const textInput = document.querySelector(".inputs input")
const checkBtn = document.querySelector(".inputs button")
 infoText = document.querySelector(".info-text")
let filterInput;


checkBtn.addEventListener("click", () => {

// splitting user input character, reversing them, 
//and joining them in a single word

 let reverseInput = filterInput.split("").reverse().join("")
infoText.style.display = "block"

if (filterInput != reverseInput){
 return infoText.innerHTML = `No, <span>' ${textInput.value}' </span> is not a palindrome!`
}
return infoText.innerHTML = `Yes, <span>' ${textInput.value}' </span> is a palindrome!`
})


textInput.addEventListener("keyup", () => {

 // removing space & all spacial character from entered value

 filterInput = textInput.value.toLowerCase().replace(/[^A-z0-9]/ig, "")


 if (filterInput) {
 return checkBtn.classList.add("active")
 }
 infoText.style.display = "none"
 return checkBtn.classList.remove("active")
})