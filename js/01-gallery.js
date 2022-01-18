import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);


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

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {

    event.preventDefault();
    if(event.target.nodeName !== 'IMG') return;
  

    const gallery = basicLightbox.create(`<img
    class="gallery__image"
    src="${event.target.dataset.source}"
  />`);

    gallery.show();

    function onEscapeKeyPress(event) {
        if(event.code === 'Escape'){
             gallery.close()
            }

            console.log('remove')
        
     }
    gallery.onShow = () =>  window.addEventListener('keydown', onEscapeKeyPress);
    gallery.onShow();

    if(!gallery.visible) {
        window.removeEventListener('keydown', onEscapeKeyPress)
    }

    
    

}

