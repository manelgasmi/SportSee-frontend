import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChartComponent = ({ userPerformance }) => {
  // Map the data to include the kind names
  const formattedData = userPerformance.data.map((item) => ({
    ...item,
    kind: userPerformance.kind[item.kind],
  }));

  return (
    <ResponsiveContainer width="100%" height={263}>
      <RadarChart
      outerRadius="65%"
        data={formattedData}
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
      >
        <PolarGrid  gridType="polygon" radialLines={false} stroke="#ffff" />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: '#ffffff'}} />

        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
