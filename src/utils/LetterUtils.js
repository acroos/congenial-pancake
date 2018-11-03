const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const randomLetter = () => {
    const index = Math.floor(Math.random() * 26);
    return alphabet.charAt(index);
};

export const xPositionForLetter = (letter) => {
    const letterSpacing = 45.5;

    return alphabet.indexOf(letter) * letterSpacing;
};


export default { xPositionForLetter, randomLetter };