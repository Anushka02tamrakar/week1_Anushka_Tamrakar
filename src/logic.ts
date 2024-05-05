// returning string in JSON-----------
export function splitString(inputString: string): { revisedString: string } {
    const revisedString = inputString.replace('_', ' ');
    return { revisedString };
}

//concat parameters----------

export function concatenateParams(param1: string, param2: string): string {
    return param1 + param2;
}


//Secret Handshake problem
export function commands(input: number): string[] {
    const code = [
        "wink",
        "double blink",
        "close your eyes",
        "jump"
    ]

    let bin = input.toString(2).split("")
    bin.reverse()
    let secredHandshake = []
    for (let i = 0; i < 4; i++) {
        if (bin[i] == "1") secredHandshake.push(code[i])
    }
    return bin[4] == "1" ? secredHandshake.reverse() : secredHandshake
}