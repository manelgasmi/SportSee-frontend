import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Kind mapping object - Translates numerical keys to activity names.
 *
 * @type {Object.<number, string>}
 */
const kinds = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
}

/**
 * RadarChartComponent - Displays a radar chart based on user performance data.
 *
 * @component
 *
 * @param {*} props - The component props.
 * @param {*} props.userPerformance - The user performance data.
 *
 * @returns {JSX.Element} The radar chart component.
 */
const RadarChartComponent = ({ userPerformance }) => {
  // Map the data to include the kind names
  const formattedData = userPerformance.data.map((item) => ({
    ...item,
    kind: kinds[item.kind],
  }));

  return (
    <ResponsiveContainer width="100%" height={263}>
      <RadarChart
          margin={{
            right: 30,
            left: 30,
          }}
      outerRadius="60%"
        data={formattedData}
        style={{ backgroundColor: "#282D30", borderRadius: "6px" }}
      >
        <PolarGrid  gridType="polygon" radialLines={false} stroke="#ffff" />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 11, fill: '#ffffff'}} />

        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
