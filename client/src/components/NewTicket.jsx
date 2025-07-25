import { useState } from "react"
import api from "../services/api";
import { useMainUser } from "../context/MainUser/useMainUser";

export default function NewTicket({setNewUser}){
    const [newTicket,setNewTicket] = useState({
        title: "",
        description: "",
        categorie: "" 
    })
    const [error,setError] = useState(null);
    const {user} = useMainUser();
    const [loading,setLoading] = useState(false);

    async function handleAddTicket(){

        if(newTicket.title == "" || newTicket.description == "" || newTicket.categorie == ""){
            setError("Somting is messign.");
            return;
        }

        setError("");
        setLoading(true);

        try{

            const response = await api.post(`/ticket/addTicket/${user.id}`,{
                title : newTicket.title,
                description : newTicket.description,
                categorie : newTicket.categorie
            })
            console.log(response.data);

        }catch(err){

            console.log(err.response);

        }finally{

            setLoading(false);
            window.location.reload();
            setNewUser(false);
        }
        
    }

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setNewUser(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[23%] w-[50%] left-[26%] p-6 flex justify-center flex-col items-start rounded-lg font-medium">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
                        {error}
                    </div>
                )}
                    <input 
                        type="text" 
                        min="0" 
                        placeholder="Title"
                        className='border border-gray-300 rounded-md p-2 w-[95%]  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        onChange={(e)=>{setNewTicket({...newTicket,title:e.target.value})}}
                        required/> 
                
                    <textarea 
                        placeholder="Description"
                        max={10}
                        rows={2}
                        className='border border-gray-300 rounded-md p-2 h-full w-[95%] m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        onChange={(e)=>{setNewTicket({...newTicket,description:e.target.value})}}
                        required/>

                    <select  
                        placeholder="Role" id="role" 
                        className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" 
                        onChange={(e)=>{setNewTicket({...newTicket,categorie:e.target.value})}}
                        >
                        <option value="">Select a categorie</option>
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="network">Network</option>
                        <option value="others">Others</option>
                    </select>
                
                <div className="mt-5 ml-2.5 mr-7">
                    <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" onClick={handleAddTicket} disabled={loading}>
                        {loading ? "Adding the request" : "Add request"}
                    </button>
                    <button className="bg-gray-600 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-100 ease-in-out" onClick={()=>{setNewUser(false)}}>
                        Close
                    </button>
                </div>
                
            </div>
        </>
    )
}