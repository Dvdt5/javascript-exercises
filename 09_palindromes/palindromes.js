const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = word.toLowerCase().split("").filter(elm=> alphanumerical.includes(elm)).join("");
    if (cleanedString.split("").reverse().join("") === cleanedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
