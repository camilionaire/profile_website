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
          <Route path="/~camilo3/webdev" component={Webdev} />
          <Route path="/~camilo3/programming" component={Programming} />
          <Route path="/~camilo3/sign-up" component={SignUp} />
          <Route path="/~camilo3" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
