export const paramError = new Error(
    `Character is not allowed. Please only input characters from a-z, 1-9, and spaces`
);
import { trans, transStringToMorse } from "./text-to-morse";
import { text, morse } from "./dic-objects.js";
import { transStringToText } from "./morse-to-text.js";

describe("Test cases for text-to-morse", () => {
    it("Returns correct morse code for valid strings", () => {
        expect(transStringToMorse("Hello World", text)).toBe(
            ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
        );
        expect(transStringToMorse("meow meow MEOW", text)).toBe(
            "-- . --- .-- / -- . --- .-- / -- . --- .--"
        );
        expect(transStringToMorse("1234567890", text)).toBe(
            ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----"
        );
        expect(
            transStringToMorse(
                "1234567890 abcdefghijklmnopqrstuvwxyz .,!",
                text
            )
        ).toBe(
            ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- / .- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. / ·-·-·- --··-- -·-·--"
        );
    });
    it("Returns error when non-allowed characters are entered", () => {
        expect(transStringToMorse("&&", text)).toBe(
            "Character is not allowed. Please only input characters from a-z, 1-9, and spaces"
        );
        expect(transStringToMorse("abc[]", text)).toBe(
            "Character is not allowed. Please only input characters from a-z, 1-9, and spaces"
        );
        expect(transStringToMorse(")(*&(*&*(&(*))&()(*(*&*()*&*)(", text)).toBe(
            "Character is not allowed. Please only input characters from a-z, 1-9, and spaces"
        );
    });
});

describe("Test cases for morse-to-text", () => {
    it("Returns correct morse code for valid strings", () => {
        expect(
            transStringToText(
                ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
                morse
            )
        ).toBe("hello world");
        expect(
            transStringToText(
                "-- . --- .-- .-- .-- .-- .-- / ---.. ---.. ---..",
                morse
            )
        ).toBe("meowwwww 888");
        expect(
            transStringToText(
                ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. / .---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- / -·-·-- ·-·-·- --··--",
                morse
            )
        ).toBe("abcdefghijklmnopqrstuvwxyz 1234567890 !.,");
    });

    it("Returns error when non-morse characters are entered", () => {
        expect(transStringToText("aa", morse)).toBe(
            `Character is not allowed. Please only input characters including "-", ".", "_", separating letters by spaces and words by "/"`
        );
        expect(transStringToText("a./-", morse)).toBe(
            `Character is not allowed. Please only input characters including "-", ".", "_", separating letters by spaces and words by "/"`
        );
        expect(transStringToText(")(*()*^^", morse)).toBe(
            `Character is not allowed. Please only input characters including "-", ".", "_", separating letters by spaces and words by "/"`
        );
    });
});
