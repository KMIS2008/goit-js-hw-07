import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const listGallery = document.querySelector(".gallery");

// console.log(listGallery)

const galleryImage = galleryItems.map(item => {

    const {preview, original, description} = item;

    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" 
        src="${preview}"
        
        alt="${description}"
      />
    </a>
  </li>`

}).join("");

// console.log(galleryImage)

listGallery.innerHTML = galleryImage;

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
	captionDelay: 250,
    
})

