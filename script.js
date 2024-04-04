// Функція для шифрування тексту
function encryptText() {
  const inputText = document.getElementById("inputText").value;
  // Ваш код шифрування тут
  // Наприклад, застосуємо простий заміщення кожного символу на його код UTF-16
  let encryptedText = "";
  for (let i = 0; i < inputText.length; i++) {
    encryptedText += String.fromCharCode(inputText.charCodeAt(i) + 1);
  }
  document.getElementById("outputText").value = encryptedText;
}

// Функція для розшифрування тексту
function decryptText() {
  const inputText = document.getElementById("inputText").value;
  // Ваш код розшифрування тут
  // Наприклад, застосуємо простий заміщення кожного символу на його код UTF-16
  let decryptedText = "";
  for (let i = 0; i < inputText.length; i++) {
    decryptedText += String.fromCharCode(inputText.charCodeAt(i) - 1);
  }
  document.getElementById("outputText").value = decryptedText;
}
