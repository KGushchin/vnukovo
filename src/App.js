import logo from './logo.svg';
import './App.css';
import Header from "./modules/Header/Header/Header.jsx";
import Tablo from "./modules/Tablo/Tablo/Tablo";
import HowToGo from "./modules/HowToGo/HowToGo/HowToGo";
import Services from "./modules/Services/Services/Services";
import Footer from "./modules/Footer/Footer";
import Support from './modules/Support/Support';
function App() {
  return (
    <div className="App">
      <Header/>
        <p>Онлайн-табло</p>
        <Tablo/>
      <HowToGo/>
        <Services/>
        <Support/>
        <Footer/>
    </div>
  );
}

export default App;
