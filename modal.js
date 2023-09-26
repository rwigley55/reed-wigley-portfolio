// Modal 1
const openModal1 = document.getElementById("openModal1");
const closeModalButton1 = document.getElementById("closeModalBtn1");
const modalOverlay1 = document.getElementById("modalOverlay1");

openModal1.addEventListener("click", () => {
  modalOverlay1.style.display = "flex";
});

closeModalButton1.addEventListener("click", () => {
  modalOverlay1.style.display = "none";
});

modalOverlay1.addEventListener("click", (event) => {
  if (event.target === modalOverlay1) {
    modalOverlay1.style.display = "none";
  }
});

// Modal 2
const openModal2 = document.getElementById("openModal2");
const closeModalButton2 = document.getElementById("closeModalBtn2");
const modalOverlay2 = document.getElementById("modalOverlay2");

openModal2.addEventListener("click", () => {
  modalOverlay2.style.display = "flex";
});

closeModalButton2.addEventListener("click", () => {
  modalOverlay2.style.display = "none";
});

modalOverlay2.addEventListener("click", (event) => {
  if (event.target === modalOverlay2) {
    modalOverlay2.style.display = "none";
  }
});

// Modal 3
const openModal3 = document.getElementById("openModal3");
const closeModalButton3 = document.getElementById("closeModalBtn3");
const modalOverlay3 = document.getElementById("modalOverlay3");

openModal3.addEventListener("click", () => {
  modalOverlay3.style.display = "flex";
});

closeModalButton3.addEventListener("click", () => {
  modalOverlay3.style.display = "none";
});

modalOverlay3.addEventListener("click", (event) => {
  if (event.target === modalOverlay3) {
    modalOverlay3.style.display = "none";
  }
});
