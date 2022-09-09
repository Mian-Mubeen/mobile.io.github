// import logo from './logo.svg';
import './App.css';
import Header from"./mycomponents/Header"
import Home from"./mycomponents/Home"
// import Footer from"./mycomponents/Footer"
import Templates from"./mycomponents/Templates"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link

} from "react-router-dom";
function App() {
  return (
<>
<Header/>
<Home/>
  {/* <Router>
<Header/>
 <div className="container my-3">
 <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/find" element={<Templates/>} >  </Route>
            <Route exact path="/cotact" element={<Templates/>} >  </Route>
          </Routes>
    </div>
    </Router>   */}
    </>
  );
}

export default App;

