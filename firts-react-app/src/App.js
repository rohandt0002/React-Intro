import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import {useState} from "react";

function App() {
  const author ="rk";

  const [name, setName] = useState("DT");
  return (
    <div className="App">
      
      <p>Class Component:</p>
      <ClassComponent />
      {/* <ClassComponent /> */}
      <br />

      <p>Function Component:</p>
      {/* <FunctionComponent name={"DevTown"} age={20} author={author}/> */}
      <FunctionComponent name={name} age={20} author={author} setName={setName}/>
      {/* <FunctionComponent /> */}
      {/* <FunctionComponent />
      <FunctionComponent />
      <FunctionComponent />
      <FunctionComponent /> */}


    </div>
  );
}

export default App;
