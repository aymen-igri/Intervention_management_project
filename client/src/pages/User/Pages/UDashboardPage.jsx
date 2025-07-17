import '../../../style/dashboard.css' 
import DataShow from '../../../components/DataShow'
import {useNavigate } from 'react-router-dom';
import Example from '../../../components/StackedBarChart_data';
import { useMainUser } from '../../../context/MainUser/useMainUser';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'September',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'October',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'November',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];




export default function UDashboardPage(){
    const navigate = useNavigate();
    const { user, isAuth } = useMainUser(); // ✅ extract what you need
    console.log(user, isAuth);

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
                <DataShow text="Total submited request" number="50" />
                <DataShow text="Total open tickets" number="50" />
                <DataShow text="Total rejected tickets" number="50" />
                <DataShow text="Total closed tickets" number="50" />
                <DataShow text="Total closed tickets" number="50" />

            </div>
            <div className='h-105 w-full px-4 relative bottom-20 left-5 dropdown'>
                <Example data={data} />
            </div>
        </>
        )
}