import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
    const [texto, setTexto] = useState("Texto 1");

    return (
        <main>
            <h1>Introducción a React 🎮</h1>
            <p>{texto}</p>
            <Button text={texto} setTexto={setTexto} textBtn="Switch" />
        </main>
    );
}

export default App;
