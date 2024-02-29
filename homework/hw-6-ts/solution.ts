// Задание: Написать аналоги ``Utility Types``, придумать собственный тип.
// Utility Types упрощают создание сложных типов на основе существующих
// Примеры некоторых полезных Utility Types на TypeScript:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Partial - делает все свойства объекта опциональными:

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

// эквивалентно:

interface PartialUserInterface {
    id?: number;
    name?: string;
    age?: number;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Required - делает все свойства обязательными:

type RequiredUser = Required<User>;

// эквивалентно

interface RequiredUserInterface {
    id: number;
    name: string;
    age: number;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Record - позволяет создать объект с заданными ключами и значениями:

type PageViews = Record<string, number>;

let views: PageViews = {
    home: 10,
    about: 5,
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Custom - собственный тип для массива только с числами:

type NumberArray = Array<number>;

let nums: NumberArray = [1, 2, 3];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// придумать собственный тип.

// Cоздадим тип "Person", который будет представлять информацию о человеке,
// включая имя (name, строка), возраст (age, число) и статус занятости (isEmployed, логическое значение).
// Создадим два объекта типа Person и выведем их в консоль.

type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
};

// Пример использования типа Person
let person1: Person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

let person2: Person = {
    name: "Bob",
    age: 25,
    isEmployed: false
};

console.log(person1);
console.log(person2);


