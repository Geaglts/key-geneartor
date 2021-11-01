import { capitalizeText } from "./capitalizeText.mjs";

export function copyText(title, body) {
	let clipboard = ``;
	if (title.length > 0) {
		clipboard = `${capitalizeText(title)}:
${body}`;
	} else {
		clipboard = `${body}`;
	}
	navigator.clipboard.writeText(clipboard);
}
