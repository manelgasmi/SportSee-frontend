import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ activities }) => {
  const transformedData = activities.sessions.map((item, i) => ({
    ...item,
    index: i + 1,
    kg: item.kilogram, // Rename "kilogram" to "kg"
    Kcal: item.calories, // Rename "calories" to "Kcal"
  }));
  const customiseLegendText = (value, entry) => {
    const { color } = entry;
    if(value === 'kg') {
      return <span style={{ color }}>Poids ({value})</span>;
    } else {
      return <span style={{ color }}>Calories brûlées ({value})</span>;
    }
  };

  return (
    <ResponsiveContainer width="100%" height={300} >
      <h2 className="ml-10 text-base">Activité quotidienne</h2>
      <BarChart
        height={300}
        barSize={10}
        data={transformedData}
        margin={{
          top: -25,
          bottom: 10,
        }}
      >
        <Legend iconType="circle" iconSize="8" formatter={customiseLegendText} verticalAlign="top" align="right" height={100} />
        <XAxis dataKey="index" tick={{ dy: 20 }} />
        <YAxis yAxisId="left" orientation="left" stroke="#282D30" />
        <YAxis yAxisId="right" orientation="right" stroke="#E60000" />
        <Tooltip
          contentStyle={{ backgroundColor: "#E60000", color: "white" }}
          itemStyle={{ color: "#FFFFFF" }}
          labelStyle={{ display: "none" }}
        />

        <Bar
          yAxisId="left"
          dataKey="kg"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="Kcal"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
