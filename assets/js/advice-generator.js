
const circleBtn = document.querySelector('.circle-btn');
circleBtn.addEventListener('click', render);


const quoteNumber = document.querySelector('.quote-number');
const quoteText = document.querySelector('.quote-text');
const aphorist = document.querySelector('.aphorist');

let randomAdviceNumber = 0;


function randomAdvice() {
  randomAdviceNumber = Math.floor(Math.random() * data.quotes.length);
  return randomAdviceNumber;
}

function render() {

  let number = randomAdvice();

  for (const advice of data.quotes) {
    if (advice.id === number) {
      quoteNumber.innerHTML = advice.id;
      quoteText.innerHTML = `"${advice.quote}"`;
      aphorist.innerHTML = advice.author;
    }
  }
}

async function init() {
  // fetch eğer belirtilmezse get isteği gönderir
  data = await fetch('https://dummyjson.com/quotes?limit=2000').then(response => response.json());
  render();
  randomAdvice();
}

init();
