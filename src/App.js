import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Child from './Child';
import {createContext }from 'react';

export const mycontext=createContext();

function App() {

    const course={
      courseId:"101",
      courseName:"ReactJs",
      time:"9.30 Am to 10:30 Am"
    }

  return (
    <div className="App">
      
      <h1>React-Component..</h1>
      <h1>Parent (Top most) Component</h1>
      <mycontext.Provider value={course}>
              <Child />
      </mycontext.Provider>
      
    </div>
  );
}

export default App;

