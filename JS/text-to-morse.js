const trans = (x, text) => {
    //Where logic will happen
    if (/^[a-z0-9 !.,]$/.test(x)) {
        return text[x];
    }
    throw new Error(
        `Character is not allowed. Please only input characters from a-z, 1-9, and spaces`
    );
};

const transStringToMorse = (textText, text) => {
    //Where tests/checks will be done, and where information will be parsed through.
    console.log("transString triggered", textText);

    try {
        const outputText = textText
            .toLowerCase()
            .trim()
            .split("")
            .map((x) => trans(x, text))
            .join(" ");
        return outputText;
    } catch (error) {
        return error.message;
    }
};

export { trans, transStringToMorse };
