import './App.css';
import LifeCycleMethods from './componants/LifeCycleMethods';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"
import UseEffectHook from './componants/UseEffectHook';
function App() {
const [visible, setVisible]=useState(true)
const [visible2, setVisible2]=useState(true)
  return (
    <div className="App" >
    <button classNmame="btn btn-danger" onClick={()=>setVisible(!visible)}>Show/Hide</button>
     {visible && <LifeCycleMethods/>}

     <button className="btn btn-success" onClick={()=>setVisible2(!visible2)}>Show/Hide</button>
     {visible2 && <UseEffectHook/>}
    </div>
  );
}

export default App;
