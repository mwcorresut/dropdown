import { useState } from "react";

import AddTodo from "./addtodo/AddTodo";
import StateTodo from "./statetodo/StateTodo";
import style from "../styles/TodoList.module.css";

function TodoList() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "Title one",
            status: true,
        },
        {
            id: 2,
            title: "Title two",
            status: true,
        },
        {
            id: 3,
            title: "Title three",
            status: false,
        },
    ]);

    return (
        <div className={style.todo_list}>
            <StateTodo todo={todo} setTodo={setTodo} />
            <AddTodo todo={todo} setTodo={setTodo} />
        </div>
    );
}

export default TodoList;
