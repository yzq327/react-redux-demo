import { Provider } from "react-redux";

import "./App.css";
import store from "./store";

// import ComA from "./pages/comA";
// import ComB from "./pages/comB";
import Boy from "./pages/boy";
import Girl from "./pages/girl";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        {/* <ComA /> */}
        {/* <ComB /> */}
        <Boy />
        <Girl />
      </div>
    </Provider>
  );
}

export default App;
