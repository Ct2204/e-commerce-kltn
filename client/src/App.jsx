import "./App.css";
import DefaultLayout from "./containers/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminLayout from "./containers/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminLayout />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
