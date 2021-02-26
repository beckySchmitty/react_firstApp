import React from "react"

const Clicker = () => {
    const fireLasers = () => {
        console.log("PEW PEW PEW! ZAP")
        console.log("Lazer Fired!")

    }

    return (
        <div>
        <button onClick={fireLasers}>Click Me</button>
        </div>
    )
}

export default Clicker;