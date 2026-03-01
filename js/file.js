let btn = document.getElementById("btn");
let userText = document.getElementById("user_text");
let conteinerItem = document.querySelector(".conteiner_item");
let textSize = document.getElementById("text_size");
let textWeight = document.getElementById("text_weight");
let textColor = document.getElementById("text_color");

console.log(textColor);

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (userText.value.trim() === "") {
    alert("Введите текст в поле для текста");
    return;
  } else if (textSize.value === "") {
    alert("Введите число в поле для размера");
    return;
  };

  conteinerItem.innerText = userText.value;
  conteinerItem.style.fontSize = `${textSize.value}px`;
  conteinerItem.style.fontWeight = `${textWeight.value}`;
  conteinerItem.style.color = `${textColor.value}`;
  
});
