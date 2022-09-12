import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
// находим div куда будем записывать галлерею
const gallaryEL = document.querySelector(".gallery");
console.log(gallaryEL);
// создаём переменную для функции которя перебирает и возвращает масив строк.
const markup = createMarkup(galleryItems);
// добавляем в разметку строку(с галереей)
// console.log(markup)
gallaryEL.insertAdjacentHTML("beforeend", markup);
//  вешаем слушателя событий на галерею и добавляем коллбэк функции.
gallaryEL.addEventListener("click", getImgsrc);
// создаём функцию для получения data-set(дата-атрибута)
function getImgsrc(event) {
  // остановка дефолтное поведение браузера(перезагрузка страницы.)
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
  const dataGallary = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${dataGallary}" alt="cartoons" width="800"/>
    </div>
`
  );

  instance.show();
}

// создём функцию c параметром items для перебора обьекта с фотографиями и значениями.
function createMarkup(items) {
  return items
    .map((item) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join("");
}
