import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/login/Login";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
