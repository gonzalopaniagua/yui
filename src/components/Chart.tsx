import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Record } from "../services/schemas";
import { useMemo } from "react";
import { DateTime } from "luxon";

interface ChartProps {
  records: Record[];
  timeRange: "day" | "week";
}

export function Chart({ records, timeRange }: ChartProps) {
  const chartData = useMemo(() => {
    const now = new Date();
    const timeLimit = new Date(now);

    if (timeRange === "day") {
      timeLimit.setDate(now.getDate() - 1);
    } else {
      timeLimit.setDate(now.getDate() - 7);
    }

    return records
      .filter((record) => new Date(record.timestamp) >= timeLimit)
      .map((record) => ({
        timestamp: DateTime.fromISO(record.timestamp).toFormat("HH:mm"),
        temperature: record.temperature,
        humidity: record.humidity,
      }));
  }, [records, timeRange]);

  const { minValue, maxValue } = useMemo(() => {
    const allValues = records.flatMap((record) => [
      record.temperature,
      record.humidity,
    ]);
    return {
      minValue: Math.floor(Math.min(...allValues)),
      maxValue: Math.ceil(Math.max(...allValues)),
    };
  }, [records]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="timestamp"
          tick={{ fill: "#666", fontSize: 12 }}
          tickLine={{ stroke: "#666" }}
          axisLine={{ stroke: "#666" }}
          interval="preserveStartEnd"
        />
        <YAxis
          domain={[minValue, maxValue]}
          tick={{ fill: "#666", fontSize: 12 }}
          tickLine={{ stroke: "#666" }}
          axisLine={{ stroke: "#666" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "none",
            borderRadius: "8px",
            padding: "8px",
          }}
        />
        <Legend verticalAlign="top" height={36} iconType="plainline" />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#FF9800"
          strokeWidth={2}
          name="Temperature (°C)"
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="humidity"
          stroke="#4CAF50"
          strokeWidth={2}
          name="Humidity (%)"
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
