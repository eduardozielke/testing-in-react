import React, { useState } from "react"

const Counter = ({initialValue = 0}) => {
    const [value, setValue] = useState(initialValue)

    const increment = () => setValue(prevValue => prevValue + 1)
    const decrecrement = () => setValue(prevValue => prevValue - 1)
    const restart = () => setValue(initialValue)
    const switchSigns = () => setValue(prev => prev * -1)

    return (
        <div>
            <h1>Count: <span data-testid='count'>{value}</span></h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrecrement}>Decrement</button>
            <button onClick={restart}>Restart</button>
            <button onClick={switchSigns}>Switch Signs</button>
        </div>
    )

}

export default Counter;