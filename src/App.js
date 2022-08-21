import Navbar from './Components/Navbar';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import whatsapp from './Utilites/icons8-whatsapp.svg';



function App() {
  return (
    <div className="App font-GorditaRegular">
      <Navbar />

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Services'>
            <Services />
          </Route>
        </Switch>
      </Router>
      <a href="https://github.com/mertJF/tailblocks" class="animate-bounce rounded-full w-16 h-16 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-lg" target="_blank">
        <img src={whatsapp} class="h-16 w-16"/>
      </a>
      <Footer />
    </div>
  );
}

export default App;







