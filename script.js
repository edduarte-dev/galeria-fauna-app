// Lista de fotos da galeria
const photos = [
  {
    title: "Arara-azul",
    image: "assets/img/arara-azul.jpg",
  },
  {
    title: "Boto-cor-de-rosa",
    image: "assets/img/boto-cor-de-rosa.jpg",
  },
  {
    title: "Capivara",
    image: "assets/img/capivara.jpg",
  },
  {
    title: "Jabuti",
    image: "assets/img/jabuti.jpg",
  },
  {
    title: "Jacaré-do-pantanal",
    image: "assets/img/jacare-do-pantanal.jpg",
  },
  {
    title: "Lobo-guará",
    image: "assets/img/lobo-guara.jpg",
  },
  {
    title: "Mico-leão-dourado",
    image: "assets/img/mico-leao-dourado.jpg",
  },
  {
    title: "Onça-pintada",
    image: "assets/img/onca-pintada.jpg",
  },
  {
    title: "Piranha",
    image: "assets/img/piranha.jpg",
  },
  {
    title: "Preguiça",
    image: "assets/img/preguica.jpg",
  },
  {
    title: "Quero-quero",
    image: "assets/img/quero-quero.jpg",
  },
  {
    title: "Tucano",
    image: "assets/img/tucano.jpg",
  },
];

// Seleciona a galeria no DOM
const gallery = document.getElementById("gallery");

// Função para renderizar as fotos
function renderGallery(photoList) {
  gallery.innerHTML = "";

  photoList.forEach((photo) => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `
      <img src="${photo.image}" alt="${photo.title}">
      <p>${photo.title}</p>
    `;

    gallery.appendChild(card);
  });
}

// Renderiza todas as fotos ao carregar a página
renderGallery(photos);
