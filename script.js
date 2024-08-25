const popup = document.getElementById("popup-container");
const closeButton = document.getElementById("close-button");
const popupShowTime = 2000;

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

onload = () => {
  setTimeout(() => {
    popup.style.display = "flex";
  }, popupShowTime);
};

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  console.log(name, email);
});
