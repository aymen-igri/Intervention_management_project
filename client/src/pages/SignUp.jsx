import logo from '../assets/app logo.webp'
import '../style/ConectionAnimations.css'

export default function SignUp() {
    return(
        <div className="flex justify-between items-center">
            <div className='bg-gray-100  relative right-[5%] flex flex-col items-center justify-center rounded-md w-150 p-5 shadow-xl from-left'>
                <input 
                    type="text" 
                    placeholder='Name' 
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <input 
                    type="text" 
                    placeholder='family name' 
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <input 
                    type="text" 
                    placeholder='Phone number' 
                    className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
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
                        Sign up
                    </button>
                    <a className="relative text-[#24BF5B] hover:text-green-700 transition-colors duration-300 ease-in-out font-medium" href="./signin">
                        I have an account
                    </a>
                </div>
            </div>
            <div className='relative left-[5%] from-right'>
                <img 
                src={logo} 
                height={350} 
                width={350} 
                alt="logo" />
            </div>
            
        </div>
    )
}