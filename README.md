# mathjax-angular 
This plugins implements the browser version of [Mathjax v3][1] into [Angular][2]

***Note***:This library was generated with [Angular CLI][8] version 12.

<div style="text-align:center"><a href="https://nodei.co/npm/mathjax-angular/"><img src="https://nodei.co/npm/mathjax-angular.png?downloads=true&downloadRank=true&stars=true&mini=true"/></a></div>

## Feature

This library helps you implement the version 3 of Mathjax into any of your angular web application.

## Install
Below are the steps you need to use this library.
NPM:
```
npm install mathjax-angular
```

Yarn:
```
yarn add mathjax-angular
```

## Configure the module

Load the module in the `@NgModule` class of the application. You need
to pass a `RootMathjaxConfig` instance to the `config` method to
configure the module.

### Example

We provide a premade example with the library itself, You can see the example [here][3], or alternatively run it locally by cloning the [repository][4] and running.

To do that first install the requirements:
```
npm install (or) yarn
```
Then either run it in production:
```
npm run dev production (or) yarn dev production
```
or run it in dev:
```
npm run dev (or) yarn dev
```

### Usage
When importing in the **root** module, the module should be configured
with *.forRoot* method.

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './src/app/app.component';

/*Import*/
import { MathjaxModule } from 'mathjax-angular';

/*Configuration*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MathjaxModule.forRoot(/*Optional Config*/)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
You can optionally pass config. for this refer to [majax configuration guide][5]

Current configuration defaults to:
```typescript
{
  "config": {
    "loader": {
      "load": ["output/svg", "[tex]/require", "[tex]/ams"]
    },
    "tex": {
      "inlineMath": [["$", "$"]],
      "packages": ["base", "require", "ams"]
    },
    "svg": { "fontCache": "global" }
  },
  "src": "https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js"
}
```
- For ***config*** field refer [this][6].
- For ***src*** field refer [CDN][7].

When importing in a **child** module, the module must be configured to
re-use the same module instance as the root module. So simply
configure the module with the *.forChild* method.

```typescript
import { MathjaxModule } from 'mathjax-angular';
...
imports: [
  MathjaxModule.forChild()
]
...
```

## Typeset an element

Add the `mathjax` directive to elements which you want to apply
MathJax typesetting on load.

```html
<div [mathjax]="content"></div> 
```
In your ts component 
```typescript
content = "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$"
```

## Info and Help

For more info and help with the mathjax library refer to [their site][1].

[1]: https://docs.mathjax.org/en/latest/
[2]: https://angular.io/
[3]: https://github.com/sajivkumar/mathjax-angular/tree/main/projects/example
[4]: https://github.com/sajivkumar/mathjax-angular.git
[5]: http://docs.mathjax.org/en/latest/web/configuration.html
[6]: http://docs.mathjax.org/en/latest/web/configuration.html#configuring-and-loading-mathjax
[7]:https://cdnjs.com/libraries/mathjax
[8]:https://github.com/angular/angular-cli
