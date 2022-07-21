import {useState} from "react";

export default function ButtonComponent(props) {
    return <button onClick={props.callClick}>{props.counter}
    </button>
}