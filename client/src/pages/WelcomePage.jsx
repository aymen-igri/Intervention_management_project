import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useMainUser } from "../context/MainUser/useMainUser";
import logo from '../assets/images-removebg-preview.png'
import img from '../assets/greentech2.png'
import { Link } from "react-router-dom";
import { Ticket, CircleUser, Cpu, BadgeAlert, Facebook, Instagram, Twitter, Linkedin} from 'lucide-react';
import '../style/WelcomePageStyle.css';


export default function WelcomePage(){

    const navigate = useNavigate();
    const {login} = useMainUser();

    async function handleUserToken(){

        const token = localStorage.getItem('token');

        if(!token){
            navigate('/signin')
        }

        try{

            const response = await api.post('/auth/getUser',{token:token})
            console.log(response);
            if (!response || !response.data) {
                throw new Error('Invalid response from server');
            }

            login(response.data);
            console.log(response.data);

            if(response.data.status === 'banned'){
                navigate('/banned');
            }
            else if (response.data.role === 'administrator') {
                navigate('/administrator/dashboard');
            } else if (response.data.role === 'technician') {
                navigate('/technician/dashboard');
            } else {
                navigate('/user/dashboard');
            }
        
        }catch(err){
            console.error( err);
            if (err.response) {
                    // Server responded with error status
                console.log(err.response.data?.message || 'Login failed');
            }
        }

    }

    return (
        <>
            <div className="w-full bg-white absolute top-0 left-0 p-3 flex flex-row items-center shadow-xl z-20 tobottom_animation">
                <img 
                    src={logo} 
                    height={100} 
                    width={100} 
                    className='flex items-center justify-center ml-5'
                    alt="logo" />
                <div className="absolute right-0 flex gap-10 mr-10">
                    <Link className="text-green-600 text-lg hover:text-green-400 transition-colors duration-100 ease-in-out" >About us</Link>
                    <Link className="text-green-600 text-lg hover:text-green-400 transition-colors duration-100 ease-in-out" onClick={()=>{handleUserToken()}}>Sign in</Link>
                </div>
            </div>
            <div className="z-10 ">
                <img 
                    src={img} 
                    width={window.innerWidth}
                    height={window.innerHeight}
                    className='absolute top-13 left-0 flex items-center justify-center z-5 shadow-xl dropdown_animation'
                    alt="logo" />
                <div className="absolute bg-black z-6 w-full h-[90%] top-0 left-0 opacity-0 hover:opacity-30 transition-all duration-300 ease-in-out dropdown_animation"></div>
                <div className="text-8xl absolute top-50 left-4 font-bold z-50 text-cente dropdown_animation">Welcome to our <span className="text-green-400 underline">help center</span></div>
                <div className="text-2xl absolute top-80 left-5 mr-40 ml-38 font-bold z-50 text-cente dropdown_animation">Do you have any technical incident ? get your ticket so we can resolve it, helping you is our mission</div>
                <button className="absolute top-110 right-145 bg-green-600 z-50 rounded-lg hover:bg-green-500 transition-all duration-100 ease-in-out dropdown_animation" onClick={()=>{navigate('/signup')}}>
                    Lets start
                </button>
            </div>
                <div className="relative top-110 flex flex-row items-center justify-around dropdown_animation">
                    <div className="bg-white border-1 border-green-700 rounded-lg p-6 flex flex-col items-center max-w-[20%] h-65 hover:shadow-md hover:shadow-green-700 transition-shadow duration-100 ease-in-out">
                      <CircleUser color="green" className="bg-green-200 w-[30%] h-[30%] p-1 rounded-lg " />
                        <h3 className="text-xl mt-3 text-green-700 font-medium">Create a new account</h3> 
                    </div>
                    <div className="bg-white border-1 border-blue-700 rounded-lg p-6 flex flex-col items-center max-w-[20%] h-65 hover:shadow-md hover:shadow-blue-700 transition-shadow duration-100 ease-in-out">
                      <Ticket color="blue" className="bg-blue-200 w-[30%] h-[30%] p-1 rounded-lg " />
                        <h3 className="text-xl mt-3 text-blue-700 font-medium">Take you ticket to make our technicians see your request</h3> 
                    </div>
                    <div className="bg-white border-1 border-purple-800 rounded-lg p-6 flex flex-col items-center max-w-[20%] h-65 hover:shadow-md hover:shadow-purple-800 transition-shadow duration-100 ease-in-out">
                      <Cpu color="purple" className="bg-purple-200 w-[30%] h-[30%] p-1 rounded-lg " />
                        <h3 className="text-xl mt-3 text-purple-800 font-medium">Communicate with our technician so he can resolve your problem</h3> 
                    </div>
                    <div className="bg-white border-1 border-red-500 rounded-lg p-6 flex flex-col items-center max-w-[20%] h-65 hover:shadow-md hover:shadow-red-500 transition-shadow duration-100 ease-in-out">
                      <BadgeAlert color="red" className="bg-red-200 w-[30%] h-[30%] p-1 rounded-lg " />
                        <h3 className="text-xl mt-3 text-red-500 font-medium">Reject the ticket so we can reassign the ticket to anothe tech until we resolve your problem</h3> 
                    </div>
                </div>

                <footer className="bg-green-100 h-50 absolute top-240 left-0 w-full border-1 border-green-50">
                    <div className="flex flex-row items-center justify-between w-full py-4 px-8">
                        <div className="flex items-center">
                            <img 
                                src={logo} 
                                height={150} 
                                width={150} 
                                alt="logo" />
                        </div>
                        <div className="flex items-center">
                            <h4 className="text-gray-500">© 2024 OCP. All rights reserved.</h4>
                        </div>
                    </div>
                    <div>
                        <div className="ml-8 mt-5">
                            <p className="text-start text-gray-500">Email: OCPGroupEmail@gmail.com</p>
                            <p className="text-start text-gray-500">Phone: +212606060606</p>
                        </div>
                        <div className="flex flex-row justify-end mt-3 mr-9">
                            <Facebook color="green" className="mr-3" />
                            <Instagram color="green" className="mr-3" />
                            <Linkedin color="green" className="mr-3" />
                            <Twitter color="green" />

                        </div>
                    </div>
                </footer>
        </>
        
    )
}