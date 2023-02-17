import { reverseString } from "../index.js";

describe("tests for reverseString function", () => {
    const str1 = 'Hello';
    const str2 = '1234567';

    it("should operate correctly", () => {
        expect(reverseString(str1)).toBe('olleH');
    }),
        it("should operate correctly", () => {
            expect(reverseString(str2)).toBe('7654321');
        }),
        it("should operate correctly with invalid", () => {
            expect(reverseString(123)).toBe('Не строка');
        });
});

describe("tests for reverseString function", () => {
    const str1 = 'Hello';
    const str2 = '1234567';

    it("should operate correctly and invalid", () => {
        expect(reverseString(str1)).toMatch(/olleH/);
        expect(reverseString(str2)).toMatch(/7654321/);
        expect(reverseString(123)).toBe('Не строка');
    });
});