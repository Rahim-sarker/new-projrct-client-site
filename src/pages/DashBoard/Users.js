import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {
    const {data: users, isLoading,refetch} = useQuery('users',()=>fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl text-bold-700">All users: {users.length}</h1>

            <div class="overflow-x-auto mx-5">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Make Admin</th>
        <th>Remove Admin</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map(user => <UserRow
        key={user._id}
        user={user}
        refetch={refetch}
        ></UserRow>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;