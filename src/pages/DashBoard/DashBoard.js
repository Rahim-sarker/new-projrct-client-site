import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link, Outlet} from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useDoctor from '../../hooks/useDoctor';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [doct] = useDoctor(user);
  
    return (
        <div class="drawer drawer-mobile">
        <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content  m-3">
        <h1 className='text-2xl text-center font-bold text-purple-500'><span>Welcome</span> {user.displayName}</h1>
          <Outlet></Outlet>
        </div> 


        <div class="drawer-side">
          <label for=" dashboard-sidebar" class="drawer-overlay "></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {
            doct && <>
           
             <li className='text-purple-500 font-bold text-1xl'><Link to='/dashboard/patients'>Your Patients</Link></li>

            </>
            
           }

           {
            user && <>
              <li><Link to='/dashboard'>My Appointments</Link></li>
              <li><Link to='/dashboard/review'>Test Report</Link></li>
              {/* <li><Link to='/dashboard/history'>History</Link></li> */}
            </>
           }
           
           
           { admin && <>
               <li className='text-purple-500 font-bold text-1xl'><Link to='/dashboard/users'>All Users</Link></li>
               <li className='text-purple-500 font-bold text-1xl'><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
               <li className='text-purple-500 font-bold text-1xl'><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
           </>}
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;