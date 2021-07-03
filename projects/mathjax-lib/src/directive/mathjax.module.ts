import { ModuleWithProviders, NgModule } from '@angular/core';
import { MathjaxDirective } from './mathjax.directive';
import { MathJaxConfig, mathjax_url } from './mathjax.content';

@NgModule({
  declarations: [MathjaxDirective],
  exports: [MathjaxDirective],
})
export class MathjaxModule {
  constructor() {
    //
    //
    const config = document.createElement('script') as HTMLScriptElement;
    //config.type = 'text/x-mathjax-config';
    config.text = `MathJax = ${JSON.stringify(MathJaxConfig)}`;
    //
    //document.getElementsByTagName('head')[0].appendChild(config);
    //
    const script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';
    script.src = mathjax_url;
    script.async = true;
    //
    //document.getElementsByTagName('head')[0].appendChild(script);
  }

  public static forRoot(): ModuleWithProviders<MathjaxModule> {
    //console.log(`for root`);
    return {
      ngModule: MathjaxModule,
      providers: [],
    };
  }
  public static forChild() {
    return {
      ngModule: MathjaxModule,
    };
  }
}
