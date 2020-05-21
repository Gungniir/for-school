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
    },

    /**
     * Следующий палиндром
     * @param {{n: string}} params
     */
    pal0505(params) {
        let n = ++params.n;

        if (isPal(n)) return n;

        return constructPal(n);


        function isPal(a) {
            let flag = false

            String(a).split('').forEach((item, id, array) => {
                if (flag) return;
                if (item !== array[array.length - 1 - id]) flag = true;
                if (id === (array.length - 1) / 2) flag = false;
            })

            return !flag
        }

        function constructPal(a) {
            a = String(a);
            let pal = '';
            let len = a.length;

            for (let i = 0; i < Math.floor(len / 2); i++) {
                pal += a[i];
            }

            if (len % 2) {
                pal = Number(pal + a[Math.ceil(len / 2) - 1] + pal.split('').reverse().join(''));
            } else {
                pal = Number(pal + pal.split('').reverse().join(''));
            }

            if (pal > a) {
                return pal;
            }

            if (len % 2) {
                return pal + Math.pow(10, Math.floor(len / 2))
            } else {
                return pal + 11 * Math.pow(10, Math.floor((len - 2) / 2))
            }

        }
    },

    /**
     * Медиана в массиве
     * @param {{console: {getLine: function}}} params
     */
    median(params) {
        let n = +params.console.getLine();
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(+params.console.getLine());
        }
        arr.sort((a, b) => a - b);

        return arr[Math.ceil(arr.length / 2) - 1]
    },

    /**
     * 3 задача
     * @param {{console: {getLine: function}}} params
     */
    task3_05052020(params) {
        let n = +params.console.getLine();
        let ar = Array(100).fill(0);
        let max = 0;

        for (let i = 0; i < n; i++) {
            let t = +params.console.getLine();
            let id = t % 100;
            ar[id] = Math.max(t, ar[id])

            if (id < 12 && ar[12 - id] !== 0 && ar[12 - id] > ar[id]) {
                max = Math.max(ar[id] + ar[12 - id], max)
            } else if (id > 12 && ar[99 - id + 13] !== 0 && ar[99 - id + 13] > ar[id]) {
                max = Math.max(ar[id] + ar[99 - id + 13], max)
            }
        }

        return max;
    },

    /**
     * Расшифратор
     * @param {{n: string}} params
     */
    task1_15052020(params) {
        let map = {
            '00000': 'y',
            '00001': 'g',
            '00010': 'u',
            '00011': 'm',
            '001': 't',
            '01000': 'c',
            '01001': 'f',
            '0101': 'h',
            '0110': 's',
            '011100': 'b',
            '011101': 'w',
            '01111': 'l',
            '100': 'e',
            '1010': 'i',
            '1011': 'r',
            '1100': 'n',
            '110100000': 'j',
            '110100001': 'x',
            '1101000100': 'z',
            '1101000101': 'q',
            '110100011': 'k',
            '1101001': 'v',
            '110101': 'p',
            '11011': 'd',
            '1110': 'o',
            '1111': 'a'
        }

        return params.n.replace(/ /g, '').split('').reduce((a, b) => {
            return (map[a.replace(/[a-z]/g, '') + b]) ? a.replace(/[0-1]/g, '') + map[a.replace(/[a-z]/g, '') + b] : a + b;
        }, '').toUpperCase();
    },

    /**
     * @param {{f: FileList}} params
     */
    async task1_21052020(params) {
        if (!params.f) {
            return 'Error: you must select a file'
        }

        let out = ''

        // Получение файла (асинхронно, но синхронно)
        let str = await params.f[0].text()

        // Пункт 1
        {
            let length = 0
            let substrings = []
            let lastChar = ''
            let lastLength = 0

            str.split('').forEach(char => {
                if (lastChar !== char) {
                    lastChar = char;
                    lastLength = 1;
                } else {
                    lastLength++;
                }

                if (lastLength === length) {
                    substrings.push(char)
                } else if (lastLength > length) {
                    length = lastLength
                    substrings = [];
                    substrings.push(char)
                }
            })

            // Вывод пункта 1
            out += '---Пункт 1---\r\n'
            for (let char of substrings) {
                out += `${char} ${length}\r\n`;
            }
        }

        // Пункт 2
        {
            // Складываем все цифры в строке
            let sum = str.split('').reduce((a, b) => {
                // Проверяем, можно ли данный символ прочитать как цифру, если да, то прибавляем её :)
                return a + ((!isNaN(Number.parseInt(b))) ? Number.parseInt(b) : 0);
            }, 0)

            out += '---Пункт 2---\r\n'
            out += `Сумма всех цифр: ${sum}\r\n`
        }

        // Пункт 3
        {
            let max = 0
            let maxChar = ''
            let lastLength = 0
            let lastChar = ''

            str.replace(/[0-9]/g, '').toUpperCase().split('').forEach(char => {
                if (char !== lastChar) {
                    lastLength = 1
                    lastChar = char
                } else {
                    lastLength++
                }

                if (lastLength > max) {
                    maxChar = char;
                    max = lastLength
                }
            })

            out += '---Пункт 3---\r\n'
            out += `Чаще всего встречается символ: ${maxChar}, он встречается ${max} раз(а)\r\n`
        }

        // Пункт 4
        {
            let max = 0

            str.split('').reduce((a, b) => {
                if (!/[0-9]/.test(b)) {
                    max = Math.max(max, Number(a))
                    return 0
                }

                return a + b
            }, '0')

            out += '---Пункт 4---\r\n'
            out += `Максимально число в файле: ${max}\r\n`
        }

        return out;
    }
}