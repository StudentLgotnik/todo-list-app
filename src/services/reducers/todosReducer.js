import {TODO_ADD, TODO_DELETE, TODO_EDIT} from "../actions/TodoActions";
import {v4 as uuidv4} from 'uuid';
import {store} from "../../store/store";

const initialState = [
    { id: uuidv4(), name: 'TODO1', description: 'Description1', deadline: new Date().toString(), priority: 'high', completed: true },
    { id: uuidv4(), name: 'TODO2', description: 'Description2', deadline: new Date().toString(), priority: 'low', completed: true },
    { id: uuidv4(), name: 'TODO3', description: 'Description3', deadline: new Date().toString(), priority: 'medium', completed: true },
]


function todosReducer(state = initialState, action) {
    switch (action.type) {
        case TODO_ADD: {
            return [
                ...state,
                {
                    ...action.payload,
                    id: uuidv4()
                }
            ]
        }
        case TODO_EDIT: {
            const updatedState = state.map(i => {
                if (i.id === action.payload.id) return { ...action.payload }
                return i
            })
            return [...updatedState]
        }
        case TODO_DELETE: {
            const updatedState = state.filter(i => i.id !== action.payload.id)
            return [...updatedState]
        }
        default:
            return state
    }
}

export default todosReducer;
