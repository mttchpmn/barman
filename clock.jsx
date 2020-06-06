import { css } from "uebersicht";
import { fonts, colors } from "./theme.json";

export const command = 'date +"%H:%M %A %b %d"';

export const refreshFrequency = 1000;

const clock = css`
  color: ${colors.foreground};
  font-family: ${fonts.primary};
  margin-top: 3px;
  font-size: 12px;
`;

export const render = ({ output }) => <div className={clock}>{output}</div>;
