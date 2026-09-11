import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const FULL_LINE_COLOR = "#FF4F37";
const FULL_FILL_COLOR = "#FFEBE9";

const CHART_STYLE = {
  mini: {
    height: 50,
    strokeWidth: 2.5,
    margin: { top: 8, right: 8, bottom: 8, left: 8 },
  },
  full: {
    height: 110,
    strokeWidth: 3,
    margin: { top: 22, right: 10, bottom: 2, left: 10 },
    referenceStroke: "#E5E8EB",
    referenceWidth: 1,
    referenceDash: "3 4",
  },
};

const DOMAIN = [(dataMin) => dataMin - 0.3, (dataMax) => dataMax + 0.3];

export default function TemperatureChart({
  points,
  size = "full",
  color = FULL_LINE_COLOR,
  showEndDot = true,
  peak = null,
  referenceTemperatures = [],
}) {
  if (!points?.length) return null;

  const style = CHART_STYLE[size];
  const isMini = size === "mini";
  const lineColor = isMini ? color : FULL_LINE_COLOR;
  const lastIndex = points.length - 1;
  const peakIndex =
    !isMini && peak
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
          fill={lineColor}
          fontSize={13}
          fontWeight={500}
        >
          {`${peak.temperature}°C`}
        </text>
      )}
      {index === lastIndex && showEndDot && (
        <>
          <circle cx={cx} cy={cy} r={7.5} fill={lineColor} fillOpacity={0.25} />
          <circle
            cx={cx}
            cy={cy}
            r={4}
            fill={lineColor}
            stroke="#FFFFFF"
            strokeWidth={2}
          />
        </>
      )}
    </g>
  );

  return (
    <div className="relative w-full" style={{ height: style.height }}>
      {isMini && (
        <div className="pointer-events-none absolute inset-x-0 bottom-[5px] border-t border-dashed border-[#E5E8EB]" />
      )}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={points} margin={style.margin}>
          <YAxis hide domain={DOMAIN} />
          {!isMini &&
            referenceTemperatures.map((temperature) => (
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
            stroke={lineColor}
            strokeWidth={style.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isMini ? "none" : FULL_FILL_COLOR}
            dot={renderPoint}
            activeDot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
