import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  ReferenceArea,
} from "recharts";
import { useState } from "react";
import CustomCursor from "./CustomCursor";

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
      <h2 className="text-base pr-10 z-10 absolute ml-8 mt-5 text-white opacity-50 max-w-[170px]">
        Durée moyenne des sessions
      </h2>

      <LineChart
          data={sessions}
          margin={{
            top: 55,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        style={{ backgroundColor: "#FF0000", borderRadius: "6px" }}
      >
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
          itemStyle={{ fontSize: "8px" }}
          cursor={<CustomCursor />}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#colorUv)"
          strokeWidth={3}
          activeDot={{
            stroke: "#ffffff",
            strokeWidth: 4,
            r: 2,
          }}
          dot={false}
        />
        <XAxis
          dataKey="weekday"
          tick={{ fontSize: "0.75rem", fontWeight: 500, fill: "#ffffff" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
