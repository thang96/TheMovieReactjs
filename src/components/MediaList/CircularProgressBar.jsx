import PropTypes from "prop-types";

const CircularProgressBar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokeColor = "green",
}) => {
  const radius = size / 2 - strokeWidth;
  const dasharray = 2 * Math.PI * radius;
  const dashOffset = dasharray - (percent / 100) * dasharray;

  return (
    <div className="">
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${dasharray}vw`}
          strokeDashoffset={`${dashOffset}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
          fill="none"
        />
        <text
          fill="white"
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fontSize={"1.2vw"}
          fontWeight="bold"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}{" "}
        </text>
      </svg>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percent: PropTypes.number || PropTypes.string,
  size: PropTypes.number || PropTypes.string,
  strokeWidth: PropTypes.number || PropTypes.string,
  strokeColor: PropTypes.string || PropTypes.number,
};

export default CircularProgressBar;
