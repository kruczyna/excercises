function doTest(input) {
  let regex = /^[A-Z][A-Z]+[\d]*$|^[A-Z][\d][\d]+$/i;
  let result = regex.test(input);
  console.log(result);
}

doTest('A1');
doTest('a1');
doTest('BadUs3rnam3');
doTest('c57bT3');
doTest('Oceans11');
doTest('007');
doTest('AB1');
doTest('J%4');
doTest('ksn()(ucs kc');
