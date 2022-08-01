import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join("");
//console.log(galleryItemsMarkup);

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
console.log(galleryList);

galleryList.addEventListener('click', onGalleryElClick)

function onGalleryElClick(evt) {
    evt.preventDefault();
    const IMG_NODE = evt.target.nodeName === "IMG";
    
    if (!IMG_NODE) {
        return;
    }
     evt.target.dataset.source;
    
  
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  
  //onShow: (instance) => {
  //
  // },
  //  onClose: (instance) => {
  //
  //}  
instance.show()   
}
