import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './component/menu/Menu'
import Home from './component/home/Home'
import Profile from './component/profile/Profile'
import About from './component/about/About';
import Contact from './component/contact/Contact'
 
function App() {
  return (
    <Router >
      <div className="app-header">
        <Menu />
      </div>
      <Switch>
        <div className="app-content">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Switch>
    </Router>
  );
}
 
export default App;