import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import BodyContent from './components/bodyContent/BodyContent';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Slider/>
     <BodyContent/>
     <Footer/>
    </div>
  );
}

export default App;
