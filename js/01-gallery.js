import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

// const galImg = galleryItems.map(img => `
// <div class="gallery__item">
// <a class="gallery__link" href="${img.original}">
// <img
//   class="gallery__image"
//   src="${img.preview}"
//   data-source="${img.original}"
//   alt="${img.description}"
// />
// </a>
// </div>
// `);

// console.log(galImg);

// galImg.forEach(el => console.log(el))

// const galleryStr = galImg.join('');
// // console.log(galleryStr);
// galleryRef.insertAdjacentHTML('beforeend', galleryStr );


const renderGallery = arr => {
    const galleryStr = arr.map(img => `
    <div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>
    `).join('');

    galleryRef.insertAdjacentHTML('beforeend', galleryStr );
}

renderGallery(galleryItems);

// const el = document.querySelector('.gallery__image');
// console.log(el)

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {

    event.preventDefault();
    if(event.target.nodeName !== 'IMG') return;
   

    const gallery = basicLightbox.create(`<img
    class="gallery__image"
    src="${event.target.dataset.source}"
  />`);

    gallery.show();
    console.log(gallery);

    // gallery.close(() => console.log('lightbox not visible anymore'))
    // gallery.onShow = (instance) => {
    //     document.addEventListener('keydown', onEscapeKeyPress)
    // };

    // gallery.onShow();

    // onclose: (instance) => document.removeEventListener('keydown', onEskapeKeyPress)

}
document.addEventListener('keydown', onEscapeKeyPress);

function onEscapeKeyPress(event) {
    if(event.code === 'Escape'){
         gallery.close()
        }
    
}