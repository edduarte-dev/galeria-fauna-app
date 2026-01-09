// ==========================
// Lista de fotos da galeria
// ==========================
const photos = [
  { title: "Arara-azul", image: "assets/img/arara-azul.jpg" },
  { title: "Boto-cor-de-rosa", image: "assets/img/boto-cor-de-rosa.jpg" },
  { title: "Capivara", image: "assets/img/capivara.jpg" },
  { title: "Jabuti", image: "assets/img/jabuti.jpg" },
  { title: "Jacaré-do-pantanal", image: "assets/img/jacare-do-pantanal.jpg" },
  { title: "Lobo-guará", image: "assets/img/lobo-guara.jpg" },
  { title: "Mico-leão-dourado", image: "assets/img/mico-leao-dourado.jpg" },
  { title: "Onça-pintada", image: "assets/img/onca-pintada.jpg" },
  { title: "Piranha", image: "assets/img/piranha.jpg" },
  { title: "Preguiça", image: "assets/img/preguica.jpg" },
  { title: "Quero-quero", image: "assets/img/quero-quero.jpg" },
  { title: "Tucano", image: "assets/img/tucano.jpg" },
];

// ==========================
// Seleção de elementos DOM
// ==========================
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

// Modal
const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

// ==========================
// Renderização da galeria
// ==========================
function renderGallery(photoList) {
  gallery.innerHTML = "";

  photoList.forEach((photo) => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `
      <img src="${photo.image}" alt="${photo.title}">
      <p>${photo.title}</p>
    `;

    // Abrir ao clicar na foto
    card.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = photo.image;
      modalImage.alt = photo.title;
      modalTitle.textContent = photo.title;
    });

    gallery.appendChild(card);
  });
}

// ==========================
// Render inicial
// ==========================
renderGallery(photos);

// ==========================
// Busca em tempo real
// ==========================
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm)
  );

  if (filteredPhotos.length === 0) {
    gallery.innerHTML = "<p>Nenhuma foto encontrada</p>";
  } else {
    renderGallery(filteredPhotos);
  }
});

// ==========================
// Fechar modal
// ==========================
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
