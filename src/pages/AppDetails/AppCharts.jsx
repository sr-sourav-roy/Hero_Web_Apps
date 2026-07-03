import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppCharts = ({ ratings }) => {
  const rating = ratings;
  return (
    <div className="mt-6">
      <h2 className="ml-4 lg:ml-0 mb-3 text-2xl font-semibold">Ratings</h2>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={rating}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"></CartesianGrid>
          <XAxis
            dataKey="name"
            stroke="#4b5563"
            tick={{ fontSize: 14 }}
          ></XAxis>
          <YAxis
            tick={{ fontSize: 14 }}
            stroke="#4b5563"
            label={{
              value: "Number of Reviews",
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
          ></YAxis>

          <Line
            type="monotone"
            dataKey="count"
            stroke="#8b5cf6"
            strokeWidth={4}
            dot={{ r: 6, fill: "#8b5cf6" }}
            activeDot={{ r: 8 }}
          ></Line>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
            }}
          ></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppCharts;
