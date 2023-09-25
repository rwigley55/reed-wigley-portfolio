// JavaScript to control modal visibility
const openModalButton = document.getElementById("openModalBtn");
const closeModalButton = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

openModalButton.addEventListener("click", () => {
  modalOverlay.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Close the modal when clicking outside of it
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
