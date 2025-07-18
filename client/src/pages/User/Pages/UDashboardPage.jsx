import '../../../style/dashboard.css' 
import DataShow from '../../../components/DataShow'
import {useNavigate } from 'react-router-dom';
import Example from '../../../components/StackedBarChart_data';
import { useMainUser } from '../../../context/MainUser/useMainUser';
import { useState , useEffect } from 'react';
import api from '../../../services/api';




export default function UDashboardPage(){
    const navigate = useNavigate();
    const { user, isAuth } = useMainUser();
    const [data,setData] = useState([]);
    const [cartData,setCartData] = useState({})
    console.log(user, isAuth);

    useEffect(() => {

            api.get(`/ticket/getStatisticsForUser/${user.id}`)
                .then(res => {setData((res.data));console.log(res.data)})
                .catch(console.error);
            
            api.get(`/ticket/getNumberTiketsByStatus/${user.id}`)
                .then(res => {setCartData((res.data));console.log(res.data)})
                .catch(console.error);

    },[user.id])

    return (
        <>
            <div className='z-10 absolute top-[3%] left-[7.2%] flex flex-row items-center justify-between w-[90%] dropdown'>
                <h1 className='text-2xl text-green-600 font-bold z-10'>Dashboard</h1>
                <div className='flex items-center justify-center'>
                    <button className='text-green-600 border shadow-md bg-white button_problem h-13.5 hover:text-white hover:bg-green-600' onClick={()=>{navigate("/user/myprofile")}}>
                      {user.name[0]+user.familyName[0]}
                    </button>
                </div>
            </div>
            <div className='relative bottom-20 left-[2.7%] flex flex-row justify-items-between dropdown'>
                <DataShow text="Total request" number={cartData.allTickets} />
                <DataShow text="Total open tickets" number={cartData.open} />
                <DataShow text="Total Pending tickets" number={cartData.inProgress} />
                <DataShow text="Total rejected tickets" number={cartData.rejected} />
                <DataShow text="Total closed tickets" number={cartData.closed} />
            </div>
            <div className='h-105 w-full px-4 relative bottom-20 left-5 dropdown'>
                <Example data={data} />
            </div>
        </>
        )
}