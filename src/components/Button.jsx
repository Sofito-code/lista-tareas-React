import "./Button.css";

function Button({ textBtn, text, setTexto }) {
    return (
        <button
            className="btn"
            onClick={() => {
                if (text === "Texto 1") {
                    setTexto("Texto 2");
                } else {
                    setTexto("Texto 1");
                }
            }}
        >
            {textBtn}
        </button>
    );
}

export default Button;
