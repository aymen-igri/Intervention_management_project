import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {


  render() {

    const {data} = this.props

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mount" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="opened" stackId="a" fill="oklch(52.7% 0.154 150.069)" />
          <Bar dataKey="closed" stackId="a" fill="oklch(79.2% 0.209 151.711)" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
