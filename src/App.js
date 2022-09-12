import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import {sayHelloAction, clearTextAction} from "./action/action"
import MainPage from "./pages/mainPage/MainPage"

function App() {

  const dispatch = useDispatch();
  const title = useSelector(state => state.title.title)


const changeText = () => {
  //  dispatch({type: "Say_Hello"})
   dispatch(sayHelloAction("Jama"))
}

const clearText = () => {
  //  dispatch({type: "Clear_Text"})
  dispatch(clearTextAction())
}
  return (
    <div className="App">
      {/* {console.log(sayHelloAction())}
      my-app -  {title}
      <button onClick={changeText}>change text</button>
      <button onClick={clearText}>clear text</button> */}
      <MainPage/>

    </div>
  );
}

export default App;
