const textElement = document.querySelector('.text');
const maskedTextElement = document.querySelector('.maskedText');
const maskElement = document.querySelector('.mask');

textElement.addEventListener('click', () => {
  textElement.appendChild(maskElement);
  maskedTextElement.textContent = 'Text2';
});
