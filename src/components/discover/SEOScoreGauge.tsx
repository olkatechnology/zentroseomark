import { getScoreColor, getScoreLabel } from "@/data/discover";

interface SEOScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const sizes = {
  sm: { container: "w-12 h-12", text: "text-sm", radius: 18, stroke: 3 },
  md: { container: "w-16 h-16", text: "text-lg", radius: 24, stroke: 4 },
  lg: { container: "w-24 h-24", text: "text-2xl", radius: 38, stroke: 5 },
};

const SEOScoreGauge = ({ score, size = "md", showLabel = false }: SEOScoreGaugeProps) => {
  const { container, text, radius, stroke } = sizes[size];
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const colorClass = getScoreColor(score);

  const strokeColor =
    score >= 80 ? "stroke-green-500" : score >= 50 ? "stroke-yellow-500" : "stroke-red-500";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`relative ${container} flex items-center justify-center`}>
        <svg className="absolute inset-0 -rotate-90" viewBox={`0 0 ${(radius + stroke) * 2} ${(radius + stroke) * 2}`}>
          <circle
            cx={radius + stroke}
            cy={radius + stroke}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            className="stroke-muted"
          />
          <circle
            cx={radius + stroke}
            cy={radius + stroke}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className={strokeColor}
          />
        </svg>
        <span className={`${text} font-bold ${colorClass}`}>{score}</span>
      </div>
      {showLabel && (
        <span className={`text-xs font-medium ${colorClass}`}>{getScoreLabel(score)}</span>
      )}
    </div>
  );
};

export default SEOScoreGauge;
