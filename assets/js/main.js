window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-container");
  setTimeout(function () {
    loader.classList.add("hide");
  }, 2000);
});


window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-container");
  const mainContent = document.querySelector(".main-content");
  setTimeout(function () {
    loader.classList.add("hide");
    mainContent.style.display = "block";
    mainContent.style.opacity = 1;
  }, 2000);
});
