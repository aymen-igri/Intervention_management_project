import { useState } from 'react'
import logo from '../assets/OCP_Group.svg.png'
import '../style/ConectionAnimations.css'
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [user,setUser] = useState({name:"",
                                     familyName:"",
                                     phone:"",
                                     email:"",
                                     password:""
                                    });
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    

    async function handleSignUp(){

        if ( user.name== "" && user.familyName =="" &&  user.phone == "" && user.email == "" && user.password == ""){
            setError("Somting is messing");
        }

        setLoading(true);
        setError("");

        try{

            const response = await api.post('/auth/signup',{
                                                                name : user.name,
                                                                familyName : user.familyName,
                                                                phone : user.phone,
                                                                email : user.email,
                                                                password : user.password
                                                           });
            
            console.log(response.data);

            if (!response || !response.data) {
                throw new Error('Invalid response from server');
            }else if(response.status === 409){
                setError("Email already used");
            }else{
                navigate('/signin')
            }

        }catch(err){

            console.error('Login error:', err);
            if (err.response) {
                    // Server responded with error status
                const errorMessage = err.response.data?.message || 'Login failed';
                setError(errorMessage);
            } else if (err.request) {
                // Request was made but no response received
                setError('Unable to connect to server. Please check your connection.');
            } else {
                    // Something else happened
                setError(err.message || 'An unexpected error occurred');
            }

        }finally{

            setLoading(false);
            
        }
    }

    return(
        <div className="flex justify-between items-center">
            <div className='bg-gray-100  relative right-[15%] flex flex-col items-center justify-center rounded-md w-150 p-5 shadow-xl from-left'>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
                        {error}
                    </div>
                )}
                <input 
                    type="text" 
                    placeholder='Name' 
                    onChange={(e)=>{setUser({...user,name:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <input 
                    type="text" 
                    placeholder='family name' 
                    onChange={(e)=>{setUser({...user,familyName:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <input 
                    type="text" 
                    placeholder='Phone number' 
                    onChange={(e)=>{setUser({...user,phone:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <input 
                    type="email" 
                    placeholder='Username' 
                    onChange={(e)=>{setUser({...user,email:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <input 
                    type='password' 
                    placeholder='Password' 
                    onChange={(e)=>{setUser({...user,password:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    disabled={loading}
                    required/>
                <div className="flex items-center justify-between w-full">
                    <button className="bg-[#24BF5B] text-white px-4 py-2 rounded mb-1 hover:bg-green-700 button-problem font-medium disabled:bg-gray-200 disabled:text-gray-700" onClick={handleSignUp} disabled={loading || Object.values(user).some(v => !v)} >
                        {loading ? "loging in ..." : "Sign up"}
                    </button>
                    <a className="relative text-[#24BF5B] hover:text-green-700 transition-colors duration-300 ease-in-out font-medium" href="./signin">
                        I have an account
                    </a>
                </div>
            </div>
            <div className='relative left-[10%] from-right'>
                <img 
                src={logo} 
                height={200} 
                width={200} 
                alt="logo" />
            </div>
            
        </div>
    )
}