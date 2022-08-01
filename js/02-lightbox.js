import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsMarkup = galleryItems.map(({original, preview, description}) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');
//console.log(galleryItemsMarkup[1]);

const galleryList = document.querySelector('.gallery');

galleryList.innerHTML = galleryItemsMarkup;
//galleryList.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
console.log(galleryList);

//galleryList.addEventListener('click', onGalleryElClick)

var lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: 'alt',
    captionDelay: 250,

});











