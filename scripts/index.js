const initialCards = [
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
const addCardModal = document.querySelector("#add-card-modal");
const profileModalClosedButton = profileEditModal.querySelector(
  "#profile__closed-button"
);
const addCardModalClosedButton = addCardModal.querySelector(
  "#profile__closed-button"
);

const modalPreview = document.querySelector("#card-preview-modal");
const modalCardPreview = modalPreview.querySelector(".modal__card-preview");
const modalPreviewTitle = modalPreview.querySelector(".modal__title");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileTitle = document.querySelector("#profile__title");
const profileDescription = document.querySelector("#profile__description");

const addNewCardButton = document.querySelector(".profile__add-button");
const addCardFormElement = addCardModal.querySelector(".modal__form");

const cardListEl = document.querySelector(".cards__list");

const profileEditform = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card__template").content.firstElementChild;

const modalCardPreviewCloseButton = modalPreview.querySelector(
  "#profile__closed-button"
);
const cardTitleInput = document.querySelector("[name='titleUrl']");
const cardUrlInput = document.querySelector("[name='url']");
/*                                                                            */
/*                                  form data                                 */
/*                                                                            */

const titleInput = document.querySelector("[name='title']");
const descriptionInput = document.querySelector("[name='description']");

/*                                                                            */
/*                                  Function                                  */
/*                                                                            */
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  //set the path to the image to the link field of the object
  cardImageEl.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageEl.alt = cardData.name;

  //set the card title to the name field of the object, too
  cardTitleEl.textContent = cardData.name;

  //return the ready HTML element with the filled-in data

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button-active");
  });
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    modalCardPreview.src = cardData.link;
    modalPreviewTitle.textContent = cardData.name;
    openModal(modalPreview);
  });

  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

/*                                                                            */
/*                                Even Handler                                */
/*                                                                            */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = titleInput.value.trim();
  profileDescription.textContent = descriptionInput.value.trim();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closeModal(addCardModal);
  addCardFormElement.reset();
}

/*                                                                            */
/*                               event listener                               */
/*                                                                            */

function openModal(modal) {
  modal.classList.add("modal_opened");
}

/*                                                                            */
/*                         Find  and close all buttons                        */
/*                                                                            */
const closeButtons = document.querySelectorAll(".modal__close");

closeButtons.forEach((button) => {
  // Find the closest popup only once
  const popup = button.closest(".modal");
  // Set the listener
  button.addEventListener("click", () => closeModal(popup));
});

profileEditform.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
profileEditButton.addEventListener("click", () => {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
// add new card button
addNewCardButton.addEventListener("click", () => openModal(addCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

modalCardPreviewCloseButton.addEventListener("click", handlePreviewSubmit);
