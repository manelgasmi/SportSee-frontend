
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const BarChartComponent = ({activities}) => {
  console.log(activities);
  

    return (
        <BarChart
          width={1000}
          height={300}
          barSize={10}
          data={activities.sessions.map((item,i) => ({...item, index : i+1}))}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="index" />
          <YAxis yAxisId="left" orientation="left" stroke="#282D30" />
          <YAxis yAxisId="right" orientation="right" stroke="#E60000" />
          <Tooltip />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" />
        </BarChart>
    );
}
export default BarChartComponent;
