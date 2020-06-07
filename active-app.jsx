import { baseStyles } from "./lib/styles";
import { colors } from "./lib/theme";

const command = `osascript -e 'tell application "System Events" to get title of application processes whose frontmost is true and visible is true'`;

const refreshFrequency = 500;

const containerStyle = {
  left: "50px",
  height: "20px",
  width: "200px",
  marginTop: "-2px",
  paddingLeft: "5px",
  border: `1px solid ${colors.currentLine}`,
  borderRadius: "3px",
};

const style = {
  marginTop: "4px",
};

const render = ({ output }) => {
  return (
    <div>
      <div style={{ ...baseStyles, ...containerStyle }}>
        <div style={style}>
          <i class="far fa-window-maximize"></i> {output}
        </div>
      </div>
    </div>
  );
};

export { command, refreshFrequency, render };
