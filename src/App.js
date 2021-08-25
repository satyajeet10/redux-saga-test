import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const users = useSelector((state) => state.myFirstReducer.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
        <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
