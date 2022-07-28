const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  const reducer = (state,action) => {
    switch(action.type) {
        case "COMPLETE": return state.map((todo) => {
            if (todo.id === action.id) {
                return {...todo,complete:!todo.complete}
            }
            else {
                return todo;
            }
        })
        default:
            return state
    }
  }
  
 
  function Todos() {//component
    const [todos, dispatch] = useReducer(reducer, todos1); //initial state defined with useReduxer
  
    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </>
    );
  }
  
  
  function App() {
    return (<div>
      <Todos />
    </div>
    )
  }
  
  export default App;