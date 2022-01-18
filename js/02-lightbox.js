import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);




renderGallery(galleryItems);
galleryRef.addEventListener('click', onGalleryClick);


function renderGallery(arr) {
    const galleryStr = arr.map(img => `
    
  <a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      
      alt="${img.description}"
      title="${img.description}"
    />
  </a>

    `).join('');

    galleryRef.insertAdjacentHTML('beforeend', galleryStr );
}

function onGalleryClick(event) {
    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery__item');
    gallery.on('show.simplelightbox');
   
}
