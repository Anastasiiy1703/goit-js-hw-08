
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr.map(({preview, original, description })=> `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
  `).join('');
    
}
container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
  let lightbox = new SimpleLightbox('.gallery__item a', {
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: `alt`
  });
   