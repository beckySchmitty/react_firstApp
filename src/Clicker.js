import React from "react"

const Clicker = () => {
    const fireLasers = (e) => {
        console.log(e)
        console(e.nativeEvent)
        console.log(e.currentTarget)
        console.log("PEW PEW PEW! ZAP")

    }

    return (
        <div>
        <button onClick={fireLasers}>Click Me</button>
        </div>
    )
}

export default Clicker;