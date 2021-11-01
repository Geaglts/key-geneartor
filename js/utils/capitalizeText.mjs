export function capitalizeText(text = "") {
	const words = text.trim().split(" ");
	const textCapitalized = words
		.map((word) => {
			const firstLetter = word.charAt(0).toUpperCase();
			return `${firstLetter}${word.substring(1, word.length)}`;
		})
		.join(" ");
	return textCapitalized;
}
