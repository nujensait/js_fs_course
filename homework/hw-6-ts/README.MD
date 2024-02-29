## Что это

- Домашнее задание по курсу ["JS FullStack developer (запуск 02.2024)"](https://greenatomcaselab.ispringlearn.ru/content/info/18595)
- Лекция 6: [TypeScript](https://greenatomcaselab.ispringlearn.ru/content/info/18616)

## Задание

1) Написать аналоги ``Utility Types``, придумать собственный тип.
2) Типизировать задачи из домашнего задания JavaScript. 
- Использовать настройки ``strict`` и ``noImplicitAny``. 
- Избегать утверждения типов (операторы ``as`` и ``non-null assertion``).
3) Изучить структуру [tsconfig](https://www.typescriptlang.org/tsconfig).

## Решение

-------------

### Задание 1
1) Написать аналоги ``Utility Types``, придумать собственный тип.
см. файл [solution.ts](solution.ts)

-------------

### Задание 2
2) Типизировать задачи из домашнего задания JavaScript.

#### Скрипт hash_table
см. файл [hash_table.ts](hash_table.ts) - вариант кода с типизацией и исправлениями. 

#### Скрипт binary_tree 
см. файл [binary_tree.ts](binary_tree.ts).

Основные изменения:
- Добавлены типы для свойств и параметров
- Исправлены возвращаемые типы в комментариях
- Убраны неявные утверждения типа с помощью as
- Добавлены явные возвраты типов в методах
- Это позволяет статически проверить типы и избежать ошибок во время выполнения.

-------------

### Задание 3
3) Изучить структуру [tsconfig](https://www.typescriptlang.org/tsconfig).
- Изучил 
