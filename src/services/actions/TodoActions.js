import { createAction } from '@reduxjs/toolkit';


export const TODO_ADD = 'todo/add'
export const TODO_EDIT = 'todo/edit'
export const TODO_DELETE = 'todo/delete'
export const addTodo = todo => {
    return {
        type: TODO_ADD,
        payload: todo,
    }
}

export const editTodo = todo => {
    return {
        type: TODO_EDIT,
        payload: todo,
    }
}

export const deleteTodo = todo => {
    return {
        type: TODO_DELETE,
        payload: todo,
    }
}
