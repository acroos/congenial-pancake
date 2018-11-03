const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const randomLetter = () => {
    const index = Math.floor(Math.random() * 26);
    return alphabet.charAt(index);
};

export const xPositionForLetter = (letter) => {
    const letterSpacing = 45.5;

    return alphabet.indexOf(letter) * letterSpacing;
};

export const maxHeight = (letters) => {
    if (letters.length == 0) {
        return 30;  // This is the height letters start at
    }
    return Math.max(...(letters.map((letter) => letter.height)));
}


export default { xPositionForLetter, randomLetter };