import { ModuleWithProviders, NgModule } from '@angular/core';
import { MathjaxDirective } from './mathjax.directive';
import {
  MathjaxDefaultConfig,
  mathjax_url,
  RootMathjaxConfig,
} from '../models';

@NgModule({
  declarations: [MathjaxDirective],
  exports: [MathjaxDirective],
})
export class MathjaxModule {
  constructor(private moduleConfig: RootMathjaxConfig) {

    if (!this.isMathJaxConfigScriptPresent()) {
      this.addMathJaxConfigScriptToDocument();
    }

    if (!this.isMathJaxScriptPresent()) {
      this.addMathJaxScriptToDocument();
    }
  }

  private addMathJaxConfigScriptToDocument() {

    const mathJaxConfig = {
      ...MathjaxDefaultConfig,
      ...(this.moduleConfig?.config ?? {}),
    };

    const script = document.createElement('script');

    script.id = "mathjax-config-script"
    script.type = 'text/javascript';
    script.text = `MathJax = ${JSON.stringify(mathJaxConfig)}`;

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  private addMathJaxScriptToDocument() {

    const script = document.createElement('script');

    script.id = "mathjax-script";
    script.type = 'text/javascript';
    script.src = this.moduleConfig?.src ?? mathjax_url;
    script.async = true;

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  private isMathJaxConfigScriptPresent() {
    const script = document.getElementById("mathjax-config-script")
    return script != undefined;
  }

  private isMathJaxScriptPresent() {
    const script = document.getElementById("mathjax-script")
    return script != undefined;
  }

  public static forRoot(
    config?: RootMathjaxConfig
  ): ModuleWithProviders<MathjaxModule> {
    return {
      ngModule: MathjaxModule,
      providers: [{ provide: RootMathjaxConfig, useValue: config ?? {} }],
    };
  }
  public static forChild(): ModuleWithProviders<MathjaxModule> {
    return {
      ngModule: MathjaxModule,
    };
  }
}
