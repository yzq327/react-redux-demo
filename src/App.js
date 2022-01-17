import { Provider } from "react-redux";

import "./App.css";
import store from "./store";

import ComA from "./pages/comA";
import ComB from "./pages/comB";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
