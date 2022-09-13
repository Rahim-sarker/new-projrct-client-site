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
import RequireAdminn from "./pages/Login/RequireAdminn";
import AddDoctor from "./pages/DashBoard/AddDoctor";
import Hospitals from "./pages/Hospitals/Hospitals";
import ManageDoctors from "./pages/DashBoard/ManageDoctors";
import ContactUs from "./pages/About/ContactUs";



function App() {
  return (
    <div className="max-w-full mx-auto">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hospital" element={<Hospitals></Hospitals>} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="/appoinment" element={
        <RequireAuth>
          <Appointment />
        </RequireAuth>} />

        <Route path="dashboard" element={ <RequireAuth> <DashBoard /></RequireAuth>}>

        <Route index element={<MyAppointment></MyAppointment>} />
        <Route path="review" element={<MyReview></MyReview>} />
        <Route path="history" element={<MyHistory></MyHistory>} />
        <Route path="users" element={<RequireAdminn><Users></Users></RequireAdminn>} />
        <Route path="addDoctor" element={<RequireAdminn> <AddDoctor></AddDoctor>  </RequireAdminn>} />
        <Route path="manageDoctors" element={<RequireAdminn> <ManageDoctors></ManageDoctors>  </RequireAdminn>} />


        </Route>

        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
