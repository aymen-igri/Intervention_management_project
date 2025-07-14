export default function NewTicket({setNewUser}){
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setNewUser(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[23%] w-[50%] left-[26%] p-6 flex justify-center flex-col items-start rounded-lg font-medium">
                    <input 
                        type="text" 
                        min="0" 
                        placeholder="Title"
                        className='border border-gray-300 rounded-md p-2 w-[95%]  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/> 
                
                    <textarea 
                        placeholder="Description"
                        className='border border-gray-300 rounded-md p-2 h-full w-[95%] m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>

                    <select  placeholder="Role" id="role" className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="network">Network</option>
                        <option value="others">Others</option>
                    </select>
                
                <div className="mt-5 ml-2.5 mr-7">
                    <button className="bg-green-600 text-white mr-2 ">
                        Add request
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setNewUser(false)}}>
                        Close
                    </button>
                </div>
                
            </div>
        </>
    )
}