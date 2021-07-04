import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //
  content = {
    latex: 'When $a \\ne 0$, there are two solutions to $\\frac{5}{9}$',
  };
  content2 = {
    mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mover>
      <munder>
        <mo>∫</mo>
        <mn>0</mn>
      </munder>
      <mi>∞</mi>
    </mover>
    <mtext> versus </mtext>
    <munderover>
      <mo>∫</mo>
      <mn>0</mn>
      <mi>∞</mi>
    </munderover>
  </mrow>
</math>`,
  };
  content3 = `$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$`;
  content4 = `$\\begin{align}
  \\dot{x} & = \\sigma(y-x) \\\\
  \\dot{y} & = \\rho x - y - xz \\\\
  \\dot{z} & = -\\beta z + xy
  \\end{align}$`;
  content5 = `$\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2} \\leq
  \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$`;
  //
  content6 = `$\\mathbf{V}_1 \\times \\mathbf{V}_2 =
  \\begin{vmatrix}
   \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\
   \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} & 0 \\\\
   \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} & 0 \\\\
  \\end{vmatrix}$`;
  //
  content7 = { mathml: `$P(E) = {n \\choose k} p^k (1-p)^{ n-k}$` };
  //
  content8 = `$\\frac{1}{(\\sqrt{\\phi \\sqrt{5}}-\\phi) e^{\\frac25 \\pi}} =
  1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}}
   {1+\\frac{e^{-8\\pi}} {1+\\ldots} } } }$`;
  //
  content9 = `$1 +  \\frac{q^2}{(1-q)}+\\frac{q^6}{(1-q)(1-q^2)}+\\cdots =
  \\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
   \\quad\\quad \\text{for $|q|<1$}.$`;
  //
  content10 = `$\\begin{align}
  \\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\\\
  \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\
  \\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\
  \\nabla \\cdot \\vec{\\mathbf{B}} & = 0
\\end{align}$`;
  //
  content11 = '--------[ The End ]--------';
  //
}
