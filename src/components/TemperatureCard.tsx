import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { getTemperatureColors } from "../hooks/getTemperatureColors";
import { Thermometer } from "lucide-react";

export function TemperatureCard({
  currentTemperature,
}: {
  currentTemperature: number;
}) {
  const colors = getTemperatureColors(currentTemperature);

  return (
    <div className="card w-full bg-base-100 shadow-xl aspect-square relative overflow-hidden">
      <div className="card-body flex items-center justify-center gap-2">
        <span className="text-5xl md:text-7xl font-bold z-10">
          {currentTemperature}°C
        </span>
        <div className="flex items-center justify-center">
          <Thermometer className="size-4 md:size-6" />
          <span className="uppercase text-xs md:text-sm font-medium">
            Temperature
          </span>
        </div>

        <ShaderGradientCanvas
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: 0.25,
            top: 0,
            zIndex: 0,
          }}
        >
          <ShaderGradient
            control="props"
            color1={colors.color1}
            color2={colors.color2}
            color3={colors.color3}
            type="sphere"
            uStrength={0.1}
            uDensity={6}
            cameraZoom={8.5}
            positionX={0}
            positionY={0}
            positionZ={0}
            grain="on"
            uSpeed={0.3}
          />
        </ShaderGradientCanvas>
      </div>
    </div>
  );
}
