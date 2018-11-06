const anagram = require('./anagram');
const correctAnagrams = [["rail safety", "fairy tales"], ["Below", "Elbow"], ["Jim Morrison", "Mr MojoRisin"],["Stressed", "Desserts"]];
const incorrectAnagrams = [["Maximiliano","Ayala"], ["Javascript","is fun"], ["Jimi","Hendrix"], ["Kelsey", "Ayala"]];


describe('Anagram check', () => {
    test('should export a function', () =>{
        expect(typeof anagram).toEqual('function');
    });

    it('should return false when strings are not the same length', () => {
        expect(anagram('str12', 'str2')).toBe(false);
    });

    correctAnagrams.forEach((testset) => {
        const [str1, str2] = testset;
        it(`should return true for ${str1} & ${str2}`, () => {       
            expect(anagram(str1, str2)).toEqual(true);
        });
    });

    incorrectAnagrams.forEach((testset) => {
        const [str1, str2] = testset;
        it(`should returun false for non anagrams ${str1} & ${str2}`, () => {
            expect(anagram(str1, str2)).toEqual(false);
        });
    });
});
