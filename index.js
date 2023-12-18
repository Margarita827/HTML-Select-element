function showColourHeart(event) {
  if (event.target.value == "blue") {
    alert("💙");
  }
  if (event.target.value == "red") {
    alert("❤");
  }
  if (event.target.value == "yellow") {
    alert("💛");
  }
}

let colourSelect = document.querySelector("#colours");
colourSelect.addEventListener("change", showColourHeart);
