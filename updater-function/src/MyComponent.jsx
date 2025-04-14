// updater function = A function passed as an argument to setstate() usually
//                    ex. setyear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchrinus functions
//                    Good practice to use updater functions.

import React, {useState} from 'react';

function MyComponent () {

    const[count, setCount] = useState(0);

    function increment(){

        setCount(count => count +1);
        

    }

    function decrement(){

        setCount(count => count -2);
    }

    function reset(){

        setCount(0); // This one doesn't depend on previous value, so it's fine as-is 
    }

    return(
        <div className = "counter-conatiner">
            <p className='count-dispaly'>{count}</p>
            <button className = 'counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={increment}>Increment</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
    )
}

export default MyComponent