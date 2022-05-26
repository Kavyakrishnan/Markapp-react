import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Student from './Component/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewmark from './Component/Viewmark';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Student/>}/>
        <Route path="/view" exact element={<Viewmark/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
