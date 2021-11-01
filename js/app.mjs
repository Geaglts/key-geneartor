import KeyGenerator from "./classes/KeyGenerator.mjs";

const genKeyBtn = document.getElementById("generate-key-btn");
const copyKeyBtn = document.getElementById("copy-key-btn");
const clearKeyBtn = document.getElementById("clear-key-btn");

const generatedKeyInput = document.getElementById("generated-key");
const keySizeInput = document.getElementById("key-size");

const keyGenerator = new KeyGenerator();

generatedKeyInput.addEventListener("keyup", (e) => {
	generatedKeyInput.value = keyGenerator.key;
});

// genera una llave y la agrega al input
genKeyBtn.onclick = () => {
	keyGenerator.size = keySizeInput.value;
	keySizeInput.value = keyGenerator.size;
	keyGenerator.generateKey();
	generatedKeyInput.value = keyGenerator.key;
};

// muestra la vista de "copiado"
const showCopiedView = () => {
	const copiedView = document.getElementById("copied-container");
	copiedView.style.display = "flex";
	setTimeout(() => {
		copiedView.style.display = "none";
	}, 1000);
};

// copia la llave generada en el portapapeles
copyKeyBtn.onclick = () => {
	generatedKeyInput.select();
	document.execCommand("copy");
	showCopiedView();
};

// limpia la llave generada
clearKeyBtn.onclick = () => {
	keyGenerator.key = "";
	generatedKeyInput.value = "";
	keySizeInput.value = "";
};
