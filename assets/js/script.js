// global variables
let questionDrop = document.querySelectorAll(".questions ul li");
let btnUp = document.querySelector("a.up");
let navlis = document.querySelectorAll(".header .navbar-nav li");

// active links navbar
navlis.forEach((li) => {
  li.addEventListener("click", () => {
    console.log(li);
    navlis.forEach((el) => {
      el.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// display p on click on button
questionDrop.forEach((li) => {
  questionDrop.forEach((li) => {
    li.classList.remove("active");
  });
  li.addEventListener("click", () => {
    li.classList.toggle("active");
    let p = li.lastElementChild;
    if (p.style.height) {
      p.style.height = null;
    } else {
      p.style.height = p.scrollHeight + "px";
    }
  });
});

// button up on scroll
document.onscroll = function () {
  if (scrollY >= 300) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};
btnUp.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});
