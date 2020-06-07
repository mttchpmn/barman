import { baseStyles } from "./lib/styles";

export const command = 'date +"%H:%M %A %b %d"';

export const refreshFrequency = 15000;

const containerStyle = {
  height: "20px",
  width: "175px",
  right: "0px",
  display: "flex",
  justifyContent: "center",
};

const style = {
  marginTop: "3px",
  right: "15px",
};

export const render = ({ output }) => (
  <div style={{ ...baseStyles, ...containerStyle }}>
    <div style={style}>{output}</div>
  </div>
);
