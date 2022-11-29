// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName('like-glyph')
Array.from(hearts).forEach((el) => {
  el.addEventListener('click', (e) => {
    mimicServerCall()
    .then(() => {
      turnHeartRed(e.target)
    })
    .catch((el) => {
      displayError(el)
      console.log('fail')
    })
  })
})

function displayError(el){
  const model = document.querySelector('#modal')
  model.classList.remove('hidden')
  const h2 = document.querySelector('h2')
  h2.textContent = el
  setTimeout(() => {
    model.classList.add('hidden')
  }, 3000)
}

function turnHeartRed(e){
  if(e.textContent === FULL_HEART){
    e.classList = EMPTY_HEART
}else{
  e.textContent = FULL_HEART
  e.classList.add('activated-heart')
  }
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
