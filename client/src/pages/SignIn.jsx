import logo from '../assets/app logo.webp'
import '../style/ConectionAnimations.css'

export default function SignIn(){
    return(
        <div className='bg-gray-100 flex flex-col items-center justify-center rounded-md w-150 p-4 shadow-xl dropdown'>
            <img 
                src={logo} 
                height={200} 
                width={200} 
                className='flex items-center justify-center'
                alt="logo" />
            <input 
                type="email" 
                placeholder='Username' 
                className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                required/>
            <input 
                type='password' 
                placeholder='Password' 
                className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                required/>
            <div className="flex items-center justify-between w-full">
                <button className="bg-[#24BF5B] text-white px-4 py-2 rounded mb-1 hover:bg-green-700 button-problem font-medium">
                    Log in
                </button>
                <a className="relative text-[#24BF5B] hover:text-green-700 transition-colors duration-300 ease-in-out font-medium" href="./forgot-password">
                    Forget your password
                </a>
            </div>
        </div>
    )
}