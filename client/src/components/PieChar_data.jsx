import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip, Legend } from 'recharts';

// Define colors for each slice
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export default function PieChart_data({ pie_char_data }) {
  return (
    <div className='bg-white p-12 rounded-lg shadow-md h-96 w-full ml-7.5 mt-[-5%]'>
      <h3 className="text-lg font-semibold mb-4 mt-[-2%] text-green-600">Performance Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pie_char_data}
            cx="50%"
            cy="50%"
            startAngle={360}
            endAngle={0}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {pie_char_data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}