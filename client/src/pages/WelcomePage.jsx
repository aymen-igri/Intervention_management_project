import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useMainUser } from "../context/MainUser/useMainUser";

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

            if (response.data.role === 'administrator') {
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
        <button className="bg-red-700" onClick={handleUserToken}>
            enter
        </button>
    )
}