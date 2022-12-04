
import './App.css';
import Business from './Components/Business/Business';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Media from './Components/Media/Media';
import Navbar from './Components/Navbar/Navbar';
import Promotion from './Components/Promotion/Promotion';
import SkillsWall from './Components/SkillsWall/SkillsWall';
import Slider from './Components/Slider/Slider';
import Wall from './Components/Wall/Wall';

function App() {
  return (
    <div className='max-w-[1640px] mx-auto'>
      <Navbar/>
      <Slider/>
      <Promotion/>
      <Cards/>
      <Wall/>
      <Business/>
      <SkillsWall/>
      <Media/>
      
      <Footer/>
    </div>
  );
}

export default App;
