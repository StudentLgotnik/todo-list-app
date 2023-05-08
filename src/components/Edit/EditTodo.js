import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTodo} from "../../services/actions/TodoActions";
import {TodoDetails} from "../TodoDetails/TodoDetails";
import {useParams} from 'react-router-dom';

export const EditTodo = () => {

    const params = useParams();

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
    const onSubmit = value => dispatch(editTodo(value))

    return (
        <TodoDetails onSubmit={ onSubmit } initialValues={ todos.find(i => i.id === params.id) } />
    );
};
