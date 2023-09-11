import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/' element={Home}></Route>
        <Route path='/' element={Home}></Route>
        <Route path='/' element={Home}></Route> */}
      </Routes>
<Footer/>
     </Router>
    </div>
  );
}

export default App;
