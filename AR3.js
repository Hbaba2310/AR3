document.addEventListener("DOMContentLoaded", function () {
  fetchQuote();
});

function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      const quoteElement = document.getElementById("quote");
      quoteElement.textContent = `"${data.content}" - ${data.author}`;
    })
    .catch((error) => console.error("Error fetching quote:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const box = this.parentElement;
      const paragraph = box.querySelector("p");
      paragraph.classList.toggle("show");
      if (paragraph.classList.contains("show")) {
        this.textContent = "Read Less";
      } else {
        this.textContent = "Read More";
      }
    });
  });
});
