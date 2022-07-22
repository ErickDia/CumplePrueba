const img_gift = document.querySelector(".gift_intro");
const body = document.querySelector(".body");

const funcionScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0 });
    console.log("hola");
  }
};

document.addEventListener("scroll", funcionScroll);

const cardEvent = () => {
  const modal1 = document.querySelector(".modal1");
  const modal2 = document.querySelector(".modal2");

  const modal_btn1 = document.querySelector(".modal_btn1");
  const modal_btn2 = document.querySelector(".modal_btn2");

  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");

  // cards
  card1.addEventListener("click", () => {
    modal1.classList.toggle("modal_show");
    body.classList.toggle("body");
  });
  card2.addEventListener("click", () => {
    modal2.classList.toggle("modal_show");
    body.classList.toggle("body");
  });
  // modals
  modal_btn1.addEventListener("click", () => {
    body.classList.toggle("body");
    modal1.classList.toggle("modal_show");
  });
  modal_btn2.addEventListener("click", () => {
    body.classList.toggle("body");
    modal2.classList.toggle("modal_show");
  });
};

setTimeout(() => {
  img_gift.addEventListener("click", () => {
    body.classList.remove("body");
    document.removeEventListener("scroll", funcionScroll);
    document.querySelector(".intro").classList.add("displayNone");

    cardEvent();
  });
}, 7900);
