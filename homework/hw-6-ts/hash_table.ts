/**
 * Реализовать класс, реализующий хеш-таблицу.
 * Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения количества элементов.
 */

class HashTable {

    table: Record<string, any> = {};
    keys: string[] = [];
    size: number = 0;

    /**
     * Функция хеширования ключа
     * @param key
     * @returns {string}
     * @private
     */
    private calcHash(key: string): string {

        let hash = '';

        /**
         * Алгоритм:
         * - Инициализировать переменную hash, в которой будем накапливать хеш-код
         * - Пройтись в цикле по символам строки key
         * - Добавлять к hash код символа (charCodeAt)
         */

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash;
    }

    /**
     * Добавить элемент
     * @param key
     * @param value
     */
    insertElement(key: string, value: any) {
        const index = this.calcHash(key);
        this.table[index] = value;
        this.size++;

        // добавляем ключ в массив keys
        this.keys.push(key);
    }

    /**
     * Получить значение элемента по ключу
     * @param key
     * @returns {any}
     */
    getElement(key: string): any {
        const index = this.calcHash(key);
        return this.table[index];
    }

    /**
     * Удалить элемент по его ключу
     * @param key
     */
    removeElement(key: string) {

        const index = this.calcHash(key);
        delete this.table[index];

        const keyIndex = this.keys.indexOf(key);
        this.keys.splice(keyIndex, 1);

        this.size--;
    }

    /**
     * Обновить элемент по его ключу
     * @param key
     * @param value
     */
    updateElement(key: string, value: any) {

        const index = this.calcHash(key);

        if (this.table[index] !== undefined) {
            this.table[index] = value;
        } else {
            return false;
        }

       return true;
    }

    /**
     * Получить размер таблицы
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Распечатать элементы таблицы
     */
    printElements(): void {
        for (let key of this.keys) {
            const index = this.calcHash(key);
            console.log(key, this.table[index]);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Примеры использования

console.log('[ START ]\n');

const table = new HashTable();

// Создаем новый элемент
console.log('[ Insert new elements ... ]');
table.insertElement('father', 'John');
table.insertElement('son', 'Maikl');
table.insertElement('mother', 'Mary');
console.log('[ DONE ]\n');

// Проверяем размер хеш-таблицы
console.log('[ Getting table size... ]');
console.log(table.getSize()); // 3
console.log('[ DONE ]\n');

// Выводим содержимое таблицы
console.log('[ Getting table contents ... ]');
table.printElements();
console.log('[ DONE ]\n');

console.log('[ Read element with key "father"... ]');
console.log(table.getElement('father')); // John
console.log('[ DONE ]\n');

// Изменяем элемент
console.log('[ Change element with key "father" to "Johnathan"... ]');
table.updateElement('father', 'Johnathan'); // John
console.log('[ DONE ]\n');

console.log('[ Read again element with key "father"... ]');
console.log(table.getElement('father')); // Johnathan
console.log('[ DONE ]\n');

// Проверяем размер хеш-таблицы
console.log('[ Getting table size... ]');
console.log(table.getSize()); // 3
console.log('[ DONE ]\n');

// Удаляем элемент
console.log('[ Delete element with key "father"... ]');
table.removeElement('father');
console.log('[ DONE ]\n');

console.log('[ Read element with key "father"... ]');
console.log(table.getElement('father')); // null
console.log('[ DONE ]\n');

// Проверяем размер хеш-таблицы
console.log('[ Getting table size... ]');
console.log(table.getSize()); // 2
console.log('[ DONE ]\n');

// Выводим содержимое таблицы
console.log('[ Getting table contents ... ]');
table.printElements();
console.log('[ DONE ]\n');

console.log('[ FINISH ]');