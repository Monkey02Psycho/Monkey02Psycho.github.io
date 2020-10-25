// TODO: make functions more generic and add options for other hiragana
// use this in python to get all hiragana when copying from wiki:
// filter(lambda x: not x.isspace(), "{}") where {} is the copied hiragana
let en_vowels = "aiueo";
let en_consonants ="_kgsztdnhbpmyrw"
let jp_vowels = "あいうえお";

//I should add these to a dictanary and the non vowel be the key
// not the same but indexes all the same
let jp_k = ['か', 'き', 'く', 'け', 'こ'];
let jp_g = ['が', 'ぎ', 'ぐ', 'げ', 'ご'];
let jp_s = ['さ', 'し', 'す', 'せ', 'そ'];
let jp_z = ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'];
let jp_t = ['た', 'ち', 'つ', 'て', 'と'];
let jp_d = ['だ', 'ぢ', 'づ', 'で', 'ど'];
let jp_n = ['な', 'に', 'ぬ', 'ね', 'の'];
let jp_h = ['は', 'ひ', 'ふ', 'へ', 'ほ'];
let jp_b = ['ば', 'び', 'ぶ', 'べ', 'ぼ'];
let jp_p = ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'];
let jp_m = ['ま', 'み', 'む', 'め', 'も'];
let jp_y = ['や','_', 'ゆ', '_','よ'];
let jp_r = ['ら', 'り', 'る', 'れ', 'ろ'];
let jp_w = ['わ', 'ゐ', '_', 'ゑ', 'を'];
let jp_all = [jp_vowels, jp_k, jp_g, jp_s, jp_z, jp_t, jp_d, jp_n, jp_h, jp_b, jp_p, jp_m, jp_y, jp_r, jp_w];
// jp_all.map(console.log);
function onload() {
    let vowels = { "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お" };
    console.log(vowels);
    let guess = document.getElementById("guess");
    let rand = en_vowels[Math.floor(Math.random() * en_vowels.length)];
    guess.textContent = vowels[rand];
}

function check() {
    let sound = document.getElementById("sound");
    let answer = jp_spelling_to_en(document.getElementById("guess").innerText);
    console.log(answer);
    console.log(sound.value);
    if (sound.value === answer) {
        // console.log(sound.value);
        document.getElementById("areequal").textContent = "Correct answer";
    }
    else {
        correct = jp_spelling_to_en(document.getElementById("guess").innerText)
        document.getElementById("areequal").textContent = "corrrect answer is: " + correct;
    }
}

function convert_en_to_jp() {
    console.log(document.getElementById("en_in").value);
    document.getElementById("japanese").textContent = en_to_jp(document.getElementById("en_in").value)
}

function random_char() {
    let guess = document.getElementById("guess");
    let random = jp_all[Math.floor(Math.random() * jp_all.length)][Math.floor(Math.random() * jp_k.length)];

    guess.textContent = random;
}

function jp_to_en(char) {
    for (var vowel = 0; vowel <= jp_vowels.length; vowel++) {
        if (jp_vowels[vowel] === char[0]) {
            return en_vowels[vowel]
        }
    }
    // it does not exist so we will give it the character;
    return null;
}

function get_correct(jp) {
    // returns the correct en char for the given jp one
    for (var i = 0; i < jp_all.length; i++) {
        if (jp_vowels[i] === jp) {
            return en_vowels[i]
        }
    }
}

function jp_spelling_to_en(jp) {
    for (let i = 0; i < jp_all.length; i++) {
        const subArray = jp_all[i];
        for (let char = 0; char < subArray.length; char++) {
            const letter = subArray[char];
            //console.log(letter);
            if (letter === jp){
                if (en_consonants[i] == "_"){ return en_vowels[char]}
                return en_consonants[i] + en_vowels[char];
            }
        }
    }
    return null
}

function en_to_jp(en) {
    for (let i = 0; i < en_vowels.length; i++) {
        const vowel = en_vowels[i];
        for (let j = 0; j < en_consonants.length; j++) {
            const consonant = en_consonants[j];
            if (vowel === en[1] && consonant === en[0]){

                return jp_all[j][i]
            }
        }
    }
}

