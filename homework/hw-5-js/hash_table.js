/**
 * Реализовать класс, реализующий хеш-таблицу.
 * Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения количества элементов.
 */

class HashTable {

    /**
     * Конструктор
     */
    constructor() {
        this.table = new Array();
        this.size = 0;
    }

    /**
     * функция хеширования ключа
     * @param key
     * @returns {number}
     * @private
     */
    _hash(key) {
        let hash = 0;

        /**
         * Алгоритм:
         * - Инициализировать переменную hash, в которой будем накапливать хеш-код
         * - Пройтись в цикле по символам строки key
         * - Добавлять к hash код символа (charCodeAt)
         * - Вернуть остаток от деления hash на размер таблицы
         * Это позволит равномерно распределить ключи по ячейкам хеш-таблицы в пределах её размера.
         */
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

    /**
     * Редактировать значение элемента
     * @param key
     * @param value
     */
    set(key, value) {
        const index = this._hash(key);
        this.table[index] = value;
        this.size++;
    }

    /**
     * Получить значение элемента по хешу
     * @param key
     * @returns {any}
     */
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    /**
     * Удалить элемент по его ключу
     * @param key
     * @returns {any}
     */
    remove(key) {
        const index = this._hash(key);
        const value = this.table[index];
        this.table[index] = undefined;
        this.size--;
        return value;
    }

    /**
     * Получить размер таблицы
     * @returns {number}
     */
    getSize() {
        return this.size;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Примеры использования

console.log('[ START ]\n');

const table = new HashTable();

// Создаем новый элемент
console.log('[ Insert new elements ... ]');
table.set('father', 'John');
table.set('son', 'Maikl');
table.set('mother', 'Mary');
console.log('[ DONE ]\n');

// Проверяем размер хеш-таблицы
console.log('[ Getting table size... ]');
console.log(table.getSize()); // 3
console.log('[ DONE ]\n');

console.log('[ Read element with key "father"... ]');
console.log(table.get('father')); // John
console.log('[ DONE ]\n');

// Изменяем элемент
console.log('[ Change element with key "father"... ]');
table.set('father', 'Johnathan'); // John
console.log('[ DONE ]\n');

console.log('[ Read again element with key "father"... ]');
console.log(table.get('father')); // Johnathan
console.log('[ DONE ]\n');

// Проверяем размер хеш-таблицы
console.log('[ Getting table size... ]');
console.log(table.getSize()); // 3
console.log('[ DONE ]\n');

// Удаляем элемент
console.log('[ Delete element with key "father"... ]');
table.remove('father');
console.log('[ DONE ]\n');

console.log('[ Read element with key "father"... ]');
console.log(table.get('father')); // null
console.log('[ DONE ]\n');

// Проверяем размер хеш-таблицы
console.log('[ Getting table size... ]');
console.log(table.getSize()); // 2
console.log('[ DONE ]\n');

console.log('[ FINISH ]');