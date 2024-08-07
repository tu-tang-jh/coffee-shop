window.addEventListener("resize", () => {
  const x = document.getElementById("hambuger-menu-links");

  if (!x) return;

  if (window.innerWidth > 600) {
    x.style.display = "none";
  }
});

const handleClickHambugerButton = () => {
  const x = document.getElementById("hambuger-menu-links");

  if (!x) return;

  if (x.style.display === "flex") {
    x.style.display = "none";
    return;
  }
  x.style.display = "flex";
};
