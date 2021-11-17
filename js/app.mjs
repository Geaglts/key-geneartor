import KeyGenerator from "./classes/KeyGenerator.mjs";
import { copyText } from "./utils/copyText.mjs";
import $ from "./utils/selector.mjs";

const genKeyBtn = $("#generate-key-btn");
const copyKeyBtn = $("#copy-key-btn");
const clearKeyBtn = $("#clear-key-btn");

const KeyTitleInput = $("#key-title");
const generatedKeyInput = $("#generated-key");
const keySizeInput = $("#key-size");

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
	const copiedView = $("#copied-container");
	copiedView.style.display = "flex";
	setTimeout(() => {
		copiedView.style.display = "none";
	}, 1000);
};

// copia la llave generada en el portapapeles
copyKeyBtn.onclick = () => {
	copyText(KeyTitleInput.value, keyGenerator.key);
	showCopiedView();
};

// limpia la llave generada
clearKeyBtn.onclick = () => {
	keyGenerator.key = "";
	KeyTitleInput.value = "";
	generatedKeyInput.value = "";
	keySizeInput.value = "";
};
