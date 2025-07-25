import { useState } from "react";
import api from "../services/api";

export default function SpicificUser({user,setDetails}){

    const [role,setRole] = useState(user.roleId);

    async function handleUpdateRole(){

        try{
            const response = await api.patch(`/user/updateRole/${user.id}`,{roleId: role});
            console.log(response.data);
            window.location.reload();
            setDetails(false);
        }catch(err){
            console.log(err.response);
        }
        
    }

    async function handleBanUser(){

        try{
            const response = await api.patch(`/user/banUser/${user.id}`);
            console.log(response.data);
            window.location.reload();
            setDetails(false);
        }catch(err){
            console.log(err.response);
        }
        
    }

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[20%] left-[35%] p-6 flex justify-center flex-col items-start rounded-lg font-medium">
                <h3 className="mb-3">Id: {user.id}</h3>
                <h3 className="mb-3">Name: {user.name+" "+user.familyName}</h3>
                <h3 className="mb-3">Email: {user.email}</h3>
                <h3 className="mb-3">Phone number: {user.phone}</h3>
                <div className="flex flex-row justify-between items-center mb-3">
                    <h3 className="mr-3">Role: </h3>
                    <select value={role} placeholder="Role" id="role" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setRole(e.target.value)}}>
                        <option value="2">Administrator</option>
                        <option value="3">Technician</option>
                        <option value="4">User</option>
                    </select>
                </div>
                <h3 className="mb-3">status: {user.status}</h3>
                <div className="mt-7 mr-7">
                    <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-150 ease-in-out " onClick={handleUpdateRole}>
                    Keep changes
                    </button>
                    <button className="bg-red-600 text-white mr-2 rounded-lg hover:bg-red-400 transition-colors duration-150 ease-in-out" onClick={handleBanUser}>
                        Ban
                    </button>
                    <button className="bg-gray-500 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-150 ease-in-out" onClick={()=>{setDetails(false)}}>
                        Close
                    </button>
                </div>
                
            </div>
        </>
    )
}