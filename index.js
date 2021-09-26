/** @format */
const token = "2022006455:AAGy0_kcAHVIyRXi3h8HzkJKh_9ckojKP68";
const chat_id = "-1001515739099";
const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=`;

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { name, telefon, text },
  } = e.currentTarget;

  const mes = `Имя: ${name.value}, >>>>>>>
  Телефон: ${telefon.value}, >>>>>>>>
  Дополнительная информация: ${text.value}`;

  fetch(`${url}${mes}`);

  name.value = "";
  telefon.value = "";
  text.value = "";
});
