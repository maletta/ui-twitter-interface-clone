import { css, ThemedCssFunction } from 'styled-components';

export const sizes = {
  mobileSmall: 499,
  mobile: 500,
};

// args as ConstructorParameters<typeof CSSObject>
const media = Object.keys(sizes).reduce((acc, label, index) => {
  if (index === 0) {
    acc[label] = (...args) => {
      console.log('args css index 0', args);
      return css`
        @media (max-width: ${sizes[label]}px) {
          ${css(...args)}
        }
      `;
    };

    return acc;
  }

  acc[label] = (...args) => {
    console.log('args css ', args);

    return css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});

export default media;
