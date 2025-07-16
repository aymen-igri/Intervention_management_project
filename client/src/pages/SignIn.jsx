import logo from '../assets/app logo.webp'
import '../style/ConectionAnimations.css'
import { useState } from 'react';
import api from '../services/api'
import { useMainUser } from '../context/MainUser/useMainUser';
import { useNavigate } from 'react-router-dom';

export default function SignIn(){

    const {login} = useMainUser();
    const navigate = useNavigate();
    const [connInfo,setConnInfo] = useState({
        email:"",
        password:""
    });
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogIn(){

        if (!connInfo.email || !connInfo.password) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);
        setError("");

        try{

            const response = await api.post('/auth/signin',{email:connInfo.email,password:connInfo.password});
            console.log(response);
            if (!response || !response.data) {
                throw new Error('Invalid response from server');
            }

            const userData = (await response).data

            console.log(userData);

            if (!userData.token) {
                throw new Error('No token received from server');
            }

            localStorage.setItem('token', userData.token);
            login(userData);


            if (userData.role === 'administrator') {
                navigate('/administrator/dashboard');
            } else if (userData.role === 'technician') {
                navigate('/technician/dashboard');
            } else {
                navigate('/user/dashboard');
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
            
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className='bg-gray-100 flex flex-col items-center justify-center rounded-md w-150 p-4 shadow-xl dropdown'>
            <img 
                src={logo} 
                height={200} 
                width={200} 
                className='flex items-center justify-center'
                alt="logo" />
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
                    {error}
                </div>
            )}
            <input 
                type="email" 
                placeholder='Username'
                onChange={(e)=>{setConnInfo({...connInfo,email:e.target.value})}} 
                className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                disabled={loading}
                required/>
            <input 
                type='password' 
                placeholder='Password'
                onChange={(e)=>{setConnInfo({...connInfo,password:e.target.value})}} 
                className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                disabled={loading}
                required/>
            <div className="flex items-center justify-between w-full">
                <button className={`bg-[#24BF5B] text-white px-4 py-2 rounded mb-1 hover:bg-green-700 button-problem font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''} disabled:bg-gray-200 disabled:text-gray-700`} 
                        onClick={handleLogIn}
                        disabled={loading || Object.values(connInfo).some(v => !v)}
                        >
                    {loading ? "loging in ..." : "log in"}
                </button>
                <a className="relative text-[#24BF5B] hover:text-green-700 transition-colors duration-300 ease-in-out font-medium" href="./forgot-password">
                    Forget your password
                </a>
            </div>
        </div>
    )
}