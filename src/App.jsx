import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./exercise.css";
import profilePic from "/profile.jpg"

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <img className="profilePic">profilePic</img>
            </div>
            <h1>Project EYJA</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 10)}>
                    count is {count}
                </button>
                <p>
                    This is our team comprised of Emmanuel, Ardit, Jiangping, and Yiming.
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
