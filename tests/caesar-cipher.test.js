const caesarCipher = require("../js/caesar-cipher");

it("all caps", () => {
    expect(caesarCipher("ABC")).toBe("BCD");
});

it("no caps", () => {
    expect(caesarCipher("abc")).toBe("bcd");
});

it("mixed caps", () => {
    expect(caesarCipher("aBc")).toBe("bCd");
});

it("wrapped", () => {
    expect(caesarCipher("ZBz")).toBe("ACa");
});

it("punctuation", () => {
    expect(caesarCipher("ZBz!!!@#$")).toBe("ACa!!!@#$");
});