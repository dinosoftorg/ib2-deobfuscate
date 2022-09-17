module.exports = {
    decompress: (string) => {
        var dict = {};
        var data = string.split("");
        var char = data[0];
        var oldPhrase = char;
        var out = [char];
        var code = 256; 
        var phrase;
        for (var i = 1; i < data.length; i++) {
            var currCode = data[i].charCodeAt(0);
            if (currCode < 256) {
                phrase = data[i];
            }
            else {
                phrase = dict[currCode] ? dict[currCode] : (oldPhrase + char);
            }
            out.push(phrase);
            char = phrase.charAt(0);
            dict[code] = oldPhrase + char;
            code++;
            oldPhrase = phrase;
        }
        return out.join("");
    },

    compress: (string) => {
        var dict = {};
        var data = string.split("");
        var out = [];
        var char;
        var phrase = data[0];
        var code = 256;
        for (var i = 1; i < data.length; i++) {
            char = data[i];
            if (dict[phrase + char] != null) {
                phrase += char;
            }
            else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + char] = code;
                code++;
                phrase = char;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        for (var i = 0; i < out.length; i++) {
            out[i] = String.fromCharCode(out[i]);
        }
        return out.join("");
    }
}