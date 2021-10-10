
const schemeSvg = document.querySelector(`.scheme-svg`);
const total = document.querySelector(`.price-total`);

const cost = 800;
let totalValue = 0;

schemeSvg.addEventListener(`click`, (e) => {
  const target = e.target;
  if (target.classList.contains(`booked`)) return
  target.classList.toggle(`active`);

  let totalSeats = schemeSvg.querySelectorAll(`.active`).length;

  totalValue = totalSeats * cost;
  total.textContent = totalValue;
});