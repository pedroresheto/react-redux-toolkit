
import { useSelector } from 'react-redux';
import './App.css';
import Component from './Component';
import  Left from './Left'
import Right from './Right'

function App() {
  const state = useSelector((state) => state.state.window)
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <p>Here i show you how redux tollkit works on client side</p>
      <div className='box'>
        <Left/>
        <Right/>
      </div>
      { state == 1 ? <Component /> : <p>clic on the text in the part to see component</p> }
      <p>We have initial state and change him using <br/> reducer from  different  components
        Black box and red box are different components,<br/> but they can change initial state.
      </p>
    </div>
  );
}

export default App;