import {useState} from "react";

const HighOrderComponent = (Component1) => {
    function Enhanced(props) {
        const [count, setCount] = useState(0);
        const handleClick = () => {
            console.log(count);
            setCount(count + 1);
        }
        console.log('enhanced called');
        return <Component1 counter={count} callClick={handleClick}></Component1>
    }
    return Enhanced;
}
export default HighOrderComponent;