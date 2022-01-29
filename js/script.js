// Start Menu Section
let menu = document.querySelector(".menu");
let menuBar = document.querySelector("#menu-bar");
let form = document.querySelector("form");

menuBar.onclick = () => {
  menu.classList.toggle("active");
  form.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
  form.classList.remove("active");
};
// End Menu Section

// Start Collection Section
let collectionFilter = document.querySelectorAll(".collection .filter");
let containerBox = document.querySelectorAll(".collection .container_box");

collectionFilter.forEach((filter) => {
  filter.onclick = () => {
    collectionFilter.forEach((fil) => fil.classList.remove("active"));
    filter.classList.add("active");

    let dataFilter = filter.getAttribute("data-filter");

    containerBox.forEach((box) => {
      box.classList.remove("active");
      box.classList.add("hide");

      if (box.getAttribute("data-iteam") == dataFilter || dataFilter == "all") {
        box.classList.remove("hide");
        box.classList.add("active");
      }
    });
  };
});
// End Collection Section

// Start Question Section
let contentBox = document.querySelectorAll(".faqs .box");
contentBox.forEach(box => {
  box.onclick = ()=>{
    contentBox.forEach(item =>{
      item.classList.remove('show');
    });
    box.classList.add('show')
  }
})
// End Question Section

// Start Swiper
let swiper = new Swiper(".feature_container ", {
  loop: true,
  spaceBetween: 20,
  grabcursor: true,
  centerSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
// End Swiper

AOS.init({
  duration: 600,
});
