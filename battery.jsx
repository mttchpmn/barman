import { baseStyles } from "./lib/styles";
import { colors } from "./lib/theme";

const command = "./barman/lib/battery.sh";

const refreshFrequency = 60000;

const style = {
  marginTop: "3px",
  right: "250px",
};

const render = ({ output }) => {
  let [percentage, remaining, charging] = output.split(" ");
  percentage = parseInt(percentage, 10);
  charging = charging === "true";
  return (
    <div style={{ ...baseStyles, ...style }}>
      {charging ? (
        <span
          style={{
            color: colors.cyan,
          }}
        >
          {percentage}% | charging...
        </span>
      ) : (
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
          {percentage}% | {remaining} left
        </span>
      )}
    </div>
  );
};

export { command, refreshFrequency, render };
