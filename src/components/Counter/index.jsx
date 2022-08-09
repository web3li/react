import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)


    return (
        <div>
            <p>Hook</p>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>增加1</button>
        </div>
    )
}
