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
  color: ${colors.background};
  background-color: ${colors.pink};
  height: 20px;
  width: 25px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  margin-left: 10px;
  padding-top: 1.5px;
  display: flex;
  justify-content: center;
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
