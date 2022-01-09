
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = "More JavaScript content";

document.querySelector("body").appendChild(h3);

const div = document.createElement("div");
div.textContent = "This is content that I'm trying to place within the element h3"

document.querySelector("h3").appendChild(div);