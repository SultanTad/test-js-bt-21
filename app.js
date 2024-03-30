const divRoot = document.querySelector(".wrapper");

divRoot.innerHTML += `
  <button class='start-btn'>Начать</button>
  <div class='popup-shadow'></div>
  <div class='popup-wrapper'>
  <img
  class="popup__close-btn"
  src="./assets/images/close-pop-up.svg"
  alt=""
  />
  <form>
  <h2>Заполните Форму!</h2>
  <input type="text" placeholder="Введите Имя" name='name'/>
  <input type="text" placeholder="Введите Фамилию" name='sername'/>
  <input type="text" placeholder="Введите номер телефона" name='phone_number'/>
  <input type="text" placeholder="Введите Ваш никнейм" name='nickname'/>
  <input type="email" placeholder="Введите Вашу почту" name='email'/>
  <button class='send'>отправить</button>
  </form>
  </div>
  `;
const popupShadow = document.querySelector(".popup-shadow");
const popupWrapper = document.querySelector(".popup-wrapper");
const popupCloseBtn = document.querySelector(".popup__close-btn");
const startBtn = document.querySelector(".start-btn");
const sendBtn = document.querySelector(".send");
const allInputs = document.querySelectorAll("input");
const dataFromInputs = {};

startBtn.addEventListener("click", () => {
  popupShadow.classList.add("active_shadow");
  popupWrapper.classList.add("active_window");
  document.body.style.overflow = "hidden";
});
popupCloseBtn.addEventListener("click", () => {
  popupShadow.classList.remove("active_shadow");
  popupWrapper.classList.remove("active_window");
  document.body.style.overflow = "inherit";
});
popupShadow.addEventListener("click", () => {
  popupShadow.classList.remove("active_shadow");
  popupWrapper.classList.remove("active_window");
  document.body.style.overflow = "inherit";
});

sendBtn.addEventListener("click", () => {
  allInputs.forEach((input) => {
    let key = input.name;
    dataFromInputs[key] = input.value;
  });
  divRoot.innerHTML += `<div>${dataFromInputs.name}</div>`;
});
