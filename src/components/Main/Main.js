import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Main.module.scss'
import {Link} from "react-router-dom";
import {CREATE_TODO, EDIT_TODO} from "../../constants/routes";
import {deleteTodo} from "../../services/actions/TodoActions";

export const Main = () => {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const onDelete = value => {
        if (window.confirm('Do you really want to delete a ' + value.name + '?')) {
            dispatch(deleteTodo(value))
        }
    }

    return (
        <div className={styles.mainBody}>
            <div className={styles.todoList}>
                <p className={styles.todoListHeader}>TODOLIST</p>
                <div>
                    <input/>
                    <button>
                        <Link to={CREATE_TODO}>+</Link>
                    </button>
                </div>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} className={styles.todoListListItem}>
                            <input type={"checkbox"}/>
                            <p>{todo.name}</p>
                            <button>
                                <Link to={EDIT_TODO + todo.id}>edit</Link>
                            </button>
                            <button onClick={() => onDelete(todo)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
