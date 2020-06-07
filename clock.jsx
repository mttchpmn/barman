import { baseStyles } from "./lib/styles";

export const command = 'date +"%H:%M %A %b %d"';

export const refreshFrequency = 15000;

const style = {
  marginTop: "3px",
  right: "15px",
};

export const render = ({ output }) => (
  <div style={{ ...baseStyles, ...style }}>{output}</div>
);
