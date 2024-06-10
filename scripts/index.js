let initialCards = [
  {
    name: "MiladaVigero",
    link: "https://unsplash.com/photos/yellow-corn-in-close-up-photography-r7NhxSjz7e4",
  },
  {
    name: "GettyImages",
    link: "https://unsplash.com/photos/creative-layout-of-fresh-fruits-nuts-and-ice-cream-cone-flat-lay-summer-concept-Hjv_HtwB9-Y",
  },
  {
    name: "KarolinaGrabowska",
    link: "https://unsplash.com/photos/a-person-cutting-a-plate-with-a-knife-and-fork-1huxR1ls2GI",
  },
  {
    name: "PatriciaJadach",
    link: "https://unsplash.com/photos/a-bunch-of-raspberries-sitting-on-top-of-each-other-jZU3x1Rwlqw",
  },
  {
    name: "Josefin",
    link: "https://unsplash.com/photos/lemon-avocado-ginger-orange-fruit-bananas-and-calamdin-s0fuB1h3yPw",
  },
  {
    name: "Rayia Soserberg",
    link: "https://unsplash.com/photos/a-cutting-board-topped-with-sliced-oranges-next-to-a-knife-ev_GpmUPOwo",
  },
];

//  Elements
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileClosedButton = document.querySelector("#profile__closed-button");
const profileEditButton = document.querySelector("#profile-edit-button");

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
});

profileClosedButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});
