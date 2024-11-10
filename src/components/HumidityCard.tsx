import { Droplets } from "lucide-react";
import { Gauge } from "./Gauge";

export function HumidityCard({ currentHumidity }: { currentHumidity: number }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl aspect-square">
      <div className="card-body flex items-center justify-center flex-col gap-2 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full px-2">
          <Gauge percent={currentHumidity} />
        </div>
        <span className="text-5xl md:text-7xl font-bold prose">
          {currentHumidity}%
        </span>
        <div className="flex gap-1 items-center justify-center text-gray-400">
          <Droplets className="size-4 md:size-5" />
          <span className="uppercase text-xs md:text-sm font-medium">
            Humidity
          </span>
        </div>
      </div>
    </div>
  );
}
