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

const icon = css`
  color: ${colors.pink};
  margin-left: 3px;
  margin-top: 1.5px;
`;

export const render = () => (
  <div className={container}>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
      crossorigin="anonymous"
    />
    <div className={bar}>
      <div className={icon}>
        <i class="fas fa-cocktail"></i>
      </div>
    </div>
  </div>
);
