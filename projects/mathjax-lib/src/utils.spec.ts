import { fixMathjaxBugs, isMathjax } from './utils';
//
test(`test for normal string {isMathjax}`, () => {
  expect(isMathjax('not mathjax ')).toBeFalsy();
});
//
test(`test for mathjax expression {isMathjax}`, () => {
  expect(
    isMathjax(`$\\begin{align}
    \\dot{x} & = \\sigma(y-x) \\\\
    \\dot{y} & = \\rho x - y - xz \\\\
    \\dot{z} & = -\\beta z + xy
    \\end{align}$`)
  ).toBeTruthy();
});
//
test(`test for  mathjax expression {isMathjax}`, () => {
  expect(
    isMathjax(`$\\begin{align}
      \\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\\\
      \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\
      \\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\
      \\nabla \\cdot \\vec{\\mathbf{B}} & = 0
    \\end{align}$`)
  ).toBeTruthy();
});
//
test(`test for mathjax expression combination to string {isMathjax}`, () => {
  expect(
    isMathjax(`prefix test content $\\begin{align}
      \\dot{x} & = \\sigma(y-x) \\\\
      \\dot{y} & = \\rho x - y - xz \\\\
      \\dot{z} & = -\\beta z + xy
      \\end{align}$ suffix test content`)
  ).toBeTruthy();
});
//
//
test(`filter out mathjax no action for normal text {fixMathjaxBugs}`, () => {
  expect(fixMathjaxBugs('no cange requied')).toEqual('no cange requied');
});
//
test(`filter out mathjax no action for normal expression {fixMathjaxBugs}`, () => {
  expect(fixMathjaxBugs(`$ x = 1 $`)).toEqual(`$ x = 1 $`);
});
//
test(`replace spac in br {fixMathjaxBugs}`, () => {
  expect(fixMathjaxBugs(`<br />$ x = 1 $`)).toEqual(`<br/> $ x = 1 $`);
});
//
test(`fix begin syntax {fixMathjaxBugs}`, () => {
  expect(
    fixMathjaxBugs(
      `$\\dot{x} & = \\sigma(y-x) \\\\ \\dot{y} & = \\rho x - y - xz \\\\ \\dot{z} & = -\\beta z + xy$`
    )
  ).toEqual(
    `$\\begin{align*}\\dot{x} & = \\sigma(y-x) \\\\ \\dot{y} & = \\rho x - y - xz \\\\ \\dot{z} & = -\\beta z + xy\\end{align*}$`
  );
});
//
test(`fix begin syntax {fixMathjaxBugs}`, () => {
  expect(
    fixMathjaxBugs(
      `$\\begin{align}\\dot{x} & = \\sigma(y-x) \\\\ \\dot{y} & = \\rho x - y - xz \\\\ \\dot{z} & = -\\beta z + xy\\end{align}$`
    )
  ).toEqual(
    `$\\begin{align}\\dot{x} & = \\sigma(y-x) \\\\ \\dot{y} & = \\rho x - y - xz \\\\ \\dot{z} & = -\\beta z + xy\\end{align}$`
  );
});
