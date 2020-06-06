import { css } from "uebersicht";
import { colors } from "./lib/theme";

export const refreshFrequency = false;

const container = css`
  width: 100vw;
  height: 50px;
`;

const bar = css`
  height: 20px;
  background-color: ${colors.background};
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: -1;
`;

export const render = () => (
  <div className={container}>
    <div className={bar}></div>
  </div>
);
