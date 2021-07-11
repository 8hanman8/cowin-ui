import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./routes/route";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NetworkService from "./apis/network-serivice";
import Spinner from "./components/common/spinner/index";
toast.configure();
NetworkService.setupInterceptors(store);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RouterOutlet />
        <Spinner />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
