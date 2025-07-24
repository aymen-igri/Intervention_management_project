import '../../style/dashboard.css'
import logo from '../../assets/OCP Group.png'
import Dashicon from '../../assets/analysis.png'
import ticketicon from '../../assets/ticket.png'
import user_accicon from '../../assets/user-account.png' 
import SideBare from '../../components/SideBare'
import { Link, Outlet } from 'react-router-dom';


const SideBareContent = ()=>{
    return(
        <>
            <div>
                    <Link className='flex items-start justify-start m-3 mb-12 p-2 rounded-2xl' to='/technician/dashboard'>
                        <img 
                            src={logo} 
                            height={50} 
                            width={50} 
                            className='mr-2 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">Intervention</h2>
                            <h2 className="block text-l font-bold leading-tight">manager</h2>
                        </div>
                      
                    </Link>
                </div>
                <div>
                    <Link className='flex items-center justify-start mt-3 mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200' to='/technician/dashboard'>
                        <img 
                            src={Dashicon} 
                            height={30} 
                            width={30} 
                            className='mr-2 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">Dashboard</h2>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className='flex items-center justify-start mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200' to='/technician/mytickets'>
                        <img 
                            src={ticketicon} 
                            height={30} 
                            width={30} 
                            className='mr-3 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">tickets</h2>
                            <h2 className="block text-l font-bold leading-tight">management</h2>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className='flex items-center justify-start mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200' to='/technician/myprofile'>
                        <img 
                            src={user_accicon} 
                            height={30} 
                            width={30} 
                            className='mr-2 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">Profile</h2>
                        </div>
                    </Link>
                </div>
        </>
    );
};



export default function TechnicianPage(){
    return(
        <>
            <SideBare SideBareContent={SideBareContent} />
            <Outlet />
        </>
    )
}