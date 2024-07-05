let initialCards = [
  {
    name: "MiladaVigero",
    link: "https://images.unsplash.com/photo-1578652903016-b78571b87410",
  },
  {
    name: "GettyImages",
    link: "https://plus.unsplash.com/premium_photo-1661255415300-4e7bc1397e12",
  },
  {
    name: "KarolinaGrabowska",
    link: "https://plus.unsplash.com/premium_photo-1689596509629-bc6f6a455fa1",
  },
  {
    name: "PatriciaJadach",
    link: "https://images.unsplash.com/photo-1689249876759-10ff4bc9f189",
  },
  {
    name: "Josefin",
    link: "https://images.unsplash.com/photo-1546630392-db5b1f04874a",
  },
  {
    name: "Rayia Soserberg",
    link: "https://images.unsplash.com/photo-1577234192428-7d62bcc3dc7e",
  },
];

//  Elements
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileClosedButton = document.querySelector("#profile__closed-button");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileTitle = document.querySelector("#profile__title");
const profileDescription = document.querySelector("#profile__description");
const titleInput = document.querySelector("[name='title']");
const descriptionInput = document.querySelector("[name='description']");

const cardListEl = document.querySelector(".cards__list");
const profileEditform = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card__template").content.firstElementChild;

// function
function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  //set the path to the image to the link field of the object
  cardImageEl.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageEl.alt = cardData.name;

  //set the card title to the name field of the object, too
  cardTitleEl.textContent = cardData.name;

  //return the ready HTML element with the filled-in data
  return cardElement;
}

// even handler
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

// event listener

profileEditButton.addEventListener("click", () => {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileClosedButton.addEventListener("click", () => {
  closePopup();
});

profileEditform.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
