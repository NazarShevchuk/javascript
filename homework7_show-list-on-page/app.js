function showList() {
  let = itemAmount = +prompt("Введите колличество пунктов списка!");
  let arrPrompts = [];
  for (let i = 0; i < itemAmount; i++) {
    let itemText = prompt("Введите текст пункта списка!");
    arrPrompts.push(itemText);
  }
  let arrItems = arrPrompts.map(function (elemText) {
    return `<li>${elemText}</li>`;
  });
  let list = document.createElement("ul");
  let liContent = arrItems.join(" ");
  list.innerHTML = liContent;
  document.body.appendChild(list);

  let timer = setInterval(showSeconds, 1000);
  let second = 10;
  let timerValue = document.createElement("div");
  timerValue.innerHTML = second;
  document.body.appendChild(timerValue);

  function showSeconds() {
    timerValue.innerHTML--;
    if (timerValue.innerHTML == 0) {
      document.body.removeChild(list);
      document.body.removeChild(timerValue);
    }
  }
}
showList();
