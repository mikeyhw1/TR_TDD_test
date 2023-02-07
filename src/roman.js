// 1-1000
const numToRoman = (input) => {
    let result = ""
    const processRoman = (num) => {
        const romanData = {
            M: 1000,
            CM: 900, D: 500, CD: 400, C: 100,
            XC: 90, L: 50, XL: 40, X: 10,
            IX: 9, V: 5, IV: 4, I: 1,
        };
        for (const key in romanData) {
            if (num >= romanData[key] && num !== 0) {
                result += key
                return processRoman(num - romanData[key]);
            }
        }
        console.log(`input: ${input}, result: ${result}`)
        return result
    }
    return (input > 1000 || input <= 0) ? "ERROR" : processRoman(input)
}
module.exports = numToRoman;