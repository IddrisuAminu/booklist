const form = document.getElementById("form");
const datacontainer = document.getElementById("datacontainer");

function getData(e) {
  e.preventDefault();
  let div = document.createElement("div");
  let author = document.createElement("h4");
  let title = document.createElement("h1");
  let release = document.createElement("h6");

  title.textContent = form.title.value;
  author.textContent = form.author.value;
  release.textContent = form.release.value;

  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(release);
  datacontainer.appendChild(div);
}

form.addEventListener("submit", getData);
