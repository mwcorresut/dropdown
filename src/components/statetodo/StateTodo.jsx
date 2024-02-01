import { useEffect, useState } from "react";

import style from "./StateTodo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";

function StateTodo({ todo, setTodo }) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const [filtered, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo);
    }, [todo]);

    function todoFilter(status) {
        if (status === "all") {
            setFiltered(todo);
        } else {
            let newTodo = [...todo].filter((item) => item.status === status);
            setFiltered(newTodo);
        }
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter((item) => item.id !== id);
        setTodo(newTodo);
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter((item) => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map((item) => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        });
        setTodo(newTodo);
        setEdit(null);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.button_container}>
                <button
                    className={style.header_button}
                    onClick={() => todoFilter("all")}
                >
                    <span className={style.button_header}>All</span>
                </button>
                <button
                    className={style.header_button}
                    onClick={() => todoFilter(true)}
                >
                    <span className={style.button_header}>Open</span>
                </button>
                <button
                    className={style.header_button}
                    onClick={() => todoFilter(false)}
                >
                    <span className={style.button_header}>Close</span>
                </button>
            </div>

            {filtered.map((item) => (
                <div key={item.id}>
                    {edit === item.id ? (
                        <div>
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className={!item.status ? style.close : ""}>
                            {item.title}
                        </div>
                    )}

                    {edit === item.id ? (
                        <div>
                            <ButtonGroup aria-label="Basic example">
                                <Button
                                    className={style.button}
                                    onClick={() => saveTodo(item.id)}
                                >
                                    <span>Save</span>
                                    <div className={style.wave}></div>
                                </Button>
                            </ButtonGroup>
                        </div>
                    ) : (
                        <div>
                            <ButtonGroup aria-label="Basic example">
                                <Button
                                    variant="secondary"
                                    onClick={() => deleteTodo(item.id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        editTodo(item.id, item.title)
                                    }
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => statusTodo(item.id)}
                                >
                                    To Fix
                                </Button>
                            </ButtonGroup>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default StateTodo;
