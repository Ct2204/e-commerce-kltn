import './App.css';
import DefaultLayout from './containers/DefaultLayout';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DefaultLayout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
