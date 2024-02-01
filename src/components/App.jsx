import { useState, useEffect } from "react";
import "../styles/App.css";

// import { profile } from "./assets/profile.png";

function App() {
    const [count, setCount] = useState(false);
    // можно реализовать через const node = useRef()

    const clickOutside = (e) => {
        // проверяем где сделан клик
        const node = document.querySelector(".menu-btn");
        if (node && !node.contains(e.target)) {
            setCount(false);
        }
    };

    useEffect(() => {
        // добавляем или удаляем обработчик события после каждого рендера
        if (count) {
            document.addEventListener("mousedown", clickOutside);
        } else {
            document.removeEventListener("mousedown", clickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [count]);

    return (
        <header className="header">
            <button
                className="menu-btn"
                onClick={() => {
                    setCount(!count);
                }}
            >
                <nav className={`menu ${count ? "active" : ""}`}>
                    <ul className="menu-list">
                        <li className="menu-item">
                            {/* <img src={profile} alt="Profile"></img> */}
                            <span>Профиль</span>
                        </li>
                        <li className="menu-item">Общая информация</li>
                        <li className="menu-item">Подписки</li>
                        <li className="menu-item">Настройки</li>
                        <li className="menu-item">Выход</li>
                    </ul>
                </nav>
            </button>
        </header>
    );
}

export default App;
