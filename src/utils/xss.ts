import { filterXSS } from 'xss';

export const richtextFilter = (html: string) => {
  return filterXSS(html, {
    whiteList: {
      a: ['href', 'style'],
      b: ['style'],
      h1: ['style'],
      h3: ['style'],
      h4: ['style'],
      h5: ['style'],
      h6: ['style'],
      img: ['style'],
      p: ['style'],
      span: ['style'],
      section: ['style'],
      strong: ['style'],
    },
  });
};
