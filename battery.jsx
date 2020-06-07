import { baseStyles } from "./lib/styles";
import { colors } from "./lib/theme";

const command = "./barman/lib/battery.sh";
const refreshFrequency = 1000;

const containerStyle = {
  backgroundColor: colors.currentLine,
  borderBottomLeftRadius: "3px",
  borderBottomRightRadius: "3px",
  height: "20px",
  right: "175px",
  width: "70px",
};

const style = {
  marginTop: "3px",
  marginLeft: "10px",
};

const render = ({ output }) => {
  let [percentage, charging, remaining] = output.trim().split(" ");
  percentage = parseInt(percentage, 10);
  charging = charging === "true";

  const Charging = () => (
    <span
      style={{
        color: colors.cyan,
      }}
    >
      <i class="fas fa-plug"></i> {percentage}%
    </span>
  );

  const getBatteryIconClass = (charge) => {
    if (charge === 100) {
      return "fas fa-battery-full";
    } else if (charge > 75) {
      return "fas fa-battery-three-quarters";
    } else if (charge > 50) {
      return "fas fa-battery-half";
    } else if (charge > 25) {
      return "fas fa-battery-quarter";
    } else {
      return "fas fa-battery-empty";
    }
  };

  const Battery = () => (
    <span
      style={{
        color:
          percentage > 30
            ? colors.green
            : percentage > 15
            ? colors.orange
            : colors.red,
      }}
    >
      <i
        style={{ transform: "rotate(270deg)" }}
        class={getBatteryIconClass(percentage)}
      ></i>{" "}
      {percentage}%{/* {percentage}% | {remaining || "??"} left */}
    </span>
  );

  return (
    <div style={{ ...baseStyles, ...containerStyle }}>
      <div style={{ ...style }}>{charging ? <Charging /> : <Battery />}</div>
    </div>
  );
};

export { command, refreshFrequency, render };
