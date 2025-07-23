import BannImage from '../../public/Banned-removebg-preview.png'
import '../style/BannedStyle.css'
import { Link } from 'react-router-dom'

export default function BannedUserPage() {
    return(
        <>
            <img 
                src={BannImage} 
                height={500} 
                width={500} 
                className='absolute top-45 flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 BannedAnimation'
                alt="logo" />
            <div className='mt-70 MessageAnimation'>
                <h1 className='text-4xl text-red-600 font-bold text-center'>You are banned from the system</h1>
                <div className='text-orange-500 bg-orange-50 mt-5 mb-5 border-1 border-orange-500 rounded-lg p-3'>
                    <h3 className='text-2xl'>Reson: violating our terms of service</h3>
                </div>
                <div className='text-gray-500 bg-gray-100 mt-5 mb-5 border-1 border-gray-500 rounded-lg p-3'>
                    <p className='text-xl'>If you think this is a mistake, please contact support: <Link>supportOCP@gmail.com</Link></p>
                </div>
            </div>
        </>
    )
}