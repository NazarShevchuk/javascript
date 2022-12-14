## Теоретический вопрос

1. Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)

   Це незалежний від платформи та мови програмний інтерфейс, який дозволяє програмам і скриптам отримувати доступ до вмісту.

## Задание

Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонних библиотек (типа Jquery).

#### Технические требования:

- Создать функцию, которая будет принимать на вход массив и опциональный второй аргумент parent - DOM-элемент, к которому будет прикреплен список (по дефолту должен быть document.body).
- Каждый из элементов массива вывести на страницу в виде пункта списка;
- Используйте шаблонные строки и метод `map` массива для формирования контента списка перед выведением его на страницу;

Примеры массивов, которые можно выводить на экран:

```javascript
["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
```

```javascript
["1", "2", "3", "sea", "user", 23];
```

- Можно взять любой другой массив.

#### Необязательные задания продвинутой сложности:

1. Добавьте обработку вложенных массивов. Если внутри массива одним из элементов будет еще один массив, выводить его как вложенный список.
   Пример такого массива:

   ```javascript
   ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];
   ```

   > Подсказка: используйте map для обхода массива и рекурсию, чтоб обработать вложенные массивы.

2. Очистить страницу через 3 секунды. Показывать таймер обратного отсчета (только секунды) перед очищением страницы.

#### Литература:

- [Поиск DOM элементов](https://learn.javascript.ru/searching-elements-dom)
- [Добавление и удаление узлов](https://learn.javascript.ru/modifying-document)
- [Шаблонные строки](http://learn.javascript.ru/es-string)
- [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [setTimeout, setInterval](https://learn.javascript.ru/settimeout-setinterval)
