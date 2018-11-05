const anagram = require('./anagram');
const correctAnagrams = [["rail safety", "fairy tales"], ["Below", "Elbow"], ["Jim Morrison", "Mr. Mojo Risin"],["Stressed", "Desserts"]];
const incorrectAnagrams = [["Maximiliano","Ayala"], ["Javascript","is fun"], ["Jimi","Hendrix"], ["Stevie", "Wonder"]];


describe('Anagram check', () => {
    test('should return a function', () =>{
        expect(typeof anagram === "function");
    });

    test('should return false when strings are not the same length', () => {
        expect(anagram('str12', 'str2')).toBe(false);
    });

    test('should return true for any anagram', () => {

        correctAnagrams.forEach((testset) => {
            const [str1, str2] = testset;
            expect(anagram(str1, str2)).toBe(true);
        });
    });

    test('should returun false for non anagrams', () => {
        incorrectAnagrams.forEach((testset) => {
            const [str1, str2] = testset;
            expect(anagram(str1, str2)).toBe(false);
        });
    });
});
