import React from "react";
import ReactDOM from "react-dom";

import ButtonGroup from "./components/ButtonGroup";

function App() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl lg:text-12xl font-black text-gray-800">
                15:00
            </h1>
            <ButtonGroup />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
