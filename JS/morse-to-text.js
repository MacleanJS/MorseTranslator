const trans = (x, morse) => {
    //Where logic will happen
    if (/^[._\/\s-·]*$/.test(x)) {
        return morse[x];
    }
    throw new Error(
        `Character "${x}" is not allowed. Please only input characters including "-", ".", "_", separating letters by spaces and words by "/"`
    );
};

const transStringToText = (morseText, morse, outputArea) => {
    //Where tests/checks will be done, and where information will be parsed through.
    console.log("transString triggered", morseText);
    try {
        const outputText = morseText
            .split(" ")
            .map((x) => trans(x, morse))
            .join("");

        return outputText;
    } catch (error) {
        return error.message;
    }
};

export { trans, transStringToText };
