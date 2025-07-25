import { useState } from "react";
import api from "../services/api";

export default function AddUser({setNewUser}){
    const [newUserData,setNewUserData] = useState({
        name:"",
        familyName:"",
        email: "",
        roleId: 0,
        phone: "",
        password: "",
    });
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    async function handleAddUser(){

        if(newUserData.name == "" || newUserData.familyName == "" || newUserData.email == "" || newUserData.role == 0 || newUserData.phone == "" || newUserData.password == ""){
            setError("Somting is messign.");
            return;
        }

        setError("");
        setLoading(true);

        try{

            const response = await api.post(`/user/AddUser`,newUserData);
            console.log(response.data);
            setError("");
            window.location.reload();
            setNewUser(false);


        }catch(err){
            if (err.response && err.response.status === 409) {
                setError("Email already exists.");
            } else {
                setError("Something went wrong. Please try again.");
            }
            console.log(err.response);
        }finally{
            setLoading(false);
            
        }

    }

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setNewUser(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[20%] left-[30%] p-6 flex justify-center flex-col items-start rounded-lg font-medium">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
                        {error}
                    </div>
                )}
                <div>
                    <input 
                    type="text" 
                    min="0" 
                    placeholder="Name"
                    onChange={(e)=>{setNewUserData({...newUserData,name:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/> 
                    <input 
                    type="text" 
                    min="0" 
                    placeholder="Family name"
                    onChange={(e)=>{setNewUserData({...newUserData,familyName:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                </div>
                
                <input 
                    type="email" 
                    min="0" 
                    placeholder="Email"
                    onChange={(e)=>{setNewUserData({...newUserData,email:e.target.value});setError("")}}
                    className='border border-gray-300 rounded-md p-2  h-10 w-[95%] m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                
                <div className="flex justify-between">
                    <select  placeholder="Role" id="role" className="border border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setNewUserData({...newUserData,roleId:e.target.value})}}>
                        <option value="2">Administrator</option>
                        <option value="3">Technician</option>
                        <option value="4">User</option>
                    </select>
                    <input 
                        type="text" 
                        min="0" 
                        placeholder="Phone number"
                        onChange={(e)=>{setNewUserData({...newUserData,phone:e.target.value})}}
                        className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/> 
                </div>
                <input 
                    type="password" 
                    min="0" 
                    placeholder="Password"
                    onChange={(e)=>{setNewUserData({...newUserData,password:e.target.value})}}
                    className='border w-[95%] border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>

                
                <div className="mt-5 ml-2.5 mr-7">
                    <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" onClick={handleAddUser}>
                        {loading ? "Adding a new user" : "Add"}
                    </button>
                    <button className="bg-gray-600 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-100 ease-in-out" onClick={()=>{setNewUser(false)}}>
                        Close
                    </button>
                </div>
                
            </div>
        </>
    )
}