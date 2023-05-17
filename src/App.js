import React, { useState } from 'react';

//COMPONENTS
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

//APLICATION
const App = () => {
    //DESENVOLVER COM ENTRADAS ESTÁTICAS AJUDA A VER COMO FICARÁ QUAL PRONTO

    const [todos, setTodos] = useState([]);

    const onNewTodo = (value) => {
        setTodos([
            ...todos, //concatenação de arrays
            {
                // O ID TEM QUE SER ÚNICO
                id: new Date().getTime(),
                title: value,
                checked: false,
            },
        ]);
    };

    const onToggle = (todo) => {
        //PRECISA ACHAR, BASEADO NO ID, O OBJETO E DEPOIS TRANSFORMAR O 'checked' em true

        //manipulação de array
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id
                    ? {
                          ...obj /*SERIA O MESMO QUE COLOCAR:
                id: obj.id, title: obj.title    */,
                          checked: !todo.checked,
                      }
                    : obj
            )
        );
    };

    const onRemove = (todo) => {
        console.log('Removeu');
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title"> Todo </h1>
            </header>
            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />

                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            </section>
        </section>
    );
};

export default App;
