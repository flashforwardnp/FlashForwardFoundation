const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const expanded = this.getAttribute("aria-expanded") === "true";

  items.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
    item.nextElementSibling.classList.remove("active");
  });

  if (!expanded) {
    this.setAttribute("aria-expanded", "true");
    this.nextElementSibling.classList.add("active");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
