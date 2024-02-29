window.addEventListener('scroll', reveal);

function reveal() {
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let cardTop = card.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (cardTop < windowHeight) {
      card.classList.add('animated');
    } else {
      card.classList.remove('animated');
    }
  });
}

