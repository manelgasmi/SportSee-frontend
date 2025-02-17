
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const BarChartComponent = ({activities}) => {
  console.log(activities);
  const transformedData = activities.sessions.map((item, i) => ({
    ...item,
    index: i + 1,
    kg: item.kilogram, // Rename "kilogram" to "kg"
    Kcal: item.calories // Rename "calories" to "Kcal"
  }));
  

    return (
        <BarChart
          width={1000}
          height={300}
          barSize={10}
          data={transformedData}
          
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis dataKey="index" tick={{ dy: 20 }} />
          <YAxis yAxisId="left" orientation="left" stroke="#282D30" />
          <YAxis yAxisId="right" orientation="right" stroke="#E60000" />
          <Tooltip contentStyle={{ backgroundColor: "#E60000", color: 'white'}} 
          itemStyle={{ color: "#FFFFFF" }} 
          labelStyle={{ display: 'none' }} 
           />
          
          <Bar yAxisId="left" dataKey="kg" fill="#282D30" radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="right" dataKey="Kcal" fill="#E60000" radius={[10, 10, 0, 0]}/>
        </BarChart>
    );
}
export default BarChartComponent;
