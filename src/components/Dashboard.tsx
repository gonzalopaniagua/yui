import { useRecords } from "../hooks/useRecords";
import { TemperatureCard } from "./TemperatureCard";
import { HumidityCard } from "./HumidityCard";
import { Chart } from "./Chart";
import { useMemo } from "react";

export function Dashboard() {
  const { data: records, isLoading, error } = useRecords();

  const currentRecord = useMemo(() => records?.[0], [records]);
  const currentTemperature = useMemo(
    () => currentRecord?.temperature || 0,
    [currentRecord]
  );
  const currentHumidity = useMemo(
    () => currentRecord?.humidity || 0,
    [currentRecord]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto max-w-4xl p-4 md:p-8 lg:p-12">
        <h1 className="mb-6 text-xl md:text-2xl font-bold text-primary text-center uppercase">
          Yui's Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <TemperatureCard currentTemperature={currentTemperature || 0} />
          <HumidityCard currentHumidity={currentHumidity || 0} />
          <div className="card w-full bg-base-100 shadow-xl md:col-span-2">
            <div className="card-body">
              <h2 className="card-title">Temperature & Humidity History</h2>
              <Chart records={records || []} timeRange="day" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
