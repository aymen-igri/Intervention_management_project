import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


export default function LineChar_data({line_char_data}) {
  return (
    <div className="relative left-12 bottom-20 w-6xl h-50 bg-white p-4 pb-7 rounded-lg shadow-md dropdown">
      <h3 className="text-lg font-semibold mb-4 text-green-600">Opened/Closed tickets</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={line_char_data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="mount" stroke="#666" />
          <YAxis yAxisId="left" stroke="#666" />
          <YAxis yAxisId="right" orientation="right" stroke="#666" />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <Legend />
          <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="opened" 
            stroke="#16a34a" 
            strokeWidth={2}
            activeDot={{ r: 6 }} 
          />
          <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="closed" 
            stroke="#047857" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

