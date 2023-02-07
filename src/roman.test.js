const numToRoman = require('./roman')

test('test 0', () => {
    expect(numToRoman(0)).toBe("ERROR")
})

test('test -10', () => {
    expect(numToRoman(-10)).toBe("ERROR")
})

test('test 1001', () => {
    expect(numToRoman(1001)).toBe("ERROR")
})

test('test 1', () => {
    expect(numToRoman(1)).toBe("I")
})

test('test 5', () => {
    expect(numToRoman(5)).toBe("V")
})

test('test 7', () => {
    expect(numToRoman(7)).toBe("VII")
})

test('test 9', () => {
    expect(numToRoman(9)).toBe("IX")
})

test('test 11', () => {
    expect(numToRoman(11)).toBe("XI")
})

test('test 17', () => {
    expect(numToRoman(17)).toBe("XVII")
})

test('test 67', () => {
    expect(numToRoman(67)).toBe("LXVII")
})

test('test 97', () => {
    expect(numToRoman(97)).toBe("XCVII")
})

test('test 111', () => {
    expect(numToRoman(111)).toBe("CXI")
})

test('test 508', () => {
    expect(numToRoman(508)).toBe("DVIII")
})

test('test 788', () => {
    expect(numToRoman(788)).toBe("DCCLXXXVIII")
})

test('test 999', () => {
    expect(numToRoman(999)).toBe("CMXCIX")
})

test('test 1000', () => {
    expect(numToRoman(1000)).toBe("M")
})