export default function AddUser({setNewUser}){
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setNewUser(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[20%] left-[30%] p-6 flex justify-center flex-col items-start rounded-lg font-medium">
                <div>
                    <input 
                    type="text" 
                    min="0" 
                    placeholder="Name"
                    className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/> 
                    <input 
                    type="text" 
                    min="0" 
                    placeholder="Family name"
                    className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                </div>
                
                <input 
                    type="email" 
                    min="0" 
                    placeholder="Email"
                    className='border border-gray-300 rounded-md p-2  h-10 w-[95%] m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                
                <div className="flex justify-between">
                    <select  placeholder="Role" id="role" className="border border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                        <option value="volvo">Administrator</option>
                        <option value="mercedes">Technician</option>
                        <option value="audi">User</option>
                    </select>
                    <input 
                        type="text" 
                        min="0" 
                        placeholder="Phone number"
                        className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/> 
                </div>
                
                <div>
                    <input 
                    type="password" 
                    min="0" 
                    placeholder="Password"
                    className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                    <input 
                    type="password" 
                    min="0" 
                    placeholder="Comfirm the password"
                    className='border border-gray-300 rounded-md p-2  h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                </div>
                
                <div className="mt-5 ml-2.5 mr-7">
                    <button className="bg-green-600 text-white mr-2 ">
                        Add
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setNewUser(false)}}>
                        Close
                    </button>
                </div>
                
            </div>
        </>
    )
}