import {combineReducers} from  'redux';
import filterReducer from './filter/filterReducer';
import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers(
    {
        filters: filterReducer,
        todos: todosReducer
    }
)

export default rootReducer;