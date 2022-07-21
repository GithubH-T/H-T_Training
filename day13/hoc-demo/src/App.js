import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';
import SliderComponent from './SliderComponent';
import HighOrderComponent from './HighOrderComponent';

function App(props) {
  const UpdatedSlider = HighOrderComponent(SliderComponent) ;
  const UpdatedBUtton = HighOrderComponent(ButtonComponent); 
  return (
    <div>
         <UpdatedSlider/> <p></p>
         <UpdatedBUtton/>
    </div>
  )
}
export default App;
