/// <reference types="mathjax" />

declare namespace MathJax {
  export const startup: Startup;
  export interface Startup {
    promise: any;
  }
  export const typesetPromise: () => any;
  export const config: any;
}
