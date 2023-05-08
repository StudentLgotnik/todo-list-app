import * as React from 'react';
import {TodoDetails} from "../TodoDetails/TodoDetails";
import { useDispatch } from 'react-redux'
import {addTodo} from "../../services/actions/TodoActions";

export const CreateTodo = () => {

    const dispatch = useDispatch()
    const onSubmit = value => dispatch(addTodo(value))

    return (
        <TodoDetails onSubmit={ onSubmit }/>
    );
};
