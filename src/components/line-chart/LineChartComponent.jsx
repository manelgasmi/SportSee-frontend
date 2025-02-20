import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, ReferenceArea } from "recharts";
import { useState } from "react";

const daysMap = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};
const LineChartComponent = ({ sessions }) => {

  return (
    <ResponsiveContainer width="100%" height={263}>
      <h2 className="text-base  z-10 absolute ml-8 mt-5 text-white opacity-50">Durée moyenne des sessions</h2>
      <LineChart
        height={263}
        data={sessions}
        margin={{
          top: 55,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        style={{ backgroundColor: "#FF0000", borderRadius: "6px" }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity={0.3} />
            <stop offset="100%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="day"
          tickFormatter={(day) => daysMap[day]}
          tickMargin={-10}
          tickLine={false}
          axisLine={false}
          tick={{ fill: "rgba(255,255,255,0.5)", fontSize: "12px" }}
          padding={{
            right: 15,
            left: 15,
          }}
        />
        <Tooltip
          formatter={(value) => [`${value} min`]}
          labelStyle={{ display: "none" }}
          itemStyle={{ fontSize: '8px'}}
          cursor={{
            fill: 'rgba(0, 0, 0, 1)', // hover rectangle color
          }}
        />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#lineGradient)"
          strokeWidth={2}
          activeDot={{
            fill: "white", 
            stroke: "rgba(255,255,255,0.5)", 
            strokeWidth: 5, 
            r: 3 
          }} 
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineChartComponent;
