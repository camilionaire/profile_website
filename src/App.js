import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Webdev from "./pages/Webdev";
import Programming from "./pages/Programming";
import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/webdev" component={Webdev} />
          <Route path="/programming" component={Programming} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
