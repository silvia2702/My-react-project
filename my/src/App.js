import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './page/AboutMe'
import Home from './page/home'
import MovieReview from './page/movieReview'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/profile' exact component={ AboutMe }/>
        <Route path='/movieReview' exact component={ MovieReview }/>
        {/* <Route path='/' exact component={ Suggestions }/> */}
      </Switch>
    </Router>
    </>
   
  );
}

export default App;
