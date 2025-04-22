function changeText() {
  const paragraph = document.getElementById("text-content");
  paragraph.textContent = "The text has been changed by JavaScript!";
}

function toggleStyle() {
  const title = document.getElementById("main-title");
  title.classList.toggle("highlight");
}

function toggleElement() {
  const container = document.getElementById("dynamic-container");
  const existing = document.getElementById("new-element");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newElement = document.createElement("div");
    newElement.id = "new-element";
    newElement.textContent = "I'm a new element added with JavaScript!";
    container.appendChild(newElement);
  }
}

