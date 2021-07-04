# mathjax-angular 
This plugins implements the browser version of [Mathjax v3][1] into [Angular][2]
## Feature

- Dynamically load MathJax library to your web application.
- Simple typesetting using Angular directive.
- Dynamic typesetting using expressions.

## Install

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
to pass a `ModuleConfiguration` instance to the `config` method to
configure the module.

### Example

We provide a premade exaple with the library itself, You can see the example [here][3], or alternatively run it locally by cloning the [repository][4] and running:
```
npm install&&npm run dev
```

### Usage
When importing in the **root** module, the module should be configured
with *.forRoot* method.

```typescript
import {NgModule} from '@angular/core';
import {AppComponent} from './src/app/app.component';
import {MathJaxModule} from './src/app/math-jax/math-jax.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MathJaxModule.forRoot() //Pre configured
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

When importing in a **child** module, the module must be configured to
re-use the same module instance as the root module. So simply
configure the module with the *.forChild* method.

```typescript
import {MathJaxModule} from './src/app/math-jax/math-jax.module';

...
imports: [
  MathJaxModule.forChild()
]
...
```

## Typeset an element

Add the `mathjax` directive to elements which you want to apply
MathJax typesetting on load.

```html
<div>normal text</div>

<div mathjax>mathjax typesetting
$$
x = 1
$$

\( y = 2 \)
</div>
```

## Typesetting using expression

The Jax elements will be updated when the corresponding expression
value is changed. The correspondence principle between the expression
and the Jax element is by *order*.

```html
<div [mathjax]="[exp1, exp2]">

MathJax Expression 1: \( {{ '{}' }} \)
MathJax Expression 2: \( {{ '{}' }} \)
</div>
```

Insert the `{}` to the place you want, then surround it with a pair of
MathJax delimiter.

You need to escape it in Angular template.

## Manually trigger MathJax typesetting

You can use the `MathJaxDirective.MathJaxTypeset()` method to trigger
the typesetting when you want. The steps are:

- Use *ViewChild* and its *read* property to get a reference to the
  `MathJaxDirective` instance
- Call `instance.MathJaxTypeset()`

## Adding a callback 

You can specify a callback function to be called when the rendering is finished

*component.ts*
```component.ts
export class yourComponent implements OnInit {
  callback = function () {
      console.log("Callback function called!")
    }
}
```

*template or html*
```
<div mathjax (mathjax-callback)="callback()">
    \\( E = mc^2 \\)
</div>
```

## Info and Help

For more info and help with the mathjax library refer to [their site][1].
## TODO
None

[1]: https://docs.mathjax.org/en/latest/
[2]: https://angular.io/
[3]: https://github.com/sajivkumar/mathjax-angular/tree/main/projects/example
[4]: https://github.com/sajivkumar/mathjax-angular.git
