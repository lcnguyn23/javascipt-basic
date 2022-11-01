const closeButton = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");

closeButton.addEventListener("click", () => {
  popup.style.display = "block";
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
