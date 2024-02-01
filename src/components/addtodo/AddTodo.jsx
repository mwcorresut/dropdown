// import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import style from "../addtodo/AddTodo.module.css";

function AddTodo({ todo, setTodo }) {
    // const UserID = useId();
    const [value, setValue] = useState("");

    function saveTodo() {
        if (value) {
            setTodo([
                ...todo,
                {
                    id: uuidv4(),
                    title: value,
                    status: true,
                },
            ]);
            setValue("");
        }
    }

    return (
        <div className={style.main_block}>
            TODO LIST
            <input
                className={style.input_save}
                placeholder="Input task"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button onClick={saveTodo}>Save</button>
        </div>
    );
}

export default AddTodo;
