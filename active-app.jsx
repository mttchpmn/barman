import { baseStyles } from "./lib/styles";
import { colors } from "./lib/theme";

const command = `osascript -e 'tell application "System Events" to get title of application processes whose frontmost is true and visible is true'`;

const refreshFrequency = 500;

const style = {
  left: "20px",
  marginTop: "3px",
  color: colors.pink,
};

const render = ({ output }) => {
  return <div style={{ ...baseStyles, ...style }}>-- {output} --</div>;
};

export { command, refreshFrequency, render };
