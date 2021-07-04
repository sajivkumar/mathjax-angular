import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MathjaxContent, isMathjax } from './models';

@Directive({
  selector: 'mathjax,[mathjax]',
})
export class MathjaxDirective implements OnChanges {
  //
  private mathJaxExpressions?: MathjaxContent | string;
  //
  private readonly element: HTMLElement;
  //
  @Input('mathjax')
  set mathjax(val: MathjaxContent | string) {
    this.mathJaxExpressions = val;
  }
  //
  constructor(private el: ElementRef) {
    //
    this.element = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const expressions = changes.mathjax;
    if (
      !expressions ||
      expressions.currentValue === expressions.previousValue
    ) {
      return;
    }
    //
    const value = this.getMathjaxContent(expressions.currentValue) + '';
    //
    if (value?.match(isMathjax)) {
      const filteredVal = this.fixMathjaxBugs(value);
      this.typeset(() => {
        this.element.innerHTML = `<div class='jax-process'>${filteredVal}</div>`;
      });
    } else {
      this.element.innerHTML = value;
    }
  }

  /**
   * find and return mathjax string from input
   * @param expressions
   * @returns mathjax string
   */
  private getMathjaxContent(expressions: MathjaxContent | string): string {
    if (!expressions) return '';
    else if ('string' === typeof expressions) return expressions as string;
    else return expressions.latex ?? expressions.mathml ?? '';
  }

  /**
   * used to fix few issues with mathjax string in angular
   * @param  {string} jax mathjax string
   * @returns {string} fixed string
   */
  private fixMathjaxBugs(jax: string): string {
    return (
      jax
        //line break error
        .replace(/<br \/>/gi, '<br/> ')
        //automatic breakline
        .replace(/[$]([\s\S]+?)[$]/gi, (m, p: string, o, s) => {
          //return /s/gi.test(p)
          return p.includes('\\\\') && !p.includes('\\begin')
            ? `$\\begin{align*}${p}\\end{align*}$`
            : `$${p}$`;
        })
    );
  }

  private typeset(code: () => void) {
    if (MathJax?.startup) {
      MathJax.startup.promise = MathJax.startup.promise
        .then(() => {
          code();
          return MathJax.typesetPromise ? MathJax.typesetPromise() : null;
        })
        .catch((err: Error) =>
          console.error('MathJax Typeset failed: ' + err.message)
        );
      return MathJax.startup.promise;
    } else {
      code();
    }
  }
}
