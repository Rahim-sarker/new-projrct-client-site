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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./pages/DashBoard/DashBoard";
import MyAppointment from "./pages/DashBoard/MyAppointment";
import MyReview from "./pages/DashBoard/MyReview";
import MyHistory from "./pages/DashBoard/MyHistory";
import Users from "./pages/DashBoard/Users";






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

        <Route path="dashboard" element={ <RequireAuth> <DashBoard /></RequireAuth>}>

        <Route index element={<MyAppointment></MyAppointment>} />
        <Route path="review" element={<MyReview></MyReview>} />
        <Route path="history" element={<MyHistory></MyHistory>} />
        <Route path="users" element={<Users></Users>} />


        </Route>

        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
