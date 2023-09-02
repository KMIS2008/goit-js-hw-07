import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox';

// console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

// console.log(listGallery)

const galleryImage = galleryItems.map(item => {

    const {preview, original, description} = item;

    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`

}).join("");

// console.log(galleryImage)

listGallery.innerHTML = galleryImage;

// console.log(listGallery)

function clickImages(event){

    if(event.target === event.currentTarget){
        return
    }
    const eventElement = event.target.closest('.gallery__item')

    // console.log(event.target);
    // console.log(eventElement);

//    console.log(basicLightbox)

const selectedImage = event.target.getAttribute('data-source')

const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${selectedImage}"\>
    </div>
`)

instance.show()

// console.log(instance)

listGallery.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        instance.close()
    }
})
}

listGallery.addEventListener('click', clickImages);


