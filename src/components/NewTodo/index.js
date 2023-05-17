import React, { useState } from 'react';
import "./styles.css"

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
        // ONCHANGE É A MESMA COISA QUE O ONCLICK,
        // MAS ELE TRANSPORTA AS LETRAS TECLADAS PARA A TELA
    };

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        onNewTodo(value);
        //QUANDO NÃO SE SABE O QUE RECEBERÁ, USA-SE O TERMO VALUE

        erase();
    };

    const onKeyDown = (event) => {
        // OU, QUANDO CLICO**
        if (event.which === ENTER_KEY) {
            // FORAM PARA CONST SUBMIT console.log(value); erase();
            submit();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    };
    return (
        <input
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export default NewTodo;
