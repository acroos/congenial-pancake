import Constants from "../constants";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const randomLetter = () => {
    const index = Math.floor(Math.random() * 26);
    return alphabet.charAt(index);
};

export const xPositionForLetter = (letter) => {
    return alphabet.indexOf(letter) * Constants.LetterSpacing;
};

export const maxHeight = (letters) => {
    if (letters.length == 0) {
        return Constants.InitialHeight;
    }
    return Math.max(...(letters.map((letter) => letter.height)));
}


export default { xPositionForLetter, randomLetter };