import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Webdev from "./pages/Webdev";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/webdev">
            <Webdev />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
