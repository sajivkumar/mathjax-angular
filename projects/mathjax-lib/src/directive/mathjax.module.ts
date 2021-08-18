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
    //
    this.addConfigToDocument();
    //
    this.addMatjaxToDocument();
  }

  private addConfigToDocument() {
    const tagId = 'mathjax-config-script';
    const isScript = document.getElementById(tagId);
    if (isScript) return;
    //
    const providConfig = {
      ...MathjaxDefaultConfig,
      ...(this.moduleConfig?.config ?? {}),
    };
    const script = document.createElement('script') as HTMLScriptElement;
    script.id = tagId;
    script.type = 'text/javascript';
    script.text = `MathJax = ${JSON.stringify(providConfig)}`;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  private addMatjaxToDocument() {
    const tagId = 'mathjax-script';
    const isScript = document.getElementById(tagId);
    if (isScript) return;
    //
    const script = document.createElement('script') as HTMLScriptElement;
    script.id = tagId;
    script.type = 'text/javascript';
    script.src = this.moduleConfig?.src ?? mathjax_url;
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
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
