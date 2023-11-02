let scrollContainer = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 300;
});