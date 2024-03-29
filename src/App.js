import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="m-2">
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
}

export default App;
