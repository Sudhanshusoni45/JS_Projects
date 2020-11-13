//whenever we pass a range first value is inclusive
//second value is exclusive

/*for all regular function calls,this points to window
object,sayHello() is a regular function call,
user.sayHello() is not a regular function call.
import "bootstrap/dist/css/bootstrap.css";*/

const cards = document.querySelectorAll(".card");
//console.log(cards);

let isFlipped = false;
let firstCard;
let secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    //this.classList.remove("flip");
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    isFlipped = false;
    checkIt();
  }
}

function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
    console.log("checking");
  } else {
    fail();
  }
}
function success() {
  //console.log("success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
}
function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1000);
}
function reset() {
  firstCard;
  secondCard;
}

(function shuffle() {
  cards.forEach((card) => {
    //var index = Math.floor(Math.random() * 16);
    //console.log("index :", index);
    let random = Math.random();
    let multipleof16 = random * 16;
    let index = Math.floor(multipleof16);
    card.style.order = index;
    // console.log("    randomNo :", random);
    // console.log("    Multiple :", multipleof16);
    // console.log("index :", index);
    console.log("order :", card.style.order);
    console.log(card.style);
  });
})();
