import logo from "./logo.svg";
import "./App.css";
import Navigation from "./pages/Shared/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Appointment from "./pages/Appointment/Appointment";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";

function App() {
  return (
    <div className="max-w-full mx-auto px-10">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={
        <RequireAuth>
          <Appointment />
        </RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
