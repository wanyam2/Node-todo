// 데이터 내의 모든 정보 불러오기
import {TodoData} from "./todo.data.js";

export const findAll = () => {
    return TodoData.todoData;
};

// const findById = (id: number) => {
//     return TodoData.todoData.find((todo) => todo.id === id);
// };


const add = (todo) => {
    const newTodo = {
        id: TodoData.todoData.length + 1,
        ...todo,
    };
    TodoData.todoData.push(newTodo);
    return newTodo;
};


// const update = (id: number, todo: TodoDto) => {
//     const index = findIndexById(id);
//     if (index === -1) {
//         return {};
//     }
//
//     const updated = {
//         id,
//         ...todo,
//     };
//
//     TodoData.todoData[index] = updated;
//     return updated;
// };
//
const remove = (id) => {
    const index = findIndexById(id);
    if (index === -1) {
        return {};
    }

    const removed = TodoData.todoData[index];
    TodoData.todoData.splice(index, 1);

    return removed;
};

const findIndexById = (id) => {
    return TodoData.todoData.findIndex((todo) => todo.id === id);
};

export const TodoHandler = {
    findAll,
    // findById,
    add,
    // update,
    remove,
};
