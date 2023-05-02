const showMore = document.querySelector(".showBtn");
const description = document.querySelector(".description");
const productList = document.querySelector(".g-4");
const modal = document.querySelector(".backdrop");
const buyBTN = document.querySelector(".btn");

productList.addEventListener("click", (e) => {
  console.log(e.target);

  const showMore = e.target;
  const description = e.target.closest(".p-4");
  if (showMore.textContent === "більше") {
    description.classList.add("showmore");
    showMore.textContent = "приховати";
  } else if (showMore.textContent === "приховати") {
    showMore.textContent = "більше";
    description.classList.remove("showmore");
  } else if (e.target === buyBTN) {
    modal.style.display = "block";
  }
});

buyBTN.addEventListener("click", onBuyBTN);

function onBuyBTN(e) {
  e.preventdefault();
  console.log("dataset");
}

// slider

const swiper = new Swiper(".mySwiper", {
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
