const refs = {
  option: document.querySelector(".option"),
  case: document.querySelector(".js-case"),
  casePrint: document.querySelector(".js-case-print"),
  cover: document.querySelector(".js-Cover"),
  steelCover: document.querySelector(".js-steelCover"),
  coverEngraving: document.querySelector(".js-coverEngraving"),
  totalPrice: document.querySelector(".buyPriceTotal"),
  form: document.querySelector(".form"),
  coverMarking: document.querySelector(".js-coverMarking"),
};

let totalValue = Number.parseInt(refs.totalPrice.value);

refs.option.addEventListener("click", onOptionClick);

console.log(refs.cover.dataset.price);

function onOptionClick(e) {
  switch (e.target) {
    case refs.case:
      refs.casePrint.disabled = !refs.case.checked;
      refs.casePrint.checked = false;
      refreshPrice(totalValue);
      break;

    case refs.cover:
      refs.coverEngraving.disabled = !refs.cover.checked;
      refs.coverEngraving.checked = false;
      refreshPrice(totalValue);
      break;

    case refs.steelCover:
      refs.coverMarking.disabled = !refs.steelCover.checked;
      refs.coverMarking.checked = false;
      refreshPrice(totalValue);
      break;
    case refs.coverEngraving:
      refreshPrice(totalValue);
      break;
    case refs.casePrint:
      refreshPrice(totalValue);
      break;

    default:
      break;
  }
}

function refreshPrice(price) {
  let total = price;
  refs.form.option.forEach((element) => {
    if (element.checked) {
      total = Number.parseInt(total) + Number.parseInt(element.dataset.price);
    }
  });
  refs.totalPrice.value = "";
  refs.totalPrice.value = total + " грн.";
}

function reset() {
  refs.form.reset();
  refs.coverMarking.disabled = true;
  refs.casePrint.disabled = true;
  refs.coverEngraving.disabled = true;
  totalValue = Number.parseInt(refs.totalPrice.value);
}
reset();

console.log(refs.totalPrice.value);
