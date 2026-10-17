import { projects } from './app.js';

const container = document.querySelector("#list");
const empty = document.querySelector("#empty-message");
const filterRow = document.querySelector("#filter");

function buildCard(project) {
  const li = document.createElement("li");
  li.className = "card";
  
  li.textContent = project.title; 
  return li;
}

function render(list) {
  container.textContent = "";

  if (list.length === 0) {
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;
  list.forEach((project) => {
    container.append(buildCard(project));
  });
}

if (filterRow) {
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category;

    const selected = projects.filter(
      (project) => category === "all" || project.category === category
    );

    render(selected);
    markActiveButton(button);
  });
}

function markActiveButton(activeButton) {
  document.querySelectorAll("#filter button").forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

render(projects);

const form = document.querySelector(".form-katalog");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const namaInput = form.querySelector("#nama");
    const emailInput = form.querySelector("#email");
    const pesanInput = form.querySelector("#pesan");

    let isValid = true;

    if (!namaInput.value.trim()) {
      namaInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      namaInput.removeAttribute("aria-invalid");
    }

    if (!emailInput.value.trim()) {
      emailInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      emailInput.removeAttribute("aria-invalid");
    }

    if (!pesanInput.value.trim()) {
      pesanInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      pesanInput.removeAttribute("aria-invalid");
    }

    if (isValid) {
      alert("Form berhasil divalidasi dan siap dikirim!");
    }
  });
}