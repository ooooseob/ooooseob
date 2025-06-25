const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", () => {
  //1. classList.toggle
  // accordion.classList.toggle("jsaccordion");

  //2.
  if (accordion.classList.contains("jsaccordion")) {
    accordion.classList.remove("jsaccordion");
  } else {
    accordion.classList.add("jsaccordion");
  }
});
