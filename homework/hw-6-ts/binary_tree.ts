/**
 * Написать класс, реализующий "бинарное дерево".
 * Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения высоты дерева.
 */
class BinaryTree {

    root: TreeNode = null;
        
    /**
     * Вставка нового значения в дерево
     * @param value
     */
    public insert(value): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     * Вставка узла в дерево
     * @param node
     * @param newNode
     */
    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    /**
     * Поиск элемента в дереве
     * @param number value
     * @returns {null|boolean}
     */
    public find(value: number): false|TreeNode {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        while(current){
            if (value === current.value) {
                return current;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    /**
     * Изменение значения элемента дерева
     * @param oldValue
     * @param newValue
     * @returns {boolean}
     */
    public update(oldValue: number, newValue: number): boolean {

        let current = this.root;

        while (current) {
            if (oldValue === current.value) {
                current.value = newValue;
                return true;
            }

            if (oldValue < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    /**
     * Находит минимальное значение в дереве, начиная с заданного узла
     * @param node Узел, с которого начинается поиск минимума
     * @returns TreeNode Узел с минимальным значением
     */
    private findMin(node: TreeNode): TreeNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    /**
     * удаление узла по значению
     * @param number value
     * @returns {boolean}
     */
    public remove(value: number): boolean {

        let current = this.root;
        let parent = null;

        while (current) {
            if (value === current.value) {
                // узел найден

                // случай 1 - узел лист
                if (current.left === null && current.right === null) {
                    if (parent === null) {
                        this.root = null;
                    } else {
                        if (parent.left === current) {
                            parent.left = null;
                        } else {
                            parent.right = null;
                        }
                    }

                    // случай 2 - у узла 1 потомок
                } else if (current.right === null) {
                    if (parent === null) {
                        this.root = current.left;
                    } else {
                        if (parent.left === current) {
                            parent.left = current.left;
                        } else {
                            parent.right = current.left;
                        }
                    }

                    // случай 3 - у узла 2 потомка
                } else {
                    // найти минимум в правом поддереве
                    let min = this.findMin(current.right);
                    min.right = current.right;

                    if (parent === null) {
                        this.root = min;
                    } else {
                        if (parent.left === current) {
                            parent.left = min;
                        } else {
                            parent.right = min;
                        }
                    }

                }

                return true; // элемент удален
            }

            parent = current;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false; // элемент не найден
    }

    /**
     * вычисление высоты дерева
     * @returns {number|*}
     */
    public height(): number {
        return this.heightNode(this.root);
    }

    /**
     * вычисление высоты узла дерева
     * @param node
     * @returns {number}
     */
    private heightNode(node): number {
        if (node === null) {
            return 0;
        }

        const leftHeight = this.heightNode(node.left);
        const rightHeight = this.heightNode(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }
}

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Пример использования

console.log('[ START ]\n');

// строим дерево
console.log('[ Building tree... ]');
const tree = new BinaryTree();
tree.insert(3);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(5);
tree.insert(4);
tree.insert(4);
tree.insert(6);
console.log('[ DONE ]\n');

// считаем высоту дерева
console.log('[ Calc tree height ... ]');
let treeHeight: number = tree.height();
console.log('Tree height: ' + treeHeight);
console.log('[ DONE ]\n');

// находим/выводим узел с указанным значением
console.log('[ Find tree element "6"... ]');
console.log(tree.find(6));
console.log('[ DONE ]\n');

// удаляем элемент
console.log('[ Delete tree element "6"... ]');
console.log(tree.remove(6));
console.log('[ DONE ]\n');

// проверяем: удаленный элемент теперь не находится
console.log('[ Find tree element "6"... ]');
console.log(tree.find(6));
console.log('[ DONE ]\n');

// меняем значение элемиента "3" на "8"
console.log('[ Update tree element value from "3" to "8"... ]');
console.log(tree.update(3, 8));
console.log('[ DONE ]\n');

// проверяем: старый элемент теперь не находится, новый - находится
console.log('[ Find tree element "3"... ]');
console.log(tree.find(3));
console.log('[ DONE ]\n');

console.log('[ Find tree element "8"... ]');
console.log(tree.find(8));
console.log('[ DONE ]\n');

console.log('[ FINISH ]');