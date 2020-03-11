import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'
import {Context} from "./context";
import reducer from "./reducer";

const App = () => {
    const params = JSON.parse(localStorage.getItem('todos'));
    const [state, dispatch] = useReducer(reducer, params );
    //
    // const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');

    // useEffect(() => {
    //     const raw = localStorage.getItem('todos') || []
    //     setTodos(JSON.parse(raw))
    // }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state]);

    const addTodo = e => {
        if(e.key === "Enter") {
            dispatch({
                type: 'add',
                payload: todoTitle,
            });
            setTodoTitle('')
        }
    };

    // const removeTodo = id => {
    //     setTodos(state.filter(todo => {
    //         return todo.id !== id
    //     }))
    // };
    //
    // const toggleTodo = id => {
    //     setTodos(state.map(todo => {
    //         if(todo.id === id) {
    //             todo.completed = !todo.completed
    //         }
    //         return todo
    //     }))
    // }

    return (
        <Context.Provider value={{dispatch}}>

            <div className="container">
                <h1>Todo app</h1>

                <div className="input-field">
                    <input
                        type="text"
                        value={todoTitle}
                        onChange={e => setTodoTitle(e.target.value)}
                        onKeyPress={addTodo}
                    />
                    <label>Todo name</label>
                </div>

                <TodoList todos={state}/>
            </div>
        </Context.Provider>
    );

};
export default App;