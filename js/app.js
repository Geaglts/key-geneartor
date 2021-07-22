const genKeyBtn = document.getElementById("generate-key-btn");
const copyKeyBtn = document.getElementById("copy-key-btn");
const clearKeyBtn = document.getElementById("clear-key-btn");

function genKey(size) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "123456789";
  const symbols = "!@#$%^&*()+_=-<>/.;:~ñ[]?,{}";
  const concat = `${lowercase}${uppercase}${numbers}${symbols}`;
  let key = "";
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * concat.length);
    key += concat[randomNumber];
  }
  return key;
}

genKeyBtn.onclick = () => {
  const keySizeInput = document.getElementById("key-size");
  const generatedKeyText = document.getElementById("generated-key");

  const size = Number(keySizeInput.value) || 32;
  keySizeInput.value = size;

  const generatedKey = genKey(size);
  generatedKeyText.value = generatedKey;
};

copyKeyBtn.onclick = () => {
  const generatedKeyText = document.getElementById("generated-key");
  generatedKeyText.select();
  document.execCommand("copy");
};

clearKeyBtn.onclick = () => {
  const generatedKey = document.getElementById("generated-key");
  generatedKey.innerText = "";
};
