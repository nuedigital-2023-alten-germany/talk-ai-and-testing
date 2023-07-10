function containsSubstring_V1(mainString: string, substring: string): boolean {
    return mainString.includes(substring);
}

// Hier haben wir eine isCaseSensitive Funktionalität eingebaut um die Methode etwas komplexer zu machen
function containsSubstring(mainString: string, subString: string, isCaseInsensitive: boolean = false): boolean {
    if (isCaseInsensitive === true) {
        subString = subString.toLocaleLowerCase();
        mainString = mainString.toLocaleLowerCase();
    }
    return mainString.includes(subString);
}

// Hier wollten wir rausfinden was passiert wenn wir isCaseSensitive zu einem optionalen Parameter machen und das nicht anständig abfangen
function containsSubstring_mitUndefined(mainString: string, subString: string, isCaseSensitive?: boolean): boolean {
    if (isCaseSensitive === false) { // hier haben wir tatsächlich einen fiesen Bug, wenn wir den optionalen Paramter NICHT übergeben, weil er dann eben undefined ist und NICHT false -> typischer Fehler eine Juniors
                                    // -> prüft codium das ???
        subString = subString.toLocaleLowerCase();
        mainString = mainString.toLocaleLowerCase();
    }
    return mainString.includes(subString);
}
