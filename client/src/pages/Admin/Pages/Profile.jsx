import user_accicon from '../../../assets/user-account.png' 

export default function Profile(){
    const mainUser ={id:1, name:"aymen", email:"aymen@gmail.com" ,phone:"0000000000" ,role:"admin" ,status:"active", created:"23/07/2014", about:"ghghg nfdkdhg erehfdfdjf ddndfdnfls djfhfa dfhdj dhfdfjdf hdfjdhf fjksffskf dlshlfkfslkjf" };

    return(
        <>
            <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>Profile</h1>
            <div className='bg-white shadow-md flex justify-start absolute top-25 right-11 rounded-lg w-[89%]'>
                <img 
                    src={user_accicon} 
                    height={230} 
                    width={230} 
                    className='mr-2 flex-shrink-0'
                    alt="logo" />
                <div>
                    <div className='flex flex-row justify-between'>
                        <h1 className='font-bold text-black flex justify-start text-6xl'>{mainUser.name}</h1>
                    </div>
                    <div className='w-15'>
                        <h4 className='text-amber-700 rounded-full px-3 py-0.5 bg-amber-200 text-sm font-medium mt-3'>{mainUser.role}</h4>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h2 className='text-gray-500 font-medium mr-5 '>{mainUser.email}</h2>
                        <h2 className='text-gray-500 font-medium'>Joined at :{mainUser.created}</h2>
                    </div>
                </div>
            </div>
            <div className='bg-white text-black items-start shadow-md flex flex-col absolute top-85 right-11 p-3 rounded-lg w-[89%]'>
                <h2 className='font-bold text-4xl'>About</h2>
                <p>{mainUser.about}</p>
            </div>
        </>
    )
}