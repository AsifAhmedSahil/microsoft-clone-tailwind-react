
import './App.css';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/Navbar/Navbar';
import Promotion from './Components/Promotion/Promotion';
import Slider from './Components/Slider/Slider';
import Wall from './Components/Wall/Wall';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar/>
      <Slider/>
      <Promotion/>
      <Cards/>
      <Wall/>
    </div>
  );
}

export default App;
