export const Gauge = ({
  percent = 0,
  className,
  ...rest
}: {
  percent: number;
  className?: string;
}) => {
  const strokeWidth = 20;
  const viewBoxSize = 300;
  const radius = viewBoxSize / 2;
  const innerRadius = radius - strokeWidth;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * 0.75;
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(135, ${radius}, ${radius})`;
  const offset = arc - (percent / 100) * arc;

  return (
    <svg
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      className={`w-full h-full ${className}`}
      {...rest}
    >
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="15%" stopColor="#1267ff" stopOpacity="1" />
          <stop offset="85%" stopColor="#98c0ff" stopOpacity="1" />
        </linearGradient>
      </defs>

      <circle
        className="gauge_base"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        stroke="gray"
        strokeDasharray={dashArray}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={transform}
      />

      <circle
        className="gauge_percent"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        stroke="url(#grad)"
        strokeDasharray={dashArray}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        style={{
          transition: "stroke-dashoffset 0.3s",
        }}
        transform={transform}
      />
    </svg>
  );
};
