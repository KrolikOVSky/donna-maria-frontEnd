export default class Translit {



    constructor(word) {
        this.word = word;
    }


    static translit(word) {
        // let word = this.word.toLowerCase();
        word = word.toLowerCase();
        let answer = '';
        let converter = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
            'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
            'э': 'e', 'ю': 'yu', 'я': 'ya'
        };

        for (let i = 0; i < word.length; ++i) {
            if (converter[word[i]] === undefined) {
                answer += "-";
            } else {
                answer += converter[word[i]];
            }
        }

        return answer;
    }
}