window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    })
  }
}

var clickableCards = document.querySelectorAll(".card")
var links = document.querySelectorAll(".link");
for (let i = 0; i < clickableCards.length; i++) {
  const clickableCard = clickableCards[i];
  const link = links[i];
  clickableCard.addEventListener("click", e => {
    link.click();
  })
}

document.querySelector(".card").addEventListener("click", function(){
  document.querySelector(".link").click();
})