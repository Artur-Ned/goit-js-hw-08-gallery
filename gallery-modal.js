import gallery from './gallery-items.js';



const ulEllement = document.querySelector('.js-gallery');

const ulItems = makeGalleryMarcup(gallery);

const lightbox = document.querySelector('.lightbox');
const imgModal = document.querySelector('.lightbox__image');

ulEllement.insertAdjacentHTML('afterbegin', ulItems);

ulEllement.addEventListener('click', onOpenModal);


function makeGalleryMarcup(items) {
    return gallery.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    }) 
    .join('');
 
};
// console.log(ulEllement);

// function onUlEllementClick(evt) {
//   event.preventDefault();
//   if (!evt.target.classList.contains('gallery__image'))
//   { return  };
//   const imgSourse = evt.target.dataset.source;
//   // console.log(imgSourse);

// };

// const openModalBtn = document.querySelector('.js-gallery');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

// openModalBtn.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onClouseModal);

function onOpenModal(event) {
 event.preventDefault();
  
  // console.log(`works`);
 if (event.target.localName !== 'img') {
    return
  };

lightbox.classList.add('is-open');
imgModal.src = event.target.dataset.source;
imgModal.alt = event.target.alt;
};

function onClouseModal() {
 lightbox.classList.remove('is-open');
  // console.log(`not works`);
  imgModal.src = '';
  imgModal.alt = '';


};



