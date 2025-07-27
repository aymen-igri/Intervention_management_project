import { useState } from 'react';
import user_accicon from '../../../assets/user-account.png' 
import '../../../style/dashboard.css'
import ModifyInfoMU from '../../../components/ModifyInfoMU';
import { useMainUser } from '../../../context/MainUser/useMainUser';
import { Pen } from 'lucide-react';
import { format} from 'date-fns'

export default function TProfilePage(){
        const {user} = useMainUser();
        const [changes,setChanges] = useState(false);
    
        return(
            <>
                <div className='z-10 absolute top-[3%] left-[7.2%] flex flex-row items-center justify-between w-[90%] dropdown'>
                    <h1 className='text-2xl text-green-600 font-bold z-10'>Dashboard</h1>
                    <div className='flex items-center justify-center'>
                        <button className='text-green-600 border rounded-full shadow-md text-center bg-white h-13.5 w-13.5 flex items-center justify-center hover:text-white hover:bg-green-600' onClick={()=>{setChanges(true)}}>
                            <Pen color='green' />
                        </button>
                    </div>
                </div>
                <div className='bg-white shadow-md flex justify-start absolute top-25 right-9 rounded-lg w-[89.7%] dropdown'>
                    <img 
                        src={user_accicon} 
                        height={190} 
                        width={190} 
                        className='mr-2 flex-shrink-0'
                        alt="logo" />
                    <div>
                        <div className='flex flex-row justify-between'>
                            <h1 className='font-bold text-black flex justify-start text-6xl'>{user.name+" "+user.familyName}</h1>
                        </div>
                        <div className='w-24'>
                            <h4 className='text-green-700 rounded-full px-3 py-0.5 bg-green-200 text-sm font-medium mt-3'>{user.role}</h4>
                        </div>
                        <div className='flex flex-col items-start mt-5'>
                            <h2 className='text-gray-500 font-medium mr-5 '>{user.email}</h2>
                            <h2 className='text-gray-500 font-medium'>Joined at :{format(new Date(user.joined_at), 'dd-MM-yyyy')}</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-white  items-start shadow-md flex flex-col absolute top-77 right-9 p-3 rounded-lg w-[89.7%] dropdown'>
                    <h2 className='font-bold text-4xl ml-3 text-black'>About</h2>
                    <p className='text-gray-800 mt-2 ml-3'>{user.about}</p>
                </div>
                {changes && <ModifyInfoMU setChanges={setChanges}/>}
            </>
        )
}