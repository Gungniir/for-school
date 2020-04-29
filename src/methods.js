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
    },

    /**
     * Задача 1
     * @param {{console: {getLine: function}}} params
     */
    task1_23042020(params) {
        let a = [0, 0, 0]
        let queue = [];
        let out = 0;

        let n = Number(params.console.getLine())
        for (let i = 0; i < n; i++) {
            let b = Number(params.console.getLine()) % 3;
            queue.push(b)

            if (queue.length > 4) {
                a[queue.shift()]++;
            }

            if (b === 0) {
                out += a[1] + a[2]
            } else {
                out += a[0]
            }
        }

        return out;
    },

    /**
     * Задача 2
     * @param {{console: {getLine: function}}} params
     */
    task2_23042020(params) {
        let a = [0, 0, 0, 0] //0 - ^, 1 - %2, 2 - %5, 3 - %10
        let queue = [];
        let out = 0;

        let n = Number(params.console.getLine())
        for (let i = 0; i < n; i++) {
            let b = Number(params.console.getLine());

            if (b % 10 === 0) {
                b = 3;
            } else if (b % 5 === 0) {
                b = 2
            } else if (b % 2 === 0) {
                b = 1
            } else {
                b = 0
            }

            queue.push(b)

            if (queue.length > 10) {
                a[queue.shift()]++;
            }

            switch (b) {
                case 0:
                    out += a[3]
                    break
                case 1:
                    out += a[2] + a[3]
                    break
                case 2:
                    out += a[1] + a[3]
                    break
                case 3:
                    out += a.reduce((a, b) => a + b)
                    break
            }
        }

        return out;
    },

    /**
     * Задача 3
     * @param {{console: {getLine: function}}} params
     */
    task3_23042020(params) {
        class Bone {
            constructor(str) {
                this.a = Number(str.split(' ')[0])
                this.b = Number(str.split(' ')[1])
            }

            reverse() {
                return new Bone(this.b, this.a)
            }
        }

        let n = Number(params.console.getLine());
        let max = 0
        let bone1 = new Bone(params.console.getLine())
        let map = [1, 1]

        for (let i = 0; i < n - 1; i++) {
            let bone2 = new Bone(params.console.getLine())
            let newMap = [1, 1]

            debugger
            if (bone1.a === bone2.a && bone1.b === bone2.a) {
                newMap[0] = Math.max(map[0] + 1, map[1] + 1)
            } else if (bone1.a === bone2.a) {
                newMap[0] = map[1] + 1
            } else if (bone1.b === bone2.a) {
                newMap[0] = map[0] + 1
            }

            if (bone1.a === bone2.b && bone1.b === bone2.b) {
                newMap[1] = Math.max(map[0] + 1, map[1] + 1)
            } else if (bone1.a === bone2.b) {
                newMap[1] = map[1] + 1
            } else if (bone1.b === bone2.b) {
                newMap[1] = map[0] + 1
            }

            max = Math.max(newMap[0], newMap[1], max)
            map = newMap
            bone1 = bone2
        }

        return max
    },


    /**
     * Морзе с зада
     * @param {{str: string}} params
     */
    pushkin(params) {
        const map = {
            '*': 'e',
            '-': 't',

            '**': 'i',
            '-*': 'a',
            '*-': 'n',
            '--': 'm',

            '***': 's',
            '-**': 'u',
            '*-*': 'r',
            '--*': 'w',
            '**-': 'd',
            '-*-': 'k',
            '*--': 'g',
            '---': 'o',

            '****': 'h',
            '-***': 'v',
            '*-**': 'f',
            // '--**': ''
            '**-*': 'l',
            // '-*-*': ''
            '*--*': 'p',
            '---*': 'j',
            '***-': 'b',
            '-**-': 'x',
            '*-*-': 'c',
            '--*-': 'y',
            '**--': 'z',
            '-*--': 'q'
        }

        return params.str.replace(/—/g, '--').replace(/_/g, '-').split('').reverse().join('').split(' ').reduceRight((a, b) => {
            return a + map[b];
        }, '')
    }
}