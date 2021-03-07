import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./Pages/HomePage";
import OrderStatus from "./Pages/OrderStatus";

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/orderstatus" exact={true} component={OrderStatus} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
