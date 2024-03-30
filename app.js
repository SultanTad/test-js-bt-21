const divRoot = document.querySelectorAll(".wrapper");

divRoot.forEach((item) => {
  
  item.innerHTML += "<button class='start-btn'>Начать</button>";
  item.innerHTML += `
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
  const popupShadow = document.querySelectorAll(".popup-shadow");
  const popupWrapper = document.querySelectorAll(".popup-wrapper");
  const popupCloseBtn = document.querySelectorAll(".popup__close-btn");
  const startBtn = document.querySelectorAll(".start-btn");
  const sendBtn = document.querySelectorAll(".send");
  const allInputs = document.querySelectorAll("input");
  const dataFromInputs = {};

  startBtn.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.innerHTML);
      popupShadow.forEach((shadow) => shadow.classList.add("active_shadow"));
      popupWrapper.forEach((wrapper) => wrapper.classList.add("active_window"));
      document.body.style.overflow = "hidden";
    });
  });
  popupCloseBtn.forEach((item) => {
    item.addEventListener("click", () => {
      popupShadow.forEach((shadow) => shadow.classList.remove("active_shadow"));
      popupWrapper.forEach((wrapper) =>
        wrapper.classList.remove("active_window")
      );
      document.body.style.overflow = "inherit";
    });
  });
  popupShadow.forEach((shadow) => {
    shadow.addEventListener("click", () => {
      shadow.classList.remove("active_shadow");
      popupWrapper.forEach((wrapper) =>
        wrapper.classList.remove("active_window")
      );
      document.body.style.overflow = "inherit";
    });
  });

  sendBtn.forEach((item) => {
    item.addEventListener("click", () => {
      allInputs.forEach((input) => {
        let key = input.name;
        dataFromInputs[key] = input.value;
      });
    });
});


});
