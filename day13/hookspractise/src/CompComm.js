//Component architechture - component communication
//Pariwesh's architechture.js

//Data flow from Parent to child

// function Parent() {
//     const [words,setWords] = React.useState("");

//     const handleClick = () => {
//         setWords("Hello");
//     };
//     return (
//         <div>
//             <h1>Parent</h1>
//             <button onClick={handleClick}>Ask</button>
//             <Child hears = {words} />
//         </div>
//     );
// }

// function Child(props) {
//     return (
//         <div>
//             <h2>Child</h2>
//             <p>{props.hears}</p>
//         </div>
//     );
// }
// export default Parent;

// Data flow from child to parent


function Parent() {
    const [message,setMessage] = useState("");
    const handleRequest = (request) => {
        if (request.includes("car")) {
            setMessage("No");
        }
    };

    return (
        <div data-testid="parent">
            <h1>Parent</h1>
            <p data-testid="message">{message}</p>
            <Child onRequest={handleRequest} />
        </div>
    );
}


function Child(props) {
    const handleClick = () => {
        props.onRequest("Hello");
    };
    return (
        <div data-testid='child'>
            <h1>Child</h1>
            <button data-testid="childBtn" onClick={handleClick}>Ask</button>
        </div>
    );
}
export default Parent;