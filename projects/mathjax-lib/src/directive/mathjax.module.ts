import { ModuleWithProviders, NgModule } from '@angular/core';
import { MathjaxDirective } from './mathjax.directive';
import { MathjaxDefaultConfig, mathjax_url, RootMathjaxConfig } from './models';

@NgModule({
  declarations: [MathjaxDirective],
  exports: [MathjaxDirective],
})
export class MathjaxModule {
  constructor(moduleConfig: RootMathjaxConfig) {
    //
    //
    const config = document.createElement('script') as HTMLScriptElement;
    const providConfig = {
      ...MathjaxDefaultConfig,
      ...(moduleConfig?.config ?? {}),
    };
    config.text = `MathJax = ${JSON.stringify(providConfig)}`;
    //
    //
    const script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';
    script.src = moduleConfig?.src ?? mathjax_url;
    script.async = true;
    //
  }

  public static forRoot(
    config?: RootMathjaxConfig
  ): ModuleWithProviders<MathjaxModule> {
    return {
      ngModule: MathjaxModule,
      providers: [{ provide: RootMathjaxConfig, useValue: config ?? {} }],
    };
  }
  public static forChild() {
    return {
      ngModule: MathjaxModule,
    };
  }
}
