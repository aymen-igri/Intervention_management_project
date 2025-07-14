import '../../../style/dashboard.css' 
import DataShow from '../../../components/DataShow'
import LineChar_data from '../../../components/LineChar_data';
import PieChart_data from '../../../components/PieChar_data'
import List from '../../../components/List';
import {useNavigate } from 'react-router-dom';

const line_char_data = [
  {
    name: 'J',
    ART: 4000,
    SLA: 2400,
    amt: 2400,
  },
  {
    name: 'F',
    ART: 3000,
    SLA: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    ART: 2000,
    SLA: 9800,
    amt: 2290,
  },
  {
    name: 'A',
    ART: 2780,
    SLA: 3908,
    amt: 2000,
  },
  {
    name: 'M',
    ART: 1890,
    SLA: 4800,
    amt: 2181,
  },
  {
    name: 'J',
    ART: 2390,
    SLA: 3800,
    amt: 2500,
  },
  {
    name: 'J',
    ART: 3490,
    SLA: 4300,
    amt: 2100,
  },
  {
    name: 'A',
    ART: 3490,
    SLA: 4300,
    amt: 2100,
  },
  {
    name: 'S',
    ART: 3490,
    SLA: 4300,
    amt: 2100,
  },
  {
    name: 'O',
    ART: 3490,
    SLA: 4300,
    amt: 2100,
  },
  {
    name: 'N',
    ART: 3490,
    SLA: 4300,
    amt: 2100,
  },
  {
    name: 'D',
    ART: 3490,
    SLA: 4300,
    amt: 2100,
  },
];

const pie_char_data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const users = [
  {name: "aymen" , role:"admin", status: "active"},
  {name: "aymen" , role:"superviser" , status: "active"},
  {name: "aymen" , role:"Technician" , status: "offline"},
  {name: "aymen" , role:"utilisateur" , status: "active"},
  {name: "aymen" , role:"admin", status: "offline"},
  {name: "aymen" , role:"Technician" , status: "active"},
  {name: "aymen" , role:"admin", status: "active"},
  {name: "aymen" , role:"Technician" , status: "offline"},
  {name: "aymen" , role:"Technician" , status: "active"},
  {name: "aymen" , role:"superviser" ,status: "offline"},
  {name: "aymen" , role:"Technician" , status: "active"},
  {name: "aymen" , role:"superviser", status: "active"},
  {name: "aymen" , role:"Technician" , status: "offline"},
  {name: "aymen" , role:"superviser", status: "active"},
  {name: "aymen" , role:"Technician" , status: "offline"},
]



export default function ADashboardPage(){
  const navigate = useNavigate();
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
                <DataShow text="Total users" number="50" />
                <DataShow text="Total Interventions" number="50" />
                <DataShow text="Average Response Time" number="50" />
                <DataShow text="SLA Compliance Rate" number="50" />
                <DataShow text="Top Non-Compliant Categories" number="50" />
            </div>
            <LineChar_data line_char_data={line_char_data} />
            <div className='flex justify-between relative left-4.5 dropdown'>
              <PieChart_data pie_char_data={pie_char_data} />
              <List data={users} />
            </div>
        </>
    )
}