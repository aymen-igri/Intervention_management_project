import SpicificUser from '../../../components/SpicificUser'
import UsersList from '../../../components/UsersList'
import '../../../style/userm.css' 

export default function UsersPage(){

    const users = [
        {id:1, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:2, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:3, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"superviser" ,status:"active" },
        {id:4, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:1, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"offline" },
        {id:2, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"Technician" ,status:"active" },
        {id:3, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"superviser" ,status:"offline" },
        {id:4, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active" },
        {id:1, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"Technician" ,status:"active" },
        {id:2, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"active" },
        {id:3, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"offline" },
        {id:4, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"user" ,status:"active" },
    ]
    return(
        <>
            <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>Users management</h1>
            <div>
                <div className="absolute left-[1.8%] bottom-[75%] flex flex-row justify-around w-full dropdown">
                    <div className="relative left-0 flex flex-row justify-between w-3xl">
                        <input 
                        type="number"
                        min="0"
                        placeholder='Id' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                        <input 
                        type="text" 
                        min="0"
                        placeholder='Full name' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                        <input 
                        type="email" 
                        min="0"
                        placeholder='Email' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                        <input 
                        type="" 
                        min="0"
                        placeholder='Full name' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                        <select placeholder="Role" id="role" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                            <option value="volvo">Administrator</option>
                            <option value="mercedes">Technician</option>
                            <option value="audi">User</option>
                        </select>
                    </div>
                    <div className="relative right-0 flex flex-row items-center justify-between h-10">
                        <button className="text-green-600 h-11 border shadow-md mr-2 bg-white  hover:text-white hover:bg-green-600 button_problem">
                            Export
                        </button>
                        <button className="text-white h-11 border shadow-md mr-2 bg-green-600  hover:bg-green-800 button_problem">
                            Add new user
                        </button>
                    </div>
                    
                </div>
                <div className='relative top-20 right-41.5 w-[146%] h-[200%] dropdown'>
                    <UsersList data={users}/>
                </div>
            </div>
        </>
    )
}