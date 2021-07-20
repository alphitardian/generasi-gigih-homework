import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignIn} />
      <Route path="/callback" component={Home} />
    </div>
  );
}

export default App;
