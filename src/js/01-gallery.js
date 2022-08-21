// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const elForGallery = document.querySelector('div.gallery');
const imageGallery = createImageGallery(galleryItems);

elForGallery.insertAdjacentHTML("afterbegin", imageGallery);

useForGallerySimpleLightbox();

function createImageGallery(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>
        `
    }).join('');
}

function useForGallerySimpleLightbox(){
    new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
}
