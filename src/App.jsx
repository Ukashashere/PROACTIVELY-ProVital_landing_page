import './App.scss';
import Home from './Components/Home';     /*Import, Here we have imported things*/
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import HowItWorks from './Components/HowItWorks';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Home />         {/*Render, Here we have rendered the imported things*/}
      <HowItWorks />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
