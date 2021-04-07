import { css } from "styled-components";

const device = {
  desktop: 1024,
  mobile: 480,
};
export default Object.keys(device).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${device[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
