const genKeyBtn = document.getElementById("generate-key-btn");
const copyKeyBtn = document.getElementById("copy-key-btn");
const clearKeyBtn = document.getElementById("clear-key-btn");

const generatedKeyInput = document.getElementById("generated-key");
let key = "";
generatedKeyInput.addEventListener("keyup", (e) => {
	generatedKeyInput.value = key;
});

function genKey(size) {
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "123456789";
	const symbols = "!@#$%^&*()+_=-<>.;:~ñ[]?,{}";
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
	const size = Number(keySizeInput.value) || 32;
	keySizeInput.value = size;
	const generatedKey = genKey(size);
	generatedKeyInput.value = generatedKey;
	key = generatedKey;
};

const showCopiedView = () => {
	const copiedView = document.getElementById("copied-container");
	copiedView.style.display = "flex";
	setTimeout(() => {
		copiedView.style.display = "none";
	}, 1000);
};

copyKeyBtn.onclick = () => {
	const generatedKeyText = document.getElementById("generated-key");
	generatedKeyText.select();
	document.execCommand("copy");
	showCopiedView();
};

clearKeyBtn.onclick = () => {
	const keySizeInput = document.getElementById("key-size");
	keySizeInput.value = "";
	generatedKeyInput.value = "";
	key = "";
};
