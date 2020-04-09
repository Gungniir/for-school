export default {
    /**
     * Проверяет, не повторяются ли символы в строке
     * @param {{str: String}} params
     * @return {Boolean}
     */
    isIsogram(params) {
        let used = new Map();
        let chars = params.str.toLowerCase().split('');
        for (let char of chars) {
            if (used.get(char)) {
                return false;
            }
            used.set(char, true);
        }
        return true;
    },

    /**
     * Получается исходную песню из ремикса
     * @param {{song: String}} params
     * @return {String}
     */
    songDecoder(params) {
        return params.song.replace(/(WUB)+/g, ' ').trim();
    },

    /**
     * Подсчет суммы минимальных значений в каждой строке
     * @param {{matrix: String}} params
     * @return {Number}
     */
    sumMinValueInEachRow(params) {
        return JSON.parse(params.matrix).map(array => {
            let min = array[0];
            array.forEach(item => {
                if (item < min) {
                    min = item;
                }
            });
            return min;
        }).reduce((a, b) => a + b);
    }
}