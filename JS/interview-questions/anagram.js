// O(n)
// Are the two strings anagrams;
// a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. (wikipedia) 

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const lookup = {};
    [...str1].forEach((char) => {
        char = char.toLowerCase();
        lookup[char] ? lookup[char]++ : lookup[char] = 1;
    });

    [...str2].forEach((char) => {
        char = char.toLowerCase();
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char]++;
        }
    });

    return true;
}

module.exports = isAnagram;
