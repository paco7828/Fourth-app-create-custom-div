import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Comp() {
    const [inputs, setInputs] = useState({});
    const [submitText, setSubmitText] = useState("Export div");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevValues => ({ ...prevValues, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitText("Exported in console!");
        console.table(divStyle);
    }

    const divStyle = {
        transition: "all 0.2s",
        width: `${inputs.width}px`,
        height: `${inputs.height}px`,
        backgroundColor: inputs.backgroundColor,
        border: `${inputs.borderWidth}px ${inputs.borderType} ${inputs.borderColor}`,
        borderRadius: `${inputs.borderRadius}%`
    }

    Object.keys(divStyle).forEach(key => {
        if (typeof divStyle[key] === "undefined" || divStyle[key].includes("undefined")) {
            delete divStyle[key];
        }
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" name="width" placeholder="Width in pixels..." onChange={handleChange} />
                <br />
                <input type="number" name="height" placeholder="Height in pixels..." onChange={handleChange} />
                <br />
                <input type="text" name="backgroundColor" placeholder="Background color..." onChange={handleChange} />
                <br />
                <input type="number" name="borderWidth" placeholder="Border width..." onChange={handleChange} />
                <br />
                <input type="text" name="borderType" placeholder="Border type..." onChange={handleChange} />
                <br />
                <input type="text" name="borderColor" placeholder="Border color..." onChange={handleChange} />
                <br />
                <input type="text" name="borderRadius" placeholder="Border radius in %..." onChange={handleChange} />
                <br />
                <input type="submit" value={submitText} />
            </form>
            <div style={divStyle}></div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Comp />);