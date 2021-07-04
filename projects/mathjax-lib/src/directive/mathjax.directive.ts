import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { fixMathjaxBugs, getMathjaxContent, isMathjax } from '../utils';
import { MathjaxContent } from '../models';

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
    const value = getMathjaxContent(expressions.currentValue) + '';
    //
    if (isMathjax(value)) {
      const filteredVal = fixMathjaxBugs(value);
      this.typeset(() => {
        this.element.innerHTML = `<div class='jax-process'>${filteredVal}</div>`;
      });
    } else {
      this.element.innerHTML = value;
    }
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
