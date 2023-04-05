const neige1 = document.querySelector("#neige");
const pont = document.querySelector("#pont");
const italie = document.querySelector("#italie");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
btn1.addEventListener("click", (e) => {
  neige1.style.display = "none";
});
btn3.addEventListener("click", (e) => {
  italie.style.visibility = "hidden";
});
btn2.addEventListener("click", (e) => {
  italie.style.visibility = "visible";
  neige1.style.display = "inline-block";
});
