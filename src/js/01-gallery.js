import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createImageCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);


function createImageCardsMarkup(items) {
    return items
        .map(({ preview, original, description}) => {
            return `
              <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
                  `;
        })
        .join(``);  
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    });
console.log(galleryItems);
