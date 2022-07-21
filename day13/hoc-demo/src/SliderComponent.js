export default function SliderComponent(props) {
    return (
        <div>
            <input type='range' onClick={props.callClick} value={props.counter}></input>
            {props.counter}
        </div>
    );
}