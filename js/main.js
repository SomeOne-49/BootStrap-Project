const search = document.querySelector('.navbar .search-icon'),
  searchInput = document.querySelector('.navbar .search-box');
search.onclick = () => {
  searchInput.classList.toggle('show');
}

const filter = document.querySelectorAll(".our-work ul li"),
  imgs = document.querySelectorAll(".our-work .row > div");

filter.forEach((e) => {
  e.onclick = () => {
    filter.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
    imgs.forEach((img) => {
      img.classList.contains(e.textContent.toLowerCase())
        ? (img.style.display = "block")
        : (img.style.display = "none");
    });
  };
});

const feat = document.querySelector(".features .container");

// window.onscroll = function () {
//   if (this.scrollY >= 300)
//     feat.classList.add("animate__animated"),
//       (feat.style.display = `block !important`),
//       console.log(``);
//   // console.log(this.scrollY)
// };

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 3000, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
