import './App.scss';
import Home from './Components/Home';     /*Import, Here we have imported things*/
import Footer from './Components/Footer';
import Book_Appointment from './Components/Book_Appointment';
import HowItWorks from './Components/HowItWorks';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Book_Appointment />
      <Home />         {/*Render, Here we have rendered the imported things*/}
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
