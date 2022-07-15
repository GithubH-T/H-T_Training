import React, { useState } from "react";

const Counter = () => {
const [counter, setCounter] = useState(0);
const initialState = 0;

function resetCounter(){
    setCounter(initialState); 
}

const incrementCounter = () => {
setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
setCounter((prevCounter) => prevCounter - 1);
};

return (
<>
<button data-testid="increment" onClick={incrementCounter}>
+
</button>
<p data-testid="counter">{counter}</p>
<button data-testid="decrement" onClick={decrementCounter}>
-
</button>
<button data-testid="reset" onClick={resetCounter}>
    Reset
</button>
</>
);
};

export default Counter;