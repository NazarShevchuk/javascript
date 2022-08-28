const inputPriceWrapper = document.querySelector("#priceInputWrapper");
const priceInput = document.querySelector("#priceInput");

const validation = (value) => {
  const isNumber = !isNaN(value);
  const isPositiveNumber = value > 0;

  return isNumber && isPositiveNumber;
};

priceInput.addEventListener("blur", (event) => {
  const { value } = event.target;

  inputPriceWrapper.querySelector("span")?.remove();

  const isValid = validation(value);

  priceInput.classList.remove("input-focus");

  const span = document.createElement("span");
  span.classList.add("input-price");

  if (!isValid) {
    priceInput.classList.add("input-error");
  }

  span.textContent = isValid
    ? `Текущая цена: ${+value}`
    : "Please enter correct price";

  inputPriceWrapper.append(span);
});

priceInput.addEventListener("focus", () => {
  priceInput.classList.add("input-focus");
  priceInput.classList.remove("input-error");
});
