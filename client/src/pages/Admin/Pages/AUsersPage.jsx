import { useState } from 'react';
import UsersList from '../../../components/UsersList'
import '../../../style/userm.css' 
import AddUser from '../../../components/AddUser';

export default function AUsersPage(){

    const [newUser,setNewUser] = useState(false);
    const [searchUser,setSearchUser] = useState({
        id:"",
        name:"",
        email:"",
        role:"",
        status:""
    });

    const users = [
        {id:"1", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:"2", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:"3", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"active" },
        {id:"4", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:"5", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"offline" },
        {id:"6", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"technician" ,status:"active" },
        {id:"7", name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"offline" },
    ]
    return(
        <>
            <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>Users management</h1>
            <div>
                <div className="absolute left-[1.8%] bottom-[75%] flex flex-row justify-around w-full dropdown">
                    <div className="relative left-0 flex flex-row justify-between w-3xl">
                        <input 
                            type="text"
                            onChange={(e)=>{setSearchUser({...searchUser,id:e.target.value})}}
                            min="0"
                            placeholder='Id' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <input 
                            type="text" 
                            onChange={(e)=>{setSearchUser({...searchUser,name:e.target.value})}}
                            min="0"
                            placeholder='Full name' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <input 
                            type="email" 
                            onChange={(e)=>{setSearchUser({...searchUser,email:e.target.value})}}
                            min="0"
                            placeholder='Email' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <select placeholder="Role" id="role" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchUser({...searchUser,role:e.target.value})}}>
                            <option value="">All the roles</option>
                            <option value="admin">Administrator</option>
                            <option value="technician">Technician</option>
                            <option value="user">User</option>
                        </select>
                        <select placeholder="Status" id="status" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchUser({...searchUser,status:e.target.value})}}>
                            <option value="">All the users</option>
                            <option value="active">Active</option>
                            <option value="offline">Offline</option>
                            <option value="banned">Banned</option>
                        </select>
                    </div>
                    <div className="relative right-0 flex flex-row items-center justify-between h-10">
                        <button className="text-green-600 h-11 border shadow-md mr-2 bg-white  hover:text-white hover:bg-green-600 button_problem">
                            Export
                        </button>
                        <button className="text-white h-11 border shadow-md mr-2 bg-green-600  hover:bg-green-800 button_problem" onClick={()=>{setNewUser(true)}}>
                            Add new user
                        </button>
                    </div>
                    
                </div>
                <div className='relative top-35 right-41.5 w-[146%] h-[600px] dropdown'>
                    <UsersList data={users} userSearched={searchUser}/>
                </div>
                {newUser && <AddUser setNewUser={setNewUser} />}
            </div>
        </>
    )
}