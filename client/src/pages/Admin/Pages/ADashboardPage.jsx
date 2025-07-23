import '../../../style/dashboard.css' 
import DataShow from '../../../components/DataShow'
import LineChar_data from '../../../components/LineChar_data';
import PieChart_data from '../../../components/PieChar_data'
import List from '../../../components/List';
import {useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../services/api';

export default function ADashboardPage(){
  const navigate = useNavigate();
  const [users,setUsers] = useState([])
  const [cardData,setCartData] = useState({})
  const [line_char_data, setLine_char_data] = useState([])
  const [pie_char_data,setPie_char_data] = useState([]);

  useEffect(()=>{
    api.get(`/user/getAllUsersForDashboard`)
      .then(res=>{setUsers(res.data.reverse());console.log(res.data)})
      .catch(console.error);

    api.get(`/ticket/getStatisticForCards`)
      .then(res => {setCartData((res.data));console.log(res.data)})
      .catch(console.error);

    api.get(`/ticket/getStatisticsForAdmin`)
      .then(res => {setLine_char_data((res.data));console.log(res.data)})
      .catch(console.error);
    
    api.get(`/ticket/getNumberTicketsByStatusTech`)
      .then(res => {
                    const obj = res.data;
                    const arr = Object.entries(obj).map(([name, value]) => ({
                      name,
                      value: Number(value)
                    }));
                    setPie_char_data(arr);})
      .catch(console.error);


  },[])

    return (
        <>
            <div className='z-10 absolute top-[3%] left-[7.2%] flex flex-row items-center justify-between w-[90%] dropdown'>
                <h1 className='text-2xl text-green-600 font-bold z-10'>Dashboard</h1>
                <div className='flex items-center justify-center'>
                    <button className='text-green-600 border shadow-md bg-white button_problem h-13.5 hover:text-white hover:bg-green-600' onClick={()=>navigate("/administrator/profile")}>
                        AI
                    </button>
                </div>
            </div>
            <div className='relative bottom-20 left-[2.7%] flex justify-items-between dropdown'>
                <DataShow text="Total users" number={cardData.totalUsers} />
                <DataShow text="Total Incidents" number={cardData.totalIncidents} />
                <DataShow text="Average Response Time" number={cardData.avgResponse + "min"} />
                <DataShow text="SLA Compliance Rate" number={cardData.slaComplianceRate + "%"} />
                <DataShow text="Top Non-Compliant Categories" number={cardData.worstCategory} />
            </div>
            <LineChar_data line_char_data={line_char_data} />
            <div className='flex justify-between relative left-4.5 dropdown'>
              <PieChart_data pie_char_data={pie_char_data} />
              <List data={users} />
            </div>
        </>
    )
}