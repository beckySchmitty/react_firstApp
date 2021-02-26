import React, { useState } from "react";

const Counter = () => {
    const [count, addCount] = useState(99)

    return (
        <>
        <h1>Count is: {count}</h1>
        <button onClick={() => addCount(count + 1)}>Add</button>
        </>
    )
}

export default Counter;