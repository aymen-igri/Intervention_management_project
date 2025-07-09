import MailIcon from '../assets/email.png'

export default function ForgetPasswd(){
    return(
       <div className=' bg-gray-100 shadow-xl flex flex-col items-center justify-center rounded-md w-150 p-4 dropdown'>
                   <img 
                       src={MailIcon} 
                       height={80} 
                       width={80} 
                       className='flex items-center justify-center'
                       alt="logo" />
                    <h6 className='text-[#24BF5B] mb-[3%]'>
                        Rewrite your email that looks like: a*************@gmail.com
                    </h6>
                    {/* the alert should be here */}
                   <input 
                       type="email" 
                       placeholder='Email' 
                       className='border border-gray-300 rounded-md p-2 mb-4 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                       required/>
                   <button className="bg-[#24BF5B] text-white px-4 py-2 rounded mb-1 hover:bg-green-700 button-problem font-medium">
                       Log in
                   </button>
               </div>
    )
}