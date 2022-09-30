/// <reference types="mathjax" />

declare namespace MathJax {
  export interface Startup {
    promise: Promise<any>;
    defaultReady: any;
  }

  export const startup: Startup;
  export const typesetPromise: (_?: any) => Promise<any>;

  export const promise: Promise<any>;
  export const isReady: boolean;
}
