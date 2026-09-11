import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const LINE_COLOR = "#FF4F37";
const FILL_COLOR = "#FFEBE9";

const CHART_STYLE = {
  mini: {
    height: 60,
    strokeWidth: 2,
    referenceStroke: "#EAEDF1",
    referenceWidth: 0.67,
    referenceDash: "2 2.67",
  },
  full: {
    height: 110,
    strokeWidth: 3,
    referenceStroke: "#E5E8EB",
    referenceWidth: 1,
    referenceDash: "3 4",
  },
};

export default function TemperatureChart({
  points,
  size = "full",
  peak = null,
  referenceTemperatures = [],
}) {
  if (!points?.length) return null;

  const style = CHART_STYLE[size];
  const lastIndex = points.length - 1;
  const peakIndex = peak
    ? points.findIndex((point) => point.measuredAt === peak.measuredAt)
    : -1;

  // 끝점 마커와 피크 라벨만 렌더
  const renderPoint = ({ cx, cy, index, key }) => (
    <g key={key}>
      {index === peakIndex && (
        <text
          x={cx}
          y={cy - 12}
          textAnchor="middle"
          fill={LINE_COLOR}
          fontSize={13}
          fontWeight={500}
        >
          {`${peak.temperature}°C`}
        </text>
      )}
      {index === lastIndex && (
        <>
          <circle cx={cx} cy={cy} r={7.5} fill={LINE_COLOR} fillOpacity={0.25} />
          <circle
            cx={cx}
            cy={cy}
            r={4}
            fill={LINE_COLOR}
            stroke="#FFFFFF"
            strokeWidth={2}
          />
        </>
      )}
    </g>
  );

  return (
    <div className="w-full" style={{ height: style.height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={points}
          margin={{ top: 22, right: 10, bottom: 2, left: 10 }}
        >
          <YAxis
            hide
            domain={[(dataMin) => dataMin - 0.3, (dataMax) => dataMax + 0.3]}
          />
          {referenceTemperatures.map((temperature) => (
            <ReferenceLine
              key={temperature}
              y={temperature}
              stroke={style.referenceStroke}
              strokeWidth={style.referenceWidth}
              strokeDasharray={style.referenceDash}
            />
          ))}
          <Area
            type="monotone"
            dataKey="temperature"
            stroke={LINE_COLOR}
            strokeWidth={style.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={FILL_COLOR}
            dot={renderPoint}
            activeDot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
