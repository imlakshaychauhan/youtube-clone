import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
    <div className="m-2">
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
    </Provider>
  );
}

export default App;