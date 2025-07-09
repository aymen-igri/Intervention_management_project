import '../../style/dashboard.css'
import logo from '../../assets/app logo without name.png'
import Dashicon from '../../assets/analysis.png'
import usericon from '../../assets/team-management.png'
import ticketicon from '../../assets/ticket.png'
import user_accicon from '../../assets/user-account.png' 
import Notificon from '../../assets/notification-bell (1).png'
import SideBare from '../../components/SideBare'
import DataShow from '../../components/DataShow'

const SideBareContent = ()=>{
    return(
        <>
            <div>
                    <a className='flex items-start justify-start m-3 mb-12 p-2 rounded-2xl'>
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
                    </a>
                </div>
                <div>
                    <a className='flex items-center justify-start mt-3 mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'>
                        <img 
                            src={Dashicon} 
                            height={30} 
                            width={30} 
                            className='mr-2 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">Dashboard</h2>
                        </div>
                    </a>
                </div>
                <div>
                    <a className='flex items-center justify-start mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'>
                        <img 
                            src={usericon} 
                            height={30} 
                            width={30} 
                            className='mr-3 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">Users</h2>
                            <h2 className="block text-l font-bold leading-tight">management</h2>
                        </div>
                    </a>
                </div>
                <div>
                    <a className='flex items-center justify-start mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'>
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
                    </a>
                </div>
                <div>
                    <a className='flex items-center justify-start mx-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'>
                        <img 
                            src={user_accicon} 
                            height={30} 
                            width={30} 
                            className='mr-2 flex-shrink-0'
                            alt="logo" />
                        <div className=" flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-green-600">
                            <h2 className="block text-l font-bold leading-tight">Dashboard</h2>
                        </div>
                    </a>
                </div>
        </>
    );
};


export default function Dashboard(){
    return (
        <>
            <SideBare SideBareContent={SideBareContent} />
            <div className='z-10 absolute top-[3%] left-[7%] flex flex-row items-center justify-between w-[90%]'>
                <h1 className='text-2xl text-green-600 font-bold z-10'>Dashboard</h1>
                <div className='flex items-center justify-center'>
                    <a>
                    <img 
                    src={Notificon} 
                    height={50} 
                    width={50} 
                    className='mr-2 flex-shrink-0'
                    alt="logo" />
                    </a>
                    <button className='text-black bg-gray-100'>
                        AI
                    </button>
                </div>
            </div>
            <div className='relative bottom-45 left-[3%] flex justify-items-center'>
                <DataShow text="Total users" number="50" />
                <DataShow text="Total Interventions" number="50" />
                <DataShow text="Average Response Time" number="50" />
                <DataShow text="SLA Compliance Rate" number="50" />
                <DataShow text="Top Non-Compliant Categories" number="50" />
            </div>
            
        </>
    )
}