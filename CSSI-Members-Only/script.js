const password = 'what'
const digits = '732'

/* Find classes or IDs */
let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");

let page = document.querySelector(".container");
let body = document.querySelector("#main-body");

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

/* Your Code Here */
let keys = []
let passwordEntered = false

window.addEventListener("keypress", (e) =>{
  keys.push(e.key)

  let attempt = keys.slice(-password.length)
  console.log(attempt)

  if (!passwordEntered && attempt.join('') === password){
    console.log("WOOHOO")
    clue1.classList.add('hidden')
    button.classList.remove('hidden')
    passwordEntered = true
  }

  const digitAttempt = keys.slice(-digits.length)
  if (passwordEntered && digitAttempt.join('') === digits){
    console.log('YOU ARE IN')
    page.classList.remove("has-background-black")
    body.innerHTML = '<figure class="image center"><img id="main" src="https://zacharytotah.com/wp-content/uploads/2017/09/DiCaprio-Welcome-to-the-Club-Meme.jpg" alt="Welcome to the Club"></figure>'
  }
})