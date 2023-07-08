const heroBtn = document.getElementsByClassName("hero-btn");
heroBtn[0].addEventListener("click", () => {
  const element = document.getElementById("what-we-do");
  console.log("h");
  element.scrollIntoView({ behavior: "smooth" });
});
