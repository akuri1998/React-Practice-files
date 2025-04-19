// useEffect() = React Hook taht tells React DO SOME CODE (pick up):
//               This component re-renders
//               This component mounts
//               This state of a value

// usestate(function, [dependencies])

// 1. useEffect(() => {})             // Runs after every re-render
// 2. useEffect(() => {}, [])         // Runs only on mount
// 3. useEffect(() => {}, [value])    // Runs on mount  + when the value changes

// USES
// #1. Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react';


function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setSubtract(c => -1);
    }

    function changeColor(){
        setColor (c => c === "green" ? "red" : "green");
    }

    return(
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br/>
    <button onClick={changeColor}>change color</button>

    </>);
}

export default MyComponent